function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

let num1, operator, num2;

function operate(operator, num1 ,num2) {
    if (operator === '+'){
        return add (num1, num2)
    }
    else if (operator === '-'){
        return subtract (num1, num2)
    }
    else if (operator === '*') {
        return multiply(num1, num2)
    }
    else if (operator === '/') {
        return divide(num1, num2)
    }
}

function populateDisplay() {
    let display = document.querySelector('.display')
    let buttons = document.querySelectorAll('.btn')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            display.textContent = button.textContent
        })
    })
}
populateDisplay()