
var arrayGrid =  [[0,2,4,4],
                  [0,0,2,0],
                  [4,4,2,0],
                  [0,2,2,0]];

const HTMLgrid = document.querySelector(".grid");
genereteGrid();

const testButton = document.querySelector(".test-button")
testButton.addEventListener('click', () => {
    rightButton(arrayGrid);
})

function genereteGrid() {

  HTMLgrid.innerHTML = arrayGrid.join('<br>')
}

function createNewRandomPositionElement() {

  const rowIndex = Math.floor(Math.random() * 4);
  const columnIndex = Math.floor(Math.random() * 4);

  arrayGrid[rowIndex][columnIndex] === 0? arrayGrid[rowIndex][columnIndex] = 2 : createNewRandomPositionElement();

}

function rightButton(arr) {
  
  if(isGameOver()) {
    return HTMLgrid.innerHTML = "GAME OVER!";
  }
  
  arrayGrid = arr.map(efetuaSoma)
  createNewRandomPositionElement();
  genereteGrid();
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

function efetuaSoma(arr) {

  arr = rightMove(arr)

  for(j = arr.length - 1; j >= 0; j--) {
    if(arr[j - 1] === arr[j]) {
      arr[j] += arr[j - 1]
      arr[j - 1] = 0

      arr = rightMove(arr)

    }
  }
  return arr
}

function rightMove(arr) {

  let arrLength = arr.length
  arr = arr.filter(e => e !== 0)
  arrLength -= arr.length
  for(i = 0; i < arrLength; i++) {arr.unshift(0);}
  return arr
}
console.log('%cprototype.js line:114 ar', 'color: #007acc;', arrayGrid);
arrayGrid = arrayGrid.map(efetuaSoma) //Ao ocultar os parâmetros da função interna ao array.map, automaticamente é como se você estivesse passando cada elemento do array como parâmetro. Nesse caso, seria o mesmo que: arrayGrid = arrayGrid.map(e => efetuaSoma(e))
console.log('%cprototype.js line:102 ar', 'color: #007acc;', arrayGrid);
