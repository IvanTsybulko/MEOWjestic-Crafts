/* Navigation bar*/ 
let toggleButton = document.getElementById('toggle-button');
let navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click',() =>{
  navLinks.classList.toggle('show')
})

let basket = JSON.parse(localStorage.getItem("cart-data")) || [];

let singleProduct = JSON.parse(localStorage.getItem("s-product")) || null;

let calculation = () => {
  let cartAmountElement = document.getElementById("cart-amount");

  let sum = 0;
  
  for(let i = basket.length; i > 0; i--)
  {
    sum += basket[i - 1].item;
  }

  cartAmountElement.innerHTML = sum;
}

calculation();