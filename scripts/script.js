// get submit button

const submit_btn = document.getElementById('submit-btn');

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();

  // get text data from text field / text area
  // const textArea = document.getElementById('text-data');
  // console.log(textArea.value);

  let formData = {
    rollNumber: document.getElementById('roll_number').value,
    subjects: [{
      code: document.getElementById('subject_1').value,
      grade: document.getElementById('grade_1').value
    }, {
      code: document.getElementById('subject_2').value,
      grade: document.getElementById('grade_2').value
    }, {
      code: document.getElementById('subject_3').value,
      grade: document.getElementById('grade_3').value
    }, {
      code: document.getElementById('subject_4').value,
      grade: document.getElementById('grade_4').value
    }, {
      code: document.getElementById('subject_5').value,
      grade: document.getElementById('grade_5').value
    }, {
      code: 'spi',
      grade: document.getElementById('spi').value
    }, {
      code: 'cpi',
      grade: document.getElementById('cpi').value
    }]
  }

  console.log('formData', formData)

  formData = JSON.stringify(formData)

  const qrtext = (code.encryptMessage(formData, 'your_password'));
  // console.log(qrtext);
  document.getElementById("qr-result").innerHTML = "QR code for " + formData + ":";
  alert('qr code generated successfully');
  qr.set({
    foreground: 'black',
    size: 200,
    value: qrtext
  });


  //console.log(textArea.value);
});


let code = (function () {
  return {
    encryptMessage: function (messageToencrypt = '', secretkey = '') {
      var encryptedMessage = CryptoJS.AES.encrypt(messageToencrypt, secretkey);
      return encryptedMessage.toString();
    },
    decryptMessage: function (encryptedMessage = '', secretkey = '') {
      var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretkey);
      var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

      return decryptedMessage;
    }
  }
})();
var qr;
(function () {
  qr = new QRious({
    element: document.getElementById('qr-code'),
    size: 200,
    value: 'https://studytonight.com'
  });
})();


//console.log(code.decryptMessage('U2FsdGVkX1/S5oc9WgsNyZb8TJHsuL7+p4yArjEpOCYgDTUdkVxkmr+E+NdJmro9','your_password'))
