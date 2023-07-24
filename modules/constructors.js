import { controller } from "./controllers.js";

const HTML_GRID = document.querySelector(".grid");
const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;

function createInitialGrid(row, column) {

  let newArray = []

  for(let i = 0; i < row; i++) {
    newArray.push(new Array(column).fill(0))
  }
  // newArray = [[0,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
  
  return newArray
}

function showGrid(grid) {
  controller.isGameOver(grid)? constructor.HTML_GRID.innerHTML = "GAME OVER!" : HTML_GRID.innerHTML = grid.join('<br>')
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
  createInitialGrid,
  showGrid,
  createNewRandomPositionElement
}