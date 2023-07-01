const url = window.location.href
const currentAdmin = sessionStorage.getItem('admin')
if ((url.includes('generateqr') || url.includes('user-data')) && !currentAdmin) {
  window.location.replace('login.html')
} else if (url.includes('login.html') && currentAdmin) {
  window.location.replace('generateqr.html')
}

const admins = [
  { email: 'prateek@admin.in', password: '12345' },
  { email: 'suyash@admin.in', password: '12345' },
  { email: 'mayank@admin.in', password: '12345' },
]

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('userEmail').value;
  const password = document.getElementById('userPassword').value;

  const filter = admins.filter(obj => (obj.email === email && obj.password === password))

  document.getElementById('submitButton').innerHTML = "<img src='./assets/Line-Preloader.gif' class='w-8 mx-auto' >";

  setTimeout(() => {
    if (filter.length > 0) {
      sessionStorage.setItem('admin', JSON.stringify(filter[0]))
      window.location.replace('generateqr.html');
    } else {
      document.getElementById('submitButton').innerHTML = 'Sign In'
      alert('admin not found')
    }
  }, 1200)

})