//"TYPE OF" OPERATOR

document.write(typeof "Font");  // The word "Font" is a String.
document.write("<br>");
document.write(typeof 3);  //The Number "3" is a Number.
document.write("<br>");
document.write(2E310);   //Displaying "infinity" we write a high floating point number.
document.write("<br>");
document.write("10" + 5);
document.write("<br>");
document.write( 10 == 10 ) ;
document.write("<br>");
document.write(3 == 11);
document.write("<br>")

  //LOGICAL OPERATORS
document.write(5 > 2 && 10 > 4); // working with Logic AND (&&) operator
document.write("<br>");
document.write(5 > 10 && 10 > 4); // EX2.working with && This retunr as False
document.write("<br>");
document.write(5 > 10 || 10 > 4);  //The || (or) operator. Output “true”, 5 is not greater than 10, 10 is greater than 4
document.write("<br>");
document.write(5 > 10 || 10 > 20);  // EX2.working with ||. Output false.

function my_Function4() {
  document.getElementById("demo").innerHTML = 10 > 9;
}

function my_Boolean() {
   document.getElementById("Booleam").innerHTML = (25 > 122);
}
console.log(2 + 3);

function my_Operation() {          
   var x = 5e23875;
   var y = -9e2898735;
   document.getElementById("Test").innerHTML = x + "<br>" + y;
}

  //TRIPLE EQUAL SIGNS
function my_Function() {
   X = 10;
   Y = 10;
   document.getElementById("function").innerHTML = (X === Y);
}
document.write("<br>")
function my_Function2() {
   A = "Heather";
   B = "Heather";
   document.getElementById("function2").innerHTML = (A === B);
}
function my_Function3() {
   X = 82;
   Y = "82";
   document.getElementById("function3").innerHTML = (X === Y);
}

//NOT OPERATOR
function not_Function() {
   document.getElementById("Not").innerHTML = ! (20 > 10); //! (not) operator checks whether or not something is true. If ___ is false, “true” will be returned.
}
function not_Function1() {
   document.getElementById("Not1").innerHTML = ! (5 > 10);
}