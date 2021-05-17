//for Loop
var Instruments = ["Guiter", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}




//Array 
function array_Function() {
    var Shapes_Pictures = [];
    Shapes_Pictures[0] = "Circle";
    Shapes_Pictures[1] = "Nonagon";
    Shapes_Pictures[2] = "Rhombus";
    Shapes_Pictures[3] = "Square";
    document.getElementById("Array").innerHTML ="In this picture, The shape we are using is a" +
        Shapes_Pictures[2] + ".";
}

//CONST keyword. Creates a constant whose scope can be either global or local.
function constant_function() {
    const Musical_Instrument = {type:"guiter", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function Call_Loop() {
    var str = "Hello World!";
    var a = str.length;
    document.getElementById("Loop").innerHTML = a;
}

// LET keyword declares variables
var X = 82;
document.write(X);
{
    var X = 33;
    document.write ("<br>" + X);
}
document.write("<br>" + X);

//Storing diffrent types of data in a Object.
function Call_object () {
let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_object").innerHTML = car.description();
}

//for Loop
function test_Loop () {
    var cars = ["BMW", "Volvo", "Dodge", "Ford"];
    var i = 0;
    var text = "";
    for (;cars[i];) {
        text += cars[i] + "<br>";
        i++;
    }
document.getElementById("Demo").innerHTML = text;
}

//while Loop
function myFunction() {
    var text = "";
    var i = 0;
    while (i < 7) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("test").innerHTML = text;
}