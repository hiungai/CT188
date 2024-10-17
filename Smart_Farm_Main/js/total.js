// HÀM TẠO MỘT ICON CÓ CHỨC NĂNG CHAT VỚI CỬA HÀNG
// Hàm thay đổi giá trị của thuộc tính display của phần tử có class "chat-box" giữa "block" và "none" mỗi khi được gọi.  
// Nếu chat box đang ẩn, hàm sẽ hiển thị nó; nếu chat box đang hiển thị, hàm sẽ ẩn nó.
// công dụng là mỗi khi click vào icon "chat-icon" thì nếu chat-box đang hiển thị thì ẩn đi, nếu đang ẩn thì hiển thị ra màn hình"
//Bieu thuc chinh quy test ma san pham


//localStorage.clear();
function toggleChat() {
    var chatBox = document.querySelector('.chat-box');
    chatBox.style.display = (chatBox.style.display == "none" || chatBox.style.display == "") ? "block" : "none";
}
// hàm sendMessage có công dụng thêm một tin nhắn mới vào cuộc trò chuyện 
// khi người dùng nhập và nhấn "Gửi".
function sendMessage() {
    var messageInput = document.getElementById("message-input"); // Lấy phần tử có id là "message-input"
    var chatContent = document.getElementById("chat-content"); // lấy phần tử có id là "chat-content"
    // Lấy giá trị của phần tử đầu vào (tức là nội dung tin nhắn) và loại bỏ khoảng trắng ở đầu và cuối chuỗi.
    var messageText = messageInput.value.trim();
    if (messageText !== "") {
        //Tạo một phần tử <div> mới với class là "message" và đặt nội dung của phần tử này là nội dung tin nhắn.
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.innerText = messageText;
        //Thêm phần tử tin nhắn mới vào cuộc trò chuyện và cuộn xuống cuối cùng để hiển thị tin nhắn mới nhất.
        chatContent.appendChild(messageElement);
        chatContent.scrollTop = chatContent.scrollHeight;

        // Đặt lại giá trị của phần tử đầu vào sau khi tin nhắn đã được gửi đi để người dùng có thể nhập tin nhắn mới.
        messageInput.value = "";
    }
}
// thông báo cho trang đăng nhập
function loginValidate(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        alert("Vui long nhap email hop le!");
        frm.email.focus();
        return false;
    }
    if (frm.pass.value.length < 8) {
        alert("Mật khẩu có tối thiểu 8 kí tự !");
        frm.pass.focus();
        return false;
    }
    alert("Đã gửi dữ liệu đăng nhập");
    return true;
}
// thông báo cho trang đăng ký
function registerValidate(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email1.value) == false) {
        alert("Vui lòng nhập email hợp lệ.");
        frm.email1.focus();
        return false;
    }
    if (frm.pass1.value.length < 8) {
        alert("Mật khẩu có tối thiểu 8 kí tự.");
        frm.pass1.focus();
        return false;
    }
    alert("Đã gửi dữ liệu đăng kí.");
    return true;
}

//Search
function sc_get() {
    sc = document.getElementById("sc")
    if (sc.value.length == 0) {
        alert("Nội dung tìm kiếm không được rỗng, vui lòng nhập lại");
        return false;
    }
    else {
        localStorage.setItem("sc", sc.value);
        return true;
    }
}
function show_search() {
    sc = localStorage.getItem("sc");
    var count = 0, sc_result = [];
    if (sc != null) {
        for (let key in itemList) {
            if (itemList[key].name.toLowerCase().includes(sc.toLowerCase())) {
                sc_result.push(key);
                count++;
            }
        }
        var formatter = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });
        // Khai báo biến container lấy phần tử có id = SearchDetail, trong đó lấy phần tử con có nhãn HTML là tbody
        var container = document.getElementById("SearchDetail").getElementsByTagName("tbody")[0];
        container.innerHTML = "";

        var tr_ = document.createElement("tr");
        var cell_ = document.createElement("td");
        cell_.colSpan = 3;
        cell_.textAlign = "Left";
        cell_.innerHTML = "Kết quả tìm kiếm của <strong>" + sc + "</strong> có <strong>" + count + "</strong> kết quả";
        tr_.appendChild(cell_);
        container.appendChild(tr_);

        var tr_1 = document.createElement("tr");
        var photoCell_ = document.createElement("td");
        var nameCell_ = document.createElement("td");
        var priceCell_ = document.createElement("td");
        photoCell_.style.textAlign = "center";
        photoCell_.innerHTML = "";
        nameCell_.innerHTML = "Name";
        nameCell_.style.textAlign = "center";
        priceCell_.innerHTML = "Price";
        priceCell_.style.textAlign = "center";

        tr_1.appendChild(photoCell_);
        tr_1.appendChild(nameCell_);
        tr_1.appendChild(priceCell_);
        container.appendChild(tr_1);


        sc_result.forEach(item => {

            var tr = document.createElement("tr");
            var photoCell = document.createElement("td");
            var nameCell = document.createElement("td");
            var priceCell = document.createElement("td");

            photoCell.style.textAlign = "center";
            photoCell.innerHTML = "<img src='" + itemList[item].photo + "' class='round-figure' width='100px' />";
            nameCell.innerHTML = itemList[item].name;
            nameCell.style.textAlign = "center";
            priceCell.innerHTML = formatter.format(itemList[item].price);
            priceCell.style.textAlign = "center";

            tr.appendChild(photoCell);
            tr.appendChild(nameCell);
            tr.appendChild(priceCell);
            container.appendChild(tr);
        });
    }
}
//order
function order()
{
    const ma_sp = /^sp\d{4}$/;
    if (localStorage.getItem("order") != null) {
        localStorage.removeItem("order");
        if (localStorage.getItem("orderlist") == null)
            localStorage.setItem("orderlist", "{}");
        var order_list_ = localStorage.getItem("orderlist");
        var order_list = JSON.parse(order_list_);
        var key = Object.keys(order_list).length.toString();
        var tmp = {};
        for (let key_ in localStorage) {
            // Lấy tên khóa
            if (ma_sp.test(key_) && localStorage.getItem(key_) > 0) {
                tmp[key_] = localStorage.getItem(key_);
                localStorage.removeItem(key_);
            }
        }
        let count = 0;
        for (let i in tmp)
            if (tmp[i] == 0)
                count++;
        if (count == 0) {
            tmp.state = false;
            order_list[key] = tmp;
            localStorage.setItem("orderlist", JSON.stringify(order_list));
        }
    }
}
function showOrder() {
    
    if (localStorage.getItem("orderlist") == null)
        localStorage.setItem("orderlist", "{}");
    var order_list_ = localStorage.getItem("orderlist");
    var order_list = JSON.parse(order_list_);
    var container = document.getElementById("OrderDetail").getElementsByTagName("tbody")[0];
    container.innerHTML = "";

    var tr_1 = document.createElement("tr");
    var photoCell_ = document.createElement("td");
    var nameCell_ = document.createElement("td");
    var priceCell_ = document.createElement("td");
    var cn_ = document.createElement("td");
    var rm = document.createElement("td");
    photoCell_.style.textAlign = "center";
    photoCell_.innerHTML = "Item";
    nameCell_.innerHTML = "Tổng giá trị";
    nameCell_.style.textAlign = "center";
    priceCell_.innerHTML = "Trạng thái";
    priceCell_.style.textAlign = "center";
    cn_.innerHTML = "";
    rm.innerHTML = "";
    tr_1.appendChild(photoCell_);
    tr_1.appendChild(nameCell_);
    tr_1.appendChild(priceCell_);
    tr_1.appendChild(cn_);
    tr_1.appendChild(rm);
    container.appendChild(tr_1);

    for (let key in order_list) {

        var tr = document.createElement("tr");

        var item_cell = document.createElement("td");

        var tr_item_root = document.createElement("tr");
        var photoCell_root = document.createElement("td");
        var nameCell_root = document.createElement("td");
        var priceCel_root = document.createElement("td");
        var numCell_root = document.createElement("td");

        photoCell_root.style.textAlign = "center";
        photoCell_root.innerHTML = "";
        nameCell_root.innerHTML = "Name";
        nameCell_root.style = "padding-left: 10px;";
        nameCell_root.style.textAlign = "center";

        priceCel_root.innerHTML = "Số lượng";
        priceCel_root.style = "padding-left: 20px;padding-right: 30px";
        priceCel_root.style.textAlign = "center";

        numCell_root.innerHTML = "Price";
        numCell_root.style.textAlign = "center";
        tr_item_root.appendChild(photoCell_root);
        tr_item_root.appendChild(nameCell_root);
        tr_item_root.appendChild(priceCel_root);
        tr_item_root.appendChild(numCell_root);
        item_cell.appendChild(tr_item_root);
        var row = 0;
        var sum = 0;
        for (let i in order_list[key]) {
            if (i == "state" || i == "sum") continue;
            var tr_ = document.createElement("tr");
            var photoCell = document.createElement("td");
            var nameCell = document.createElement("td");
            var priceCell = document.createElement("td");
            var numCell = document.createElement("td");

            photoCell.style.textAlign = "center";
            photoCell.innerHTML = "<img src='" + itemList[i].photo + "' class='round-figure' width='100px' />";

            nameCell.innerHTML = itemList[i].name;
            nameCell.style = "padding-left: 10px;";
            nameCell.style.textAlign = "center";

            priceCell.innerHTML = itemList[i].price;
            //priceCell.style="padding-left: 20px;padding-right: 30px";
            priceCell.style.textAlign = "center";

            numCell.innerHTML = order_list[key][i];
            numCell.style.textAlign = "center";
            sum += order_list[key][i] * itemList[i].price;
            tr_.appendChild(photoCell);
            tr_.appendChild(nameCell);
            tr_.appendChild(numCell);
            tr_.appendChild(priceCell);
            row++;
            item_cell.appendChild(tr_);
        }
        tr.appendChild(item_cell);

        var sum_cell = document.createElement("td");
        sum_cell.style.textAlign = "center";
        var state_cell = document.createElement("td");
        state_cell.style.textAlign = "center";
        var button_cell = document.createElement("td");
        var removeCell = document.createElement("td");
        var removeLink = document.createElement("a");
        button_cell.style.textAlign = "center";


        sum_cell.innerHTML = sum;
        if (order_list[key].state)
            state_cell.innerHTML = "Đã duyệt";
        else
            state_cell.innerHTML = "Chưa duyệt";
        var bt = document.createElement("button");
        bt.innerHTML = "Duyệt";
        bt.value = key;
        // Tạo một sự kiện khi nút được nhấn
        bt.onclick = function () {
            if (confirm("Nếu duyệt đơn hàng này vui lòng ấn nút OK")) {
                alert("Duyệt đơn hàng thành công");
                order_list[this.value].state = true;
                localStorage.setItem("orderlist", JSON.stringify(order_list));
                location.reload();
            }
        };

        button_cell.appendChild(bt);
        removeLink.innerHTML = "<i class='fa fa-trash'></i>";
        removeLink.setAttribute("href", "#");
        removeLink.setAttribute("data-code", key);
        removeLink.onclick = function () {
            if (confirm("Bạn có chắc chắn muốn xóa đơn hàng này không? Nhấn OK để xác nhận xóa hoặc nhấn Cancel để hủy")) {
                alert("Đã xóa thành công!");
                delete order_list[key];
                localStorage.setItem("orderlist", JSON.stringify(order_list));
                location.reload();

            }
        };
        removeCell.style.textAlign = "center";
        removeCell.appendChild(removeLink);

        tr.appendChild(sum_cell);
        tr.appendChild(state_cell);
        tr.appendChild(button_cell);
        tr.appendChild(removeCell);
        container.appendChild(tr);
    }
}
//Add, update,delete
function add_page(frm) {
    itemList = JSON.parse(localStorage.getItem("itemList"));
    // Bieu thuc chinh quy check ma sp hop le
    const ma_sp = /^sp\d{4}$/;
    if (ma_sp.test(frm.masp.value) == false) {
        alert("Vui long nhap ma sp hop le! Mã có định dạng là spxxxx với xxxx là các kí tự số");
        frm.masp.focus();
        return false;
    }
    if (itemList[frm.masp.value] != null) {
        alert("Ma sp đã tồn tại, vui lòng nhập mã khác");
        frm.masp.focus();
        return false;
    }
    if (frm.name.value.length == 0) {

        alert("Tên sản phẩm không rỗng, vui lòng nhập lại");
        frm.name.focus();
        return false;
    }

    if (frm.price.value.length == 0 || isNaN(frm.price.value)) {
        alert("Giá trị Price là số và không rỗng, vui lòng nhập lại");
        frm.price.focus();
        return false;
    }
    if (frm.photo.value.length == 0) {
        alert("Đường dẫn photo không rỗng, vui lòng nhập lại");
        frm.photo.focus();
        return false;
    }
    var tmp = {};
    tmp.name = frm.name.value;
    tmp.price = frm.price.value;
    tmp.photo = frm.photo.value;
    itemList[frm.masp.value] = tmp;
    localStorage.setItem("itemList", JSON.stringify(itemList));
    alert("Đã thêm dữ liệu thành công");
    return true;
}
function update_page(frm) {
    itemList = JSON.parse(localStorage.getItem("itemList"));
    // Bieu thuc chinh quy check ma sp hop le
    const ma_sp = /^sp\d{4}$/;
    if (ma_sp.test(frm.masp.value) == false) {
        alert("Vui long nhap ma sp hop le! Mã có định dạng là spxxxx với xxxx là các kí tự số");
        frm.masp.focus();
        return false;
    }
    if (itemList[frm.masp.value] == null) {
        alert("Ma sp khong tồn tại, vui lòng nhập mã khác");
        frm.masp.focus();
        return false;
    }
    let c = 0
    if (frm.photo.value.length > 0) {
        itemList[frm.masp.value].photo = frm.photo.value;
        c++;

    }
    if (frm.name.value.length > 0) {
        itemList[frm.masp.value].name = frm.photo.name;
        c++;

    }
    if ((frm.price.value.length > 0)) {
        if (!isNaN(frm.price.value)) {
            itemList[frm.masp.value].price = frm.price.value;
            c++;
        }
    }
    if (!c) {
        alert("Dữ liệu cập nhật không thành công (Không có gì thay đổi)");
        return false;
    }
    localStorage.setItem("itemList", JSON.stringify(itemList));
    alert("Đã cập nhật dữ liệu thành công,những ô trống mặc định là giữ nguyên giá trị ban đầu");
    return true;
}
function delete_page(frm) {
    // Bieu thuc chinh quy check ma sp hop le
    const ma_sp = /^sp\d{4}$/;
    itemList = JSON.parse(localStorage.getItem("itemList"));
    if (ma_sp.test(frm.masp.value) == false) {
        alert("Vui long nhap ma sp hop le! Mã có định dạng là spxxxx với xxxx là các kí tự số");
        frm.masp.focus();
        return false;
    }
    if (itemList[frm.masp.value] == null) {
        alert("Ma sp khong tồn tại, vui lòng nhập mã khác");
        frm.masp.focus();
        return false;
    }
    delete itemList[frm.masp.value];
    localStorage.setItem("itemList", JSON.stringify(itemList));
    alert("Đã xóa dữ liệu thành công");
    return true;
}