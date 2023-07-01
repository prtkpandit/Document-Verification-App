// get submit button

const submit_btn = document.getElementById('submit-btn');
console.log(submit_btn);

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('submit button clicked');
  
  // get text data from text field / text area
  const textArea = document.getElementById('text-data');
  console.log(textArea.value);
  const qrtext=(code.encryptMessage(textArea.value,'your_password'));
  console.log(qrtext);
  document.getElementById("qr-result").innerHTML = "QR code for " + textArea.value +":";
  alert('qr code generated successfully');
  qr.set({
      foreground: 'black',
      size: 200,
      value: qrtext
  });
  
  
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
var qr;
(function() {
              qr = new QRious({
              element: document.getElementById('qr-code'),
              size: 200,
              value: 'https://studytonight.com'
          });
      })();


//console.log(code.decryptMessage('U2FsdGVkX1/S5oc9WgsNyZb8TJHsuL7+p4yArjEpOCYgDTUdkVxkmr+E+NdJmro9','your_password'))
