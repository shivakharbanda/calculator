keys = document.querySelector("#keys");
addKeys();

function addKeys() {
    num = 19;

    for (let index = 0; index < 19; index++) {
        btn = document.createElement("button");
        btn.setAttribute('id', index);
        if (index == 16) {
            btn.setAttribute('id', "zero-btn")
        };
        btn.setAttribute('class', "btn");

        keys.appendChild(btn);
    };
};

ac = document.getElementById("0");
ac.textContent = "AC"

ac.style.fontSize = "30px";
ac.style.backgroundColor = "rgb(170, 165, 165)";

sqRoot = document.getElementById("1");
sqRoot.textContent = "√";


sqRoot.style.fontSize = "30px";
sqRoot.style.backgroundColor = "rgb(170, 165, 165)";


percentage = document.getElementById("2");

percentage.textContent = "%";

percentage.style.fontSize = "30px";
percentage.style.backgroundColor = "rgb(170, 165, 165)"



divide = document.getElementById("3");

divide.textContent = "÷";

divide.style.fontSize = "30px";
divide.style.backgroundColor = "rgb(255, 153, 0)";



multiply = document.getElementById("7");

multiply.textContent = "X";

multiply.style.fontSize = "30px";
multiply.style.backgroundColor = "rgb(255, 153, 0)";


minus = document.getElementById("11");

minus.textContent = "-";

minus.style.fontSize = "30px";
minus.style.backgroundColor = "rgb(255, 153, 0)";


plus = document.getElementById("15");

plus.textContent = "+";

plus.style.fontSize = "30px";
plus.style.backgroundColor = "rgb(255, 153, 0)";

equals = document.getElementById("18");

equals.textContent = "=";

equals.style.fontSize = "30px";
equals.style.backgroundColor = "rgb(255, 153, 0)";



seven = document.getElementById("4");

seven.textContent = "7";
seven.style.color = "white";
seven.style.fontSize = "30px";
seven.style.backgroundColor = "rgb(43, 43, 43)";



eight = document.getElementById("5");

eight.textContent = "8";
eight.style.color = "white";
eight.style.fontSize = "30px";
eight.style.backgroundColor = "rgb(43, 43, 43)";

nine = document.getElementById("6");

nine.textContent = "9";
nine.style.color = "white";
nine.style.fontSize = "30px";
nine.style.backgroundColor = "rgb(43, 43, 43)";

four = document.getElementById("8");

four.textContent = "4";
four.style.color = "white";
four.style.fontSize = "30px";
four.style.backgroundColor = "rgb(43, 43, 43)";

five = document.getElementById("9");

five.textContent = "5";
five.style.color = "white";
five.style.fontSize = "30px";
five.style.backgroundColor = "rgb(43, 43, 43)";

six = document.getElementById("10");

six.textContent = "6";
six.style.color = "white";
six.style.fontSize = "30px";
six.style.backgroundColor = "rgb(43, 43, 43)";

one = document.getElementById("12");

one.textContent = "1";
one.style.color = "white";
one.style.fontSize = "30px";
one.style.backgroundColor = "rgb(43, 43, 43)";


two = document.getElementById("13");

two.textContent = "2";
two.style.color = "white";
two.style.fontSize = "30px";
two.style.backgroundColor = "rgb(43, 43, 43)";



three = document.getElementById("14");

three.textContent = "3";
three.style.color = "white";
three.style.fontSize = "30px";
three.style.backgroundColor = "rgb(43, 43, 43)";




zero = document.getElementById("zero-btn");

zero.textContent = "0";
zero.style.color = "white";
zero.style.fontSize = "30px";
zero.style.backgroundColor = "rgb(43, 43, 43)";


decimal = document.getElementById("17");

decimal.textContent = ".";
decimal.style.color = "white";
decimal.style.fontSize = "30px";
decimal.style.backgroundColor = "rgb(43, 43, 43)";


