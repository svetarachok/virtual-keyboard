import Button from './Button';

export default class Spacebar extends Button {
  generateSpacebar() {
    const button = document.createElement('button');
    button.className = 'key spacebar';
    button.innerHTML = '<span class="material-icons">space_bar</span>';
    button.setAttribute('data', `${this.code}`);

    return button;
  }
}
