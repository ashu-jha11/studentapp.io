// document.addEventListener('DOMContentLoaded', function () {
//   const loginForm = document.getElementById('login-form');
//   loginForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     // Replace the following lines with your server-side validation and authentication logic.
//     if (username === 'ashu' && password === '1234') {
//       //alert('Login successful!');
// 	  location="home.html";
//       // Perform necessary actions after successful login, such as redirecting to another page.
//     } else {
//       alert('Invalid username or password. Please try again.');
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    // Retrieve user data from localStorage (if any)
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.username === username && userData.password === password) {
      // alert('Login successful!');
      location="home.html";
      // Perform necessary actions after successful login, such as redirecting to another page.
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registration-form');
  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Replace the following lines with your server-side code to store user details securely.
    // For this example, we'll use localStorage to store the user details.
    // Note: localStorage is not secure and should not be used in production for authentication purposes.
    const userData = {
      username: username,
      password: password,
      email: email,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Registration successful! You can now login.');
    // Perform necessary actions after successful registration, such as redirecting to another page.
  });
});
