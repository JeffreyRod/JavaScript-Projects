function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//OBJECT-ORIENTED PROGRAMMING & KEYWORDS
function Vehicle(Make, Model, Year, Color){  //The function “Vehicle()” in our code is an object constructor.
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emilay = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a" +Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + 
    "manufactured in " + Erik.Vehicle_Year;
}

//SECOND EXAMPLE 
function Vehicle(Make, Model, Year, Color){  //The function “Vehicle()” in our code is an object constructor.
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emilay = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction1() {
    document.getElementById("New_and_This").innerHTML =
    "Jack drives a" +Jack.Vehicle_Color +"-colored " + Jack.Vehicle_Model + 
    "manufactured in " + Jack.Vehicle_Year;
}

//IDENTIFIERS AND LITERALS
  //identifiers are the names of variables, functions, keywords, and labels. In the following code “X”
  var X = 10;
  var Y = "Charlie";

  //NESTED FUNCTIONS
  function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
  }
}