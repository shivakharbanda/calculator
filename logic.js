let display = "0";
let result = null
let operand1 = null;
let operand2 = null;
let operatorId = null;
let operator = "inactive";

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
    display = "0";
    result = null
    operand1 = null;
    operand2 = null;
    operatorId = null;
    calculate()
});

function calculate() {
    result = display;
    if (result == undefined) {
        return
    }

    calcResult = document.querySelector("#result");
    calcResult.textContent = `${result}`;
};

function changeDisplay(result) {
    calcResult = document.querySelector("#result");
    calcResult.textContent = `${result}`;
}

function btnWork(e) {
    display = document.querySelector("#result").textContent;
    let splitDisplay = display.split(".");
    if (splitDisplay.length == 2 && splitDisplay[1] != "" && operator == "inactive") {
        console.log("here");
        return;
    }
    if (Number(display) == 0 || operator == "active") {
        display = e.target.textContent;
        operator = "inactive";
    } else {
        display += e.target.textContent;
    };
    calculate()
};


function makeDotWork(e) {
    //console.log(e);
    display = document.querySelector("#result").textContent;
    let splitDisplay = display.split(".");
    let splitDisplaySize = splitDisplay.length;

    if (splitDisplaySize == 1) {
        if (Number(display) == 0 || operator == "active") {
            display = e.target.textContent;
            operator = "inactive";
        } else {
            display += e.target.textContent;
        };
        calculate()
    } else if (splitDisplaySize > 1) {
        return;
    };
};

decimal.addEventListener("click", makeDotWork);

function makeBtnWork(btn) {
    btn.addEventListener("click", btnWork);   
};


function operate(operatorId, operand1, operand2) {

    if (operatorId == 15) {
        result = add(operand1, operand2);
        console.log(result);
        changeDisplay(result);
        operatorId = null
    } else if (operatorId == 11) {
        result = subtract(operand1, operand2);
        console.log(result);
        changeDisplay(result);
        operatorId = null
    } else if (operatorId == 7) {
        result = product(operand1, operand2);
        console.log(result);
        changeDisplay(result);
        operatorId = null
    } else if (operatorId == 3) {
        if (operand1 == 0 && operand2 == 0) {
            result = "MATH ERROR";
            changeDisplay("MATH ERROR");
            result = 0;
            return;
        };
        result = divideAbyB(operand1, operand2);
        console.log(result);
        changeDisplay(result);
        operatorId = null
    };

};

plus.addEventListener("click", (e) => {
    operate(operatorId, operand1, operand2)
    operand1 = display;
    operatorId = e.target.id;
    operator = "active";

});

minus.addEventListener("click", (e) => {
    operand1 = display;
    operatorId = e.target.id;
    operator = "active";

});

multiply.addEventListener("click", (e) => {
    operand1 = display;
    operatorId = e.target.id;
    operator = "active";

});


divide.addEventListener("click", (e) => {
    operand1 = display;
    operatorId = e.target.id;
    operator = "active";

});

equals.addEventListener("click", (e) => calc(e));

function calc(e) {
    operand2 = display;
    if (operatorId) {
        operate(operatorId, operand1, operand2);
    };
};

function add() {
    if (arguments[1] == "none") {
        return;
    }
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 + num2);
}

function subtract() {
    if (arguments[1] == "none") {
        return;
    }
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 - num2);
}

function product() {
    if (arguments[1] == "none") {
        return;
    }
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 * num2);
}


function divideAbyB() {
    if (arguments[1] == "none") {
        return;
    }
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 / num2);
}

function centage() {
    if (arguments[1] == "none") {
        return;
    }
    num1 = Number(arguments[0]);
    num2 = 100;
    return divideAbyB(num1, num2)
}


function centage() {
    
    operand1 = Number(result);
    if (result == undefined) {
        return;
    }
    operand2 = 100;
    result = (Number(operand1)/ Number(operand2));
    calculate()
};

function sqr() {

    operand1 = Number(calcResult.textContent);
    if (result == undefined) {
        return;
    }
    result = (Math.sqrt(operand1)).toFixed(2);
    calculate()
};



sqRoot.addEventListener("click", (e) => {
    operatorId = e.target.id;
    operator = "active";
    eq();

});

percentage.addEventListener("click", (e) => {
    console.log(result);
    result = centage(result);
    calculate();
});