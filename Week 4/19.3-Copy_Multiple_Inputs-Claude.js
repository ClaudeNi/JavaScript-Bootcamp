const textBoxes = document.querySelectorAll("input");
const verifyButton = document.querySelector("button");
const verifyCode = document.querySelector("button").getAttribute("pass");

textBoxes.forEach((input) => {
    input.addEventListener("input", () => {
        const nextBox = document.getElementById((parseInt(input.getAttribute("id"))) + 1);
        nextBox.focus();

        verifyCodeFunc();
    });
    input.addEventListener('paste', (event) => {
        let paste = (event.clipboardData || window.clipboardData).getData('text').slice(0,6).split("");
        paste.forEach((letter, index) => {
            textBoxes[index].value = letter;
        })
        event.preventDefault();

        verifyCodeFunc();
    });
})

function getInputStr(textBoxes) {
    let str = "";
    textBoxes.forEach((element) => {
        str += element.value;
    });
    return str;
}

function verifyCodeFunc() {
    let inputStr = getInputStr(textBoxes);
    if (parseInt(inputStr).toString() == verifyCode) {
        alert("in!");
        clearInputs(textBoxes);
    }
}

function clearInputs(textBoxes) {
    textBoxes.forEach((element) => {
        element.value = "";
    })
}