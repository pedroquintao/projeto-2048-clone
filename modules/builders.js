import { controller } from "./controllers.js";

const HTML_GRID = document.querySelector(".grid"), 
      ROW_NUMBER = 4, 
      COLUMN_NUMBER = 4, 
      INITIAL_RANDOM_NUMBERS = 2, 
      possibleMoviments = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];

var arrayGrid = [];

createInitialGrid(ROW_NUMBER, COLUMN_NUMBER);

document.addEventListener('keydown', (event) => {

  if(possibleMoviments.includes(event.key))
    arrayGrid = controller.pressButton(arrayGrid, event.key);
});

function createInitialGrid(row, column) {

  let newGrid = [];

  for(let i = 0; i < row; i++) 
    newGrid.push(new Array(column).fill(0));

  for(let i = 0; i < INITIAL_RANDOM_NUMBERS; i++)
    createNewRandomPositionElement(newGrid);

  // newGrid = [[1,2,3,4],[10,3,6,7],[8,9,10,11],[12,13,14,15]]
  return arrayGrid = newGrid;
}

function buildGridScreen(grid) {
  
    HTML_GRID.innerHTML = "";

    if(controller.isGameOverTest(grid))
      showGameOverScreen(HTML_GRID);
    
    const newGrid = grid.map(elt => {
    
    const gridRow = document.createElement("div");
    gridRow.className = "grid-row";
    
      elt.forEach(e => {

        const gridSquare = document.createElement("p");
        gridSquare.classList = `grid-square number-${e}`;
        gridSquare.innerHTML = `${e}`;
        
        gridRow.appendChild(gridSquare);
        return gridRow;
      })
    
    return gridRow;
    });

  newGrid.forEach(e => {HTML_GRID.appendChild(e)});
}

function showGameOverScreen(outerElement) {

  const gameOverScreen = document.createElement("div");

  gameOverScreen.className = "game-over-screen";
  gameOverScreen.innerHTML = `<h1>Game Over!</h1>
                              <button class="try-again-button">Try Again</button>`;

  outerElement.appendChild(gameOverScreen);

  document.querySelector(".try-again-button").addEventListener('click', () => {

    arrayGrid = createInitialGrid(ROW_NUMBER, COLUMN_NUMBER);
    buildGridScreen(arrayGrid);
  })
}

function createNewRandomPositionElement(grid) {

  const rowIndex = Math.floor(Math.random() * ROW_NUMBER);
  const columnIndex = Math.floor(Math.random() * COLUMN_NUMBER);
  
    grid[rowIndex][columnIndex] === 0? grid[rowIndex][columnIndex] = 2 : createNewRandomPositionElement(grid);
}

export const builder = {
  HTML_GRID,
  ROW_NUMBER,
  COLUMN_NUMBER,
  arrayGrid,
  possibleMoviments,
  createInitialGrid,
  buildGridScreen,
  createNewRandomPositionElement
};