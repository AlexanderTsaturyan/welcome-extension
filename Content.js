let newChild = document.createElement("p");
let text = document.createTextNode("Welcome");
newChild.appendChild(text);
newChild.classList.add('welcome');

let parent = document.getElementsByTagName('div')[0];
parent.insertBefore(newChild, parent.children[0]);
