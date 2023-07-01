/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const admin = JSON.parse(sessionStorage.getItem('admin'))
const navItem = document.getElementById('loginLogout')
if(admin){
  navItem.innerHTML = 'LOGOUT'
  navItem.onclick = handleLogout
} else{
  navItem.innerHTML = 'LOGIN'
}

function handleLogout(){
  sessionStorage.clear();
}