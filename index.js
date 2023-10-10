// display variables
let operandA = '';
let operandB = '';
let operator;
let solution;
let select2thOperand = false;

// operate
function operate(localOperandA, localOperandB, operator) {
    operator === '+' ? solution = add(localOperandA, localOperandB): null;
    operator === '-' ? solution = subtract(localOperandA, localOperandB): null;
    operator === '/' ? solution = divide(localOperandA, localOperandB): null;
    operator === '*' ? solution = multiply(localOperandA, localOperandB): null;
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

//DOM selectors operators
const btnAC = document.querySelector('#btnAC');
const btnToggleAbb = document.querySelector('#btnToggleAbb');
const btnBackspace = document.querySelector('#btnBackspace');
const btnDivision = document.querySelector('#btnDivision');
const btnMultiply = document.querySelector('#btnMultiply');
const btnSubstract = document.querySelector('#btnSubstract');
const btnAdd = document.querySelector('#btnAdd');
const btnEquals = document.querySelector('#btnEquals');

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
        operandA = -operandA;
        display.textContent = operandA;
    } else if (select2thOperand && operandB) {
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
btnDivision.addEventListener('click', e => {
    inputOperator(e);
});
btnMultiply.addEventListener('click', e => {
    inputOperator(e);
});
btnSubstract.addEventListener('click', e => {
    inputOperator(e);
});
btnAdd.addEventListener('click', e => {
    inputOperator(e);
});
btnEquals.addEventListener('click', e => {
    if (operandA && operandB && operator) {
        operate(operandA, operandB, operator);
    }
});

// Dom selectors numbers
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btnDot = document.querySelector('#btnDot');

// event listerners numbers
btn0.addEventListener('click', e => {
    inputOperant(e);
});
btn1.addEventListener('click', e => {
    inputOperant(e);
});
btn2.addEventListener('click', e => {
    inputOperant(e);
});
btn3.addEventListener('click', e => {
    inputOperant(e);
});
btn4.addEventListener('click', e => {
    inputOperant(e);
});
btn5.addEventListener('click', e => {
    inputOperant(e);
});
btn6.addEventListener('click', e => {
    inputOperant(e);
});
btn7.addEventListener('click', e => {
    inputOperant(e);
});
btn8.addEventListener('click', e => {
    inputOperant(e);
});
btn9.addEventListener('click', e => {
    inputOperant(e);
});
btnDot.addEventListener('click', e => {
    if (!select2thOperand && !operandA.includes('.')) {
        inputOperant(e);
    } else if (select2thOperand && !operandB.includes('.')) {
        inputOperant(e);
    }
});

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

//DOM display
const display = document.querySelector('#displayNum');

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

const btnNum = document.querySelectorAll('.btnNum');
btnNum.forEach(btnNum => {
    btnNum.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = '#a2a2a2';
    })
});
btnNum.forEach(btnNum => {
    btnNum.addEventListener('mouseout', e => {
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