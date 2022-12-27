import Component from '../core/component';

class Navigation extends Component {
  constructor(selector) {
    super(selector);
  }

  init() {
    const toggleButton = this.$el.querySelector('.main-nav__toggle');
    this.removeClass('main-nav--nojs');
    toggleButton.addEventListener('click', buttonClickHandler.bind(this));
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

export default Navigation;
