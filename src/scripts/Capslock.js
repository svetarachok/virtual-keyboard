import Button from './Button';

export default class CapsLock extends Button {
  constructor(key, code) {
    super(key, code);
  }

  generateCapsLock() {
    const button = document.createElement('button');
    button.className = 'key capslock key-wide';
    button.innerHTML = `${this.key}`;
    button.setAttribute('data', `${this.code}`);
    return button;
  }

  // capslock(event, arr) {
  //     if (event.getModifierState(`${this.key}`)) {

  //     }
  // }
}
