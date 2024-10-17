// HÀM THÊM SẢN PHẨM VÀO GIỎ HÀNG
function addCart(code){
// Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code 
    var name=itemList[code].name;
// Kiểm tra sự tồn tại của mã sản phẩm trong localStorage, nếu không tồn tại thì thêm mới và thiết lập giá trị cho mã sản phẩm
    if(typeof localStorage[code] == "undefined") window.localStorage.setItem(code, 1);
    else{
        var current = parseInt((window.localStorage).getItem(code));
        window.localStorage.setItem(code, current + 1);
    }
    alert("Đã thêm sản phẩm " + name + " vào giỏ hàng thành công!");
};
// HÀM HIỂN THỊ SẢN PHẨM TRONG GIỎ HÀNG
function showCart() {
// Khai báo biến formatter để hiển thị giá tiền sản phẩm dưới dạng tiền tệ VND
    var formatter = new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"});
// Khai báo biến container lấy phần tử có id = cartDetail, trong đó lấy phần tử con có nhãn HTML là tbody
    var container = document.getElementById("cartDetail").getElementsByTagName("tbody")[0];
    container.innerHTML="";
    var sum = 0; // Tổng giá tiền mỗi mặt hàng
    var totalPreTax = 0; // Tổng giá tiền đơn hàng khi chưa tính thuế
    var taxRate=0.1; // Tỉ lệ thuế
    var tax = 0; // Tiền thuế
    for(var i = 0; i < window.localStorage.length; i++){
        if(typeof itemList[localStorage.key(i)] === "undefined"|| localStorage.getItem(localStorage.key(i))<=0 ) continue;
        var tr = document.createElement("tr");
        var photoCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var priceCell = document.createElement("td");
        var numCell = document.createElement("td");
        var sumCell = document.createElement("td");
        var removeCell = document.createElement("td");
        var removeLink = document.createElement("a");
        var item = itemList[localStorage.key(i)];
        var num = localStorage.getItem(localStorage.key(i));
        photoCell.style.textAlign="center";
        photoCell.innerHTML="<img src='" + item.photo + "' class='round-figure' width='100px' />";
        nameCell.innerHTML=item.name;
        nameCell.style.textAlign="center";
        priceCell.innerHTML=formatter.format(item.price);
        priceCell.style.textAlign="center";
        numCell.innerHTML=num;
        numCell.style.textAlign="center";
        sum = num*item.price;
        sumCell.innerHTML=formatter.format(sum);
        sumCell.style.textAlign="center";
        removeLink.innerHTML="<i class='fa fa-trash'></i>";
        removeLink.setAttribute("href", "#");
        removeLink.setAttribute("data-code", localStorage.key(i));
        removeLink.onclick=function(){
            removeCart(this.dataset.code);
        };
        removeCell.style.textAlign="center";
        removeCell.appendChild(removeLink);
        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(numCell);
        tr.appendChild(priceCell);
        tr.appendChild(sumCell);
        tr.appendChild(removeCell);
        container.appendChild(tr);
        totalPreTax += sum;
    }
    document.getElementById("bill_total").innerHTML=formatter.format(totalPreTax);

}
// HÀM XÓA SẢN PHẨM KHỎI GIỎ HÀNG
function removeCart(code) {
// Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code
    var name=itemList[code].name;
    if(confirm("Bạn có chắc chắn muốn xóa sản phẩm " + name + " khỏi giỏ hàng không? Nhấn OK để xác nhận xóa hoặc nhấn Cancel để hủy")){
        if(typeof window.localStorage[code] !== "undefined"){
// Xóa sản phẩm khỏi localStorage
            window.localStorage.removeItem(code);
// Xóa nội dung của phần thân của bảng (<tbody>)
            document.getElementById("cartDetail").getElementsByTagName("tbody")[0].innerHTML="";
// Hiển thị lại nội dung của đơn hàng
            showCart();
        }
        alert("Đã xóa sản phẩm " + name + " khỏi giỏ hàng thành công!");
    }
}
// HÀM HIỆN HỘP THOẠI XÁC NHẬN ĐẶT HÀNG
function confirmPurchase(){
    if (confirm("Vui lòng kiểm tra lại thông tin giao hàng cũng như đơn hàng trước khi đặt hàng. Sau khi kiểm tra, vui lòng nhấn OK để xác nhận.")) {
        alert("Đã đặt hàng thành công!");
        localStorage.setItem("order",true);
        order();
        window.location.reload();
    }
}