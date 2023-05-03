var submitButton = document.querySelector("#submitButton");
var userInput = document.querySelector("#textarea");
var finalInfo = document.getElementById("#textarea");


submitButton.addEventListener("click" , function (event) {
    event.preventDefault();
    var finalInfo = document.getElementById("#textarea");
    localStorage.setItem("finalInfo" , JSON.stringify(finalInfo));

    renderMessage();

}) 

function renderMessage() {

    var afterText = JSON.parse(localStorage.getItem("finalInfo"))
    document.getElementsByClassName(".message").textContent = "Thank you!"
    
}