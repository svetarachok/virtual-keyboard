import { BUTTONS_DATA } from './keys';
import { Button} from './Button'
import '../style.css'
import { Spacebar } from './Spacebar';
import { ControlButton } from './ControlButton';

//data 
const body = document.querySelector('body');
const header = renderElement('header','header', 'Rss Virtual Keyboard');
const main = renderElement('main', 'main');
const inputWrapper = renderElement('div', 'input_wrapper');
const inputArea = renderElement('textarea', 'textarea');
const keyboardWrapper = renderElement('div', 'keyboard_wrapper')
const keyboard = renderElement('div', 'keyboard')

window.addEventListener('DOMContentLoaded', () => {
    inputArea.focus()
})

function renderElement (element, name, content) {
    let node = document.createElement(`${element}`);
    node.className = name;
    node.textContent = content;
    return node
}


body.prepend(header);
header.after(main);
main.append(inputWrapper);
inputWrapper.append(inputArea);
main.append(keyboardWrapper);
keyboardWrapper.append(keyboard);

// const arrLowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control' 
// ];

const controls = ["Backspace", "Tab", "Delete", "CapsLock", "Enter", "ShiftLeft", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight"];

const renderButtons = (arr, container) => {
    arr.forEach(button => {
        let element;
        if (button.code === "Space") {
            element = new Spacebar(button.key, button.code)
            container.append(element.generateSpacebar())
        } else if (controls.includes(button.code)) {
            element = new ControlButton(button.key, button.code)
            container.append(element.generateControlButton())
        } else {
            element = new Button(button.key, button.code)
            container.append(element.generateButton()) 
        }
        return container
    })
}

renderButtons(BUTTONS_DATA, keyboard)

function printButtons (button, input) { 

    if ( button.getAttribute('data') === " ") {
        input.value += " "
        // return input.value
    } else if (button.getAttribute('data') === "Tab") {
        input.value += "    "
        // return input.value
    } else if (button.getAttribute('data') === "Backspace") {
        input.value = input.value.slice(0, -1)
        return input.value
    } else {
        input.value += button.innerHTML 
        return input.value
    }
    return input.value
} 



window.addEventListener('keydown', function(e) {
   const keys = document.querySelectorAll('.key')
   for (let key of keys) {
        if (e.key === key.getAttribute('data')) {
            key.classList.add('active')
            printButtons(key, inputArea)
        } 
    }
})

window.addEventListener('keyup', function(e) {
    const keys = document.querySelectorAll('.key')
     for (let key of keys) {
         if (e.key === key.getAttribute('data')) {
            key.classList.remove('active')
         }
     }
 })

 keyboard.addEventListener('mousedown', function(e) {
    const keys = document.querySelectorAll('.key')
     for (let key of keys) {
         if (e.target.getAttribute('data') === key.getAttribute('data')) {
            key.classList.add('active')
        } 
    }
 })

 keyboard.addEventListener('mouseup', function(e) {
    const keys = document.querySelectorAll('.key')
     for (let key of keys) {
         if (e.target.getAttribute('data') === key.getAttribute('data')) {
            key.classList.remove('active')
        } 
    }
 })



// window.addEventListener('keydown', (e) => {
//     let key = `{key: ${e.key}, code: ${e.code}}`
//     let arr = []
//     arr.push(key)
//     console.log(arr)
//     return arr
// })