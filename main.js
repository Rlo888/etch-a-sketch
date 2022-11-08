//holds everything
const container = document.createElement("div");
container.className = "container";
document.body.append(container);
//div that holds the title of the game
let title = document.createElement("div");
title.className = "title";
title.style.display = "flex";
title.style.justifyContent = "center";
container.append(title);
//title header
let gameHeader = document.createElement("h1");
gameHeader.className = "gameHeader";
gameHeader.innerText = "Super Sketchy";
title.append(gameHeader);
//div to hold buttons
let buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
container.appendChild(buttonContainer);
//button to clear the board
let clearButton = document.createElement("button");
clearButton.className = "clearButton";
clearButton.style.width = "100px";
clearButton.style.height = "30px";
clearButton.innerText = "Clear";
buttonContainer.append(clearButton);
//button to enter user number
let enterButton = document.createElement("button");
enterButton.className = "enterButton";
enterButton.style.height = "30px";
enterButton.style.width = "100px";
enterButton.textContent = "Enter";
buttonContainer.append(enterButton);
//input box for the user to make the grid size
let inputBox = document.createElement("input");
inputBox.setAttribute("type", "text");
inputBox.value = "16";
inputBox.setAttribute("placeholder", "enter number 2-100");
inputBox.onchange = function () {
  this.value;
};
buttonContainer.append(inputBox);

//box that holds the grid
let sketchBoardContainer = document.createElement("div");
sketchBoardContainer.className = "sketchBoardContainer";
//sketchBoardContainer.style.display = "grid";
sketchBoardContainer.style.border = "solid";
sketchBoardContainer.style.borderColor = "black";
sketchBoardContainer.style.borderWidth = "4px";
sketchBoardContainer.style.height = "500px";
sketchBoardContainer.style.width = "500px";
container.append(sketchBoardContainer);
//function that creates the board
function makeBoard(size) {
  let sketchBoard = document.createElement("div");
  sketchBoard.style.display = "grid";
  sketchBoard.style.gridTemplateRows = `repeat(${size},1fr)`;
  sketchBoard.style.gridTemplateColumns = `repeat(${size},1fr)`;
  for (let i = 0; i < size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    sketchBoardContainer.insertAdjacentElement("beforeend", square);
  }
}

makeBoard(35);
