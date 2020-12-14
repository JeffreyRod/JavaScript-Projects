//SUBTRACTION
function subtraction_Function() {
    var subtraction = 5-2;          // Operation we want to exacute.
    document.getElementById("Math").innerHTML = "5 - 2 =" + subtraction;  // The numbers in quotations will appear when we click the box along with the answer.
}
//MULTIPLICATION
function multiplication() {
    var simple_Math = 6 * 8 ;    // here we have the operation we want to exacute.
    document.getElementById("Math2").innerHTML = "6 * 8 = " + simple_Math;  // The numbers in quotations will appear when we click the box along with the answer.
}
//DIVISION
function division() {
    var simple_Math = 48 / 6 ; // here we have the operation we want to exacute.   
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math;  // The numbers in quotations will appear when we click the box along with the answer.
}

//MULTIPLE OPERATIONS
function more_Math() { 
    var simple_Math = (1 + 2) * 10 / 2 -5; // here we have a combination, A order of operations.
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//MODULUS OPERATOR
function modulus_Operator() {  // this will return the remainder.
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//UNARY OPERATOR
function negation_Operator() {  // a nagation operation will return the oposite or negative of something.
    var X = 10;                
    document.getElementById("Math6").innerHTML = -X; // This will return -10
}

//INCREMENT OPERATOR
function increment_Operator() {   
var X = 5;
X++;                       //this operation will count up one step.
document.getElementById("Math7").innerHTML = "X = 5:" + X++ ;  // the result will show number 6
}

//DECREMENT OPERATOR
function decrement_Operator() {    
var X = 5.25;
X--                       //this operation will decrease.
document.getElementById("Math8").innerHTML = "X=5.25:" + X-- ;  // result will be 4.25
}

// Random window alert. A random number will pop up between 0 and 100 when opening web page.
window.alert(Math.random() * 100);