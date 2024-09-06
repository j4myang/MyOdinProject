let container = document.querySelector(".container");

let redPTag = document.createElement("p");
redPTag.textContent = "Hey I'm red!";
redPTag.style.color = "red";

let blueh3Tag = document.createElement("h3");
blueh3Tag.textContent = "I'm a blue h3!";
blueh3Tag.style.color = "blue";

let blackDiv = document.createElement("div");
blackDiv.classList.add("black-div");
blackDiv.style.cssText = "background-color: pink; border-style: solid; border-color; black";

let divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div!";

let divP = document.createElement("p");
divP.textContent = "ME TOO!"

blackDiv.append(divH1);
blackDiv.append(divP);

container.append(redPTag);
container.append(blueh3Tag);
container.append(blackDiv);