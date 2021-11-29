const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const text = document.querySelector("p");
const textStyle = getComputedStyle(text);

plusBtn.addEventListener("click", () => {
    if (parseInt(textStyle.fontSize) <= 100) {
        text.style.fontSize = (parseInt(textStyle.fontSize) + 10).toString() + "px";
    }
});

minusBtn.addEventListener("click", () => {
    if (parseInt(textStyle.fontSize) >= 6) {
    text.style.fontSize = (parseInt(textStyle.fontSize) - 10).toString() + "px"
    }
});