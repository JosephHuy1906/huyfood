var url = "http://localhost:3000/products";
fetch(url)
  .then((data) => data.json())
  .then((products) => {
    pro_arr = products.map((item) => {
      return `
            <div class="col-sm-4 col-xs-12">
            <div class="single-product">
                <div class="product-img">
                    <div class="product-sticker">
                        <div class="label-new">
                            <span class="new">New</span>
                        </div>
                        <div class="label-parcent">
                            <span class="parcent">- 45%</span>
                        </div>
                    </div>
                    <a class="pro-image" href="./single-product.html?id=${item.id}">
                        <img class="primary-image" src="${item.image}" alt="#">
                        
                    </a>
                    <form>
                        <div class="pro-actions">
                        <button onclick="addCart(${item.id}, '${item.name}', ${item.price}, '${item.image}')" class="action-btn action-btn-1" href="cart.html"><i class="pe-7s-cart"></i>Thêm vào giỏ hàng</button>
                        <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                        <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
                        </div>
                    </form>
                
                </div>
                <div class="product-content">
                    <h2 class="product-name">
                        <a href="#">${item.name}</a>
                    </h2>
                    <div class="pro-rating">
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star-half-o"></i></a>
                        <a href="#"><i class="fa fa-star-o"></i></a>
                    </div>
                    <div class="price-box">
                        <span class="new-price">${item.price}Vnđ</span>
                    </div>
                </div>
            </div>
        </div>
        `;
     
    });

    document.querySelector("#showProduct").innerHTML += pro_arr;
    console.log(pro_arr);
  });

function addCart(id, name, price, image) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    cart = [];
    cart.push({ id: id, name: name, price: price, image: image, quatity: 1 });
  } else {
    let item = cart.find((item) => item.id === id);
    if (item) item.quatity++;
    else
      cart.push({ id: id, name: name, price: price, image: image, quatity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}