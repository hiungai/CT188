// Tạo danh sách các sản phẩm kèm theo thông tin dưới dạng object JS
var item = {
    
    "sp0001": {"name": "Giống lúa OM 18", "price": 25000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa OM 18.jpg","sl":100 },
    "sp0002": {"name": "Giống lúa OM 4900", "price": 35000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa OM 4900.png","sl":200},
    "sp0003": {"name": "Giống lúa OM 5451", "price": 27000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa OM 5451.png","sl":5},
    "sp0004": {"name": "Giống lúa OM 9577", "price": 23000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa OM 9577.jpg","sl":1},
    "sp0005": {"name": "Giống Lúa IR50404", "price": 25000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa IR50404.png","sl":2},
    "sp0006": {"name": "Giống Lúa JASMINE 85", "price": 21000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa JASMINE 85.png","sl":4},
    "sp0007": {"name": "Giống Lúa Lộc Trời 1", "price": 25000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa Lộc Trời 1.jpg","sl":2},
    "sp0008": {"name": "Giống Lúa Lộc Trời 3", "price": 20000, "photo": "../asset/img/Giống Cây Trồng/Giống Lúa Lộc Trời 3.jpg","sl":3},
    "sp0009": {"name": "Bắp Nù", "price": 12000, "photo": "../asset/img/Giống Cây Trồng/Bắp Nù.png","sl":5},
    "sp0010": {"name": "Giống Bắp Lai B.9034", "price": 25000, "photo": "../asset/img/Giống Cây Trồng/Giống Bắp Lai B.9034.png","sl":2},
    "sp0011": {"name": "Giống Nếp", "price": 11000, "photo": "../asset/img/Giống Cây Trồng/Giống Nếp IR4625.png","sl":10},
    
    "sp0012": {"name": "Phân Bón Lá Hữu Cơ Khoáng HI-BORON 7-14", "price": 120000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá Hữu Cơ Khoáng HI-BORON 7-14.png","sl":100 },
    "sp0013": {"name": "Phân Bón Lá Hữu Cơ Khoáng HI-POTASSIUM", "price": 115000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá Hữu Cơ Khoáng HI-POTASSIUM C30.png","sl":200},
    "sp0014": {"name": "Phân Bón Lá Hữu Cơ Khoáng ROOTWELL", "price": 160000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá Hữu Cơ Khoáng ROOTWELL.png","sl":5},
    "sp0015": {"name": "Phân Bón Lá Khoáng Hữu Cơ SILIMAX", "price": 165000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá Khoáng Hữu Cơ SILIMAX.png","sl":1},
    "sp0016": {"name": "Phân Bón Lá Khoáng Hữu Cơ TRIO-CMB", "price": 165000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá Khoáng Hữu Cơ TRIO-CMB.png","sl":2},
    "sp0017": {"name": "Phân Bón Lá Khoáng Hữu Cơ TRIPPLE-MAX", "price": 115000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá Khoáng Hữu Cơ TRIPPLE-MAX.png","sl":4},
    "sp0018": {"name": "Phân Bón Lá P, K Sinh Học Trung Vi Lượng DS-GOLD", "price": 69000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá P, K Sinh Học Bổ Sung Trung Vi Lượng DS-GOLD.png","sl":2},
    "sp0019": {"name": "Phân Bón Lá Vi Lượng Sinh Trưởng VITAZYME", "price": 150000, "photo": "../asset/img/Hữu Cơ Sinh Học/Phân Bón Lá Vi Lượng Có Chất Điều Hóa Sinh Trưởng VITAZYME.png","sl":3},
    "sp0020": {"name": "Thuốc Trừ Bệnh Sinh Học TRICO-DHCT LÚA VON", "price": 65000, "photo": "../asset/img/Hữu Cơ Sinh Học/Thuốc Trừ Bệnh Sinh Học TRICO-DHCT LÚA VON.png","sl":5},
    "sp0021": {"name": "Thuốc Trừ Bệnh Sinh Học TRICO-DHCT PHYTOPH", "price": 55000, "photo": "../asset/img/Hữu Cơ Sinh Học/Thuốc Trừ Bệnh Sinh Học TRICO-DHCT PHYTOPH.png","sl":2},
    "sp0022": {"name": "Thuốc Trừ Bệnh Sinh Học TRICO-DHCT", "price": 65000, "photo": "../asset/img/Hữu Cơ Sinh Học/Thuốc Trừ Bệnh Sinh Học TRICO-DHCT.png","sl":10},
    
    "sp0023": {"name": "Thuốc Trừ Bệnh PARAMAX 400SC", "price": 200000, "photo": "../asset/img/Nông Dược/Thuốc Trừ Bệnh PARAMAX 400SC.png","sl":100 },
    "sp0024": {"name": "Thuốc Trừ Bệnh TOTAN 200WP", "price": 290200, "photo": "../asset/img/Nông Dược/Thuốc Trừ Bệnh TOTAN 200WP.png","sl":200},
    "sp0025": {"name": "Thuốc Trừ Bệnh Đạo Ôn ANGATE 75WP", "price": 160000, "photo": "../asset/img/Nông Dược/Thuốc Trừ Bệnh Đạo Ôn ANGATE 75WP.png","sl":5},
    "sp0026": {"name": "Thuốc Trừ Bệnh Đạo Ôn FUAN 40EC", "price": 270000, "photo": "../asset/img/Nông Dược/Thuốc Trừ Bệnh Đạo Ôn FUAN 40EC.png","sl":1},
    "sp0027": {"name": "Thuốc Trừ BệnhSCOOTER 300EC", "price": 260200, "photo": "../asset/img/Nông Dược/Thuốc Trừ BệnhSCOOTER 300EC.png","sl":2},
    "sp0028": {"name": "Thuốc Trừ Có Không Chọn Lọc GLUFOCA 200SL", "price": 400200, "photo": "../asset/img/Nông Dược/Thuốc Trừ Có Không Chọn Lọc GLUFOCA 200SL.png","sl":4},
    "sp0029": {"name": "Thuốc Trừ Cỏ Hậu Nảy Mầm ANKILL A 40WP", "price": 400200, "photo": "../asset/img/Nông Dược/Thuốc Trừ Cỏ Hậu Nảy Mầm ANKILL A 40WP.png","sl":2},
    "sp0030": {"name": "Thuốc Trừ Cỏ Hậu Nảy Mầm XEVELO 120EC", "price": 150000, "photo": "../asset/img/Nông Dược/Thuốc Trừ Cỏ Hậu Nảy Mầm XEVELO 120EC.png","sl":3},
    "sp0031": {"name": "Thuốc Trừ Cỏ Tiền Nảy Mầm MECO", "price": 65000, "photo": "../asset/img/Nông Dược/Thuốc Trừ Cỏ Tiền Nảy Mầm MECO 60EC.png","sl":5},
    "sp0032": {"name": "Thuốc Trừ Cỏ Tiền Nảy Mầm WEEDER 300EC", "price": 55000, "photo": "../asset/img/Nông Dược/Thuốc Trừ Cỏ Tiền Nảy Mầm WEEDER 300EC.png","sl":2},
    "sp0033": {"name": "Thuốc Trừ Cỏ Trên Cây Trồng Cạn RAINVEL 480SL", "price": 65000, "photo": "../asset/img/Nông Dược/Thuốc Trừ Cỏ Trên Cây Trồng Cạn RAINVEL 480SL.png","sl":10},
    
};
//Chuyển data lên localStorage
if(localStorage.getItem("itemList")==null)
    localStorage.setItem("itemList",JSON.stringify(item));
var itemList=JSON.parse(localStorage.getItem("itemList"));