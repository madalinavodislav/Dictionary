const searchButton = document.getElementById("btnSearch");
const addWords = document.getElementById("btnAddWords");
const word = document.getElementById("word");
const messageElement = document.getElementById("message");
const wordsList = [];

searchButton.addEventListener('click', wordCheck);
addWords.addEventListener('click', addWord);

function wordCheck() {
    document.getElementById("btnAddWords").style.display = "none";
    if (word.value != "") {
        if (wordsList.includes(word.value) == true) {
            displayMessage("This word is in the dictionary.");
        } else  {
            displayMessage("This word is not in the dictionary! Do you want to add it?");
            document.getElementById("btnAddWords").style.display = "block";
        }
    } else {
        displayMessage("Please enter a word!");
    }
}

function addWord() {
    wordsList.push(word.value);
}

function displayMessage(message) {
    messageElement.style.visibility = "visible";
    messageElement.innerText = message;
}
