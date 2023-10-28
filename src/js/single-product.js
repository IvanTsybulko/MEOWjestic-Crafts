let sProdElement = document.getElementById('s-prod');

function generateSingleProduct(){
  sProdElement.innerHTML = `
  <div class="product-img">
    <div id="main-img" class="main-img"><img width = "400" src=${singleProduct.img} alt=""></div>

    <div class="secondary-imgs">
      <img class="sec-img" width = "80" src=${singleProduct.img} alt="">
      <img class="sec-img" width = "80" src=${singleProduct.img2} alt="">
      <img class="sec-img" width = "80" src=${singleProduct.img3} alt="">
      <img class="sec-img" width = "80" src=${singleProduct.img4} alt="">
    </div>
  </div>
  <div class="product-details">
    <div class="overall-details">
      <h3 class="name">${singleProduct.name}</h3>
    <p class="price">${singleProduct.price} lv.</p>
    <p class="details">${singleProduct.desc}</p>
    </div>

    <div class="order-details">
      <span>Color: </span>
      <select class="color" name="color" id="color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

    <span>Quantity: </span>
    <input class="quantity" type="number">

    <button>Add to cart</button>
    </div>
  </div> 
    `;
}

generateSingleProduct();