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