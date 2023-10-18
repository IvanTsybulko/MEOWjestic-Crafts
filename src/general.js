/* Navigation bar*/
let toggleButton = document.getElementById('toggle-button');
let navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click',() =>{
  navLinks.classList.toggle('show')
})

/* Send an order request from order */
function sendOrder(){
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "meow.jestic.crafts@gmail.com",
  Password : "9C408D37CF68535F65599618E6B1583E0910",
  To : 'meow.jestic.crafts@gmail.com',
  From : "meow.jestic.crafts@gmail.com",
  Subject : `New Order From ${document.getElementById("name").value}` ,
  Body : `New Message!
  <br> Name: ${document.getElementById("name").value}
  <br> Email: ${document.getElementById("email").value}
  <br> Phone: ${document.getElementById("phone").value}
  <br> Order: ${document.getElementById("order").value}
  <br> Additional Details: ${document.getElementById("add-details").value}
  <br> Econt Address: ${document.getElementById("address").value}
  `
}).then(
message => alert("Order Requested")
);
}

/*Send Message from contacts form */
function sendMessage(){
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "meow.jestic.crafts@gmail.com",
  Password : "9C408D37CF68535F65599618E6B1583E0910",
  To : 'meow.jestic.crafts@gmail.com',
  From : "meow.jestic.crafts@gmail.com",
  Subject : `New Message From ${document.getElementById("name").value}` ,
  Body : `New Message!
  <br> Name: ${document.getElementById("name").value}
  <br> Email: ${document.getElementById("email").value}
  <br> Phone: ${document.getElementById("phone").value}
  <br> Message: ${document.getElementById("message").value}`
}).then(
message => alert("Message Sent")
);
}

let basket = JSON.parse(localStorage.getItem("cart-data")) || [];

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