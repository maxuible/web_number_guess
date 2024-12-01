console.log("hello world")

let slider = document.getElementById("slider1");
let guess_display = document.getElementById("guess_display");
let btnGuess = document.getElementById("btnGuess")
let info = document.getElementById("info")
let btnRestart = document.getElementById("btnRestart")
let rectangle = document.getElementById("rectangle")
let rectangle1 = document.getElementById("rectangle1")
let rectangle2 = document.getElementById("rectangle2")
let guesses_left = 10

let random_number = Math.floor(Math.random() * 101);

guess_display.innerHTML = slider.value;

slider.oninput = function () {
    guess_display.innerHTML = this.value;
}

btnGuess.addEventListener("click", function () {
    if (guesses_left == 0) {
        info.innerHTML = "Out of guesses! <br>Please restart!"
        return;
    }

    guesses_left = guesses_left - 1;
    
    if (slider.value < random_number) {
        info.innerHTML = "Too Low! <br>Number of guesses left: " + guesses_left
        rectangle1.style.width = slider.value * .8+"%"
    } else if (slider.value > random_number) {
        info.innerHTML = "Too High! <br>Number of guesses left: " + guesses_left
        rectangle2.style.marginLeft = slider.value * .8 + 10 +"%"
        rectangle2.style.width = 70 - slider.value * .8 + 10 +"%"
    } else if (slider.value == random_number) {
        info.innerHTML = ""
        info.innerHTML = "Correct! <br>Number of guesses: " + guesses_left

    }

})

btnRestart.addEventListener("click", function () {
    random_number = Math.floor(Math.random() * 101);
    guesses_left = 10
    info.innerHTML = "New random number"

    rectangle1.style.width = 0
    rectangle2.style.width = 0
})