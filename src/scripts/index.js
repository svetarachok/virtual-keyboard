import { BUTTONS_DATA } from './keys';
import { Button} from './Button'
import '../style.css'
import { Spacebar } from './Spacebar';
import { ControlButton } from './ControlButton';
import { CapsLock } from './Capslock';


const body = document.querySelector('body');
const header = renderElement('header','header', 'Rss Virtual Keyboard');
const main = renderElement('main', 'main');
const inputWrapper = renderElement('div', 'input_wrapper');
const inputArea = renderElement('textarea', 'textarea');
const keyboardWrapper = renderElement('div', 'keyboard_wrapper');
const keyboard = renderElement('div', 'keyboard');

const KEYS = document.querySelectorAll('.key')

//Dom 
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

//Buttons

const controls = ["Backspace", "Tab", "Delete", "Enter", "ShiftLeft", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight"];

const renderButtons = (arr, container) => {
    arr.forEach(button => {
        let element;
        if (button.code === "Space") {
            element = new Spacebar(button.key, button.code)
            container.append(element.generateSpacebar())
        } else if (controls.includes(button.code)) {
            element = new ControlButton(button.key, button.code)
            container.append(element.generateControlButton())
        } else if (button.code === "CapsLock") {
            element = new CapsLock(button.key, button.code)
            container.append(element.generateCapsLock())
        } else {
            element = new Button(button.key, button.code)
            container.append(element.generateButton()) 
        }
        return container
    })
}

renderButtons(BUTTONS_DATA, keyboard)

function printButtons (button, input) { 
    
    if ( button.getAttribute('data') === "Space") {
        input.value += " "
    } else if (button.getAttribute('data') === "Backspace") {
        input.value = input.value.slice(0, -1)
    } else if (button.getAttribute('data') === "Enter") {
        input.value += "\n"
    } else if (button.getAttribute('data') === "Tab") {
        input.value += "\t"
    } else if (controls.includes(button.getAttribute('data'))) {
        return input.value
    } else if (button.getAttribute('data') === "CapsLock") {
        return input.value
    } else {
        input.value += button.innerHTML 
    }
    return input.value

} 

const capsLock = (e, keysArr) => {
    for (let key of keysArr) { 
        const text = key.innerHTML
        if (key.innerHTML.match(/^\w$/) && !controls.includes(key.innerHTML)) {
            if (e.getModifierState("CapsLock")) {
                key.innerHTML = key.innerHTML.toUpperCase()
            } else {
                key.innerHTML = key.innerHTML.toLowerCase()
            }
        }
    }
}

document.addEventListener('keydown', function(e) {
    e.preventDefault()
   const keys = document.querySelectorAll('.key')
   for (let key of keys) {
        if (e.code === key.getAttribute('data')) {
            key.classList.add('active')
            printButtons(key, inputArea)
            capsLock(e, keys)
        } 
    }
})

document.addEventListener('keyup', function(e) {
    const keys = document.querySelectorAll('.key')
     for (let key of keys) {
         if (e.code === key.getAttribute('data')) {
            key.classList.remove('active')
         }
     }
 })

 keyboard.addEventListener('mousedown', function(e) {
    const keys = document.querySelectorAll('.key')
     for (let key of keys) {
         if (e.target.getAttribute('data') === key.getAttribute('data')) {
            key.classList.add('active')
            printButtons(key, inputArea)
            capsLock(e, keys)
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

