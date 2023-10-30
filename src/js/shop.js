/* Generate shop */ 
let shopElement = document.getElementById("shop");

function generateShop(){

  shopItemsData.forEach(element => {

    let search = basket.find((x) => x.id === element.id) || [];

    shopElement.innerHTML += `
    <div id="${element.id}" class="item">
      <a onclick = "setSingleProduct(${element.id})" href = "single-product.html"> 
      <img width="220" height="" src="${element.img}" alt="">

      <div class="details">
        <h3>${element.name}</h3>
        <p>${element.desc}</p>
        <div class="price-quantity">
          <h2>${element.price} лв.</h2>
        </div>
      </div>
      </a>
    </div>
    `;
  });
}

generateShop();

//sets the given product in thelocal storage
function setSingleProduct(element){
  let search = shopItemsData.find((x)=> x.id === element.id);

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
  localStorage.setItem("s-product", JSON.stringify(singleProduct));
}