var submitButton = document.querySelector("#submitButton");
var userInput = document.querySelector("#textarea");
var finalInfo = document.getElementById("textarea");


// Event listener that saves inputted data in local storage

submitButton.addEventListener("click" , function (event) {
    event.preventDefault();
    var message = finalInfo.value;
    localStorage.setItem("finalInfo" , JSON.stringify(message));

    renderMessage();

}) 

// The display message from local storage 
function renderMessage() {

    var afterText = JSON.parse(localStorage.getItem("finalInfo"))
    document.getElementById("message").textContent = `${afterText} Thank you!`
    
}




