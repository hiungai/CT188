var labels={
    "MAIN_TITLE":{
        "vi-VN":"Chào mừng đến với Smart Farm <br> Cộng đồng Nơi Bạn Thuộc Về",
        "en-US" : "Welcome To Smart Farm - Where You Been",
    },

    "MAIN_CONTENT":{
        "vi-VN":"Khi bạn gia nhập Smart Farm, bạn không chỉ đơn thuần trở thành một thành viên, mà còn trở thành một phần của cộng đồng đam mê và sự sáng tạo. Đây không chỉ là một trải nghiệm mua sắm, mà là một hành trình khám phá vẻ đẹp và sự sáng tạo trong không gian sống.",
        "en-US" : "When you join Smart Farm, you not only become a member but also become part of a community of passion and creativity. This is not just a shopping experience but a journey to discover beauty and creativity in living spaces.",
    },

    
    "MAIN_FORM_TITLE":{
        "vi-VN":"Đăng Ký ",
        "en-US" : "Register",
    },

    "MAIN_FORM_FNAME":{
        "vi-VN":"Tên",
        "en-US" : "First Name",
    },

    "MAIN_FORM_LNAME":{
        "vi-VN":"Họ",
        "en-US" : "Last Name",
    },

    "MAIN_FORM_PASS":{
        "vi-VN":"Mật Khẩu",
        "en-US" : "Password",
    },

    "MAIN_FORM_SUB":{
        "vi-VN":"Đồng ý với điều khoản.",
        "en-US" : "Subscribe to our newsletter",
    },

    "MAIN_FORM_SUBMIT":{
        "vi-VN":"Đăng Ký ",
        "en-US" : "Register",
    },

    "MAIN_FORM_SUBWITH":{
        "vi-VN":"Hoặc đăng kí với:",
        "en-US" : "Or Register With: ",
    },

    //footer

    "MAIN_FOOTER_NAME":{
        "vi-VN":"Nội thất GERAL",
        "en-US" : "GERAL FURNITURE",
    },

    "MAIN_FOOTER_SER":{
        "vi-VN":"Dịch vụ",
        "en-US" : "SERVICE",
    },

    "MAIN_FOOTER_SER_1":{
        "vi-VN":"Chính Sách Bán Hàng",
        "en-US" : "Sales Policy",
    },

    "MAIN_FOOTER_SER_2":{
        "vi-VN":"Chính Sách Lắp Giao Hàng & Lắp Đặt",
        "en-US" : "Delivery & Installation Policy",
    },

    "MAIN_FOOTER_SER_3":{
        "vi-VN":"Chính Sách Đổi Trả",
        "en-US" : "Return Policy",
    },


    "MAIN_FOOTER_SER_5":{
        "vi-VN":"Câu Hỏi thường gặp",
        "en-US" : "Frequently Asked Questions",
    },

    "FOOTER_INFOR":{
        "vi-VN":"Thông tin liên hệ",
        "en-US" : "Contact Information",
    },

    "FOOTER_INFOR_1":{
        "vi-VN":"Trường Đại Học Cần Thơ - Đường 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành Phố Cần Thơ.",
        "en-US" : "CanTho University - 3/2 Street, Xuan Khanh, Ninh Kieu, Can Tho City",
    },

    "FOOTER_INFOR_2":{
        "vi-VN":"0122333444455555 (Đội Giao Hàng)",
        "en-US" : "0122333444455555 (The delivery team)",
    },

    "FOOTER_PAY":{
        "vi-VN":"Thanh toán miễn phí",
        "en-US" : "Payment without fees",
    },


    //main đăng nhập

    "MAIN_TITLE_2":{
        "vi-VN":"Welcome to Smart Farm - Creating High-Class Farms!",
        "en-US" : "Welcome to Smart Farm - Creating High-Class Farms",
    },

    "MAIN_CONTENT_2":{
        "vi-VN":"Smart Farm is not just a regular agricultural product brand, but we are your reliable companion, bringing perfect and high-class farms to every space in your home.",
        "en-US" : "Smart Farm is not just a regular agricultural product brand, but we are your reliable companion, bringing perfect and high-class farms to every space in your home.",
    },

    "MAIN_FORM_TITLE_2":{
        "vi-VN":"Đăng Nhập ",
        "en-US" : "Signin",
    },

    "CREAT":{
        "vi-VN":"Chưa có tài khoản? Đăng kí ngay",
        "en-US" : "Not yet registered? Sign up now!",
    },

    "MAIN_FORM_SUBMIT_2":{
        "vi-VN":"Đăng Nhập ",
        "en-US" : "Sign in",
    },

}

$(document).ready(function()
{
    showLabel()
})
function setLang(code)
{
window.localStorage.setItem("lang",code);
location.reload();
}

function getLang()
{
if(window.localStorage.getItem("lang")=== null)
window.localStorage.setItem("lang","vi-VN");
return window.localStorage.getItem("lang");
}

function showLabel()
{
//var lang="vi-VN";
var lang=getLang();
$('.multilang').each(function(i, obj) { $("#"+obj.id).html(labels[obj.id][lang]).attr("title", labels[obj.id][lang]);
}); 
}

function regCourse(idx){
alert(idx)
}



  