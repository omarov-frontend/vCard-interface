// находим переменные по классу
const aboutLink = document.querySelector('.js-about-link');
const contactLink = document.querySelector('.js-contact-link');

const aboutPage = document.querySelector('.about-page');
const contactPage = document.querySelector('.contact-page');

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    aboutPage.style.display = 'block';
    contactPage.style.display = 'none';

    contactLink.classList.remove('nav__link_active');
    aboutLink.classList.add('nav__link_active');
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    contactPage.style.display = 'block';
    aboutPage.style.display = 'none';

    aboutLink.classList.remove('nav__link_active');
    contactLink.classList.add('nav__link_active');
});