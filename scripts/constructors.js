const ROW_NUMBER = 4;
const COLUMN_NUMBER = 4;

function createInitialGrid(row, column) {
    const columnArray = new Array(column).fill(0);
    let newArray = []
  
    for(i = 0; i < row; i++) {
      newArray.push(columnArray)
    }
  
    return newArray
  }

  function showGrid() {
    HTMLgrid.innerHTML = arrayGrid.join('<br>')
  }