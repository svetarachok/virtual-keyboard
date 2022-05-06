export class Button {
    constructor (key, code, ...classes) {
        this.key = key;
        this.code = code;
        this.classes = classes;
    }

    generateButton () {
        let button = document.createElement('button');
        button.className = 'key';
        button.innerHTML = `${this.key}`;
        button.setAttribute('data', `${this.code}`)        

        if (this.key === 'ArrowLeft') {
            button.classList.add('key-control')
            button.innerHTML = '◄'
        }

        if (this.key === 'ArrowRight') {
            button.classList.add('key-control')
            button.innerHTML = '►'
        }

        if (this.key === 'ArrowUp') {
            button.classList.add('key-control')
            button.innerHTML = '▲'
        }

        if (this.key === 'ArrowDown') {
            button.classList.add('key-control')
            button.innerHTML = '▼'
        }

        // button.printValue()

        return button
    }

    printValue () {
        return this.key    
    }
}







