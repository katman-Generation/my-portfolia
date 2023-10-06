const fs = require ('fs')

function openNavigation() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNavigation() {
  document.getElementById("mySidenav").style.width = "0";
}

function submitForm(){
  const name = document.getElementById("name");
  const email = document.getElementById("email")
  const msg = document.getElementById("msg")
  
  let data = "\r Name: " + name + " \r\n " + "Email: " + email + " \r\n " + "Message: " + msg;

  fs.appendFile('./formdata.txt', data.toString());
};