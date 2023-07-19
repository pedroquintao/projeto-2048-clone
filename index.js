var arrayGrid = createInitialGrid(ROW_NUMBER, COLUMN_NUMBER)

const HTMLgrid = document.querySelector(".grid");

showGrid();

const testButton = document.querySelector(".test-button")

testButton.addEventListener('click', () => {
    pressRightButton(arrayGrid);
})



function isGameOver() {
  let gameOver = false;
  let zeroElementCounter = 0;
  let nonZeroElementCounter = 0;

  arrayGrid.forEach(row => row.forEach((column) => {
    column === 0? zeroElementCounter++ : nonZeroElementCounter++;
  }))

  nonZeroElementCounter < 15? gameOver = false : gameOver = true;
  return gameOver;
}

