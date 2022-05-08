import Button from './Button';

export default class CapsLock extends Button {
  generateCapsLock() {
    const button = document.createElement('button');
    button.className = 'key capslock key-wide';
    button.innerHTML = `${this.key}`;
    button.setAttribute('data', `${this.code}`);
    return button;
  }
}
