// display variables
let operandA = '';
let operandB = '';
let operator;
let solution;
let toggleOperand = false;

// operate
function operate(localOperandA, localOperandB, operator) {
    operator === '+' ? solution = add(localOperandA, localOperandB): null;
    operator === '-' ? solution = subtract(localOperandA, localOperandB): null;
    operator === '/' ? solution = divide(localOperandA, localOperandB): null;
    operator === '*' ? solution = multiply(localOperandA, localOperandB): null;
    display.textContent = Math.round(solution * 100) / 100;
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
const btnD = document.querySelector('#btnD');
const btnE = document.querySelector('#btnE');
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
    toggleOperand = false;
    display.textContent = 0;
    reverseColorOperantAllBtn()
});
btnD.addEventListener('click', e => {
    console.log('test');
});
btnE.addEventListener('click', e => {
    console.log('test');
});
btnDivision.addEventListener('click', e => {
    changeColorOperantbtn(e);
    operator = '/';
    toggleOperand = true;
});
btnMultiply.addEventListener('click', e => {
    changeColorOperantbtn(e);
    operator = '*';
    toggleOperand = true;
});
btnSubstract.addEventListener('click', e => {
    changeColorOperantbtn(e);
    operator = '-';
    toggleOperand = true;
});
btnAdd.addEventListener('click', e => {
    changeColorOperantbtn(e);
    operator = '+';
    toggleOperand = true;
});
btnEquals.addEventListener('click', e => {
    operate(operandA, operandB, operator);
    operandA = solution;
    operandB = '';
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
    if (!toggleOperand && operandA.length < 6) {
        operandA += '0';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '0';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn1.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '1';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '1';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn2.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '2';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '2';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn3.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '3';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '3';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn4.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '4';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '4';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn5.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '5';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '5';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn6.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '6';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '6';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn7.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '7';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '7';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn8.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '8';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '8';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btn9.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '9';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '9';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});
btnDot.addEventListener('click', e => {
    if (!toggleOperand && operandA.length < 6) {
        operandA += '.';
        display.textContent = operandA;
    } else if (toggleOperand == true && operandB.length < 6) {
        operandB += '.';
        display.textContent = operandB;
        reverseColorOperantAllBtn();
    }
});

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