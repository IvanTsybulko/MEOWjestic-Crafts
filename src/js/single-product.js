let sProdElement = document.getElementById('s-prod');


/* Generates the single product Page*/
function generateSingleProduct(){
  sProdElement.innerHTML = `
  <div class="product-img">
    <div id="main-img" class="main-img"><img width = "400" src=${singleProduct.img} alt=""></div>

    <div class="secondary-imgs">
      <img class="sec-img" onmouseover="changePhoto(this.src)" width = "80" src=${singleProduct.img} alt="">
      <img class="sec-img" onmouseover ="changePhoto(this.src)" width = "80" src=${singleProduct.img2} alt="">
      <img class="sec-img" onmouseover ="changePhoto(this.src)" width = "80" src=${singleProduct.img3} alt="">
      <img class="sec-img" onmouseover ="changePhoto(this.src)" width = "80" src=${singleProduct.img4} alt="">
    </div>
  </div>
  <div class="product-details">
    <div class="overall-details">
      <h3 class="name">${singleProduct.name}</h3>
    <p><span class="price">${singleProduct.price} lv.</span></p>
    <p class="details">${singleProduct.desc}</p>
    </div>

    <div class="order-details">
      <span>Colour: </span>
      <select class="color" name="color" id="color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

    <span>Quantity: </span>
    <input id="quantity" class="quantity" type="number" min = "1" max = "100" placeholder = "1">

    <button onclick="addToCart()">Add to cart</button>
    </div>
  </div> 
    `;
}

generateSingleProduct();

let changePhoto = (image) => {
  let mainImgElement = document.getElementById('main-img');

  mainImgElement.innerHTML = `<img width = "400" src=${image} alt=""></img>`
};

let update = (id,quantity) => {

  calculation();

  localStorage.setItem("cart-data", JSON.stringify(basket));
};

/* Adds the quantity of the selected item to the cart */
function addToCart()
{
  let quantity = document.getElementById('quantity').value;

  if(quantity === "")
  {
    quantity = '1';
  }

  if(parseInt(quantity) < 0){
    alert("Quantity must be positive!");
  }
  else{
    let search = basket.find((x) => x.id === singleProduct.id);

    if(search === undefined){
      basket.push({id:singleProduct.id, item: parseInt(quantity)});
      search = basket.find((x) => x.id === singleProduct.id);
    }
    else{
      search.item += parseInt(quantity);
    }

    update(singleProduct.id,search.item);

    location.reload();
  }
}