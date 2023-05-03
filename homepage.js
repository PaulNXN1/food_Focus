var submitButton = document.querySelector("#submitButton");
var userInput = document.querySelector("#textarea");
var finalInfo = document.getElementById("textarea");


submitButton.addEventListener("click" , function (event) {
    event.preventDefault();
    var message = finalInfo.value;
    localStorage.setItem("finalInfo" , JSON.stringify(message));

    renderMessage();

}) 

function renderMessage() {

    var afterText = JSON.parse(localStorage.getItem("finalInfo"))
    document.getElementById("message").textContent = `${afterText} Thank you!`
    
}