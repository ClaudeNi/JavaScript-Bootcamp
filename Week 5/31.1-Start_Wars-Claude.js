const tableEl = document.createElement("table");
tableEl.innerHTML = "<tr> <th>Name</th> <th>Height (cm)</th> <th>Hair</th> <th>Planet Name</th> <th>Planet Population</th> </tr>";
document.body.appendChild(tableEl);

let charactersNumber = 10;

getCharacters();


async function getCharacters() {
    try {
        const fetchingData1 = await fetch("https://swapi.dev/api/films/1/");
        const movieData = await fetchingData1.json();
        for (let i = 0; i < charactersNumber; i++) {
            const fetchingData2 = await fetch(movieData.characters[i]);
            const characterData = await fetchingData2.json();
            const fetchingData3 = await fetch(characterData.homeworld);
            const planetData = await fetchingData3.json();
            const characterObj = {
                name: characterData.name,
                height: characterData.height,
                hair: characterData.hair_color,
                planet: {
                    name: planetData.name,
                    population: planetData.population
                }
            }
            addCharacter(characterObj);
        }
    } catch (err) {
        console.log("error", err);
    }
}

function addCharacter(character) {
    tableEl.innerHTML += `<tr> <td>${character.name}</td> <td>${character.height}</td> <td>${character.hair}</td> <td>${character.planet.name}</td> <td>${character.planet.population}</td> </tr>`;
}