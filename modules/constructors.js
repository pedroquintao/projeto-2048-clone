import { controller } from "./controllers.js";

const HTML_GRID = document.querySelector(".grid");
const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;
const INITIAL_RANDOM_NUMBERS = 2;

function createInitialGrid(row, column) {

  let newGrid = []

  for(let i = 0; i < row; i++) {
    newGrid.push(new Array(column).fill(0))
  }
  for (const x of Array(INITIAL_RANDOM_NUMBERS)) {
    createNewRandomPositionElement(newGrid);
  }

  return newGrid
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