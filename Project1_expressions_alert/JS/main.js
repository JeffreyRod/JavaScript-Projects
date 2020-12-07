window.alert("Hello, World!");

var A = "This is a string ";
document.write (A);

document.write('Hello, World!');

var B = "Welcome to my second string ";
document.write (B);

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded.");

document.write("\"Be who you are and say what you feel,"
+"because those who mind don\'t matter and those who don\'t mind.\""
+"-Dr.Seuss ");

var Family = "The Russo", Dad = "Sergio", Mom = "Bellissa", Daughter = "Emilia", Son = "Gian";
document.write(Dad);

var blues ="I have the blues.";
var blues =blues.fontcolor("blue");
document.write(blues);

document.write(4 + 4);

function My_First_Function() {                        //Defining my function.
    var str = "This text is red!";                   //Defining my variable, giving it a string value. The written text is what we want to display.
    var result = str.fontcolor("red");              // Using the str method. We are assigning the color red to our sentence.
    document.getElementById("Red_Text").innerHTML = result;   //gathering the value into our HTML element, using id="Red_Text" in html.
}