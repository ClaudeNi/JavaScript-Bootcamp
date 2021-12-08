// http://www.omdbapi.com/?i=tt3896198&apikey=8572fe85

const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const containerEl = document.querySelector(".container");

btnEl.addEventListener("click", () => {
    getMovie(inputEl.value);
    inputEl.value = "";
});

async function getMovie(str) {
    const url = "http://www.omdbapi.com/?apikey=8572fe85&t=" + str;
    try {
        const fetchingData = await fetch(url);
        const movieData = await fetchingData.json();

        const movieObj = {
            poster: movieData["Poster"],
            title: movieData["Title"],
            genre: movieData["Genre"],
            year: movieData["Year"],
            plot: movieData["Plot"],
            director: movieData["Director"],
            actors: movieData["Actors"],
            ratings: movieData["Ratings"],
        }
        displayMovie(movieObj);
    } catch (err) {
        console.log("error", err);
    }
}

function displayMovie(movie) {
    containerEl.innerHTML = "";
    const posterEl = document.createElement("img");
    const titleEl = document.createElement("p");
    const genreEl = document.createElement("p");
    const yearEl = document.createElement("p");
    const plotEl = document.createElement("p");
    const directorEl = document.createElement("p");
    const actorsEl = document.createElement("p");
    const ratingsEl = document.createElement("ul");

    posterEl.src = movie.poster;
    titleEl.textContent = `Title: ${movie.title}`;
    genreEl.textContent = `Genre: ${movie.genre}`;
    yearEl.textContent = `Year: ${movie.year}`;
    plotEl.textContent = `Plot: ${movie.plot}`;
    directorEl.textContent = `Director: ${movie.director}`;
    actorsEl.textContent = `Actors: ${movie.actors}`;
    for (let i = 0; i < movie.ratings.length; i++) {
        const ratingsLI = document.createElement("li");
        const ratingText = document.createTextNode(`${movie.ratings[i].Source}: ${movie.ratings[i].Value}`) ;
        ratingsLI.appendChild(ratingText);
        ratingsEl.appendChild(ratingsLI);
    }
    
    containerEl.appendChild(posterEl);
    containerEl.appendChild(titleEl);
    containerEl.appendChild(genreEl);
    containerEl.appendChild(yearEl);
    containerEl.appendChild(plotEl);
    containerEl.appendChild(directorEl);
    containerEl.appendChild(actorsEl);
    containerEl.appendChild(ratingsEl);
}