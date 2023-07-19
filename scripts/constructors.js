const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;
const HTML_GRID = document.querySelector(".grid");

function createInitialGrid(row, column) {
    const columnArray = new Array(column).fill(0);
    let newArray = []
  
    for(i = 0; i < row; i++) {
      newArray.push(columnArray)
    }
  
    return newArray
  }

  function showGrid() {
    HTML_GRID.innerHTML = arrayGrid.join('<br>')
  }

  function createNewRandomPositionElement() {

    const rowIndex = Math.floor(Math.random() * ROW_NUMBER);
    const columnIndex = Math.floor(Math.random() * COLUMN_NUMBER);
  
    arrayGrid[rowIndex][columnIndex] === 0? arrayGrid[rowIndex][columnIndex] = 2 : createNewRandomPositionElement();
  }

  export const constructor = {
    createInitialGrid,
    showGrid,
    createNewRandomPositionElement
}