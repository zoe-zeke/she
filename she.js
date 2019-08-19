'use strict';

class She {
  constructor({
    targetElement,
    showElement,
    hideElement,
    trigger = 'click',
    showClassName = 'is-show',
  }) {
    this.targetElement = targetElement;
    this.showElement = showElement;
    this.hideElement = hideElement;

    this.config = { trigger, showClassName };

    this.addEventListeners();
  }

  addEventListeners() {
    if (this.showElement) {
      this.showElement.addEventListener(this.config.trigger, () => this.show());
    }
    if (this.hideElement) {
      this.hideElement.addEventListener(this.config.trigger, () => this.hide());
    }
  }

  show() {
    this.targetElement.classList.add(this.config.showClassName);
  }

  hide() {
    this.targetElement.classList.remove(this.config.showClassName);
  }
}