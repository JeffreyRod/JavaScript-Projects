function countdown() {
    var seconds = document.getElementById("seconds").nodeValue;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000) ;  //“setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}