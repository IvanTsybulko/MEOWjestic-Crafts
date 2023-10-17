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
  Username : "gravityboy333pjs@gmail.com",
  Password : "B61E6507E64DBE998075A60BE30256695BBC",
  To : 'gravityboy33@gmail.com',
  From : "gravityboy333pjs@gmail.com",
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
  Username : "gravityboy333pjs@gmail.com",
  Password : "B61E6507E64DBE998075A60BE30256695BBC",
  To : 'gravityboy33@gmail.com',
  From : "gravityboy333pjs@gmail.com",
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