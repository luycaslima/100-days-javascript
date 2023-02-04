'using strict'

const randomNumberDisplay = document.querySelector("span")
const generateButton = document.querySelector(".btn")


function generateNumber() {
    let min = Number(document.getElementById("min").value)
    let max = Number(document.getElementById("max").value)
    if (min > max) {
        return alert("Min number bigger than Max! ")
    }
    Math.ceil(min)
    Math.floor(max)
    
    return Math.floor( Math.random()  * (max - min + 1) + min) //include the max value
}

generateButton.addEventListener('click', () => {
    randomNumberDisplay.textContent = generateNumber()
})