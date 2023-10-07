// display variables
let operandA;
let operandB;
let operator;

// operate
function operate(localOperandA, localOperandB, operatorFunction) {
    return operatorFunction(localOperandA, localOperandB);
};

// math functions
function add(localOperandA, localOperandB) {
    return localOperandA + localOperandB;
};

function subtract(localOperandA, localOperandB) {
    return localOperandA - localOperandB;
};

function multiply(localOperandA, localOperandB) {
    return localOperandA * localOperandB;
};

function divide(localOperandA, localOperandB) {
    return localOperandA / localOperandB;
};