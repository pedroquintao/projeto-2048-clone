import { constructor } from "./constructors.js";

function isGameOver(arr) {
    let gameOver = true;
    let zeroElementCounter = 0;
    let nonZeroElementCounter = 0;

    arr.forEach(row => row.forEach((column) => {
      column === 0? zeroElementCounter++ : nonZeroElementCounter++;
    }))

    nonZeroElementCounter < 15? gameOver = false : gameOver = true;
    return gameOver;
}

function pressRightButton(arr) { //Será substituído futuramente por um "pressionar tecla seta para direita"
  
    if(isGameOver(arr)) {
      return constructor.HTML_GRID.innerHTML = "GAME OVER!";
    }
    
    arr = arr.map(rightMoveSum)
    constructor.createNewRandomPositionElement(arr);
    constructor.showGrid(arr)

    return arr;
  }

function rightMoveSum(arr) {

  arr = rightMove(arr)

  for(let j = arr.length - 1; j >= 0; j--) {
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
  for(let i = 0; i < arrLength; i++) {arr.unshift(0);}
  return arr
}
  
  export const controller = {
    isGameOver,
    pressRightButton,
    rightMoveSum,
    rightMove
}