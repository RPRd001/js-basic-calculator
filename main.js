/*
    BASIC OPS:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide

    MAIN FUNCTION:
    - Calls the ops.

    To Do:
    1. Connect Front-End & Back-End
*/

// Declaring/Initializing UI elements
const numbers = document.querySelectorAll('.num-button')
const operators = document.querySelectorAll('.operator-button')
const calculatorScreen = document.querySelector('.calculator-screen')
const clearButton = document.querySelector('.ce-button')

let calculationTense = "";


// Operations
function addition(num1, num2) {
    let additionResult = num1 + num2;
    calculatorScreen.innerText = `${additionResult}`
}

function subtraction(num1, num2) {
    let subtractionResult = num1 - num2;
    calculatorScreen.innerText = `${subtractionResult}`
}

function multiplication(num1, num2) {
    let multiplicationResult = num1 * num2;
    calculatorScreen.innerText = `${multiplicationResult}`
}

function division(num1, num2) {
    let divisionResult = num1 / num2;
    calculatorScreen.innerText = `${divisionResult}`
}

// Main Function
function calculate(num1, num2, operand) {
    if (operand === "+") {
        addition(num1, num2)
    }
    else if (operand === "-") {
        subtraction(num1, num2)
    }
    else if (operand === "x") {
        multiplication(num1, num2)
    }
    else if (operand === "/") {
        division(num1, num2)
    }
    else {
        alert("You made a mistake while typing, refresh the page and try again.")
    }
    
}

function calculatorOS() {    
    operators.forEach(operator => {
        operator.addEventListener('click', () => {

            if (operator.innerText == 'ON') {
                calculatorScreen.classList.toggle('screen-off')
            }
            
            if (operator.innerText == '=') {
                // Need to decompose it into an array, then loop through it and take num1, num2 and operator. Then call calculate(num1, num2, operand)

                calcArray = calculationTense.split(" ")

                let num1 = calcArray[0];
                let operand = calcArray[1];
                let num2 = calcArray[2];

                calculate(parseFloat(num1), parseFloat(num2), operand)

                calculationTense = ""

            }
            else if (operator.innerText == 'CE') {
                calculationTense = "";
                calculatorScreen.innerText = `${calculationTense}`
            }
            else if (operator.innerText !== 'CE' && operator.innerText !== 'ON') {
                calculationTense += ` ${operator.innerText} `
                // Delete line below
                console.log(calculationTense)
                calculatorScreen.innerText = `${calculationTense}`
            }
        })
    })

    numbers.forEach(num => {
        num.addEventListener('click', () => {
            calculationTense += `${num.innerText}`
            console.log(calculationTense)
            calculatorScreen.innerText = `${calculationTense}`
        })
    });

    
}

calculatorOS()