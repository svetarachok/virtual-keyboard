import { Button } from "./Button";

export class CapsLock extends Button {
    constructor (key, code) {
        super(key, code)
    }

    generateCapsLock() {
        let button = document.createElement('button');
        button.className = 'key capslock key-wide';
        button.innerHTML = `${this.key}`;
        button.setAttribute('data', `${this.code}`)   
       return button
    }

    // capslock(event, arr) {
    //     if (event.getModifierState(`${this.key}`)) {

    //     }
    // }

}

