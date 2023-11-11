

function openNavigation() {
  document.getElementById("pmySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNavigation() {
  document.getElementById("pmySidenav").style.width = "0";
}

function submitForm(){
  const name = document.getElementById("name");
  const email = document.getElementById("email")
  const msg = document.getElementById("msg")
  
  let data = "\r Name: " + name + " \r\n " + "Email: " + email + " \r\n " + "Message: " + msg;

  fs.appendFile('./formdata.txt', data.toString());
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbzWPJEl368dCmUZriTMcEk9CqGr2qRrDGj_KXiZjappCUWDb1BRPEOFg12QApllsbr8WQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })