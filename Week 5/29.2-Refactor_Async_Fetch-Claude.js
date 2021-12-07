//https://api.jokes.one/jod
const btn = document.querySelector("button");
const title = document.querySelector("h5");
const text = document.querySelector("p");

// const xhttp = new XMLHttpRequest();
// xhttp.open("GET", "https://api.jokes.one/jod");
// xhttp.send();

function urlFetch(url) {
  return fetch(url);
}

btn.addEventListener("click", async () => {
  try {
    const fetchData = await urlFetch("https://api.jokes.one/jod");
    let joke = await fetchData.json();
    joke = joke.contents.jokes[0].joke;
    title.textContent = joke.title;
    text.textContent = joke.text;
  } catch (e) {
    console.log("error", e);
  }
});
