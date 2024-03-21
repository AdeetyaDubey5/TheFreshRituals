// password show and hide

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

// Add focus and blur event listeners to the inputs
var formGroups = document.querySelectorAll(".form-group");
formGroups.forEach(function (formGroup) {
  var input = formGroup.querySelector(".form-control");

  input.addEventListener("focus", function () {
    formGroup.classList.add("focused");
  });

  input.addEventListener("blur", function () {
    if (!input.value) {
      formGroup.classList.remove("focused");
    }
  });
});


// for form swipe

function showSignUpForm() {
  document.getElementById('signInForm').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'block';
}

function showSignInForm() {
  document.getElementById('signInForm').style.display = 'block';
  document.getElementById('signUpForm').style.display = 'none';
 
}