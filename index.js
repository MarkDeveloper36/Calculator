// display variables
let operandA = '';
let operandB = '';
let operator;
let solution;
let select2thOperand = false;

//DOM selectors operators
const btnAC = document.querySelector('#btnAC');
const btnToggleAbb = document.querySelector('#btnToggleAbb');
const btnBackspace = document.querySelector('#btnBackspace');
const btnDivision = document.querySelector('#btnDivision');
const btnMultiply = document.querySelector('#btnMultiply');
const btnSubstract = document.querySelector('#btnSubstract');
const btnAdd = document.querySelector('#btnAdd');
const btnEquals = document.querySelector('#btnEquals');
const display = document.querySelector('#displayNum');

// hover effect
const btnOperator = document.querySelectorAll('.btnOperator');
btnOperator.forEach(btnOperator => {
    btnOperator.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = '#ffb752';
    })
});
btnOperator.forEach(btnOperator => {
    btnOperator.addEventListener('mouseout', e => {
        e.target.style.backgroundColor = '#FF9500';
    })
});

const btnDarkGray = document.querySelectorAll('.btnDarkGray');
btnDarkGray.forEach(btnDarkGray => {
    btnDarkGray.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = '#a2a2a2';
    })
});
btnDarkGray.forEach(btnDarkGray => {
    btnDarkGray.addEventListener('mouseout', e => {
        e.target.style.backgroundColor = '#505050';
    })
});

const btnGray = document.querySelectorAll('.btnGray');
btnGray.forEach(btnGray => {
    btnGray.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = '#ffffff';
    })
});
btnGray.forEach(btnGray => {
    btnGray.addEventListener('mouseout', e => {
        e.target.style.backgroundColor = '#D4D4D2';
    })
});

// event listeners operators
btnAC.addEventListener('click', e => {
    operandA = '';
    operandB = '';
    operator = undefined;
    select2thOperand = false;
    display.textContent = 0;
    reverseColorOperantAllBtn()
});
btnToggleAbb.addEventListener('click', e => {
    if (!select2thOperand && operandA) {
        operandA = -operandA
        display.textContent = operandA
    }
    if (select2thOperand && operandB) {
        operandB = -operandB;
        display.textContent = operandB;
    }
});
btnBackspace.addEventListener('click', e => {
    if (!select2thOperand && operandA.length > 0) {
        operandA = operandA.slice(0, -1);
        display.textContent = operandA;
    } else if (select2thOperand && operandB.length > 0) {
        operandB = operandB.slice(0, -1);
        display.textContent = operandB;
    }
});
btnDivision.addEventListener('click', e => inputOperator(e));
btnMultiply.addEventListener('click', e => inputOperator(e));
btnSubstract.addEventListener('click', e => inputOperator(e));
btnAdd.addEventListener('click', e => inputOperator(e));
btnEquals.addEventListener('click', () => {
    if (operandA && operandB && operator) operate(operandA, operandB, operator);
});

// event listerners numbers
const allNumBtn = document.querySelectorAll('.btnNum');
allNumBtn.forEach(numBtn => {
    numBtn.addEventListener('click', e => inputOperant(e));
});

const btnDot = document.querySelector('#btnDot');
btnDot.addEventListener('click', e => {
    if (!select2thOperand && !operandA.includes('.')) inputOperant(e);
    if (select2thOperand && !operandB.includes('.')) inputOperant(e);
});

// operate
function operate(localOperandA, localOperandB, operator) {
    if (operator === '+') solution = add(localOperandA, localOperandB);
    if (operator === '-') solution = subtract(localOperandA, localOperandB);
    if (operator === '/') solution = divide(localOperandA, localOperandB);
    if (operator === '*') solution = multiply(localOperandA, localOperandB);
    displaySolution();
    operandA = solution;
    operandB = '';
};

// math functions
function add(localOperandA, localOperandB) {
    return parseFloat(localOperandA) + parseFloat(localOperandB);
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

// helper functions
function inputOperant(e) {
    if (!select2thOperand && operandA.length < 6) {
        operandA += e.target.value;
        display.textContent = operandA;
    } else if (select2thOperand == true && operandB.length < 6) {
        operandB += e.target.value;
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
};

function inputOperator(e) {
    changeColorOperantbtn(e);
    if (!operator) {
        operator = e.target.value;
        select2thOperand = true;
    } else {
        operate(operandA, operandB, operator);
        operator = e.target.value;
    }
}

function displaySolution() {
    if (solution == Infinity) {
        display.textContent = 'Error';
    } else {
        display.textContent = Math.round(solution * 10000) / 10000;
    }
}

// change color
function changeColorOperantbtn(e) {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#FF9500';
}

function reverseColorOperantAllBtn() {
    btnDivision.style.backgroundColor = '#FF9500';
    btnDivision.style.color = 'white';
    btnMultiply.style.backgroundColor = '#FF9500';
    btnMultiply.style.color = 'white';
    btnSubstract.style.backgroundColor = '#FF9500';
    btnSubstract.style.color = 'white';
    btnAdd.style.backgroundColor = '#FF9500';
    btnAdd.style.color = 'white';
}

// keyboardsupport
document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (operandA && operandB && operator) {
            operate(operandA, operandB, operator);
        }
    } else if (e.code.startsWith('Digit')){
        inputOperant(e.key);
    } else if (e.key === '=') {
        if (!operator) {
            operator = '+';
            select2thOperand = true;
        } else {
            operate(operandA, operandB, operator);
            operator = '+';
        }
    } else if (e.key === '-' || e.code === 'Slash') {
        if (!operator) {
            operator = e.key;
            select2thOperand = true;
        } else {
            operate(operandA, operandB, operator);
            operator = e.key;
        }
    } else if (e.key === 'Escape') {
        operandA = '';
        operandB = '';
        operator = undefined;
        select2thOperand = false;
        display.textContent = 0;
    } else if (e.key === 'x') {
        if (!operator) {
            operator = '*';
            select2thOperand = true;
        } else {
            operate(operandA, operandB, operator);
            operator = '*';
        }
    }
});