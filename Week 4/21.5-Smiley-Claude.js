const text = document.querySelector("input");
const btn = document.querySelector("button");
const smileys = document.querySelector("p");
//☺

btn.addEventListener("click", () => {
    smileys.textContent = "";
    if (/^\d+$/.test(text.value)) {
        for (let i = 0; i < text.value; i++) {
            smileys.textContent += "☺";
        }
    } else {
        smileys.textContent = "Please input a number";
    }
});