let operator = "inactive";
let result = "0";
let operand1 = 0;
let operand2 = "none";
let operatorId = 0;

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
    operator = "inactive";
    result = "0";
    operand1 = 0;
    operand2 = "none";
    operatorId = 0;
    result = 0;
    calculate()
});

function calculate() {

    calcResult = document.querySelector("#result");
    calcResult.textContent = `${result}`;
}



function makeBtnWork(btn) {
    btn.addEventListener("click", (e) => {
        //console.log((operator));
        if (result == 0) {
            result = btn.textContent;
            
        } else if (result == "none"){
            result = 0 + Number(btn.textContent);
        }
         else if (result != 0) {
            result = result + btn.textContent;
        };
        calculate();
    });   
};

plus.addEventListener("click", (e) =>{
    operatorId = e.target.id;
    if (operator == "active" && result == "none") {
        //console.log("@")
        
    } else if (operator == "active" && result != "none") {
        operand2 = result;
        result = add(operand1, operand2);
        calculate();
        operator = "inactive";

    } else if (operator == "inactive") {
        operator = "active";
        operand1 = result;
        result = "none";

    }

    //console.log(operand1);
    //console.log(operand2);
    
});

minus.addEventListener("click", (e) =>{

    operatorId = e.target.id;

    if (operator == "active" && result == "none") {
        console.log("@")
        
    } else if (operator == "active" && result != "none") {
        operand2 = result;
        result = subtract(operand1, operand2);
        calculate();
        operator = "inactive";

    } else if (operator == "inactive") {
        operator = "active";
        operand1 = result;
        result = "none";

    }
    console.log(result);
    console.log(operand1);
    console.log(operand2);
    
});

equals.addEventListener("click", () => {
    operand2 = calcResult.textContent;
    console.log((operatorId));
    // minus button id is 11
    if (parseInt(operatorId) == 11 && operator == "active") {
        result = subtract(operand1, result);
        calculate();
        operator = "inactive";
        operand1 = 0;
        operand2 = "none";
    } else if (parseInt(operatorId) == 15 && operator == "active") {     
        // plus btn id is 15

        result = add(operand1, result);
        calculate();
        operator = "inactive";
        operand1 = 0;
        operand2 = "none";
        console.log(result);

    } else if (parseInt(operatorId) == 7 && operator == "active") {     
        // multiply btn id is 7

        result = product(operand1, result);
        calculate();
        operator = "inactive";
        operand1 = 0;
        operand2 = "none";
        console.log(result);

    } else if (parseInt(operatorId) == 3 && operator == "active") {     
        // divide btn id is 3

        result = divideAbyB(operand1, result);
        calculate();
        operator = "inactive";
        operand1 = 0;
        operand2 = "none";
        console.log(result);

    }


});

multiply.addEventListener("click", (e) =>{
    operatorId = e.target.id;
    if (operator == "active" && result == "none") {
        console.log("@")
        
    } else if (operator == "active" && result != "none") {
        operand2 = result;
        result = product(operand1, operand2);
        calculate();
        operator = "inactive";

    } else if (operator == "inactive") {
        operator = "active";
        operand1 = result;
        result = "none";

    }

    console.log(operand1);
    console.log(operand2);
    
});

divide.addEventListener("click", (e) =>{

    operatorId = e.target.id;

    if (operator == "active" && result == "none") {
        console.log("@")
        
    } else if (operator == "active" && result != "none") {
        operand2 = result;
        result = divideAbyB(operand1, operand2);
        calculate();
        operator = "inactive";

    } else if (operator == "inactive") {
        operator = "active";
        operand1 = result;
        result = "none";

    };
    
});





function add() {
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 + num2);
}

function subtract() {
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 - num2);
}

function product() {
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 * num2);
}


function divideAbyB() {
    num1 = Number(arguments[0]);
    num2 = Number(arguments[1]);
    return (num1 / num2);
}

function centage() {
    num1 = Number(arguments[0]);
    num2 = 100;
    return divideAbyB(num1, num2)
}


function percentage() {
    operand1 = result(result);
    operand2 = 100;
    result = (Number(operand1)/ Number(operand2));
    calculate()
};

function sqRoot() {
    operand1 = result;
    result = (Math.sqrt(operand1)).toFixed(2);
    calculate()
};