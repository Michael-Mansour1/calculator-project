let inputHTML = document.getElementById("input")
let resultHTML = document.getElementById("result")

let buttonHTML = document.querySelectorAll("button")





for (let i = 0; i < buttonHTML.length; i++) {
    buttonHTML[i].addEventListener('click', calculate)

    console.log(buttonHTML[i])
}



function calculate() {
    let buttonText = this.innerText
    if (buttonText == "AC") {
        inputHTML.textContent= "";



    } else if (buttonText == "DEL") {
        inputHTML.textContent=inputHTML.textContent.substring(0,inputHTML.textContent.length-1)

    } else if (buttonText == "=") {
        let res = eval(inputHTML.textContent)
        resultHTML.innerHTML=buttonText

    } else {
         inputHTML.textContent+= buttonText 
    }








    console.log(buttonText)
}