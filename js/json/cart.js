var cart  = JSON.parse(localStorage.getItem("cart"));

function showCart(){
    if(cart){
        cart.forEach((sp, index) => {
            document.querySelector("#tblCart").innerHTML+=`
                <tbody>
                    <tr>
                        <td class="text-left shopping-cart-breif">
                            <a href="#"><img src="${sp.image}" alt="#" /></a>
                            <h5><a href="./single-product.html?id=${sp.id}" class="text-uppercase">${sp.name}</a></h5>
                        </td>
                        <td class="text-center">
                            <div class="custom-cart gia">${sp.price} vnđ</div>
                        </td>
                        <td class="text-center">
                            <div class="cart-plus-minus">
                                <input type="text" value="${sp.quatity}" onkeyup="tinhtien(${sp.price}, this.value, ${index})" name="qtybutton" class="cart-plus-minus-box">
                            </div>
                        </td>
                        <td class="text-center tien">
                            ${sp.quatity*sp.price} vnđ
                        </td>
                        <td class="text-center remove">
                            <button type="submit" onclick="removeItemCard(${index})"><i class="pe-7s-close"></i></button>
                        </td>
                    </tr>
                </tbody>
            `;
            document.querySelector(".cart-show").innerHTML+=`
                <div class="cart-img-details">
                <div class="cart-img-photo">
                <a href="#"><img src="${sp.image}" alt="#" /></a>
                </div>
                <div class="cart-img-content">
                <h4><a href="#">${sp.name} </a></h4>
                <span>Số lượng: <b>${sp.quatity}</b></span><br>
    
                <span>${sp.price} vnđ</span>
                </div>
                <div class="pro-del">
                <form>
                <button type="submit" onclick="removeItemCard(${index})"><i class="pe-7s-trash"></i></button>
                </form>
                </div>
                </div> 
            `;
        });
    }
}

function tinhtien(gia, soluong, i){
    tien = gia*soluong;
    document.getElementsByClassName("tien")[i].innerHTML = tien+=' vnđ';
    tinhtongtien()
    
}
function tinhtongtien(){
    arrTien = document.getElementsByClassName("tien");
    tongTien=0;
    for(let t of arrTien){
        tongTien+= parseInt(t.innerHTML);
    }
    document.getElementById("tongtien").innerHTML = tongTien+=' vnđ';
    document.getElementById("tamtinh").innerHTML = tongTien;
}
function removeItemCard(id){
    var cart =JSON.parse(localStorage.getItem("cart"));
    if(confirm("Bạn có muốn xoá sản phẩm này không") == true){
        cart.splice(id,1)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    location.reload()
}

document.querySelector(".custom-submit-2").onclick = function(){
    document.location = "checkout.html"
}

document.querySelector(".demSP").innerHTML = cart.length;
showCart();