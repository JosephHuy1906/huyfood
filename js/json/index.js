var cart  = JSON.parse(localStorage.getItem("cart"));
if(cart){
    cart.forEach((sp, index) => {
       
        document.querySelector(".cart-show").innerHTML+=`
            <div class="cart-img-details">
            <div class="cart-img-photo">
            <a href="./single-product.html?id=${sp.id}"><img src="${sp.image}" alt="#" /></a>
            </div>
            <div class="cart-img-content">
            <h4><a href="./single-product.html?id=${sp.id}">${sp.name} </a></h4>
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
    document.querySelector(".demSP").innerHTML = cart.length;
}
function removeItemCard(id){
    var cart =JSON.parse(localStorage.getItem("cart"));
    if(confirm("Bạn có muốn xoá sản phẩm này không") == true){
        cart.splice(id,1)
        localStorage.setItem("cart", JSON.stringify(cart));
    }

}

function showProductIndex(){
    const url = "http://localhost:3000/products";
fetch(url)
  .then((data) => data.json())
  .then((products) => {
    products.splice(0, 2).map(el => {
        return   document.querySelector(".cl1").innerHTML += `
   
        <div class="single-product">
            <div class="product-img">
                <div class="label-new">
                    <span class="new">New</span>
                </div>
                <div class="label-parcent">
                    <span class="parcent">-45%</span>
                </div>
                <a class="pro-image" href="./single-product.html?id=${el.id}">
                    <img class="primary-image" src="${el.image}" alt="#">

                </a>
                <div class="pro-actions">
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Wishlist" data-placement="left"><i class="pe-7s-like"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare" data-placement="left"><i class="pe-7s-repeat"></i></a>
                    <a class="action-btn" href="#" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')" data-toggle="tooltip" data-original-title="Add to Cart" data-placement="left"><i class="pe-7s-cart"></i></a>
                </div>
            </div>
            <div class="product-content">
                <h2 class="product-name">
                    <a href="./single-product.html?id=${el.id}">${el.name}</a>
                </h2>
                <div class="pro-rating">
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star-half-o"></i></a>
                    <a href="#"><i class="fa fa-star-o"></i></a>
                </div>
                <div class="price-box">
                    <span class="new-price">${el.price} vnđ</span>
                </div>
            </div>
            
    
    `;
    });

    products.splice(2, 2).map(el => {
        return   document.querySelector(".cl2").innerHTML += `
   
        <div class="single-product">
            <div class="product-img">
                <div class="label-new">
                    <span class="new">New</span>
                </div>
                <div class="label-parcent">
                    <span class="parcent">-45%</span>
                </div>
                <a class="pro-image" href="./single-product.html?id=${el.id}">
                    <img class="primary-image" src="${el.image}" alt="#">

                </a>
                <div class="pro-actions">
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Wishlist" data-placement="left"><i class="pe-7s-like"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare" data-placement="left"><i class="pe-7s-repeat"></i></a>
                    <a class="action-btn" href="#"  onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')" data-toggle="tooltip" data-original-title="Add to Cart" data-placement="left"><i class="pe-7s-cart"></i></a>
                </div>
            </div>
            <div class="product-content">
                <h2 class="product-name">
                    <a href="./single-product.html?id=${el.id}">${el.name}</a>
                </h2>
                <div class="pro-rating">
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star-half-o"></i></a>
                    <a href="#"><i class="fa fa-star-o"></i></a>
                </div>
                <div class="price-box">
                    <span class="new-price">${el.price} vnđ</span>
                </div>
            </div>
            
    
    `;
    });

    products.splice(3,2).map(el => {
        return   document.querySelector(".cl3").innerHTML += `
   
        <div class="single-product">
            <div class="product-img">
                <div class="label-new">
                    <span class="new">New</span>
                </div>
                <div class="label-parcent">
                    <span class="parcent">-45%</span>
                </div>
                <a class="pro-image" href="./single-product.html?id=${el.id}">
                    <img class="primary-image" src="${el.image}" alt="#">

                </a>
                <div class="pro-actions">
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Wishlist" data-placement="left"><i class="pe-7s-like"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare" data-placement="left"><i class="pe-7s-repeat"></i></a>
                    <a class="action-btn" href="#"   onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')" data-toggle="tooltip" data-original-title="Add to Cart" data-placement="left"><i class="pe-7s-cart"></i></a>
                </div>
            </div>
            <div class="product-content">
                <h2 class="product-name">
                    <a href="./single-product.html?id=${el.id}">${el.name}</a>
                </h2>
                <div class="pro-rating">
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star-half-o"></i></a>
                    <a href="#"><i class="fa fa-star-o"></i></a>
                </div>
                <div class="price-box">
                    <span class="new-price">${el.price} vnđ</span>
                </div>
            </div>
            
    
    `;
    });

    products.splice(4, 2).map(el => {
        return   document.querySelector(".cl4").innerHTML += `
   
        <div class="single-product">
            <div class="product-img">
                <div class="label-new">
                    <span class="new">New</span>
                </div>
                <div class="label-parcent">
                    <span class="parcent">-45%</span>
                </div>
                <a class="pro-image" href="./single-product.html?id=${el.id}">
                    <img class="primary-image" src="${el.image}" alt="#">

                </a>
                <div class="pro-actions">
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Wishlist" data-placement="left"><i class="pe-7s-like"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare" data-placement="left"><i class="pe-7s-repeat"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip"  onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')" data-original-title="Add to Cart" data-placement="left"><i class="pe-7s-cart"></i></a>
                </div>
            </div>
            <div class="product-content">
                <h2 class="product-name">
                    <a href="./single-product.html?id=${el.id}">${el.name}</a>
                </h2>
                <div class="pro-rating">
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star-half-o"></i></a>
                    <a href="#"><i class="fa fa-star-o"></i></a>
                </div>
                <div class="price-box">
                    <span class="new-price">${el.price} vnđ</span>
                </div>
            </div>
            
    
    `;
    });

    products.splice(5, 2).map(el => {
        return   document.querySelector(".cl5").innerHTML += `
   
        <div class="single-product">
            <div class="product-img">
                <div class="label-new">
                    <span class="new">New</span>
                </div>
                <div class="label-parcent">
                    <span class="parcent">-45%</span>
                </div>
                <a class="pro-image" href="./single-product.html?id=${el.id}">
                    <img class="primary-image" src="${el.image}" alt="#">

                </a>
                <div class="pro-actions">
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Wishlist" data-placement="left"><i class="pe-7s-like"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare" data-placement="left"><i class="pe-7s-repeat"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip"  onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')" data-original-title="Add to Cart" data-placement="left"><i class="pe-7s-cart"></i></a>
                </div>
            </div>
            <div class="product-content">
                <h2 class="product-name">
                    <a href="./single-product.html?id=${el.id}">${el.name}</a>
                </h2>
                <div class="pro-rating">
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star-half-o"></i></a>
                    <a href="#"><i class="fa fa-star-o"></i></a>
                </div>
                <div class="price-box">
                    <span class="new-price">${el.price} vnđ</span>
                </div>
            </div>
            
    
    `;
    });
    products.splice(8, 2).map(el => {
        return   document.querySelector(".cl6").innerHTML += `
   
        <div class="single-product">
            <div class="product-img">
                <div class="label-new">
                    <span class="new">New</span>
                </div>
                <div class="label-parcent">
                    <span class="parcent">-45%</span>
                </div>
                <a class="pro-image" href="./single-product.html?id=${el.id}">
                    <img class="primary-image" src="${el.image}" alt="#">

                </a>
                <div class="pro-actions">
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Wishlist" data-placement="left"><i class="pe-7s-like"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare" data-placement="left"><i class="pe-7s-repeat"></i></a>
                    <a class="action-btn" href="#" data-toggle="tooltip"  onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')" data-original-title="Add to Cart" data-placement="left"><i class="pe-7s-cart"></i></a>
                </div>
            </div>
            <div class="product-content">
                <h2 class="product-name">
                    <a href="./single-product.html?id=${el.id}">${el.name}</a>
                </h2>
                <div class="pro-rating">
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star"></i></a>
                    <a href="#"><i class="fa fa-star-half-o"></i></a>
                    <a href="#"><i class="fa fa-star-o"></i></a>
                </div>
                <div class="price-box">
                    <span class="new-price">${el.price} vnđ</span>
                </div>
            </div>
            
    
    `;
    });

    
});


}
showProductIndex();
function addCart(id, name, price, image) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
      cart = [];
      cart.push({ id: id, name: name, price: price, image: image, quatity: 1 });
    } else {
      let item = cart.find((item) => item.id === id);
      if (item) {
        item.quatity++;
        location.reload()
      }
      else
        cart.push({ id: id, name: name, price: price, image: image, quatity: 1 });
        location.reload()
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload()
  }

function showCart(){
    if(cart){
        cart.forEach((sp, index) => {
          
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