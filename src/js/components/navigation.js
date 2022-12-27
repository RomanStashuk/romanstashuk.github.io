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

function buttonClickHandler(evt) {
  if (this.$el.classList.contains('main-nav--closed')) {
    this.$el.classList.remove('main-nav--closed');
    this.$el.classList.add('main-nav--opened');
  } else {
    this.$el.classList.add('main-nav--closed');
    this.$el.classList.remove('main-nav--opened');
  }
}

export default Navigation;
