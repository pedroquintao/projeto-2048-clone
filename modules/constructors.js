const HTML_GRID = document.querySelector(".grid");
const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;

function createInitialGrid(row, column) {

  const columnArray = new Array(column).fill(0);
  let newArray = []

  for(let i = 0; i < row; i++) {
    newArray.push(columnArray)
  }
  newArray = [[2,2,8,0],[0,2,2,0],[2,2,2,2],[0,2,0,2]]
  return newArray
}

function showGrid(arr) {
  HTML_GRID.innerHTML = arr.join('<br>')
}

function createNewRandomPositionElement(arr) {
  const rowIndex = Math.floor(Math.random() * ROW_NUMBER);
  const columnIndex = Math.floor(Math.random() * COLUMN_NUMBER);

  arr[rowIndex][columnIndex] === 0? arr[rowIndex][columnIndex] = 2 : createNewRandomPositionElement(arr);
  
}

export const constructor = {
  HTML_GRID,
  ROW_NUMBER,
  COLUMN_NUMBER,
  createInitialGrid,
  showGrid,
  createNewRandomPositionElement
}