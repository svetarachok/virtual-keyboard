import { Button } from "./Button";

export class ControlButton extends Button {
    constructor (key, code) {
        super(key, code)
    }

    generateControlButton() {
        let button = document.createElement('button');
        button.className = 'key key-control';
        button.innerHTML = `${this.key}`;
        button.setAttribute('data', `${this.code}`)   

        if (this.code === 'Backspace' || this.code === "CapsLock" || this.code === "ShiftLeft" || this.code === "ShiftRight" || this.code === "Enter") {
            button.classList.add('key-wide')
        }
        
        if (this.code === "Delete") {
            button.classList.add('key-semiwide')
        }

        if (this.code === "ControlLeft" || this.code === "ControlRight") {
            button.innerHTML = 'Ctrl';
        }

        if (this.code === "MetaLeft") {
            button.classList.add('key-control')
            button.innerHTML = `<span class="material-icons">grid_view</span>`
        }

        return button
    }

}