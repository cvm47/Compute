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

let displayTextContainer = ''
let justEvaluated = false
let isOperatorClicked = false

function populateDisplay() {
    let display = document.querySelector('.display')
    let buttonsNum = document.querySelectorAll('.btn.num')
        
    buttonsNum.forEach((button) => {
        button.addEventListener('click', () => {
            if (isOperatorClicked === true) {
                display.textContent = ''
                isOperatorClicked = false
            }

            if (justEvaluated === false) {
                display.textContent += button.textContent
                displayTextContainer = display.textContent
            }
            else if (justEvaluated == true) {
                display.textContent = button.textContent
                displayTextContainer = display.textContent
                justEvaluated = false
            }

            if(operator !== undefined){
                // divide by 0
                if (operator === '/' && +displayTextContainer === 0) {
                    display.textContent = 'error: divide by 0'
                    num1 = num2 = operator = undefined
                    displayTextContainer = ''
                    justEvaluated = true
                    return
                }
                else {
                    num2 = +displayTextContainer
                    console.log(`num2 = ${num2}`)
                }
            }
            else{
                num1 = +displayTextContainer
                console.log(`num1 = ${num1}`)
            }
        })
    })

    let buttonsOp = document.querySelectorAll('.btn.op')
    buttonsOp.forEach((buttonOp) => {
        buttonOp.addEventListener('click', () => {
            isOperatorClicked = true
            // calculate directly if num1 and num2 are present
            if (num2 !== undefined) {
                let result = operate(operator, num1, num2)
                display.textContent = result
                num1 = result
                num2 = undefined
                justEvaluated = true
            }
            operator = buttonOp.textContent
            console.log(`operator = ${operator}`)
        })
    })

    let buttonEqualsTo = document.querySelector('.btn.equal')
    buttonEqualsTo.addEventListener('click', () => {
        isOperatorClicked = false
        justEvaluated = true 

        // prevents calculator from dividing by zero
        if (operator === '/' && num2 === 0) {
            display.textContent = 'error: divide by 0'
            num1 = num2 = operator = undefined
            displayTextContainer = ''
            justEvaluated = true
            return
        }

        display.textContent = ''
        let result = operate(operator,num1,num2)
        display.textContent = result
        num1 = result
        num2 = undefined
    })

    let allClear = document.querySelector('.btn.allClear')
    allClear.addEventListener('click', () => {
        display.textContent = ''
        num1 = undefined
        num2 = undefined
        operator = undefined
        displayTextContainer = ''
        justEvaluated = false
        isOperatorClicked = false
    })
}
populateDisplay()