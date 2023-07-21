import { constructor } from "./constructors.js";

function isGameOver(arr) {
    let gameOver;
    let zeroElementCounter = 0;
    let nonZeroElementCounter = 0;
    console.log('%ccontrollers.js line:7 arr', 'color: #007acc;', arr);
    arr.forEach(row => row.forEach((column) => {
      column === 0? zeroElementCounter++ : nonZeroElementCounter++;
    }))

    nonZeroElementCounter < 15? gameOver = false : gameOver = true;

    return gameOver;
}

function pressRightButton(arr) { //Será substituído futuramente por um "pressionar tecla seta para direita"
    
    if(isGameOver(arr)) {
      constructor.HTML_GRID.innerHTML = "GAME OVER!";

      return arr;
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
  //[0,2,4,0]
  //[2,4]
  //[0,0,0,4]
  //[0,0,2,4]
  
  let arrFiltred = arr.filter(e => e !== 0)
  
  arr = arr.fill(0)
  
  arrFiltred.forEach((e, i) => arr.splice(arr.length - arrFiltred.length + i, 1, e)) //Está correto
  
  return arr
}

function pressLeftButton(arr) {
  
  if(isGameOver(arr)) {
    constructor.HTML_GRID.innerHTML = "GAME OVER!"
    return arr
  }
  
  arr = arr.map(leftMoveSum)
  
  constructor.createNewRandomPositionElement(arr);
  constructor.showGrid(arr)
}

function leftMoveSum(arr) {
  debugger
  arr = leftMove(arr)
  debugger
  for(let j = 0; j < arr.length - 1; j++) {
    if(arr[j] === arr[j + 1]) {
      arr[j] += arr[j + 1]
      arr[j + 1] = 0
      debugger
      arr = leftMove(arr)
      debugger
    }
  }
  return arr;
}

function leftMove(arr) {
  let arrLength = arr.length
  arr = arr.filter(e => e !== 0)
  arrLength -= arr.length
  for(let i = 0; i < arrLength; i++) {

    arr.push(0);}
  return arr
}


  export const controller = {
    isGameOver,
    pressRightButton,
    rightMoveSum,
    rightMove,
    pressLeftButton,
    leftMoveSum,
    leftMove
}