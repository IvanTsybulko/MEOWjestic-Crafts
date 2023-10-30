let labelElement = document.getElementById('label')
let shoppingCartElement = document.getElementById('shopping-cart');

let generateCartItems = () => {
  if(basket.length !== 0){
    return (shoppingCartElement.innerHTML = basket.map((x)=>{ 

      let{id,item} = x;
      let search = shopItemsData.find((y)=>y.id === id) || [];
      return `
      <div class="cart-item">
      <img width="100" src=${search.img} alt=""/>
      <div class="details details-cart">
        <div class="name-price-x">

          <h4 class="name">${search.name}</h4>
          <h4 class="price">${search.price} лв.</h4>
          <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>

        </div>
        <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
            <div id="${id}" class="quantity">${item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
        </div>

        <h3>Total <br> ${item * search.price} лв.</h3>
      </div>
    </div>
      `
    }).join(" "))
  }
  else{
    shoppingCartElement.innerHTML = `<h2 class="empty">Cart Is Empty</h2>
    <a href="index.html"><button class="back-home">Back to Home</button></a>`
  }
}

generateCartItems();

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

  generateCartItems();
};

let decrement = (element) => {
  
  let search = basket.find((x)=> x.id === element.id);

  if(search != undefined && search.item > 0)
  {
    search.item -=1;

    basket = basket.filter((x)=>x.item !== 0);

    update(element.id, search.item);

    generateCartItems();
  }
};

let update = (id,quantity) => {
  let selectedItem = document.getElementById(id);

  selectedItem.innerHTML = quantity;

  calculation();

  totalAmount();

  localStorage.setItem("cart-data", JSON.stringify(basket));
};

let removeItem =(element)=>{
  basket = basket.filter((x)=> x.id !== element.id)

  update(element.id, 0);

  generateCartItems();
}
 
let totalAmount =()=>{
  if(basket.length !== 0){
    let sum = 0;

    for(let i = basket.length;i > 0; i--)
    {
      let search = shopItemsData.find((x)=> x.id === basket[i-1].id);

      sum += search.price * basket[i-1].item;
    }

    labelElement.innerHTML = `
    <h1 class="total">Total: ${sum} лв.</h1>
    <button>Go To Checkout</button>
    <button class="clear-cart" onclick="clearCart()">Clear Cart</button>
    `
  }
  else 
  labelElement.innerHTML = `
    `
}

let clearCart = ()=>{
  basket = [];

  generateCartItems();
  totalAmount();
  calculation();

  localStorage.setItem("cart-data", JSON.stringify(basket));
}

totalAmount();