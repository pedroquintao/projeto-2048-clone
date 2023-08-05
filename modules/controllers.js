import { builder } from "./builders.js";

const isGameOverTest = (grid) => {
  
  const inicialGrid = grid.map(e => [...e]),
        rightMoveGrid = grid.map(e => [...e]),
        leftMoveGrid = grid.map(e => [...e]),
        upMoveGrid = grid.map(e => [...e]),
        downMoveGrid = grid.map(e => [...e]);

  let testArray = [rightMoveGrid, leftMoveGrid, upMoveGrid, downMoveGrid];


  testArray = testArray.map((elt, i) => {

    const currentMoviment = builder.possibleMoviments[i];
    
    switch(currentMoviment){

      case "ArrowRight":
      case "ArrowLeft":
        
        elt = elt.map(elt => moveGrid(elt, currentMoviment));
        break;

      case "ArrowUp":
      case "ArrowDown":

        elt = elt = rotateGridCounterClockwise(rotateGridClockwise(elt).map(el => moveGrid(el, currentMoviment))); 
        break;
    }

    return !isGridAlteration(inicialGrid, elt);
  })

  return testArray.every(e => e === true);
}

function isGridAlteration (initialGrid, finalGrid) {

  const concatenedInitialGrid = [].concat(...initialGrid),
        concatenedFinalGrid = [].concat(...finalGrid);

  return !concatenedInitialGrid.every((e, i) => e === concatenedFinalGrid[i]);
} 

function pressButton(grid, move) {

  if(!isGameOverTest(grid)) {
    
    const initialGrid = grid.map(e => [...e]);

    switch(move){
      case "ArrowRight":
      case "ArrowLeft":
        
        grid.map(e => moveGrid(e, move));
        break;

      case "ArrowUp":
      case "ArrowDown":

        grid = rotateGridCounterClockwise(rotateGridClockwise(grid).map(e => moveGrid(e, move)));
        break;
    }

      if(isGridAlteration(initialGrid, grid)) 
        builder.createNewRandomPositionElement(grid);

      builder.buildGridScreen(grid);
    }

  return grid;
};

function moveGrid(row, move) {
  
  let filtredRow = row.filter(e => e !== 0);
  row = row.fill(0);

  if(move === "ArrowRight" || move === "ArrowUp")
    filtredRow.reverse();

  filtredRow.forEach((e, i) => {
    
    if(e === filtredRow[i + 1]) {

      filtredRow[i] += filtredRow[i + 1];
      filtredRow.splice(i + 1, 1);
    }
  })

  switch(move){
    case "ArrowRight":
    case "ArrowUp":

      filtredRow.reverse().forEach((e, i) => row.splice(row.length - filtredRow.length + i, 1, e));
      break;

    case "ArrowLeft":
    case "ArrowDown":

      filtredRow.forEach((e, i) => row.splice(i, 1, e));
      break;
  }

  return row;
}

function rotateGridClockwise(grid) {

  let gridSpinedClockwise = new Array(grid.length).fill(new Array(grid[0].length));

  for(let i = 0; i < grid.length; i++)
    gridSpinedClockwise[i] = gridSpinedClockwise.map((e, j) => e = grid[(gridSpinedClockwise.length - 1) - j][i]);
  
  return gridSpinedClockwise;
}

function rotateGridCounterClockwise(grid) {

  let gridSpinedCounterClockwise = new Array(grid.length).fill(new Array(grid[0].length));

  for(let i = 0; i < grid.length; i++)
    gridSpinedCounterClockwise[i] = gridSpinedCounterClockwise.map((e, j) => grid[j][(grid.length - 1) - i]);
  
  return gridSpinedCounterClockwise;
}

  export const controller = {
    isGameOverTest,
    pressButton,
    moveGrid
};