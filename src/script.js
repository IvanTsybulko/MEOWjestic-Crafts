/* Generate shop */
let shopElement = document.getElementById("shop");

function generateShop(){

  shopItemsData.forEach(element => {

    let search = basket.find((x) => x.id === element.id) || [];

    shopElement.innerHTML += `
    <div id="product-id-${element.id}" class="item">
      <img width="220" height="260" src="${element.img}" alt="">

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
  let selectedItem = document.getElementById(element.id);
  
  let search = basket.find((x)=> x.id === selectedItem.id);

  if(search === undefined)
  {
    basket.push(
      {
        id: selectedItem.id,
        item: 1
      }
    );

    search = basket.find((x)=> x.id === selectedItem.id);
  }
  else{
    search.item +=1;
  } 

  update(element.id, search.item);
};

let decrement = (element) => {
  let selectedItem = document.getElementById(element.id);
  
  let search = basket.find((x)=> x.id === selectedItem.id);

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