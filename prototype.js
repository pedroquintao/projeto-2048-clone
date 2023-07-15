var arrayGrid = [[0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0]];

const HTMLgrid = document.querySelector(".grid");
genereteGrid();

const testButton = document.querySelector(".test-button")
testButton.addEventListener('click', () => {
    test();
})

function genereteGrid() {
    const arrayGridConvertida = arrayGrid.join('<br>')
    
    HTMLgrid.innerHTML = arrayGridConvertida
}

function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

function createNewItem() {
  if(isGameOver()) 
    return printGameOver();
  

  const rowIndex = getRandomNumber(4);
  const columnIndex = getRandomNumber(4);
  
  arrayGrid[rowIndex][columnIndex] === 0? arrayGrid[rowIndex][columnIndex] = 2 : createNewItem()
  genereteGrid();
  
}

function test() {
    createNewItem();
}

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

function printGameOver() {
  HTMLgrid.innerHTML = "GAME OVER!"
}