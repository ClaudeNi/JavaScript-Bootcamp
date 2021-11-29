const textInput = document.querySelector("input");
const btn = document.querySelector("button");

const msg = document.createElement("span");
document.body.appendChild(msg);


btn.addEventListener("click", () => {
    if (textInput.value >= 18) {
        msg.textContent = "You can drink appear";
    } else {
        msg.textContent = "You're too young";
    }
});