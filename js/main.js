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
