console.log("hello world")

let slider = document.getElementById("slider1");
let guess_display = document.getElementById("guess_display");
let btnGuess = document.getElementById("btnGuess")
let info = document.getElementById("info")
let btnRestart = document.getElementById("btnRestart")
let rectangle = document.getElementById("rectangle")

let random_number = Math.floor(Math.random() * 101);

guess_display.innerHTML = slider.value; 

slider.oninput = function() {
    guess_display.innerHTML = this.value;
}

btnGuess.addEventListener("click", function(){
    if (slider.value < random_number) {
        info.innerHTML = "Too Low!"
    } else if (slider.value > random_number) {
        info.innerHTML = "Too High!"
    } else if (slider.value == random_number) {
        info.innerHTML = "Correct!"
    }

})

btnRestart.addEventListener("click", function(){
    random_number = Math.floor(Math.random() * 101);
    info.innerHTML = "New random number"
})