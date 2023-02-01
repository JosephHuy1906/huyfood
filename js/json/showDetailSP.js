var cart = JSON.parse(localStorage.getItem("cart"));
let params = new URLSearchParams(location.search);
let id = params.get("id");
url = `http://localhost:3000/products/${id}`;
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    str = `
            <div class="row">
            <div class="col-md-5">
                <div class="single-product-view">
                    <!-- Nav tabs -->
                    <div class="large-product-tab-menu">
                        <div role="tablist" class="product-details-menu product-details-carousel navigation-center">
                         
                        <!-- </ul>
                        <ul role="tablist" class="product-details-menu"> -->
                            
                            
                            <div role="presentation">
                                <a href="#img-4" role="tab" data-toggle="tab">
                                    <img src="${data.image}" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-7">
                <div class="single-product-details listview">
                    <div class="product-content">
                        <h2 class="product-name">
                            <a href="#">${data.name}</a>
                        </h2>
                        <div class="rating-review">
                            <div class="pro-rating">
                                <a href="#"><i class="fa fa-star"></i></a>
                                <a href="#"><i class="fa fa-star"></i></a>
                                <a href="#"><i class="fa fa-star"></i></a>
                                <a href="#"><i class="fa fa-star-half-o"></i></a>
                                <a href="#"><i class="fa fa-star-o"></i></a>
                            </div>
                            <a class="reviews" href="#">6 Người xem</a>
                            
                        </div>
                        <div class="stock">
                            <a href="#">Hot</a>
                        </div>
                        <div class="price-box">
                            <span class="old-price"></span>
                            <span class="new-price">${data.price} vnđ</span>
                        </div>
                        <div class="description">
                            <b>Mô tả:</b>
                            <p>${data.detail}</p>
                        </div>
                    <br><br>
                        <div class="qty">
                            <span class="choose-title">Số Lượng : </span>
                            <input type="number" placeholder="1" />
                        </div>
                        <div class="pro-actions">
                            <a class="action-btn action-btn-1" onclick="addCart(${data.id}, '${data.name}', ${data.price}, '${data.image}')" ><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                            <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                            <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>		
        </div>
            `;
    document.querySelector("#showsp").innerHTML = str;
  });
function addCart(id, name, price, image) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    cart = [];
    cart.push({ id: id, name: name, price: price, image: image, quatity: 1 });
  } else {
    let item = cart.find((item) => item.id === id);
    if (item) {
      item.quatity++;
      location.reload();
    } else
      cart.push({ id: id, name: name, price: price, image: image, quatity: 1 });
    location.reload();
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

const urls = "http://localhost:3000/products";
fetch(urls)
  .then((res) => res.json())
  .then((pr) => {
    pr.splice(0, 1).map((el) => {
      return (document.querySelector(".pr1").innerHTML += `
              <div class="single-product">
                  <div class="product-img">
                      <div class="product-sticker">
                          <div class="label-new">
                              <span class="new">New</span>
                          </div>
                          <div class="label-parcent">
                              <span class="parcent">-45%</span>
                          </div>
                      </div>
                      <a class="pro-image" href="./single-product.html?id=${el.id}">
                          <img class="primary-image" src="${el.image}" alt="#">
                          
                      </a>
                      <div class="pro-actions">
                          <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                          <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                          <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
              </div>`);
    });
    pr.splice(5, 1).map((el) => {
      return (document.querySelector(".pr2").innerHTML += `
              <div class="single-product">
                  <div class="product-img">
                      <div class="product-sticker">
                          <div class="label-new">
                              <span class="new">New</span>
                          </div>
                          <div class="label-parcent">
                              <span class="parcent">-45%</span>
                          </div>
                      </div>
                      <a class="pro-image" href="./single-product.html?id=${el.id}">
                          <img class="primary-image" src="${el.image}" alt="#">
                          
                      </a>
                      <div class="pro-actions">
                          <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                          <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                          <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
              </div>`);
    });
    pr.splice(9, 1).map((el) => {
      return (document.querySelector(".pr3").innerHTML += `
                <div class="single-product">
                    <div class="product-img">
                        <div class="product-sticker">
                            <div class="label-new">
                                <span class="new">New</span>
                            </div>
                            <div class="label-parcent">
                                <span class="parcent">-45%</span>
                            </div>
                        </div>
                        <a class="pro-image" href="./single-product.html?id=${el.id}">
                            <img class="primary-image" src="${el.image}" alt="#">
                            
                        </a>
                        <div class="pro-actions">
                            <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                            <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                            <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
                </div>`);
    });
    pr.splice(11, 1).map((el) => {
      return (document.querySelector(".pr4").innerHTML += `
                <div class="single-product">
                    <div class="product-img">
                        <div class="product-sticker">
                            <div class="label-new">
                                <span class="new">New</span>
                            </div>
                            <div class="label-parcent">
                                <span class="parcent">-45%</span>
                            </div>
                        </div>
                        <a class="pro-image" href="./single-product.html?id=${el.id}">
                            <img class="primary-image" src="${el.image}" alt="#">
                            
                        </a>
                        <div class="pro-actions">
                            <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                            <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                            <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
                </div>`);
    });
    pr.splice(12, 1).map((el) => {
        return (document.querySelector(".pr5").innerHTML += `
                <div class="single-product">
                    <div class="product-img">
                        <div class="product-sticker">
                            <div class="label-new">
                                <span class="new">New</span>
                            </div>
                            <div class="label-parcent">
                                <span class="parcent">-45%</span>
                            </div>
                        </div>
                        <a class="pro-image" href="./single-product.html?id=${el.id}">
                            <img class="primary-image" src="${el.image}" alt="#">
                            
                        </a>
                        <div class="pro-actions">
                            <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                            <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                            <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
                </div>`);
      });
      pr.splice(4, 1).map((el) => {
        return (document.querySelector(".pr6").innerHTML += `
                <div class="single-product">
                    <div class="product-img">
                        <div class="product-sticker">
                            <div class="label-new">
                                <span class="new">New</span>
                            </div>
                            <div class="label-parcent">
                                <span class="parcent">-45%</span>
                            </div>
                        </div>
                        <a class="pro-image" href="./single-product.html?id=${el.id}">
                            <img class="primary-image" src="${el.image}" alt="#">
                            
                        </a>
                        <div class="pro-actions">
                            <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                            <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                            <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
                </div>`);
      });
      pr.splice(14, 1).map((el) => {
        return (document.querySelector(".pr7").innerHTML += `
                  <div class="single-product">
                      <div class="product-img">
                          <div class="product-sticker">
                              <div class="label-new">
                                  <span class="new">New</span>
                              </div>
                              <div class="label-parcent">
                                  <span class="parcent">-45%</span>
                              </div>
                          </div>
                          <a class="pro-image" href="./single-product.html?id=${el.id}">
                              <img class="primary-image" src="${el.image}" alt="#">
                              
                          </a>
                          <div class="pro-actions">
                              <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                              <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                              <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
                  </div>`);
      });
      pr.splice(8, 1).map((el) => {
        return (document.querySelector(".pr8").innerHTML += `
                  <div class="single-product">
                      <div class="product-img">
                          <div class="product-sticker">
                              <div class="label-new">
                                  <span class="new">New</span>
                              </div>
                              <div class="label-parcent">
                                  <span class="parcent">-45%</span>
                              </div>
                          </div>
                          <a class="pro-image" href="./single-product.html?id=${el.id}">
                              <img class="primary-image" src="${el.image}" alt="#">
                              
                          </a>
                          <div class="pro-actions">
                              <a class="action-btn action-btn-1" onclick="addCart(${el.id}, '${el.name}', ${el.price}, '${el.image}')"><i class="pe-7s-cart"></i>Thêm vào giỏ</a>
                              <a class="action-btn" href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i class="pe-7s-like"></i></a>
                              <a class="action-btn" href="#" data-toggle="tooltip" data-original-title="Compare"><i class="pe-7s-repeat"></i></a>
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
                  </div>`);
      });
  });
