let inputEl = document.getElementById("inputNumber");
let resultEl = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);

function onClickCheck() {
    let userInput = parseInt(inputEl.value)
    if (userInput === randomNumber){
        resultEl.textContent="Congratutaion. You Got it Right"
        resultEl.style.backgroundColor = "green"
    } else if (userInput > randomNumber) {
        resultEl.textContent = "Too High, Try Again";
        resultEl.style.backgroundColor="pink"
    } else if (userInput < randomNumber) {
        resultEl.textContent = "Too Low, Try Again";
        resultEl.style.backgroundColor = "pink";
    } else {
        resultEl.textContent = "Invalide User Input, Please Try Again"
        resultEl.style.backgroundColor = "red"
    }
}