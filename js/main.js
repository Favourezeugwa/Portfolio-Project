// The mobile menu nav bar for popup starts
const toolbar = document.getElementById('toolbar');
const menuimage = document.getElementById('menuimage');
menuimage.addEventListener('click', () => {
  toolbar.classList.toggle('mobile-open');
});
document.querySelectorAll('#header-nav a').forEach((element) => {
  element.addEventListener('click', () => {
    toolbar.classList.remove('mobile-open');
  });
});
const menuClose = document.getElementById('menu-close');
menuClose.addEventListener('click', () => {
  toolbar.classList.remove('mobile-open');
});
// Ends

// client side validation starts
const contactForm = document.getElementById('form');
const email = document.getElementById('email');
const formButton = document.getElementById('form-button');

contactForm.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    formButton.setCustomValidity('email-address must be in lower case!');
    formButton.reportValidity();
    // report validity returns true if the value satisfies the validation restraints
    event.preventDefault();
  }
});

email.addEventListener('input', () => {
  formButton.setCustomValidity('');
});
// Ends

// Local storage
const userName = document.getElementById('username');
const message = document.getElementById('message');

function localStorageData() {
  contactForm.addEventListener('input', () => {
    const userData = {
      name: userName.value,
      user_email: email.value,
      user_message: message.value,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  });
}
localStorageData();

function getLocalStorage() {
  const getData = JSON.parse(localStorage.getItem('userData'));
  userName.value = getData.name;
  email.value = getData.user_email;
  message.value = getData.user_message;
}
getLocalStorage();