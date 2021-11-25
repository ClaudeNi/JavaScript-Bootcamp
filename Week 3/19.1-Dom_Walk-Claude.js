const title1 = document.querySelector(".start-here");
title1.innerHTML = "main title";

const subUL = document.querySelector("ul li ul");
const sub = document.createElement("li");
sub.appendChild(document.createTextNode("sub title 4"));
subUL.appendChild(sub);

const lastLI = document.querySelector("ul").lastElementChild;
lastLI.remove();

document.title = "Master Of The Dom";

const txt = document.querySelector("p");
txt.innerHTML = "This is now changed!";