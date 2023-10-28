/* Generate shop */
let shopElement = document.getElementById("shop");

function generateShop(){

  shopItemsData.forEach(element => {

    let search = basket.find((x) => x.id === element.id) || [];

    shopElement.innerHTML += `
    <div id="product-id-${element.id}" class="item">
      <a onclick = "setSingleProduct(${element.id})" href = "single-product.html"> <img width="220" height="260" src="${element.img}" alt=""> </a>

      <div class="details">
        <h3>${element.name}</h3>
        <p>${element.desc}</p>
        <div class="price-quantity">
          <h2>${element.price} lv.</h2>

          <div class="buttons">
            <i onclick="decrement(${element.id})" class="bi bi-dash-circle"></i>
            <div id="${element.id}" class="quantity">${search.item === undefined? 0 : search.item}</div>
            <i onclick="increment(${element.id})" class="bi bi-plus-circle"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  });
}

generateShop();

let increment = (element) => {
  
  let search = basket.find((x)=> x.id === element.id);

  if(search === undefined)
  {
    basket.push(
      {
        id: element.id,
        item: 1
      }
    );

    search = basket.find((x)=> x.id === element.id);
  }
  else{
    search.item +=1;
  } 

  update(element.id, search.item);
};

let decrement = (element) => {
  
  let search = basket.find((x)=> x.id === element.id);

  if(search != undefined && search.item > 0)
  {
    search.item -=1;

    basket = basket.filter((x)=>x.item !== 0);

    update(element.id, search.item);
  }
};

let update = (id,quantity) => {
  let selectedItem = document.getElementById(id);

  selectedItem.innerHTML = quantity;

  calculation();

  localStorage.setItem("cart-data", JSON.stringify(basket));
};

//sets the given product in thelocal storage
function setSingleProduct(element){
  let search = shopItemsData.find((x)=> x.id === element.id);

  console.log(search.img2);

  singleProduct = {
    id: search.id,
    name: search.name,
    price: search.price,
    desc: search.desc, 
    img: search.img, 
    img2: search.img2,
    img3: search.img3,
    img4: search.img4
  };

  console.log(singleProduct.img2);

  localStorage.setItem("s-product", JSON.stringify(singleProduct));
}