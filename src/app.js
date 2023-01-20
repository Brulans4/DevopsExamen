/* istanbul ignore file */
try {
    const { isEmpty } = require("./services/validations");
    const { validTag } = require('./services/validations');

    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        if(isEmpty(gamerTagValue) == false && validTag(gamerTagValue) == true){
            feedbackMessage.textContent = "Gamer tag is valid";
        }
        if(isEmpty(gamerTagValue) == false && validTag(gamerTagValue) == false){
            feedbackMessage.textContent = "Gamer tag is invalid";
        }
        else{
            feedbackMessage.textContent = "Gamer tag cannot be empty";
        }
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
