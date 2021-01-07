//A global variable would be written as follows:
var Y = 10;
function Add_numbers_1() {
    document.write(20 + Y + "<br>");
}
function Add_numbers_2() {
    document.write(Y + 100);
}
Add_numbers_1 () ;
Add_numbers_2 () ;

//LOCAL VARIABLE
function Add_function_3() {
    var X = 11;
    document.write(20 + X + "<br>");
}
function Add_function_4() {
    document.write(X + 100);
    }
Add_function_3 ();
Add_function_4 ();


//console.log() method
function Add_numbers_5() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6() {
    console.log(X + 100);
}
Add_numbers_5() ;
Add_numbers_6() ;


//IF STATEMENTS
function get_Date(){
    if (new Date().getHours() < 18) {                     //Date().getHours() method returns the hour in the specified date according to the local time, and the hours
    document.getElementById("Greeting").innerHTML = "How are you today";
    }
}

// ELSE STATEMENTS
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age > 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//ELSE IF STATEMENTS
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It's the afternoon.";
    }
    else {
        Reply = "It's evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}