let counter = 0

const counterText = document.querySelector("span");

//Get buttons
const btns = document.querySelector(".button-container")

function updateCounter() {
    counterText.textContent = counter
}

btns.addEventListener('click', (e) => {
    if (e.target.id === "increase" ) {
        counter++
        updateCounter()
    } else if (e.target.id === "decrease" ) {
        counter--
        updateCounter()
    } else if (e.target.id === "reset") {
        counter = 0
        updateCounter()
    }
})


/*const decreaseButton = document.getElementById("decrease")
const resetButton = document.getElementById("reset")
const increaseButton = document.getElementById("increase")


increaseButton.addEventListener('click', () => {
    counter++
    updateCounter()
})

resetButton.addEventListener('click', () => {
    counter = 0
    updateCounter()
})

decreaseButton.addEventListener('click', () => {
    counter--
    updateCounter()
})*/
