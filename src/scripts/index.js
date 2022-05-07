import { BUTTONS_DATA } from './keys';
import { BTNS_DATA } from './keys';
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
            element = new Button(button.key, button.code, button.ruKey)
            container.append(element.generateButton()) 
        }
        return container
    })
}

renderButtons(BUTTONS_DATA, keyboard)

const someKey = document.querySelector('.key');
const ALL_KEYS = document.querySelectorAll('.key');
const LETTER_KEYS = document.querySelectorAll('.key-k');
const CAPSLOCK = document.querySelector('.capslock');
const ALT = document.querySelector('[data="AltLeft"]');
let flag = 'en';

function printButtons (button, input) { 
   input.focus() 
    if ( button.getAttribute('data') === "Space") {
        input.value += " "
    } else if (button.getAttribute('data') === "Backspace") {
        input.setRangeText('', input.selectionStart-1, input.selectionEnd)
    } else if (button.getAttribute('data') === "Delete") {
        input.setRangeText('', input.selectionStart, input.selectionEnd+1)
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
    keysArr.forEach(key => {
        if (e.getModifierState("CapsLock")) {
                key.innerHTML = key.innerHTML.toUpperCase()
            } else {
                key.innerHTML = key.innerHTML.toLowerCase()
                CAPSLOCK.classList.remove('active')
            }
    })
}

const changeLanguage = (lang, obj, buttonsArr) => {
    buttonsArr.forEach(button => {
     (lang === 'ru') ? button.innerHTML = obj[button.getAttribute('data')][1] :
            button.innerHTML = obj[button.getAttribute('data')][0]
        })
}

document.addEventListener('keydown', function(e) {
    e.preventDefault()
    const keys = document.querySelectorAll('.key')
   for (let key of keys) {
        if (e.code === key.getAttribute('data')) {
            key.classList.add('active')
            printButtons(key, inputArea)
            capsLock(e, LETTER_KEYS) 
        } 
    }
})

document.addEventListener('keyup', function(e) {
    e.preventDefault()
    const keys = document.querySelectorAll('.key')
     for (let key of keys) {
         if (e.code === key.getAttribute('data')) { 
            if (key.innerHTML !== "CapsLock") {
                key.classList.remove('active')
            }
         }
     }
 })

 keyboard.addEventListener('mousedown', function(e) {
    const keys = document.querySelectorAll('.key')
     for (let key of keys) {
         if (e.target.getAttribute('data') === key.getAttribute('data')) {
            key.classList.add('active')
            printButtons(key, inputArea)
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

 CAPSLOCK.addEventListener('click', (e) => {
    LETTER_KEYS.forEach(key => {
    if (key.innerHTML.toUpperCase() !== key.innerHTML) {
        key.innerHTML = key.innerHTML.toUpperCase()
        CAPSLOCK.classList.add('active')
    }  else {
        key.innerHTML = key.innerHTML.toLowerCase(); 
    } 
    return key.innerHTML
    })
})



const getShift = (obj, buttonsArr) => {
    buttonsArr.forEach(button => {
        if (flag !== 'ru') {
            button.innerHTML = obj[button.getAttribute('data')][2] 
        } else {
            button.innerHTML = obj[button.getAttribute('data')][3] 
        }
    }) 
}

document.addEventListener('keydown', (e) => {
    if (e.shiftKey) {
        getShift(BTNS_DATA, LETTER_KEYS)   
    }
})

document.addEventListener('keyup', (e) => {
    if (!e.getModifierState("CapsLock")) {
        LETTER_KEYS.forEach(button => {
            if (flag != 'ru')  {
                button.innerHTML = BTNS_DATA[button.getAttribute('data')][0]
            } else {
                button.innerHTML = BTNS_DATA[button.getAttribute('data')][1]
            }
        }) 
    } }) 
    
    
document.addEventListener('keydown', (e) => {  
    if (e.ctrlKey && e.code === "AltLeft") {
        flag === 'en' ? flag = 'ru' : flag = 'en';
        localStorage.setItem('lang', `${flag}`)
        changeLanguage(flag, BTNS_DATA, LETTER_KEYS)
    }
})
