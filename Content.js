const newNode = document.createElement("p");
const textNode = document.createTextNode("Welcome");
newNode.appendChild(textNode);
newNode.classList.add('welcome');

const parent = document.getElementsByTagName('div')[0];
parent.insertBefore(newNode, parent.children[0]);