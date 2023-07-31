const mainContainer = document.getElementById('container-sign-up');
const successContainer = document.getElementById('success-container');
const submit = document.getElementById('submit');
const dismissMessage = document.getElementById('dismiss');

submit.addEventListener('click', validateInput) 

function validateInput(event) {
  event.preventDefault();
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const emailInput = document.getElementById('email-input');
  const errorText = document.getElementById('error-text');

  if (emailInput.value != "") {
    if (emailRegex.test(emailInput.value) == false) {
      errorText.classList.remove('error_text-default');
      errorText.classList.add('error_text-error');

      emailInput.classList.remove('email_input-default');
      emailInput.classList.add('email_input-error');
    }else {
      successContainer.style.display = 'block';
      mainContainer.style.display = 'none';
    }
  }
}

// this function should refresh the page instead.

dismissMessage.addEventListener('click', () => {
  location.reload();
})

