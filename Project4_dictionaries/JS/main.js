function my_Dictionary() {
    var Car = {                 //Our var Car, will have a collection of the type of car we will talk about.
        Chevrolet:"Malibu",
        Color:"White",
        Motor:"4-cylinder",
        year:2020,              //number 2020 is the value number, no need for quotations.
        Trim:"Premier",
    };
    delete Car.Motor;    // If we want to delete something from our dictionary. We use the delete operator and our output would be "undefined".
    document.getElementById("Dictionary").innerHTML = Car.Motor; // Our output would be "4-cylinder" however, we included the delete operator our result is "undefined".  
}