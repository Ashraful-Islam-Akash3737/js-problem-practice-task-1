// add operation
function add(num1, num2) {
    
    return num1 + num2;
}
// subtract operation
function subtract(num1, num2) {
    return num1 - num2;
}
// multiply operation
function multiply(num1, num2) {
    return num1 * num2;
}
// division operation
function division(num1, num2) {
    return num1 / num2;
}
// reminder operation
function reminder(num1, num2) {
    return num1 % num2;
}

// main operation
function calculator(a, b, operation) {
    if (operation === "add") {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return "please provide a number."
        }
        const addResult = add(a, b);
        return addResult;
    }
    else if (operation === "subtract") {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return "please provide a number."
        }
        const subtractResult = subtract(a, b);
        return subtractResult;
    }
    else if (operation === "multiply") {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return "please provide a number."
        }
        const multiplyResult = multiply(a, b);
        return multiplyResult;
    }
    else if (operation === "division") {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return "please provide a number."
        }
        const divisionResult = division(a, b);
        return divisionResult;
    }
    else if (operation === "reminder") {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return "please provide a number."
        }
        const reminderResult = reminder(a, b);
        return reminderResult;
    }
    else {
        return "Only add, subtract, multiply, division operation can run..."
    }
}
const num1 = 105;
const num2 = 10;
const operation = "add";
const result = calculator(num1, num2, operation);
console.log(result);