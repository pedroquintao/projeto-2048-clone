import { constructor } from "./constructors.js";

// function isNonZeroGrid(grid) {
//   const gridConcatened = [].concat(...grid)  
//   const nonZeroElements = gridConcatened.filter(e => e !== 0).length;

//     return nonZeroElements < 16? false : true;
// }

function isGridAlteration (initialGrid, finalGrid) {
  const notEqualElements = [].concat(...initialGrid).filter((e, i) => e !== [].concat(...finalGrid)[i]).length
  return notEqualElements > 0? true : false
} 

const isGameOverTest = (grid) => {
  const inicialGrid = grid.map(e => [...e])
  const rightMoveGrid = grid.map(e => [...e])
  const leftMoveGrid = grid.map(e => [...e])
  const upMoveGrid = grid.map(e => [...e])
  const downMoveGrid = grid.map(e => [...e])

  let testArray = [rightMoveGrid, leftMoveGrid, upMoveGrid, downMoveGrid]
  testArray = testArray.map((elt, i) => {
    const currentMoviment = constructor.possibleMoviments[i]
    
    switch(currentMoviment){
      case "ArrowRight":
      case "ArrowLeft":
        
        elt = elt.map(elt => moveGrid(elt, currentMoviment))
        break

      case "ArrowUp":
      case "ArrowDown":

        elt = elt = rotateGridCounterClockwise(rotateGridClockwise(elt).map(el => moveGrid(el, currentMoviment))) 
        break
    }

    return !isGridAlteration(inicialGrid, elt)
  })

  const test = testArray.every(e => e === true)

  return testArray.every(e => e === true)
}

function pressButton(grid, move) {

  if(!isGameOverTest(grid)) {
    
    const initialGrid = grid.map(e => [...e]);

    switch(move){
      case "ArrowRight":
      case "ArrowLeft":
        
        grid.map(e => moveGrid(e, move))
        break

      case "ArrowUp":
      case "ArrowDown":

        grid = rotateGridCounterClockwise(rotateGridClockwise(grid).map(e => moveGrid(e, move)))
        break
    }

      isGridAlteration(initialGrid, grid)? constructor.createNewRandomPositionElement(grid) : null
      constructor.showGrid(grid)
    }

  else {
    constructor.HTML_GRID.innerHTML += "<p>Game Over!</p>"
  }
  return grid;
};

function moveGrid(arr, move) {
  
  let arrFiltred = arr.filter(e => e !== 0)
  arr = arr.fill(0)

  if(move === "ArrowRight" || move === "ArrowUp")
    arrFiltred.reverse();

  arrFiltred.forEach((e, i) => {
    
    if(e === arrFiltred[i + 1]) {
      arrFiltred[i] += arrFiltred[i + 1];
      arrFiltred.splice(i + 1, 1)
    }
  })

  switch(move){
    case "ArrowRight":
    case "ArrowUp":
      arrFiltred.reverse().forEach((e, i) => arr.splice(arr.length - arrFiltred.length + i, 1, e))
      break

    case "ArrowLeft":
    case "ArrowDown":
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
    isGameOverTest,
    pressButton,
    moveGrid
}