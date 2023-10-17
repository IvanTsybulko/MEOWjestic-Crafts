/* Generate shop */
let shopElement = document.getElementById("shop");

function generateShop(){

  shopItemsData.forEach(element => {
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
            <div id="${element.id}" class="quantity">0</div>
            <i onclick="increment(${element.id})" class="bi bi-plus-circle"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  });
}

generateShop();