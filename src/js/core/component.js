class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.init();
  }

  init() {}

  show() {
    this.$el.classList.remove('visually-hidden');
    this.onShow();
  }

  hide() {
    this.$el.classList.add('visually-hidden');
    this.onHide();
  }

  addClass(htmlClass) {
    this.$el.classList.add(htmlClass);
  }

  removeClass(htmlClass) {
    this.$el.classList.remove(htmlClass);
  }
}

export default Component;
