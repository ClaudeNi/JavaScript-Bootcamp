const allies = [
    {
        name: "Bob Mercy",
        id: "123456",
        specialty: "Weapon Supplier",
        img: "https://i.pinimg.com/236x/8a/f2/a0/8af2a0c328704957a1375be1e8ff7c87---years-evan.jpg",
    },
    {
        name: "Christina Holland",
        id: "248635",
        specialty: "Information Supplier",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
        name: "Josea Martini",
        id: "369157",
        specialty: "Entry Supplier",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
    },
];

const target = [
    {
        name: "Leonard Felari",
        id: "448152",
        specialty: "Chef",
        img: "https://p0.pxfuel.com/preview/527/929/124/chefs-portraits-cook-food.jpg",
    },
];

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.fontFamily = "'Trebuchet MS', sans-serif";
document.body.style.background = "#FAFAFA";

const title = document.createElement("h1");
title.appendChild(document.createTextNode("Welcome Agent 36"));
document.body.appendChild(title);
const subTitle = document.createElement("h3");
subTitle.appendChild(document.createTextNode("These are your allies"));
document.body.appendChild(subTitle);
const alliesDiv = document.createElement("div");
document.body.appendChild(alliesDiv);
alliesDiv.style.width = "90%";
alliesDiv.style.display = "flex";
alliesDiv.style.justifyContent = "space-around";
alliesDiv.style.padding = "2rem";
alliesDiv.style.borderBottom = "1px dotted #660200"; 

allies.forEach((ally, index) => {
    createContainer(allies, index, alliesDiv);
})

const targetTitle = document.createElement("h3");
targetTitle.appendChild(document.createTextNode("And this is your target"));
document.body.appendChild(targetTitle);

const targetDiv = document.createElement("div");
document.body.appendChild(targetDiv);
targetDiv.style.width = "90%";
targetDiv.style.display = "flex";
targetDiv.style.justifyContent = "center";
targetDiv.style.padding = "2rem";


target.forEach((ally, index) => {
    createContainer(target, index, targetDiv);
})

const end = document.createElement("h3");
end.appendChild(document.createTextNode("Good luck"));
document.body.appendChild(end);

function createContainer(arr, index, div) {
    const container = document.createElement("div");
    const name = document.createElement("p");
    const profession = document.createElement("p");
    const img = document.createElement("img");
    name.innerHTML = `Name: ${arr[index].name}`;
    profession.innerHTML = `Profession: ${arr[index].specialty}`;
    img.src = arr[index].img;
    img.style.height = "300px";
    img.style.border = "1px solid #660200"
    container.appendChild(name);
    container.appendChild(profession);
    container.appendChild(img);
    div.appendChild(container);
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "space-between";
    container.style.width = "200px";
    container.style.border = "1px solid #000";
    container.style.borderRadius = "10px";
    container.style.padding = "1rem";
    container.style.background = "#CE1924";
}