import { controller } from "./controllers.js";

const HTML_GRID = document.querySelector(".grid");
const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;
const INITIAL_RANDOM_NUMBERS = 2;

const rightButton = document.querySelector(".right-button")
const leftButton = document.querySelector(".left-button")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")

var arrayGrid = createInitialGrid(ROW_NUMBER, COLUMN_NUMBER)

const movements = {
    
    "right": {
        "button": rightButton,
        "move": "right"
    }
    ,
    
    "left": {
        "button": leftButton,
        "move": "left"
    }
    ,
    
    "up": {
        "button": upButton,
        "move": "up"
    },

    "down": {
        "button": downButton,
        "move": "down"
    }
}



function createInitialGrid(row, column) {

  let newGrid = []

  for(let i = 0; i < row; i++) {
    newGrid.push(new Array(column).fill(0))
  }
  for (const x of Array(INITIAL_RANDOM_NUMBERS)) {
    createNewRandomPositionElement(newGrid);
  }
  newGrid = [[4,4,2,2], [0,0,0,0], [0,0,0,2], [0,2,2,2]]
  return newGrid
}

function showGrid(grid) {
  controller.isGameOver(grid)? constructor.HTML_GRID.innerHTML = "GAME OVER!" : HTML_GRID.innerHTML = grid.join('<br>')
}

function addListeners(obj) {

  for(let o in obj) {
      obj[o]["button"].addEventListener('click', () => {
          arrayGrid = controller.pressButton(arrayGrid, obj[o]["move"])
      })
  }
}

function createNewRandomPositionElement(grid) {
  const rowIndex = Math.floor(Math.random() * ROW_NUMBER);
  const columnIndex = Math.floor(Math.random() * COLUMN_NUMBER);
  
  if(!controller.isGameOver(grid)) {
    grid[rowIndex][columnIndex] === 0? grid[rowIndex][columnIndex] = 2 : createNewRandomPositionElement(grid);
  }
}

export const constructor = {
  HTML_GRID,
  ROW_NUMBER,
  COLUMN_NUMBER,
  arrayGrid,
  movements,
  createInitialGrid,
  showGrid,
  addListeners,
  createNewRandomPositionElement
}