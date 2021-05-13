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