
function openNavigation() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNavigation() {
  document.getElementById("mySidenav").style.width = "0";
}

import { createConnection } from 'mysql';

function submitForm(){
  const name = document.getElementById("name");
  const email = document.getElementById("email")
  const msg = document.getElementById("msg")
  const form = {name, email, msg}

  /* connecting to the data  base*/
  const db = createConnection({
    host  : 'localhost',
    
    database  : 'sys'
  })

  db.connect(err => {
    if (err) throw err 
    console.log('MYSQL database connected successfully!')
  })

  db.query('INSERT INTO portfolioForm SET ?', form, (err, output) => {
    if (err) throw err
    res.send('data saved')
  })

  // This variable stores all the data.
  /*let data = 
  '\r Name: ' + name.value + ' \r\n ' + 
  'Email: ' + email.value + ' \r\n ' + 
  'Message: ' + msg.value;


   // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'formData.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click(); 
*/ 
}