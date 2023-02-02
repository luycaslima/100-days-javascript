let counter = 0

const counterText = document.querySelector("span");

//Get buttons
//could use querSelectorAll(".btn") to store all in one variable and compare by classes wich button was clicked
//const btns = document.querySelectorAll(".btn")

const decreaseButton = document.getElementById("decrease")
const resetButton = document.getElementById("reset")
const increaseButton = document.getElementById("increase")

function updateCounter(value) {
    counterText.textContent = value
}

increaseButton.addEventListener('click', () => {
    counter++
    updateCounter(counter)
})

resetButton.addEventListener('click', () => {
    counter = 0
    updateCounter(counter)
})

decreaseButton.addEventListener('click', () => {
    counter--
    updateCounter(counter)
})
