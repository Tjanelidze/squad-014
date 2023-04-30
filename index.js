const navBarMobile = document.querySelector('.mobile-menu-div');
const hamburger = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const check = document.querySelector('#check');
const zero = document.querySelectorAll('.zero');
const navList = document.querySelectorAll('li');
const mobileBtn = document.querySelector('#mobile-menu-btn')

const toggleActiveClass = (elements) => {
  elements.forEach((element) => {
    element.classList.toggle('active');
  });
};

hamburger.addEventListener('click', () => {
  toggleActiveClass([navBarMobile, hamburger, closeBtn]);
});

closeBtn.addEventListener('click', () => {
  toggleActiveClass([navBarMobile, hamburger, closeBtn]);
});

check.addEventListener('click', () => {
  zero.forEach((element) => {
    element.style.display = check.checked ? 'inline-block' : 'none';
  });
});

navList.forEach((link) => link.addEventListener('click', () => {
  toggleActiveClass([navBarMobile, hamburger, closeBtn]);
}));

mobileBtn.addEventListener('click', () => {
  toggleActiveClass([navBarMobile, hamburger, closeBtn]);
});