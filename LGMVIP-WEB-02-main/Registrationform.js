document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const university = document.getElementById('university').value;
  const major = document.getElementById('major').value;
  
  // You can perform further validation and processing here
  
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Date of Birth:', dob);
  console.log('University:', university);
  console.log('Major:', major);
  
  // You can also send the data to a server using AJAX or fetch
});
