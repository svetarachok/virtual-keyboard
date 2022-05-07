export default class Button {
  constructor(key, code, ruKey) {
    this.key = key;
    this.code = code;
    this.ruKey = ruKey;
  }

  generateButton() {
    const button = document.createElement('button');
    button.className = 'key key-k';
    button.setAttribute('data', `${this.code}`);

    if (localStorage.getItem('lang') === 'ru') {
      button.innerHTML = `${this.ruKey}`;
    } else {
      button.innerHTML = `${this.key}`;
    }

    if (this.key === 'ArrowLeft') {
      button.classList.add('key-control');
      button.classList.remove('key-k');
      button.innerHTML = '◄';
    }

    if (this.key === 'ArrowRight') {
      button.classList.add('key-control');
      button.classList.remove('key-k');
      button.innerHTML = '►';
    }

    if (this.key === 'ArrowUp') {
      button.classList.add('key-control');
      button.classList.remove('key-k');
      button.innerHTML = '▲';
    }

    if (this.key === 'ArrowDown') {
      button.classList.add('key-control');
      button.classList.remove('key-k');
      button.innerHTML = '▼';
    }

    return button;
  }
}
