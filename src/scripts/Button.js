export class Button {
    constructor (key) {
        this.key = key;
        this.value = '';
    }

    generateButton () {
        let button = document.createElement('button');
        button.className = 'key';
        button.innerHTML = `${this.key}`;
        button.setAttribute('data', `${this.key}`)
        
        if (this.key === 'Backspace' || this.key === "CapsLock" || this.key === "Shift" || this.key === "Enter") {
            button.classList.add('key-wide')
            button.classList.add('key-control')
        }

        if (this.key === 'Alt' || this.key === "Tab" || this.key === "Control") {
            button.classList.add('key-control')
        }

        if (this.key === "Delete") {
            button.classList.add('semi-wide')
            button.classList.add('key-control')
        }

        if (this.key === "Meta") {
            button.classList.add('key-control')
            button.innerHTML = `<span class="material-icons">grid_view</span>`
        }

        if (this.key === ' ') {
            button.classList.add('spacebar')
            button.innerHTML = `<span class="material-icons">space_bar</span>`
        }

        if (this.key === 'ArrowLeft') {
            button.classList.add('key-control')
            button.innerHTML = `<span class="material-icons">arrow_left</span>`
        }

        if (this.key === 'ArrowRight') {
            button.classList.add('key-control')
            button.innerHTML = `<span class="material-icons">arrow_right</span>`
        }

        if (this.key === 'ArrowUp') {
            button.classList.add('key-control')
            button.innerHTML = `<span class="material-icons">arrow_drop_up</span>`
        }

        if (this.key === 'ArrowDown') {
            button.classList.add('key-control')
            button.innerHTML = `<span class="material-icons">arrow_drop_down</span>`
        }
        return button
    }

    highlightButton() {
        this.element.classList.add('active');
        if (this.element.classList.contains('active'))
        this.element.classList.remove('active');
    }






}

