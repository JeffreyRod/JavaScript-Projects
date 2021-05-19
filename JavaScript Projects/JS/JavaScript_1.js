//Switch statement different actions based on the conditions.
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").Value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purpule":
            Color_Output = "Purpule" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list. ";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//GETELEMENTSBYCLASSNAME() METHOD
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has chamged!";
}


