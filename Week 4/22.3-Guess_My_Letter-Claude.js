const letterBox = document.querySelector(".letter-box");
const orderMsg = document.querySelector(".order-msg");
const bottomTitle = document.querySelector(".bottom-title");
const letters = document.querySelector(".letters");
const againBtn = document.querySelector(".again");

let correctLetter = randomLetter();
let guessedLetters = {};
let isOver = false;

window.addEventListener("keydown", (e) => {
    if (!isOver) {
        if (/^[a-z]+$/i.test(e.key) && e.key.length == 1) {
            if (correctLetter == e.key.toLowerCase()) {
                gameWon();
            } else {
                wrongLetter(e.key.toLowerCase());
            }
        } else {
            notLetter();
        }
    }
});

againBtn.addEventListener("click", () => {
    reset();
});

function randomLetter() {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function wrongLetter(character) {
    orderMsg.style.color = "#ff0000";
    if (guessedLetters[character] == undefined) {
        guessedLetters[character] = character;
        orderMsg.textContent = "nope, wrong letter!";
        if (letters.textContent.length == 0) {
            letters.textContent += character;
        } else {
            letters.textContent += `, ${character}`;
        }
    } else {
        orderMsg.textContent = `${character} has already been guessed!`;
    }
}

function notLetter() {
    orderMsg.textContent = "Please enter a valid letter!";
    orderMsg.style.color = "#ff0000";
}

function gameWon() {
    letterBox.textContent = correctLetter;
    orderMsg.textContent = "Correct letter!";
    orderMsg.style.color = "#00ff00";
    bottomTitle.textContent = "Do you want to play again?";
    letters.textContent = "";
    againBtn.style.display = "block";
    isOver = true;
}

function reset() {
    correctLetter = randomLetter();
    guessedLetters = {};
    letterBox.textContent = "?";
    orderMsg.textContent = "Guess a letter!";
    orderMsg.style.color = "#000";
    bottomTitle.textContent = "Keys guessed";
    againBtn.style.display = "none";
    isOver = false;
}