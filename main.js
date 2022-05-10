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