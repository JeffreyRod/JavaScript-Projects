function myFunction() {    //Defining my function. Over in HTMl this will be our element.
    var sentence = "I am learning"; // Our var sentence //Defining my variable, giving it a string value. The written text is what we want to display.
    sentence += " a lot from this book!";  // The += will work to concatenate a string With our var sentence.
    document.getElementById("Concatenate").innerHTML = sentence;  //gathering the value into our HTML element.We will use the concatenate string to join our var sentence and += operator together.
}