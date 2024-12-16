import os
import numpy as np
import pickle
from flask import Flask, request, jsonify, send_from_directory, render_template
from werkzeug.utils import secure_filename
from tensorflow.keras.applications import ResNet50 # type: ignore
from tensorflow.keras.applications.resnet50 import preprocess_input # type: ignore
from tensorflow.keras.preprocessing.image import load_img, img_to_array # type: ignore
from tensorflow.keras.layers import Flatten, Dense, Lambda, Input # type: ignore
from tensorflow.keras.models import Model # type: ignore
from tensorflow.keras import backend as K # type: ignore
import torch
import torch.nn.functional as F
from torch import nn
from collections import Counter
import random
import string
import tensorflow as tf

# Đặt seed để đảm bảo tính nhất quán
def set_seed(seed=42):
    random.seed(seed)
    np.random.seed(seed)
    tf.random.set_seed(seed)
    torch.manual_seed(seed)
    if torch.cuda.is_available():
        torch.cuda.manual_seed(seed)
        torch.cuda.manual_seed_all(seed)

set_seed(42)

# Khởi tạo Flask app
app = Flask(__name__)

# Cấu hình đường dẫn
BASE_URL = "127.0.0.1:5000"
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(APP_ROOT, 'uploads')
DATA_FOLDER = os.path.join(APP_ROOT, 'data')
MODEL_PATH = os.path.join(APP_ROOT, 'models/train_features.pkl')

app.config['UPLOAD'] = UPLOAD_FOLDER
app.config['DATA'] = DATA_FOLDER

# Khởi tạo ResNet50 để trích xuất đặc trưng
IMG_WIDTH, IMG_HEIGHT = 224, 224
resnet_model = tf.keras.Sequential([
    ResNet50(weights='imagenet', include_top=False, input_shape=(IMG_WIDTH, IMG_HEIGHT, 3)),
    Flatten()
])

# Định nghĩa Mạng Siamese
class SiameseNetwork(nn.Module):
    def __init__(self):
        super(SiameseNetwork, self).__init__()
        self.fc = nn.Linear(100352, 512)

    def forward(self, input1, input2):
        output1 = F.relu(self.fc(input1))
        output2 = F.relu(self.fc(input2))
        return F.pairwise_distance(output1, output2)

siamese_model = SiameseNetwork()

# Định nghĩa VAE Encoder
latent_dim = 256  # Kích thước tiềm ẩn cần khớp với train_features.pkl
def sampling(args):
    z_mean, z_log_var = args
    return z_mean  # Không thêm nhiễu trong dự đoán

input_img = Input(shape=(100352,))
hidden = Dense(256, activation='relu')(input_img)
z_mean = Dense(latent_dim)(hidden)
z_log_var = Dense(latent_dim)(hidden)
z = Lambda(sampling, output_shape=(latent_dim,))([z_mean, z_log_var])

encoder = Model(input_img, z_mean)

# Tải file train_features.pkl
try:
    with open(MODEL_PATH, 'rb') as file:
        data = pickle.load(file)
    if 'features' in data and 'latent_features' in data and 'paths' in data:
        X_train = np.array(data['features'])
        latent_features = np.array(data['latent_features'])
        list_images = data['paths']
    else:
        raise ValueError("train_features.pkl không chứa đủ trường cần thiết.")
except Exception as e:
    print(f"Lỗi khi tải train_features.pkl: {e}")
    X_train = np.array([])
    latent_features = np.array([])
    list_images = []

# Hàm trích xuất đặc trưng từ ảnh
def extract_features(image_path):
    try:
        img = load_img(image_path, target_size=(IMG_WIDTH, IMG_HEIGHT))
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = preprocess_input(img_array)
        return resnet_model.predict(img_array).flatten()
    except Exception as e:
        print(f"Lỗi khi trích xuất đặc trưng: {e}")
        return None

# Hàm mã hóa đặc trưng vào không gian tiềm ẩn
def encode_latent(features):
    return encoder.predict(features.reshape(1, -1)).flatten()

# Hàm tạo tên tệp ngẫu nhiên
def get_random_string(length=12):
    return ''.join(random.choice(string.ascii_lowercase) for _ in range(length))

# Route chính hiển thị trang tải ảnh
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# Route hiển thị file tải lên
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD'], filename)

# Route hiển thị ảnh trong data
@app.route('/data/<path:filename>')
def data_image(filename):
    return send_from_directory(app.config['DATA'], filename)

# Route xử lý nhận diện ảnh
@app.route('/', methods=['POST'])
def recognize():
    file = request.files.get('image')
    number_result = 5  # Số lượng kết quả cần hiển thị

    if X_train.size == 0 or latent_features.size == 0:
        return jsonify({'message': 'Dữ liệu huấn luyện không hợp lệ. Vui lòng kiểm tra file train_features.pkl.'})

    if file:
        # Lưu file tải lên
        filename = secure_filename(file.filename)
        file_name_random = get_random_string() + filename
        filepath = os.path.join(app.config['UPLOAD'], file_name_random)
        file.save(filepath)

        try:
            # Trích xuất đặc trưng của ảnh tải lên
            new_image_feature = extract_features(filepath)
            if new_image_feature is None:
                return jsonify({'message': 'Lỗi khi trích xuất đặc trưng từ ảnh tải lên.'})

            device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
            new_image_feature_tensor = torch.tensor(new_image_feature).float().to(device)
            X_train_tensor = torch.tensor(X_train).float().to(device)

            # Tính khoảng cách Siamese
            with torch.no_grad():
                distances_siamese = F.pairwise_distance(
                    new_image_feature_tensor.unsqueeze(0).expand_as(X_train_tensor),
                    X_train_tensor
                ).cpu().numpy()

            sorted_indices_siamese = np.argsort(distances_siamese)[:number_result]

            # Tính khoảng cách không gian tiềm ẩn (VAE)
            user_latent = encode_latent(new_image_feature).reshape(1, -1)
            distances_vae = np.linalg.norm(latent_features - user_latent, axis=1)
            sorted_indices_vae = np.argsort(distances_vae)[:number_result]

            # Kết quả từ Siamese Network
            list_image_urls_siamese = []
            list_food_names = []
            for i in sorted_indices_siamese:
                food_name = os.path.basename(os.path.dirname(list_images[i])).replace("_", " ")
                list_food_names.append(food_name)
                imageUrl = f"http://{BASE_URL}/data/{os.path.relpath(list_images[i], DATA_FOLDER)}".replace("\\", "/")
                list_image_urls_siamese.append(imageUrl)

            # Kết quả từ VAE
            list_image_urls_vae = []
            for i in sorted_indices_vae:
                food_name = os.path.basename(os.path.dirname(list_images[i])).replace("_", " ")
                list_food_names.append(food_name)
                imageUrl = f"http://{BASE_URL}/data/{os.path.relpath(list_images[i], DATA_FOLDER)}".replace("\\", "/")
                list_image_urls_vae.append(imageUrl)

            # Đếm và chọn tên món ăn phổ biến nhất từ cả hai kết quả
            counter = Counter(list_food_names)
            combined_food_name = counter.most_common(1)[0][0]  # Tên món ăn phổ biến nhất

            # Gộp kết quả và giới hạn số lượng ảnh trả về (top-5)
            combined_image_urls = (list_image_urls_siamese + list_image_urls_vae)[:5]

            # Chuẩn bị kết quả trả về
            response_data = {
                'food_name': combined_food_name,  # Tên món ăn phổ biến nhất
                'list_image_urls': combined_image_urls  # Top 5 ảnh tương đồng
            }
            print(f"Response data: {response_data}")  # In log kết quả
            return jsonify(response_data)
        except Exception as e:
            return jsonify({'message': f'Lỗi trong quá trình xử lý: {e}'})
    else:
        return jsonify({'message': 'Không có tệp nào được tải lên!'})

# Chạy ứng dụng
if __name__ == "__main__":
    app.run(debug=True)
