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