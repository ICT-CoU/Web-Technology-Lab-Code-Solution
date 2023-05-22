function validateForm() {
  var name = document.forms["registrationForm"]["name"].value;
  var password = document.forms["registrationForm"]["password"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var phone = document.forms["registrationForm"]["phone"].value;

  var nameRegex = /^[a-zA-Z]+$/;
  var passwordRegex = /^[a-zA-Z0-9]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^\d+$/;

  if (name.length < 6 || !nameRegex.test(name)) {
    alert("Name should be at least 6 characters long and contain only alphabets");
    return false;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters long");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Phone number should contain only numeric values");
    return false;
  }

  return true;
}