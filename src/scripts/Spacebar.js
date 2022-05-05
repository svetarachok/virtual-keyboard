import { Button } from "./Button";

export class Spacebar extends Button {
    constructor (key, code) {
        super(key, code)
    }

    generateSpacebar() {
        let button = document.createElement('button');
        button.className = 'key spacebar';
        button.innerHTML = `<span class="material-icons">space_bar</span>`;
        button.setAttribute('data', `${this.code}`)   

        return button
    }

}