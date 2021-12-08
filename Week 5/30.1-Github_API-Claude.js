// https://api.github.com/users/
const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const containerEl = document.querySelector(".container");

const usersArr = [];

btnEl.addEventListener("click", () => {
    getUser(inputEl.value);
    inputRestart();
})

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        getUser(inputEl.value);
        inputRestart();
    }
})

window.addEventListener("load", () => {
    inputRestart();
})

// gets user data from github's api using the text input
async function getUser(str) {
    let userUrl = "https://api.github.com/users/" + str;
    let isAlreadyIn = false;
    try {
        const fetchedData = await fetch(userUrl);
        const userData = await fetchedData.json();
        const userObj = {
            name: userData["login"],
            userUrl: userData["html_url"],
            avatarImg: userData["avatar_url"],
            publicRepos: userData["public_repos"],
        }
        
        if (usersArr.length == 0) {
            usersArr.push(userObj);
        } else {
            for (let user of usersArr) {
                if (user.userUrl == userObj.userUrl || userObj.name == undefined) {
                    isAlreadyIn = true;
                    break;
                }
            }
            if (!isAlreadyIn) {
                usersArr.push(userObj);
            }
        }
        displayUsers();
    } catch (err) {
        console.log("failed", err);
    }
}

// display all the users youve searched so far
function displayUsers() {
    containerEl.innerHTML = "";
    usersArr.forEach( (user) => {
        const cardEl = document.createElement("div");
        const imgEl = document.createElement("img");
        const nameEl = document.createElement("p");
        const reposEl = document.createElement("p");
        imgEl.src = user.avatarImg;
        nameEl.textContent = `Name: ${user.name}`;
        reposEl.textContent = `Public Repos: ${user.publicRepos}`;
        cardEl.addEventListener("click", () => {
            window.open(user.userUrl, '_blank').focus();
        })
        containerEl.appendChild(cardEl);
        document.body.appendChild(containerEl);
        cardEl.appendChild(imgEl);
        cardEl.appendChild(nameEl);
        cardEl.appendChild(reposEl);
        cardEl.classList.add("card");
    });
}

// empty the input and focus on it again
function inputRestart() {
    inputEl.value = "";
    inputEl.focus()
}