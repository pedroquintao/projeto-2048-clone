import { constructor } from "./constructors.js";

function isGameOver(grid) {
  // [1,2,[3,4]] [1,2,3,4]
    const nonZeroElements = [].concat(...grid).filter(e => e !== 0).length;
    return nonZeroElements < 16? false : true;
}

// //TODO:*************************/
// //TODO:*    EM CONSTRUÇÃO      */
// //TODO:*************************/,

// function pressButton(grid, move) {
//   if(!isGameOver(grid)) {
//     switch(move){
//       case "right":
//       case "up":

//         grid = grid.map(e => {
//           arrFiltred.forEach((e, i) => {

//             let arrFiltred = arr.filter(e => e !== 0)
//             let arr = arr.fill(0)
//             if(e === arrFiltred[i + 1]){
//               arrFiltred[i] += arrFiltred[i + 1];
//               arrFiltred.splice(i + 1, 1)
//             }
//           })
    
//           arrFiltred.forEach((e, i) => arr.splice(arr.length - arrFiltred.length + i, 1, e)) 
//         })
//         break;
//       case "left":
//       case "down":
//     }

//   }
// }

function pressRightButton(grid) { //Será substituído futuramente por um "pressionar tecla seta para direita"
  if(!isGameOver(grid)) {
      const initialGrid = grid.map(e => [...e]);
      // let concatenadedInitialGrid = [].concat(...initialGrid)
      
      grid.map(e => horizontalMove(e, "right"))
      
      const notEqualElements = [].concat(...initialGrid).filter((e, i) => e !== [].concat(...grid)[i]).length
      if(notEqualElements > 0) {constructor.createNewRandomPositionElement(grid)}

      constructor.showGrid(grid)
    };

    return grid;
  }

function pressLeftButton(grid) {

  if(!isGameOver(grid)) {
    const initialGrid = grid.map(e => [...e]);

    grid = grid.map(e => horizontalMove(e, "left"))
    
    const notEqualElements = [].concat(...initialGrid).filter((e, i) => e !== [].concat(...grid)[i]).length
    if(notEqualElements > 0) {constructor.createNewRandomPositionElement(grid)}

    constructor.showGrid(grid)
  }
  
  return grid;
}

function pressUpButton(grid) {

  if(!isGameOver(grid)) {
    const initialGrid = grid.map(e => [...e]);

    grid = rotateGridCounterClockwise(rotateGridClockwise(grid).map(e => horizontalMove(e, "up")))
  
    const notEqualElements = [].concat(...initialGrid).filter((e, i) => e !== [].concat(...grid)[i]).length
    if(notEqualElements > 0) {constructor.createNewRandomPositionElement(grid)}

    constructor.showGrid(grid)
  }
  
  return grid;
}

function pressDownButton(grid) {

  if(!isGameOver(grid)) {
    const initialGrid = grid.map(e => [...e]);

    grid = rotateGridCounterClockwise(rotateGridClockwise(grid).map(e => horizontalMove(e, "down")))
  
    const notEqualElements = [].concat(...initialGrid).filter((e, i) => e !== [].concat(...grid)[i]).length
    if(notEqualElements > 0) {constructor.createNewRandomPositionElement(grid)}
    constructor.showGrid(grid)
  }

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
        }
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
        }
      })

      arrFiltred.reverse();
      arrFiltred.forEach((e, i) => arr.splice(i, 1, e)) 

      break
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