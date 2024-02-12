/*
    BASIC OPS:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide

    MAIN FUNCTION:
    - Calls the ops.
*/

// Operations
function addition(num1, num2) {
    let sum = num1 + num2;
    console.log(`The Result of the Sum is: ${sum}`)
}

function subtraction(num1, num2) {
    let sum = num1 - num2;
    console.log(`The Result of the Sum is: ${sum}`)
}

function multiplication(num1, num2) {
    let sum = num1 * num2;
    console.log(`The Result of the Sum is: ${sum}`)
}

function division(num1, num2) {
    let sum = num1 / num2;
    console.log(`The Result of the Sum is: ${sum}`)
}

// Main Function
function calculate() {
    let num1 = parseFloat(prompt("Introduce a number:"))
    let num2 = parseFloat(prompt("Enter a 2nd Number:"))
    let operand = prompt("Type the operation symbol (+,-,/,*)")

    if (operand === "+") {
        addition(num1, num2)
    }
    else if (operand === "-") {
        subtraction(num1, num2)
    }
    else if (operand === "*") {
        multiplication(num1, num2)
    }
    else if (operand === "/") {
        division(num1, num2)
    }
    else {
        console.log("You made a mistake while typing, refresh the page and try again.")
    }
    
}

calculate()