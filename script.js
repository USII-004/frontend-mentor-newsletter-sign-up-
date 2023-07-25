const mainContainer = document.getElementById('container-sign-up');
const successContainer = document.getElementById('success-container');
const signUpForm = document.getElementById('sign-up-form');

signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const emailInput = document.getElementById('email-input');

  if (emailInput.value != "") {
    if (emailRegex.test(emailInput.value) == false) {
      
    }
  }

})

