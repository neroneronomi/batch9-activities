//This introductory example would need some fixes for real world use. As is, it wouldn't work on IE8- or IE for Macs.

var bodyElem = document.getElementsByTagName('body')[0];

function showKeyInfo(event){
  var infoElem = document.getElementById('key-info');
  
  infoElem.innerHTML = '';
  infoElem.insertAdjacentHTML('beforeend', '<p>You pressed the key with ASCII code ' + event.which + '.</p>');
  infoElem.insertAdjacentHTML('beforeend', '<p>You pressed the ' + String.fromCharCode(event.which) + ' key.</p>');
  
  if (event.which > 64 && event.which < 91){
    infoElem.insertAdjacentHTML('beforeend', '<p>You typed a capital letter.');
  }
  
  if (event.which > 47 && event.which < 58){
    infoElem.insertAdjacentHTML('beforeend', '<p>You typed a number.');
  }
  
  if (event.which < 65 || event.which > 90){
    infoElem.insertAdjacentHTML('beforeend', '<p>You did not type a capital letter.');
  }
  
  if (event.which !== 63){
    infoElem.insertAdjacentHTML('beforeend', '<p>You did not type a question mark.');
  }
  
  if ((event.which > 64 && event.which < 91) || (event.which > 96 && event.which < 123)){
    infoElem.insertAdjacentHTML('beforeend', '<p>You typed a letter.');
  }
}

bodyElem.addEventListener('keypress', showKeyInfo);