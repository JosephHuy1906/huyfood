var cart  = JSON.parse(localStorage.getItem("cart"));

if(cart){
    cart.forEach((sp) => {
        document.querySelector("#showCartCheckout").innerHTML+=`
                <tr class="checkout_sp">
                    <td><img src="${sp.image}" /></td>
                    <td class="checkout_productName">&emsp; ${sp.name} x${sp.quatity}</td>
                    <td class="tien">${sp.price} VNĐ</td>
                </tr>
        `;
    });
    tinhtongtien();
}

function tinhtongtien(){
    arrTien = document.getElementsByClassName("tien");
    console.log(arrTien);
    tongTien=0;
    for(let t of arrTien){
        tongTien+= parseInt(t.innerHTML);
        console.log(t.innerHTML);
    }
    document.getElementById("tongtien").innerHTML = tongTien+=' Vnđ';
}

document.querySelector(".datHang").onclick = function(){
    hoten = document.querySelector(".name").value.trim();
    phone = document.querySelector(".phone").value.trim();
    email = document.querySelector(".email").value.trim();
    diachi = document.querySelector(".adress").value.trim();

    if(hoten ==""){
        document.querySelector(".er1").innerHTML = "Bạn chưa nhập tên"
        return
       
    }else{
        document.querySelector(".er1").style.display = "none"
    }
    if(phone == ""){
        document.querySelector(".er2").innerHTML = "Bạn chưa nhập số điện thoại"
        return
       
    }else{
        document.querySelector(".er2").style.display = "none"
    }
    if(email == "" ){
        document.querySelector(".er3").innerHTML = "Bạn chưa nhập email"
        return
       
    }else{
        document.querySelector(".er3").style.display = "none"
    }
    if( diachi == ""){
        document.querySelector(".er4").innerHTML = "Bạn chưa nhập địa chỉ giao hàng"
        return  
    }else{
        document.querySelector(".er4").style.display = "none"
    }


    var donhang = {
        "customer_name": hoten,
        "customer_address": diachi,
        "customer_email": email,
        "customer_phone": phone,
        "create_date": new Date().toUTCString().split(0,10),
        "status": "Chờ xác nhận",
    }
   
    var url = "http://localhost:3000/orders";
    options = {
        method: "POST",
        body: JSON.stringify(donhang),
        headers: {"Content-Type":'application/json'}
    }
    fetch(url, options).then( res => res.json())
    .then( data => {
        order_id = data.id;
        saveDetailOders(order_id);
        console.log(data);
    })
}

function saveDetailOders(order_id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach(sp => {
        let objsp = {
            
            "order_id": order_id,
            "product_id": sp.id,
            "quantity": sp.quatity,
            "unti_price": sp.price,
        }
        url = "http://localhost:3000/order_detail";
        options = {
            method: "POST",
            body: JSON.stringify(objsp),
            headers: {"Content-Type":'application/json'}
        }
        fetch(url, options).then( res => res.json())
        .then( dt => {
            console.log(dt);
        })
    });

}

