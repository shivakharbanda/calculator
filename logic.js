let operator = false;
let result = "0";
let operatorValue = "none";
let operand1 = "none";
calculate();


makeBtnWork(one);
makeBtnWork(two);
makeBtnWork(three);
makeBtnWork(four);
makeBtnWork(five);
makeBtnWork(six);
makeBtnWork(seven);
makeBtnWork(eight);
makeBtnWork(nine);
makeBtnWork(zero);

ac.addEventListener("click", () => {
    result = 0;
    calculate()
});

function calculate() {

    calcResult = document.querySelector("#result");
    calcResult.textContent = `${result}`;
}



function makeBtnWork(btn) {
    btn.addEventListener("click", (e) => {
        if (result == 0 || operator == true) {
            result = btn.textContent;
            operator = false;
            
        } else if (result != 0) {
            result = result + btn.textContent;
        };
        calculate();
    });   
};

plus.addEventListener("click", () => {
    operator = true;
    operatorValue = "add"
    operand1 = result;

});

minus.addEventListener("click", () => {
    operator = true;
    operatorValue = "minus"
    operand1 = result;

});

multiply.addEventListener("click", () => {
    operator = true;
    operatorValue = "product"
    operand1 = result;

});


divide.addEventListener("click", () => {
    operator = true;
    operatorValue = "divide";
    operand1 = result;

});

percentage.addEventListener("click", () => {
    operand1 = result;
    operand2 = 100;
    result = (Number(operand1)/ Number(operand2));
    calculate()
});

sqRoot.addEventListener("click", () => {
    operand1 = result;
    result = (Math.sqrt(operand1)).toFixed(2);
    calculate()
});

equals.addEventListener("click", () => {
    
    let operand2 = result;

    console.log(`operand2 - ${operand2}`);
    console.log(`operand1 - ${operand1}`);
    console.log(`result - ${result}`);
    console.log(`operator - ${operatorValue}`);
    
    if (operatorValue === "add") {
        result = add(Number(operand1), Number(operand2));
        calculate()   
    } else if (operatorValue ==="minus"){
        result = subtract(Number(operand1), Number(operand2));
        calculate()   
    } else if (operatorValue === "product") {
        result = product(Number(operand1), Number(operand2));
        calculate()
    } else if (operatorValue === "divide") {
        if (Number(operand1)=== 0 && Number(operand2) === 0) {
            result = "HENTAI"
            calculate()
            result = 0
            return
        }
        result = divideAbyB(Number(operand1), Number(operand2));
        calculate()
    };

});



function add() {
    num1 = arguments[0];
    num2 = arguments[1];
    return (num1 + num2);
}

function subtract() {
    num1 = arguments[0];
    num2 = arguments[1];
    return (num1 - num2);
}

function product() {
    num1 = arguments[0];
    num2 = arguments[1];
    return (num1 * num2);
}


function divideAbyB() {
    num1 = arguments[0];
    num2 = arguments[1];
    return (num1 / num2);
}