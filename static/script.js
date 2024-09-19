var loadFile = function (event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src); // free memory
    }
};

    // Đối tượng lưu trữ thông tin các món ăn
    var foodInfo = {
        "banh tet": {
            "title": "Bánh Tét",
            "image": "https://cdn.tgdd.vn/Files/2022/02/05/1414110/tong-hop-cach-lam-mon-banh-tet-khong-the-thieu-vao-ngay-tet-co-truyen-202301131506477787.jpg",
            "description": `
                <p>Bánh tét là món ăn truyền thống không thể thiếu trong Tết Nguyên đán của người Việt. 
                Nó thể hiện tầm quan trọng của gạo trong văn hóa Việt Nam cũng như giá trị lịch sử. 
                Trong dịp Tết của người Việt, các thành viên trong gia đình sẽ tụ họp lại và thưởng thức tiệc bánh tét, món ăn chính của ngày lễ hội Việt Nam này để chào đón mùa xuân đến.</p>
                <img src="https://i.ytimg.com/vi/et3w1WeSbYU/maxresdefault.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Nguyên liệu làm bánh tét:</b><br>
                    400g gạo nếp cái hoa vàng,
                    200g đậu xanh đã đãi sạch vỏ,
                    1 bó lạt tre,
                    100g thịt ba chỉ,
                    1 bó lá chuối (tàu lá dài, còn nguyên vẹn),
                    Gia vị: Muối, hạt nêm, tiêu xay.</p>
                <img src="https://st.quantrimang.com/photos/image/2019/12/31/goi-banh-tet-2.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Hướng dẫn cách làm bánh tét ngon tại nhà:</b><br>
                <b>Bước 1: Xử lý gạo nếp</b><br>
                Đầu tiên, bạn vo sạch gạo nếp cái hoa vàng, cho vào âu lớn ngâm trong nước khoảng 8 tiếng cho gạo nở mềm. Sau đó, bạn vớt gạo nếp ra rổ để ráo nước, rắc thêm 4g muối xóc đều. 
                Đây là mẹo đơn giản trong cách làm bánh tét có thể giúp gạo nếp thấm vị, bánh khi nấu chín cũng sẽ đậm đà hơn.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/xoc-muoi-deu-voi-gao-nep.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Bước 2: Xử lý đậu xanh</b><br>
                Tiếp đó, bạn đãi sạch vỏ đậu xanh, ngâm trong âu nước khoảng 4 tiếng để đậu xanh nở mềm. Sau thời gian đó, bạn vớt đậu xanh ra rổ, để ráo nước, cho thêm 4g muối vào cùng, xóc đều.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/vo-va-ngam-dau-xanh.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Bước 3: Xử lý lạt tre và lá chuối</b><br>
                Kế đến, bạn đem lạt tre ngâm trong nước khoảng 8 tiếng cho mềm. Sau đó, bạn xé lạt tre thành những sợi dài, có chiều ngang 0,5cm.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/ngam-lat-tre-trong-nuoc.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p>Tiếp theo, bạn rửa lá chuối, tước bỏ phần sống lưng lá, chia lá chuối thành những miếng dài khoảng 60cm, cuốn lại thành cuộn nhỏ. Lưu ý, bạn cần nhẹ tay để không làm lá chuối bị rách.<br>
                Bắc một nồi nước có 1 muỗng cà phê muối lên bếp đun sôi, bạn cho lá chuối vào chần sơ qua rồi vớt ra ngay. Làm như vậy, lá chuối sẽ mềm, khi thực hiện cách gói bánh tét cũng sẽ dễ dàng hơn.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/chan-so-la-chuoi-voi-nuoc-nong.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Bước 4: Xử lý thịt ba chỉ</b><br>
                Kế tiếp, bạn rửa sạch, cắt thịt ba chỉ thành những miếng dài (khoảng 10 tới 12cm) có chiều ngang 2cm.<br>
                Cách làm bánh tét nhân thịt ngon là cho thịt vào trong tô lớn, thêm 4g hạt nêm, 1g hạt tiêu, trộn đều và ướp trong khoảng 30 phút.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/uop-thit-trong-30-phut.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Bước 5: Cách gói bánh tét ngon</b><br>
                Tiếp đến, bạn trải lá chuối lên một mặt phẳng lớn như mâm, khay, mặt bàn sạch. Xếp 2 miếng lá chuối cạnh nhau (như hình tàu lá chuối ban đầu khi chưa rọc), xếp thêm 1 miếng vào giữa.<br>
                Bạn cho 200g gạo nếp vào giữa lá chuối, dàn mỏng 1 lớp gạo theo chiều ngang, tiếp đó cho thêm 100g đậu xanh. Lưu ý, lớp đậu xanh phải ít hơn gạo và nằm gọn trong lớp gạo trắng.<br>
                Tiếp theo, bạn đặt 1 miếng thịt ba chỉ lên trên đậu xanh để làm nhân, sau đó thêm 1 lớp đậu xanh 100g và 1 lớp gạo nếp 200g. Bạn cần chú ý để gạo phải phủ đều toàn bộ phần nhân đậu xanh và thịt.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/nguyen-lieu-goi-banh-tet.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p>Sau đó, bạn gói lớp lá chuối ở giữa để cố định hình dáng gạo, tiếp theo dùng 2 lớp lá chuối bên ngoài cuộn chặt lại, gấp 2 bên mép để tạo thành một chiếc bánh hoàn chỉnh. 
                Các thao tác cuộn lá chuối, gấp mép phải thật chắc tay để bánh chặt và đẹp.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/gap-mep-banh-tet.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p>Kế đến, bạn dùng lạt buộc cố định bánh theo chiều dọc và chiều ngang là hoàn thành cách gói bánh tét.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/buoc-lat-co-dinh-banh-tet.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Bước 6: Luộc bánh</b><br>
                Sau đó, bạn xếp lá chuối vào đáy nồi lớn rồi lần lượt đặt bánh tét (theo chiều dọc) vào cùng. Đổ nước ngập bánh, bạn tiến hành luộc liên tục trong suốt 8 tiếng để bánh chín mềm.<br>
                Cách nấu bánh tét đảm bảo chín đều là khi nước trong nồi sôi, hạ lửa rồi luộc bánh với lửa vừa. Sau thời gian luộc, bạn vớt bánh ra ngoài, để ráo nước và nguội dần.</p>
                <img src="https://www.huongnghiepaau.com/wp-content/uploads/2018/02/luoc-banh-tet-trong-8-tieng.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Mẹo nhỏ trong cách luộc giúp bánh tét mềm, dẻo, xanh bắt mắt</b><br>
                Để bánh tét sau khi luộc mềm, dẻo và có màu xanh bắt mắt, bạn có thể áp dụng một số mẹo đơn giản dưới đây:<br>
                - Khi nấu được 1.5-2 tiếng, bạn vớt bánh ra ngoài, trở ngược đầu bánh rồi tiếp tục luộc để bánh chín đều.<br>
                - Khi nấu được ½ thời gian, bạn vớt bánh ra ngoài rửa qua với nước lạnh, thay nồi nước mới rồi đặt bánh vào tiếp tục luộc.<br>
                - Bạn nên chú ý châm nước thường xuyên để nồi nước không bị cạn trong quá trình nấu.<br>
                - Sau khi luộc chín, bạn vớt tét ra ngoài, rửa qua với nước lạnh, dùng tay lăn tròn để bánh được đẹp mắt.</p>`
        },

        "bun dau mam tom": {
            "title": "Bún Đậu Mắm Tôm",
            "image": "https://static.vinwonders.com/production/bun-dau-mam-tom-ha-noi-1.jpg",
            "description": `
                <p>Bún đậu mắm tôm là một món ăn truyền thống của Việt Nam, được yêu thích khắp các miền của đất nước. 
                Bún đậu mắm tôm - món ăn bình dị nhưng đầy sức hấp dẫn của ẩm thực Hà Nội. Vị béo ngậy của thịt ba chỉ, vị giòn tan của đậu hũ, vị thơm lừng của chả cốm quyện cùng mắm tôm đậm đà tạo nên một bản giao hưởng vị giác khó cưỡng. 
                Nhắc đến ẩm thực Hà Nội, không thể không nhắc đến món bún đậu mắm tôm - một món ăn dân dã, bình dị nhưng lại có sức hấp dẫn khó cưỡng. 
                Món ăn này đã trở thành một phần không thể thiếu trong đời sống của người Hà Thành, và là niềm tự hào của người dân nơi đây.  
                Với sự kết hợp giữa các nguyên liệu tạo nên hương vị đặc biệt, phản ánh sự đa dạng trong văn hóa ẩm thực của Việt Nam.</p>
                <img src="https://file.hstatic.net/1000394081/article/bun-dau-mam-tom-thap-cam_2321472f6d634b1192e171c5e659e187.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p><b>Nguyên liệu cần chuẩn bị:</b><br>                    
                    Bún sợi nhỏ: 5 lạng,
                    Thịt chân giò: 3 lạng,
                    Đậu phụ: 8 miếng,
                    Thịt ba chỉ lợn: 3 lạng,
                    Chả cốm: 3 lạng,
                    Ớt tươi: 2 trái,
                    Quất (hoặc chanh): 3 quả,
                    Rau sống: xà lách, dưa leo, tía tô, rau mùi, kinh giới,
                    Loại gia vị: mắm tôm, dầu ăn, đường trắng, mì chính</p>
                <img src="https://daotaobeptruong.vn/wp-content/uploads/2020/12/cach-lam-bun-dau-mam-tom.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p><b>Hướng dẫn cách làm bún đậu mắm tôm ngon tại nhà:</b><br>
                <b>Bước 1: Luộc thịt</b><br>
                Rửa sạch thịt ba chỉ và thịt chân giò, ướp với một ít muối trong 15 phút. 
                Cho thịt vào nồi nước, luộc khoảng 30 phút cho đến khi chín. Vớt thịt ra, thả ngay vào tô nước đá lạnh để thịt săn chắc và giòn hơn. 
                Sau khi ngâm trong nước lạnh khoảng 15 phút, vớt thịt ra, để ráo. 
                Thái thịt chân giò thành từng lát mỏng theo chiều cuộn ban đầu. Cắt thịt ba chỉ thành từng lát mỏng vừa ăn.</p>
                <img src="https://cdn.tgdd.vn/Files/2017/03/21/963373/cach-lam-bun-dau-mam-tom-thom-ngon-1_760x450.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p><b>Bước 2: Chiên đậu - Chả cốm - sơ chế chuẩn bị rau ăn kèm</b><br>
                Đậu hũ cắt thành những hình vuông nhỏ sau đó đem chiên với khoảng 150ml dầu ăn. Đậu vàng giòn các mặt có thể thực hiện vớt ra.</p>
                <img src="https://cdn.tgdd.vn/Files/2017/03/21/963373/cach-lam-bun-dau-mam-tom-thom-ngon-2_760x450.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p>Thực hiện chiên chả cốm rất đơn giản, chỉ cần bắc chảo lên bếp đun nóng dầu ăn sau đó chiên giòn chả cốm. Chiên chả cốm đến khi chả chín giòn với các mặt vàng đều thì có thể vớt ra. </p>
                <img src="https://lamsonfood.com/wp-content/uploads/2022/03/cach-lam-cha-com-1.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p>Những loại rau ăn kèm như xà lách, húng quế, tía tô, diếp cá nhặt bỏ lá dập nát, úa già, cắt bỏ rễ, ngâm nước muối loãng 30 phút rồi rửa sạch, để ráo. Dưa chuột rửa sạch và cắt thành từng lát mỏng.</p>
                <img src="https://pastaxi-manager.onepas.vn/content/uploads/articles/lanmkt/bundaumamtomhanoi/cachlambundaumamtom/cach-lam-bun-dau-mam-tom-chuan-bi-rau.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p><b>Bước 3: Pha mắm tôm ngon ăn kèm</b><br>
                Cho 1 thìa mắm tôm vào bát nhỏ, trộn hai thìa cà phê đường, 1 thìa cà phê dầu ăn nóng khi rán đậu, 1 thìa mỳ chính, 2 thìa quất hoặc nước cốt chanh. 
                Khuấy đều cho đến khi mắm tôm sủi bọt, các gia vị tan đều. Thêm ớt sừng, tỏi băm vào khuấy đều một lần nữa.</p>
                <img src="https://balang.com.vn/wp-content/uploads/2024/06/Cach-Pha-Mam-Tom-Ngon.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p>Mẹt lớn xếp lên trên lá chuối rồi sau đó bạn xếp lần lượt bún lá, đậu chiên, thịt luộc cùng chả cốm lên trên. Chén mắm tôm sẽ được xếp giữa và bỏ thêm rau thơm và ăn kèm dưa chuột.</p>
                <img src="https://buffetposeidon.com/storage/app/media/Nau-an/01.2024/10032024-bun-dau-2.jpg" alt="Bún đậu" style="width: 100%; height: auto;">
                <p><b>Lưu ý:</b><br>
                Có thể thay thế thịt ba chỉ và chân giò bằng các loại thịt khác như nem chua rán, giò lụa,... Nên ăn bún đậu mắm tôm khi còn nóng để cảm nhận trọn vẹn hương vị của món ăn.</p>`
        },
       
        "banh xeo": {
            "title": "Bánh Xèo",
            "image": "https://cuulong.org/wp-content/uploads/2010/12/banh-xeo-mien-tay-net-van-hoa-am-thuc.jpg",
            "description": `
                <p>Bánh xèo là món ăn phủ rộng trên mọi miền tại Việt Nam, món ăn này thường xuất hiện ở Nam Trung Bộ và các tỉnh miền Nam. 
                Bánh xèo ở từng vùng miền sẽ khác nhau về màu sắc, kích cỡ, loại nhân bên trong, nước chấm. 
                Điểm chung của tất cả các loại bánh xèo tại Việt Nam là được làm từ bột gạo tẻ pha loãng, sau đó được tráng mỏng trên chảo và chiên giòn.<br>
                Cái tên “bánh xèo” xuất phát từ âm thanh lúc đổ bánh. Khi người làm cho một giá bột vào chảo dầu nóng rực, 
                tiếng xèo xèo vang lên và kéo dài cho đến khi bánh gần chín. Từ đó chiếc bánh truyền thống này có tên là bánh xèo.<br>
                Nhìn chung sẽ có hai loại bánh xèo thường thấy là bánh xèo miền Trung và bánh xèo miền Tây. Trong đó:<br>
                Bánh xèo miền Tây mỏng và lớn hơn các bánh xèo những vùng khác. Bánh xèo miền Tây có vỏ bánh màu vàng, thơm mùi nước cốt dừa béo béo. Nhân bánh bao gồm tôm thịt, đậu xanh, ở một số vùng còn có thêm nhân thịt vịt, củ hũ dừa.<br>
                Bánh xèo miền Tây thường ăn với các loại rau rừng như lá ổi, lá cóc, lá bằng lăng, diếp cá, lá xoài, tía tô,...Bánh xèo miền Tây được chấm với nước mắm tỏi ớt chua ngọt cực kỳ bắt vị và thơm ngon.</p>
                <img src="https://daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <p>Bánh xèo miền Trung có kích thước dày và nhỏ gọn. Loại nhân phổ biến nhất của loại bánh xèo này là nhân hải sản như tôm, mực,.. Vỏ bánh có kích thước dày cũng không mỏng, hơi dẻo mềm.<br>
                Điểm đặc biệt của bánh xèo miền Trung là nước chấm, đó là hỗn hợp nước lèo bao gồm đậu phộng, nước tương và gan, ở một số vùng sẽ ăn bằng mắm nêm pha theo khẩu vị.</p>
                <img src="https://cdn.tgdd.vn/Files/2019/05/06/1165123/cach-lam-banh-xeo-mien-trung-gion-tan-an-la-ghien-202109281817451829.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <p><b>Nguyên liệu làm bánh tét:</b><br>
                    Bột bánh xèo Hương Xưa 500g,
                    Nước cốt dừa 320 ml,
                    Bột nghệ,
                    Đậu xanh hạt 100g,
                    Hành lá,
                    Mỡ heo 300g.
                    Hành tây 2 củ,
                    Sắn 2 củ,
                    Giá đậu xanh 200g,
                    Tôm thẻ 300g,
                    Thịt ba chỉ heo 200g,
                    Thịt băm 200g,
                    Chanh 1 quả,
                    Tỏi,
                    Ớt sừng,
                    Cải trắng 1 củ,
                    Cà rốt 1 củ,
                    Nước mắm,
                    Hạt nêm,
                    Đường,</p>
                <img src="https://cdn.tgdd.vn/2021/01/content/1-800x450-19.jpg" alt="Bánh xèo" style="width: 100%; height: auto;">
                <p><b>Hướng dẫn cách làm bánh xèo miền Tây ngon tại nhà:</b><br>
                <b>Bước 1: Sơ chế nguyên liệu</b><br>
                Thịt mua về rửa sạch, cắt miếng mỏng. Một số vùng xay thịt nạc vai cũng được. Ướp thịt với chút mắm, muối, hạt nêm, hạt tiêu cho thấm vị. </p>
                <img src="https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/xao-tom-thit.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <p>Tôm chọn loại nhỏ hoặc tép bạc, cắt bỏ râu, rửa sạch.</p>
                <img src="https://dulichphuyen.info/administrator/site/images/fck/tom%20su.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <p>Hành tây bóc bỏ vỏ, cắt múi cau. Giá đỗ rửa sạch. Các loại rau sống ăn kèm như rau cải, xà lách, rau mùi, húng quế rửa sạch, vẩy ráo nước. </p>
                <img src="https://i1-giadinh.vnecdn.net/2023/09/19/Buoc-5-5-7798-1695107554.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=fjbdMjQvcequl0pTwfwMlw" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <b>Bước 2: Trộn bột bánh xèo</b><br>
                Cho 400gr bột bánh xèo ra thau cùng với 1 muỗng cà phê bột nghệ, 150gr bột chiên giòn, 1 quả trứng. Tiếp đó, thêm 1/2 lon bia, 
                300ml nước cốt dừa và 600ml nước lọc vào trộn đều đến khi hỗn hợp bột tan hết thì để bột nghỉ 1 tiếng.
                Hành lá cắt bỏ gốc, rửa sạch sau đó cắt nhỏ và cho vào hỗn hợp bột bánh xèo. Cuối cùng, cho nốt 1/2 lon bia còn lại vào và khuấy đều.</p>
                <img src="https://nauchuananngon.vn/wp-content/uploads/2021/09/Cach-pha-bot-banh-xeo-Huong-Xua-de-banh-gion-tan-02.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <p><b>Bước 3: Luộc đậu xanh và xào nhân</b><br>
                Đậu xanh nguyên hạt bạn đãi sạch, ngâm khoảng 1 giờ cho nở mềm rồi đem hấp cách thủy trong khoảng 30 phút.</p>
                <img src="https://cdn.tgdd.vn/2021/01/CookRecipe/GalleryStep/luoc-dau-xanh-va-xao-thit.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <p>Phi thơm hành, trút thịt vào xào săn rồi cho tôm vào đảo đều tay. Khi tôm chuyển màu đỏ là đã chín. Nêm nếm lại chút gia vị cho vừa miệng. Múc nhân ra để riêng. </p>
                <img src="https://pastaxi-manager.onepas.vn/content/uploads/articles/linhpt/banh-xeo/cach-lam-banh-xeo-3.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">                
                <p><b>Bước 4: Đổ bánh xèo</b><br>
                Đặt chảo chống dính lên bếp, bật lửa lớn để chảo thật nóng, dùng cọ quét mỡ heo đều khắp lòng chảo. Cho vào thịt ba chỉ, tôm, rán cho thịt và tôm chín hơi rám vàng rồi rắc đều 2 muỗng cà phê đậu xanh hạt đã hấp cách thủy vào lòng chảo, 
                tiếp theo múc 1 muôi bột đổ xung quanh thành chảo, lắc chảo cho bột chảy đều, múc thêm bột lấp đầy chỗ trống.</p>
                <img src="https://cdn.tgdd.vn/2021/01/CookRecipe/GalleryStep/do-banh-xeo-mien-tay-1.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p>Tiếp tục thêm một ít hành tây, củ sắn, thịt băm, giá, đậu xanh cà vào một bên của bánh, đậy nắp khoảng 3 phút, hạ lửa vừa để bột và nhân chín.
                Sau 3 phút, mở nắp chảo, quét xung quanh bánh một ít mỡ heo, gấp đôi bánh lại chiên bánh trên lửa lớn khoảng 30 giây mỗi mặt bánh.
                Tiếp theo lấy bánh ra đĩa có lót lá chuối, bạn tiếp tục đổ bánh cho hết nguyên liệu.</p>
                <img src="https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/do-banh-xeo-1.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">                
                <p><b>Bước 5: Làm nước mắm chấm</b><br>
                Cho vào tô 75gr đường cát, 60ml nước mắm, 200ml nước âm ấm, 4 tép tỏi băm, 2 trái ớt băm, nước cốt 1/2 trái chanh nhỏ, khuấy cho thật đều.
                Tiếp theo bạn cho cà rốt và củ cải ngâm chanh đường ở bước 2 vào, trộn đều là hoàn tất.</p>
                <img src="https://cdn.tgdd.vn/2021/01/CookRecipe/GalleryStep/lam-nuoc-mam-cham-1.jpg" alt="Bánh Tét" style="width: 100%; height: auto;">
                <p><b>Bước 6: Thành phẩm</b><br>
                Xếp bánh xèo và rau sống ăn kèm ra đĩa. Bạn có thể ăn kèm với bánh tráng hoặc ăn không đều ngon.
                Bánh xèo có màu vàng ươm, vỏ ngoài giòn rụm nhưng bên trong vẫn giữ được độ thơm mềm. Phần nhân thịt heo và tôm được ướp gia vị rất đậm đà. </p>
                <img src="https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/thanh-pham-865.jpg" alt="Bánh Xèo" style="width: 100%; height: auto;">
                <p><b>Mẹo giúp bánh xèo giòn lâu</b><br>
                - Lượng nước hòa vào bột cần chính xác, nều bột pha quá nhiều nước bánh thành phẩm sẽ bị mềm nhão, không giòn.<br>
                - Chiên bánh xèo càng lâu bánh sẽ càng giòn, tuy nhiên bạn cần trở mặt liên tục để bánh không bị cháy.<br>`
        },

        "ca kho": {
            "title": "Cá Kho",
            "image": "https://file.hstatic.net/200000312673/article/ca_basamaster_cat_khoanh_kho_to_dam_vi__dua_com_0c734ec0508544769a927c1d0b2f7e33.jpeg",
            "description": `
                <p>Món cá kho tộ, một món ăn truyền thống của người dân vùng sông nước miền Tây Nam Bộ, đã trở thành một biểu tượng về văn hóa ẩm thực của đất nước.
                Thường xuất hiện trong bữa cơm hàng ngày của nhiều gia đình, những niêu cá kho chinh phục người ăn bằng hương vị đậm đà, béo ngậy, thơm ngon và đặc biệt “tốn cơm”.</p>
                <img src="https://file.hstatic.net/1000394081/article/ca-kho-to_f8bc6e82ba1f4ab7a8109065eaf8b4eb.jpg" alt="Cá Kho" style="width: 100%; height: auto;">
                <p><b>Nguyên liệu cần chuẩn bị:</b><br>                    
                    1 con cá lóc ,
                    Hành lá, ớt,
                    Hành tím băm, tỏi băm,
                    Gia vị: hạt nêm, nước mắm, bột ngọt, tiêu, ớt bột Hàn Quốc, bột gừng, đường phèn, dầu mè, tương ớt.</p>
                <img src="https://cdn.tgdd.vn/Files/2019/09/02/1194292/cach-lam-ca-loc-kho-to-ngon-com-chuan-vi-mien-nam-202201041402010262.jpg" alt="Cá Kho" style="width: 100%; height: auto;">
                <p><b>Hướng dẫn cách làm cá kho ngon tại nhà:</b><br>
                <b>Bước 1: Sơ chế nguyên liệu</b><br>
                Hành lá các bạn bỏ rễ, rửa sạch, đầu hành cắt khúc khoảng 3 - 4cm. Lá hành cắt nhuyễn.
                Cá lóc bạn mua về làm sạch, loại bỏ ruột, nhất là phần máu trong bụng cá để khi chế biến sẽ không bị tanh. Cắt riêng phần đầu cá, 
                phần thân và đuôi thì các bạn cắt khoanh vừa ăn. Không nên cắt các khoanh mỏng quá, nếu không cá sẽ bị nát khi kho nhé!</p>
                <img src="https://cdn.tgdd.vn/Files/2019/09/02/1194292/cach-lam-ca-loc-kho-to-ngon-com-chuan-vi-mien-nam-202201041354304161.jpg" alt="Cá Kho" style="width: 100%; height: auto;">
                <p><b>Bước 2: Ướp cá</b><br>
                Sau khi để cá ráo nước, bạn cho cá vào tô. Cho vào 2 muỗng cà phê hạt nêm, 1 muỗng canh nước mắm, 2 muỗng cà phê bột ngọt, 2 muỗng cà phê tiêu, 1 muỗng cà phê ớt bột Hàn Quốc, 1 muỗng cà phê bột gừng, hành, tỏi. 
                Sau đó đảo đều hỗn hợp rồi ướp khoảng 15 phút cho cá thấm vị.</p>
                <img src="https://cdn.tgdd.vn/Files/2019/09/02/1194292/cach-lam-ca-loc-kho-to-ngon-com-chuan-vi-mien-nam-202201041342264170.jpg" alt="Cá Kho" style="width: 100%; height: auto;">
                <p><b>Bước 3:  Kho cá</b><br>
                Đầu tiên bạn bắc một cái nồi đất lên bếp, cho một ít dầu mè, 3 muỗng canh đường phèn vào. Sau đó dùng muỗng đảo đều đến khi đường tan chuyển sang hỗn hợp có màu nâu cánh gián là được.</p>
                <img src="https://cdn.tgdd.vn/Files/2019/09/02/1194292/cach-lam-ca-loc-kho-to-ngon-com-chuan-vi-mien-nam-202201041341409334.jpg" alt="Cá Kho" style="width: 100%; height: auto;">
                <p>Tiếp đến bạn cho hành tỏi vào phi thơm rồi thêm 1 muỗng canh tương ớt vào đảo đều. 
                Bạn cho từng miếng cá vào nồi, cuối cùng bạn cho nước dừa vào xăm xắp mặt cá và thêm 2 muỗng canh nước mắm, đầu hành và ớt vào. 
                Bạn điều chỉnh lửa nhỏ rồi kho mở nắp khoảng 1 tiếng là hoàn thành.</p>
                <img src="https://cdn.tgdd.vn/Files/2019/09/02/1194292/cach-lam-ca-loc-kho-to-ngon-com-chuan-vi-mien-nam-202201041340502488.jpg" alt="Cá Kho" style="width: 100%; height: auto;">
                <p><b>Bước 4: Thành phẩm</b><br>
                Món cá lóc kho tộ đậm đà hương vị, kết hợp với chút béo của mỡ và vị cay cay của tiêu ớt sẽ làm mâm cơm nhà bạn càng thêm ngon miệng.</p>
                <img src="https://cdn.tgdd.vn/Files/2019/09/02/1194292/cach-lam-ca-loc-kho-to-ngon-com-chuan-vi-mien-nam-202201041358059116.jpg" alt="Cá Kho" style="width: 100%; height: auto;">
                <p><b>Mẹo hay trong bếp giúp món cá kho tộ ngon đúng điệu</b><br>
                - Ngoài cá lóc được dùng phổ biến, bạn có thể sử dụng các loại cá khác như cá chép, cá trắm, cá rô, cá basa, cá bông lau, cá hú...<br>
                - Trong quá trình kho cá, bạn hạn chế lật cá quá nhiều vì rất dễ làm cá bị nát, mất ngon.<br>
                - Các loại nước mắm truyền thống có độ đạm nước mắm cao sẽ làm món ăn của bạn thêm ngon, vị đậm đà mà không làm vị món ăn bị mặn.</p>`
        },



        "pizza": {
            "title": "Pizza",
            "image": "https://example.com/pizza.jpg",
            "description": `
                <p>Pizza là món ăn nổi tiếng của Ý, thường được làm từ bột mì, phô mai, sốt cà chua và nhiều loại topping khác nhau như thịt, rau củ và hải sản.</p>
                <img src="https://example.com/pizza-image1.jpg" alt="Pizza" style="width: 100%; height: auto;">
                <p>Pizza được nướng trong lò để tạo ra lớp vỏ giòn và topping ngon miệng.</p>
                <img src="https://example.com/pizza-image2.jpg" alt="Pizza" style="width: 100%; height: auto;">
                <p>Món ăn này đã trở nên phổ biến toàn cầu và có rất nhiều biến thể tùy theo từng quốc gia và vùng miền.</p>
                <img src="https://example.com/pizza-image3.jpg" alt="Pizza" style="width: 100%; height: auto;">
            `
        },
        // Thêm các món ăn khác ở đây
    };



$(document).ready(function () {
    $(".detecting").attr("style", "display: none;");
    $(".food_name").attr("style", "display: none;");

    $(".detect").click(function () {
        $(".detect").attr("style", "display: none;");
        $(".detecting").attr("style", "display: block;");

        var number_result = $('select[name="number_result"]').val();
        var fileInput = $('#formFile')[0].files[0];

        if (fileInput) {
            var fileExtension = fileInput.name.split('.').pop().toLowerCase();
            var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

            if (allowedExtensions.indexOf(fileExtension) === -1) {
                $(".detecting").attr("style", "display: none;");
                $(".detect").attr("style", "display: block;");
                alert('Định dạng file không hợp lệ.');
                return;
            }

            var formData = new FormData();
            formData.append('image', fileInput);
            formData.append('number_result', number_result);

            $.ajax({
                url: window.location.href, // Đường dẫn đến server xử lý
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    var list_image = response.list_image_urls;
                    var food_name = response.food_name;

                    // Hiển thị tên món ăn
                    $(".food_name").attr("style", "display: block;");
                    $("#food_name_link").text(food_name);

                    // Xử lý sự kiện khi nhấn vào tên món ăn
                    $("#food_name_link").click(function () {
                        var food = foodInfo[food_name.toLowerCase()];
                        if (food) {
                            $("#foodModal .modal-title").text(food.title);
                            $("#food_details").html(
                                '<img src="' + food.image + '" alt="' + food.title + '" style="width: 100%; height: auto;">' +
                                '<p>' + food.description + '</p>' +
                                '<button id="closeModal" class="btn btn-secondary" style="position: absolute; bottom: 20px; right: 20px;">Đóng</button>'
                            );
                            $("#foodModal").modal("show");
                            
                            // Add click event to close the modal
                            $("#closeModal").click(function() {
                                $("#foodModal").modal("hide");
                            });
                        } else {
                            alert("Không có thông tin cho món ăn này.");
                        }
                    });
                    
                    
                
                    // Hiển thị hình ảnh món ăn
                    $(".result").empty();
                    for (var i = 0; i < list_image.length; i++) {
                        $(".result").append('<div class="col-5 text-white"> <img src="' + list_image[i] + '" style="width: 100%; height: 200px;"> </div>');
                    }

                    $(".detect").attr("style", "display: block;");
                    $(".detecting").attr("style", "display: none;");
                },
                error: function (jqXHR, textStatus, errorMessage) {
                    $(".detecting").attr("style", "display: none;");
                    $(".detect").attr("style", "display: block;");
                    alert("Có Lỗi Khi Thực Hiện Dự Đoán Món Ăn, Vui Lòng Kiểm Tra Lại!");
                }
            });
        } else {
            alert("Vui Lòng Chọn Một Ảnh!");
            $(".detecting").attr("style", "display: none;");
            $(".detect").attr("style", "display: block;");
        }
    });
});