
//A global variable would be written as follows:
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1 () ;
Add_numbers_2 () ;

document.write("<br>");

//LOCAL VARIABLE
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
    }
Add_numbers_1 ();
Add_numbers_2 ();

document.write("<br>");

//console.log() method, if you open the console, you’ll see the error “X is not defined.”
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1() ;
Add_numbers_2() ;