// console.log('this is working')

document.getElementById("submitButton").addEventListener("click", function(event){
  event.preventDefault()

  const userDetails = {
    firstName: document.getElementById('floating_first_name').value,
    lastName: document.getElementById('floating_last_name').value,
    branchName: document.getElementById('floating_branch_name').value,
    collegeName: document.getElementById('floating_college_name').value,
    batch: document.getElementById('floating_batch_number').value,
    rollNumber: document.getElementById('floating_roll_number').value,
  }

  // console.log('userDetails', userDetails)
  
  let currentUsers = JSON.parse(localStorage.getItem('users'))
  // console.log('currentUsers', currentUsers)
  
  currentUsers = currentUsers ? [...currentUsers, userDetails] : [userDetails]
  // console.log('current users', currentUsers)

  localStorage.setItem('users', JSON.stringify(currentUsers))
  document.getElementById('userForm').reset();
});

function getUsers(){
  const data = localStorage.getItem('users')
  
  console.log('users', JSON.parse(data))
}

function clearStorage(){
  alert('storage cleared')
  localStorage.clear();
}