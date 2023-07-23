import { constructor } from "./constructors.js";

function isGameOver(arr) {
    let gameOver;
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
      constructor.HTML_GRID.innerHTML = "GAME OVER!";

      return arr;
    }
    
    arr = arr.map(e => horizontalMove(e, "right"))
    constructor.createNewRandomPositionElement(arr);
    constructor.showGrid(arr)

    return arr;
  }

function horizontalMove(arr, move) {
  
  let arrFiltred = arr.filter(e => e !== 0)
  arr = arr.fill(0)
  
  switch(move){
    case "right":
      debugger
      arrFiltred.forEach((e, i) => {
        if(e === arrFiltred[i + 1]){
          arrFiltred[i] += arrFiltred[i + 1];
          arrFiltred.splice(i + 1, 1)
          debugger
          return e;
        }
        return e;
      })
      arrFiltred.forEach((e, i) => arr.splice(arr.length - arrFiltred.length + i, 1, e)) 
      break

    case "left":
      arrFiltred.reverse();
      arrFiltred.forEach((e, i) => {
        if(e === arrFiltred[i + 1]){
          arrFiltred[i] += arrFiltred[i + 1];
          arrFiltred.splice(i + 1, 1)
          debugger
          return e;
        }
        return e;
      })
      arrFiltred.reverse();
      arrFiltred.forEach((e, i) => arr.splice(i, 1, e)) 
      break
  }

  return arr
}

function pressLeftButton(arr) {
  
  if(isGameOver(arr)) {
    constructor.HTML_GRID.innerHTML = "GAME OVER!"
    return arr
  }
  
  arr = arr.map(e => horizontalMove(e, "left"))
  
  constructor.createNewRandomPositionElement(arr);
  constructor.showGrid(arr)
  return arr;
}


  export const controller = {
    isGameOver,
    pressRightButton,
    horizontalMove,
    pressLeftButton,
}