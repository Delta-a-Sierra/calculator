
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply =  (num1, num2) => num1 * num2;
const power = (num1, num2) => num1 ** num2;

const clear = () => { 
    screenTxt.innerHTML = "";
    sText ="";
    num1 = null;
    num2 = null;
    opt = null;
}

const updateScreen = text => {
    if(text == '+' || text == '-' || text == '/' || text == 'x'){
        screenTxt.innerHTML+= ` ${text} `;
    }
    else{
        screenTxt.innerHTML+= text;
    }   
}

const doMath = (operator, number1, number2) => {
    if(operator == '+'){
        return add(number1, number2);
    }
    if(operator == '-'){
        return subtract(num1,num2);
    }
    if(operator == '/'){
        return divide(number1, number2);
    }
    if(operator == 'x'){
        return multiply(number1, number2);
    }
}

const clearBtn = document.querySelector("#clear-btn");
const equalBtn = document.querySelector("#equal-btn");
const screenTxt = document.querySelector(".screen-txt");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let num1 = null;
let num2 = null;
let answer = null;
let opt = null;
let previousOpt = null;
let sText = "";


clearBtn.addEventListener( 'click', () => {
    clear();
});

equalBtn.addEventListener('click', () => {
    num2 = Number(sText);
    answer = doMath(previousOpt, num1, num2);
    clear();
    updateScreen(answer);
    num1 = answer;
});

numbers.forEach(num => {
    num.addEventListener('click', () => {
        updateScreen(num.firstChild.innerHTML)
        sText+= num.firstChild.innerHTML
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        let opt = operator.firstChild.innerHTML;
        if(num1 == null){
            num1 = Number(sText);
            sText = "";
            previousOpt = opt;   
        }
        else if(num1 != null && num2 == null){
            num2 = Number(sText);
            answer = doMath(previousOpt, num1, num2);
            previousOpt = opt;
            clear();
            updateScreen(answer);
            num1 = answer;
        }
        updateScreen(opt)
    });
});
