import os
import numpy as np
import pickle
from PIL import Image
from sklearn.decomposition import PCA
import tensorflow as tf
from tensorflow.keras.applications import ResNet50 # type: ignore
from tensorflow.keras.applications.resnet50 import preprocess_input # type: ignore
from tensorflow.keras.preprocessing.image import load_img, img_to_array # type: ignore
from tensorflow.keras.layers import Flatten, Dense, Lambda, Input, BatchNormalization, Dropout, Layer # type: ignore
from tensorflow.keras.models import Model # type: ignore
from tensorflow.keras.callbacks import EarlyStopping # type: ignore
from tensorflow.keras import backend as K # type: ignore

# Định nghĩa đường dẫn cho dữ liệu và đầu ra
DATA_DIR = './data'  # Thư mục chứa dữ liệu ảnh
MODEL_OUTPUT = './models/train_features.pkl'  # Đường dẫn lưu đặc trưng đã trích xuất
IMG_WIDTH, IMG_HEIGHT = 224, 224  # Kích thước ảnh đầu vào cho ResNet50
latent_dim = 256  # Kích thước không gian tiềm ẩn trong VAE
EPOCHS = 20  # Số lần duyệt qua dữ liệu
BATCH_SIZE = 32  # Kích thước batch

# Khởi tạo mô hình ResNet50 để trích xuất đặc trưng ảnh
resnet_base = ResNet50(weights='imagenet', include_top=False, input_shape=(IMG_WIDTH, IMG_HEIGHT, 3))
for layer in resnet_base.layers[:-4]:
    layer.trainable = False
resnet_model = tf.keras.Sequential([resnet_base, Flatten()])

# Hàm kiểm tra tính hợp lệ của ảnh
def validate_images(data_dir):
    invalid_images = []
    for root, _, files in os.walk(data_dir):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                img = Image.open(file_path)
                img.verify()
            except (IOError, SyntaxError):
                print(f'Tệp không hợp lệ: {file_path}')
                invalid_images.append(file_path)
    return invalid_images

# Tạo danh sách các ảnh hợp lệ
invalid_images = validate_images(DATA_DIR)
list_images = [
    os.path.join(root, file)
    for root, _, files in os.walk(DATA_DIR)
    for file in sorted(files)
    if os.path.join(root, file) not in invalid_images
]

print(f"Số lượng ảnh hợp lệ: {len(list_images)}")

# Hàm trích xuất đặc trưng
def extract_features(image_path):
    img = load_img(image_path, target_size=(IMG_WIDTH, IMG_HEIGHT))
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return resnet_model.predict(img_array).flatten()

train_features = [extract_features(img) for img in list_images]
X_train = np.array(train_features)

# Giảm chiều bằng PCA
pca = PCA(n_components=512)
X_train_pca = pca.fit_transform(X_train)

# KL Loss Layer
class KLLossLayer(Layer):
    def call(self, inputs):
        z_mean, z_log_var = inputs
        kl_loss = -0.5 * K.sum(1 + z_log_var - K.square(z_mean) - K.exp(z_log_var), axis=-1)
        return kl_loss

# Mô hình VAE
def sampling(args):
    z_mean, z_log_var = args
    batch = tf.shape(z_mean)[0]
    dim = tf.shape(z_mean)[1]
    epsilon = K.random_normal(shape=(batch, dim))
    return z_mean + K.exp(0.5 * z_log_var) * epsilon

input_img = Input(shape=(X_train_pca.shape[1],))
hidden = Dense(512, activation='relu')(input_img)
hidden = BatchNormalization()(hidden)
hidden = Dropout(0.5)(hidden)
hidden = Dense(256, activation='relu')(hidden)
hidden = BatchNormalization()(hidden)
hidden = Dropout(0.3)(hidden)
z_mean = Dense(latent_dim)(hidden)
z_log_var = Dense(latent_dim)(hidden)
z = Lambda(sampling, output_shape=(latent_dim,))([z_mean, z_log_var])

kl_loss_layer = KLLossLayer()([z_mean, z_log_var])
decoder_input = Input(shape=(latent_dim,))
decoder_hidden = Dense(256, activation='relu')(decoder_input)
decoder_hidden = BatchNormalization()(decoder_hidden)
decoder_hidden = Dropout(0.5)(decoder_hidden)
decoder_output = Dense(X_train_pca.shape[1], activation='sigmoid')(decoder_hidden)
decoder = Model(decoder_input, decoder_output)

vae_model = Model(inputs=input_img, outputs=[decoder(z), kl_loss_layer])

# Hàm loss
def vae_loss(y_true, y_pred):
    reconstruction_loss = tf.keras.losses.mse(y_true, y_pred[0])
    kl_loss = K.mean(y_pred[1])
    return reconstruction_loss + kl_loss

vae_model.compile(optimizer='adam', loss=vae_loss)

# Huấn luyện
early_stopping = EarlyStopping(monitor='loss', patience=5, restore_best_weights=True)
vae_model.fit(X_train_pca, [X_train_pca, np.zeros((X_train_pca.shape[0], 1))],
              epochs=EPOCHS, batch_size=BATCH_SIZE, shuffle=True, callbacks=[early_stopping])

# Mã hóa và lưu trữ
latent_features = Model(inputs=input_img, outputs=z_mean).predict(X_train_pca)
output = {'features': X_train, 'pca_features': X_train_pca, 'latent_features': latent_features, 'paths': list_images}
os.makedirs(os.path.dirname(MODEL_OUTPUT), exist_ok=True)
with open(MODEL_OUTPUT, 'wb') as f:
    pickle.dump(output, f)

print(f"Đã lưu đặc trưng gốc, PCA, và đặc trưng tiềm ẩn vào {MODEL_OUTPUT}")
