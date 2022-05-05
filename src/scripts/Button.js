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

        if (this.code === "MetaLeft") {
            button.classList.add('key-control')
            button.innerHTML = `<span class="material-icons">grid_view</span>`
        }

        // if (this.key === ' ') {
        //     button.classList.add('spacebar')
        //     button.innerHTML = `<span class="material-icons">space_bar</span>`
        // }

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
        return button
    }

 

}







