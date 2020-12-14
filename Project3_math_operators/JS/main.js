function subtraction_Function() {
    var subtraction = 5-2;
    document.getElementById("Math").innerHTML = "5 - 2 =" + subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8 ;
    document.getElementById("Math2").innerHTML = "6 * 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6 ;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math;
}

//MULTIPLE OPERATIONS
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//MODULUS OPERATOR
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//UNARY OPERATOR
function negation_Operator() {
    var X = 10;
    document.getElementById("Math6").innerHTML = -X;
}

//INCREMENT OPERATOR
function increment_Operator() {
var X = 5;
X++;
document.getElementById("Math7").innerHTML = "X = 5:" + X++ ;
}

//DECREMENT OPERATOR
function decrement_Operator() {
var X = 5.25;
X--
document.getElementById("Math8").innerHTML = "X=5.25:" + X-- ;
}

// Random window alert. A random number will pop up between 0 and 100
window.alert(Math.random() * 100);