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


//LOCAL VARIABLE
function Add_numbers_3() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
    }
Add_numbers_3 ();
Add_numbers_4 ();


//console.log() method, if you open the console, you’ll see the error “X is not defined.”
function Add_numbers_5() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6() {
    console.log(X + 100);
}
Add_numbers_5() ;
Add_numbers_6() ;