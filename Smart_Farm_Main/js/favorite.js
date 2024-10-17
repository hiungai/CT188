// HÀM THÊM SẢN PHẨM VÀO MỤC YÊU THÍCH
function addFavorite(code){
// Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code
    var name=itemList[code].name;
// Kiểm tra sự tồn tại của mã sản phẩm trong localStorage
    if(typeof localStorage[code] == "undefined") window.localStorage.setItem(code, 0);
    alert("Đã thêm sản phẩm " + name + " vào mục yêu thích thành công!");
};
// HÀM HIỂN THỊ SẢN PHẨM TRONG MỤC YÊU THÍCH
function showFavorite() {
// Khai báo biến formatter để hiển thị giá tiền sản phẩm dưới dạng tiền tệ VND
    var formatter = new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"});
// Khai báo biến container lấy phần tử có id = favoriteDetail, trong đó lấy phần tử con có nhãn HTML là tbody
    var container = document.getElementById("favoriteDetail").getElementsByTagName("tbody")[0];
    container.innerHTML="";
    for(var i = 0; i < window.localStorage.length; i++){
        if(typeof itemList[localStorage.key(i)] === "undefined") continue;
        var tr = document.createElement("tr");
        var photoCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var priceCell = document.createElement("td");
        var removeCell = document.createElement("td");
        var removeLink = document.createElement("a");
        var item = itemList[localStorage.key(i)];
        photoCell.style.textAlign="center";
        photoCell.innerHTML="<img src='" + item.photo + "' class='round-figure' width='100px' />";
        nameCell.innerHTML=item.name;
        nameCell.style.textAlign="center";
        priceCell.innerHTML=formatter.format(item.price);
        priceCell.style.textAlign="center";
        removeLink.innerHTML="<i class='fa fa-trash'></i>";
        removeLink.setAttribute("href", "#");
        removeLink.setAttribute("data-code", localStorage.key(i));
        removeLink.onclick=function(){
            removeFavorite(this.dataset.code);
        };
        removeCell.style.textAlign="center";
        removeCell.appendChild(removeLink);
        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(priceCell);
        tr.appendChild(removeCell);
        container.appendChild(tr);
    }
}
// HÀM XÓA SẢN PHẨM KHỎI MỤC YÊU THÍCH
function removeFavorite(code) {
// Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code
    var name=itemList[code].name;
    if(confirm("Bạn có chắc chắn muốn xóa sản phẩm " + name + " khỏi mục yêu thích không? Nhấn OK để xác nhận xóa hoặc nhấn Cancel để hủy")){
        if(typeof window.localStorage[code] !== "undefined"){
// Xóa sản phẩm khỏi localStorage
            window.localStorage.removeItem(code);
// Xóa nội dung của phần thân của bảng (<tbody>)
            document.getElementById("favoriteDetail").getElementsByTagName("tbody")[0].innerHTML="";
// Hiển thị lại nội dung của trang yêu thích
            showFavorite();
        }
        alert("Đã xóa sản phẩm " + name + " khỏi mục yêu thích thành công!");
    }
}
