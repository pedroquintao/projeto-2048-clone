import { constructor } from "./constructors.js";

function isGameOver(grid) {
    let gameOver;
    let zeroElementCounter = 0;
    let nonZeroElementCounter = 0;
    
    grid.forEach(row => row.forEach((column) => {
      column === 0? zeroElementCounter++ : nonZeroElementCounter++;
    }))

    nonZeroElementCounter < 15? gameOver = false : gameOver = true;

    return gameOver;
}

function pressRightButton(grid) { //Será substituído futuramente por um "pressionar tecla seta para direita"
    
    if(isGameOver(grid)) {
      constructor.HTML_GRID.innerHTML = "GAME OVER!";

      return grid;
    }
    
    grid = grid.map(e => horizontalMove(e, "right"))
    constructor.createNewRandomPositionElement(grid);
    constructor.showGrid(grid)

    return grid;
  }

function pressLeftButton(grid) {

  if(isGameOver(grid)) {
    constructor.HTML_GRID.innerHTML = "GAME OVER!"
    return grid
  }
  
  grid = grid.map(e => horizontalMove(e, "left"))
  
  constructor.createNewRandomPositionElement(grid);
  constructor.showGrid(grid)
  return grid;
}

function pressUpButton(grid) {
    // [2,2,8,0],
    // [0,2,2,0],
    // [2,2,2,2],
    // [0,2,0,2]

  if(isGameOver(grid)) {
    constructor.HTML_GRID.innerHTML = "GAME OVER!"
    return grid
  }
  
  grid = rotateGridCounterClockwise(rotateGridClockwise(grid).map(e => horizontalMove(e, "up")))

  constructor.createNewRandomPositionElement(grid);
  constructor.showGrid(grid)
  
  return grid;

}

function pressDownButton(grid) {
  console.log('%ccontrollers.js line:51 Down Antes', 'color: #007acc;', grid);
  grid = rotateGridCounterClockwise(rotateGridClockwise(grid).map(e => horizontalMove(e, "down")))
  console.log('%ccontrollers.js line:51 Down Depois', 'color: #007acc;', grid);

  constructor.createNewRandomPositionElement(grid);
  constructor.showGrid(grid)
  
  return grid;

}

function horizontalMove(arr, move) {
  
  let arrFiltred = arr.filter(e => e !== 0)
  arr = arr.fill(0)
  
  switch(move){
    case "right":
    case "up":

      arrFiltred.forEach((e, i) => {
        if(e === arrFiltred[i + 1]){
          arrFiltred[i] += arrFiltred[i + 1];
          arrFiltred.splice(i + 1, 1)
    
          return e;
        }

        return e;
      })
      arrFiltred.forEach((e, i) => arr.splice(arr.length - arrFiltred.length + i, 1, e)) 
      break

    case "left":
    case "down":
      arrFiltred.reverse();
      arrFiltred.forEach((e, i) => {
        if(e === arrFiltred[i + 1]){
          arrFiltred[i] += arrFiltred[i + 1];
          arrFiltred.splice(i + 1, 1)
    
          return e;
        }

        return e;
      })
      arrFiltred.reverse();
      arrFiltred.forEach((e, i) => arr.splice(i, 1, e)) 
      break
    
    // case "up":
    //   arrFiltred.reverse();
    //   arrFiltred.forEach((e, i) => {
    //     if(e === arrFiltred[i + 1]){
    //       arrFiltred[i] += arrFiltred[i + 1];
    //       arrFiltred.splice(i + 1, 1)
    
    //       return e;
    //     }

    //     return e;
    //   })
    //   arrFiltred.reverse();
    //   arrFiltred.forEach((e, i) => arr.splice(i, 1, e)) 
    //   break
  }

  return arr
}
function rotateGridClockwise(grid) {
  let gridSpinedClockwise = new Array(grid.length).fill(new Array(grid[0].length))

  for(let i = 0; i < grid.length; i++) {
    gridSpinedClockwise[i] = gridSpinedClockwise.map((e, j) => grid[(gridSpinedClockwise.length - 1) - j][i])
  }
  return gridSpinedClockwise
}

function rotateGridCounterClockwise(grid) {
  let gridSpinedCounterClockwise = new Array(grid.length).fill(new Array(grid[0].length))

  for(let i = 0; i < grid.length; i++) {
    gridSpinedCounterClockwise[i] = gridSpinedCounterClockwise.map((e, j) => grid[j][(grid.length - 1) - i])
  }
  return gridSpinedCounterClockwise
}
  export const controller = {
    isGameOver,
    pressRightButton,
    pressLeftButton,
    pressUpButton,
    pressDownButton,
    horizontalMove
}