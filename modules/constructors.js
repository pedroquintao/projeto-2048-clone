import { controller } from "./controllers.js";

const HTML_GRID = document.querySelector(".grid");
const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;
const INITIAL_RANDOM_NUMBERS = 2;
const possibleMoviments = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];

var arrayGrid = createInitialGrid(ROW_NUMBER, COLUMN_NUMBER)

function createInitialGrid(row, column) {

  let newGrid = []

  for(let i = 0; i < row; i++) {
    newGrid.push(new Array(column).fill(0))
  }
  for (const x of Array(INITIAL_RANDOM_NUMBERS)) {
    createNewRandomPositionElement(newGrid);
  }
  newGrid = [[1,2,3,4],[10,3,6,7],[8,9,10,11],[12,13,14,15]]
  return newGrid
}

function showGrid(grid) {
  // const gameOverText = "Game Over!"
  
  // const buildGameOverHTML = (parentElement, text) => {
  //   const node = document.createElement("p")
  //   node.className = "game-over-text"
  //   HTML_GRID.innerHTML = grid.join('<br>')
  //   return parentElement.appendChild(node).innerHTML = text;
  // }

  const buildGrid = (parentElement, gridInput) => {
    const gameOverText = document.createElement("p")
    gameOverText.innerHTML = "Game Over!"
    controller.isGameOverTest(gridInput)? gameOverText.className = "game-over-text show" : gameOverText.className = "game-over-text hide"
    console.log('%cconstructors.js line:48 gameOverText.className', 'color: #007acc;', gameOverText.className);
    const newGrid = gridInput.map(elt => {
    
    const gridRow = document.createElement("div")
    gridRow.className = "grid-row"
    
    elt.forEach(e => {

      const gridSquare = document.createElement("p")
      gridSquare.classList = `grid-square number-${e}`
      gridSquare.innerHTML = `${e}`
      
      gridRow.appendChild(gridSquare)
      parentElement.parentNode.appendChild(gameOverText)
      return gridRow
    })
    
    return gridRow;

    });

    parentElement.innerHTML = "";
    newGrid.forEach(e => {parentElement.appendChild(e)})
  }

  buildGrid(HTML_GRID, grid)
}

function createNewRandomPositionElement(grid) {
  const rowIndex = Math.floor(Math.random() * ROW_NUMBER);
  const columnIndex = Math.floor(Math.random() * COLUMN_NUMBER);
  
  // if(!controller.isNonZeroGrid(grid)) {
    grid[rowIndex][columnIndex] === 0? grid[rowIndex][columnIndex] = 2 : createNewRandomPositionElement(grid);
  // }
}

document.addEventListener('keydown', (event) => {
  if(possibleMoviments.includes(event.key)){
       arrayGrid = controller.pressButton(arrayGrid, event.key)
     }
})

export const constructor = {
  HTML_GRID,
  ROW_NUMBER,
  COLUMN_NUMBER,
  arrayGrid,
  possibleMoviments,
  createInitialGrid,
  showGrid,
  createNewRandomPositionElement
}