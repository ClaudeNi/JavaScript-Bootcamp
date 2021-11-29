const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
const warning = document.querySelector("p");
warning.style.color = "#ff0000";

btn.addEventListener("click", () => {
    if (textArea.value.length < 100) {
        warning.textContent = "Must be above 100 characters!";
    } else {
        warning.textContent= "";
    }
});