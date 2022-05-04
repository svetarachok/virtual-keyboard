import '../style.css'
import { Button} from './Button'

const body = document.querySelector('body');
const header = renderElement('header','header', 'Rss Virtual Keyboard');
const main = renderElement('main', 'main');
const keyboardWrapper = renderElement('div', 'keyboard_wrapper')
const keyboard = renderElement('div', 'keyboard')


function renderElement (element, name, content) {
    let node = document.createElement(`${element}`);
    node.className = name;
    node.textContent = content;
    return node
}


body.prepend(header);
header.after(main)
main.append(keyboardWrapper)
keyboardWrapper.append(keyboard)

const arrLowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control' 
];

const renderButtons =  (arr, container) => {
    arr.forEach(button => {
        let element = new Button(button)
        container.append(element.generateButton())
        return container
    })
}

renderButtons(arrLowerCase, keyboard)


// document.onkeydown = function (event) {
//     arrLowerCase.push(event.key)
//     console.log(arrLowerCase)
// }