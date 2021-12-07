//https://api.jokes.one/jod
const btn = document.querySelector("button");
const title = document.querySelector("h5");
const text = document.querySelector("p");

const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://api.jokes.one/jod");
xhttp.send();

btn.addEventListener("click", () => {
  const joke = JSON.parse(xhttp.responseText).contents.jokes[0].joke;
  title.textContent = joke.title;
  text.textContent = joke.text;
});
