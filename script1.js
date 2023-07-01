// get submit button

const submit_btn= document.getElementById('actual-btn');
console.log(submit_btn);

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('submit button clicked');
  
  // get text data from text field / text area
  const textArea = document.getElementById("content");
  console.log(textArea.value);
  const qrtext=(code.decryptMessage(textArea.value,'your_password'));
  console.log(qrtext);
  document.getElementById("qr-scanresult").innerHTML = qrtext;
  //alert('qr code generated successfully');
  
  
  //console.log(textArea.value);
});


let code = (function(){
  return{
    encryptMessage: function(messageToencrypt = '', secretkey = ''){
      var encryptedMessage = CryptoJS.AES.encrypt(messageToencrypt, secretkey);
      return encryptedMessage.toString();
    },
    decryptMessage: function(encryptedMessage = '', secretkey = ''){
      var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretkey);
      var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

      return decryptedMessage;
    }
  }
})();


//console.log(code.decryptMessage('U2FsdGVkX1/S5oc9WgsNyZb8TJHsuL7+p4yArjEpOCYgDTUdkVxkmr+E+NdJmro9','your_password'))
