import Component from '../core/component';

class Navigation extends Component {
  constructor() {
    super('.main-nav');
  }

  init() {
    const sections = document.querySelectorAll('.section');
    const toggleButton = this.$el.querySelector('.main-nav__toggle');
    const navList = this.$el.querySelector('.main-nav__list');
    const navLinks = navList.querySelectorAll('.main-nav__link');

    const observer = new IntersectionObserver(highlightActiveLink, {
      threshold: 0.7,
    });

    this.removeClass('main-nav--nojs');

    toggleButton.addEventListener('click', buttonClickHandler.bind(this));
    navList.addEventListener('click', navListClickHandler.bind(this));

    sections.forEach((section) => observer.observe(section));

    function highlightActiveLink(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'main-nav__link--active',
              link.getAttribute('href').replace('#', '') === entry.target.id
            );
          });
        }
      });
    }
  }
}

function buttonClickHandler() {
  if (this.hasClass('main-nav--closed')) {
    this.removeClass('main-nav--closed');
    this.addClass('main-nav--opened');
  } else {
    this.addClass('main-nav--closed');
    this.removeClass('main-nav--opened');
  }
}

function navListClickHandler(evt) {
  evt.preventDefault();

  const isMobile = document.documentElement.clientWidth < 768;
  const navLinks = document.querySelectorAll('.main-nav__link');

  if (evt.target.classList.contains('main-nav__link')) {
    const section = document.querySelector(evt.target.getAttribute('href'));
    const sectionTopMargin =
      parseFloat(getComputedStyle(section).marginTop) || 15;
    const headerHeight = isMobile
      ? 50
      : document.querySelector('.page-header').offsetHeight;

    navLinks.forEach((link) => {
      link.classList.remove('main-nav__link--active');
    });
    evt.target.classList.add('main-nav__link--active');

    window.scrollTo({
      top: section.offsetTop - headerHeight - sectionTopMargin,
      behavior: 'smooth',
    });

    if (isMobile) this.$el.querySelector('.main-nav__toggle').click();
  }
}

export default Navigation;
