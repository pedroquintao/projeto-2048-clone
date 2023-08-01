import { controller } from "./controllers.js";

const HTML_GRID = document.querySelector(".grid");
const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;
const INITIAL_RANDOM_NUMBERS = 2;

var arrayGrid = createInitialGrid(ROW_NUMBER, COLUMN_NUMBER)

function createInitialGrid(row, column) {

  let newGrid = []

  for(let i = 0; i < row; i++) {
    newGrid.push(new Array(column).fill(0))
  }
  for (const x of Array(INITIAL_RANDOM_NUMBERS)) {
    createNewRandomPositionElement(newGrid);
  }
  // newGrid = [[1,2,3,4],[0,5,6,7],[8,9,10,11],[12,13,14,15]]
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

    const newGrid = gridInput.map(elt => {
    
    const gridRow = document.createElement("div")
    gridRow.className = "grid-row"
    
    elt.forEach(e => {

      const gridSquare = document.createElement("p")
      gridSquare.classList = `grid-square number-${e}`
      e === 0? null : gridSquare.innerHTML = `${e}`
      return gridRow.appendChild(gridSquare)
    })
    
    return gridRow;

    });
    console.log('%cconstructors.js row:52 newGrid', 'color: #007acc;', newGrid);
    parentElement.innerHTML = "";
    newGrid.forEach(e => {parentElement.appendChild(e)})
  }

  buildGrid(HTML_GRID, grid)
  // controller.isGameOver(grid)? buildGameOverHTML(HTML_GRID, gameOverText) : HTML_GRID.innerHTML = grid.join('<br>')
}

function createNewRandomPositionElement(grid) {
  const rowIndex = Math.floor(Math.random() * ROW_NUMBER);
  const columnIndex = Math.floor(Math.random() * COLUMN_NUMBER);
  
  if(!controller.isGameOver(grid)) {
    grid[rowIndex][columnIndex] === 0? grid[rowIndex][columnIndex] = 2 : createNewRandomPositionElement(grid);
  }
}
document.addEventListener('keydown', (event) => {
  arrayGrid = controller.pressButton(arrayGrid, event.key)
})

export const constructor = {
  HTML_GRID,
  ROW_NUMBER,
  COLUMN_NUMBER,
  arrayGrid,
  createInitialGrid,
  showGrid,
  createNewRandomPositionElement
}