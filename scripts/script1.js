

function displayData(data){
  const qrScanResultDiv = document.getElementById("qr-scanresult");
  qrScanResultDiv.innerHTML=''
  qrScanResultDiv.className="p-5 border rounded bg-gray-300 w-4/5 mx-auto"

  const { grades, status, userDetails } = data

  const detailsDivClass = "my-2 w-96 flex justify-between mx-auto px-5 py-1"
  const gradesDetailsDivClass = 'my-2 w-96 mx-auto px-5 py-1'

  const collegeNameDiv = document.createElement('div')
  const nameDetailsDiv = document.createElement('div')
  const collegeDetailsDiv = document.createElement('div')
  const gradeDetailsDiv = document.createElement('div')

  nameDetailsDiv.className = detailsDivClass
  collegeDetailsDiv.className = detailsDivClass
  gradeDetailsDiv.className = gradesDetailsDivClass

  const collegeNameH = document.createElement('h1')
  const firstNameSpan = document.createElement('span')
  const lastNameSpan = document.createElement('span')
  const rollNumberSpan = document.createElement('span')

  const batchSpan = document.createElement('span')
  const branchSpan = document.createElement('span')
  const collegeSpan = document.createElement('span')

  // college name
  collegeNameH.innerHTML = 'Chhatrapati ShahuJi Maharaj University'
  collegeNameH.className = 'text-2xl text-center'

  // name details
  firstNameSpan.innerHTML = userDetails.firstName
  lastNameSpan.innerHTML = userDetails.lastName
  rollNumberSpan.innerHTML = userDetails.rollNumber

  // college details
  batchSpan.innerHTML = userDetails.batch
  branchSpan.innerHTML = userDetails.branchName
  collegeSpan.innerHTML = userDetails.collegeName

  // creating and appending grades
  grades.subjects.map((obj, ind) => {
    const gradesContainer = document.createElement('div')
    const subjectSpan = document.createElement('span')
    const gradeSpan = document.createElement('span')

    subjectSpan.innerHTML = obj.code
    gradeSpan.innerHTML = obj.grade

    subjectSpan.className="uppercase"

    gradesContainer.className = "flex justify-between my-1 border-b py-1"

    gradesContainer.appendChild(subjectSpan)
    gradesContainer.appendChild(gradeSpan)

    gradeDetailsDiv.appendChild(gradesContainer)

  })

  // appending college name
  collegeNameDiv.appendChild(collegeNameH)

  // appending name details
  nameDetailsDiv.appendChild(rollNumberSpan)
  nameDetailsDiv.appendChild(firstNameSpan)
  nameDetailsDiv.appendChild(lastNameSpan)

  // appending college details
  collegeDetailsDiv.appendChild(batchSpan)
  collegeDetailsDiv.appendChild(branchSpan)
  collegeDetailsDiv.appendChild(collegeSpan)

  qrScanResultDiv.appendChild(collegeNameDiv)
  qrScanResultDiv.appendChild(nameDetailsDiv)
  qrScanResultDiv.appendChild(collegeDetailsDiv)
  qrScanResultDiv.appendChild(gradeDetailsDiv)

}

function displayLoader(){
  const qrScanResultDiv = document.getElementById("qr-scanresult");
  qrScanResultDiv.innerHTML = "<img src='./assets/Line-Preloader.gif' class='w-8 mx-auto' >";
}

const submit_btn= document.getElementById('actual-btn');
// console.log(submit_btn);

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // get text data from text field / text area
  const textArea = document.getElementById("content");
  const qrtext=(code.decryptMessage(textArea.value,'your_password'));

  displayLoader();
  setTimeout(() => {
    displayData(qrtext)
  }, 1500)
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
      decryptedMessage = JSON.parse(decryptedMessage);
      const users = JSON.parse(localStorage.getItem('users'))
      const currentUser = users.filter(user => user.rollNumber === decryptedMessage.rollNumber)

      const details = {
        status: currentUser.length > 0 ? 200 : 400,
        grades: decryptedMessage,
        userDetails: currentUser.length > 0 ? currentUser[0] : { message: 'No Record found' }
      }
      return details
    }
  }
})();


//console.log(code.decryptMessage('U2FsdGVkX1/S5oc9WgsNyZb8TJHsuL7+p4yArjEpOCYgDTUdkVxkmr+E+NdJmro9','your_password'))
