import { constructor } from "./constructors.js";
import { controller } from "./controllers.js";


var arrayGrid = createInitialGrid(ROW_NUMBER, COLUMN_NUMBER)


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

console.log('%cprototype.js line:114 ar', 'color: #007acc;', arrayGrid);
arrayGrid = arrayGrid.map(rightMoveSum) //Ao ocultar os parâmetros da função interna ao array.map, automaticamente é como se você estivesse passando cada elemento do array como parâmetro. Nesse caso, seria o mesmo que: arrayGrid = arrayGrid.map(e => rightMoveSum(e))
console.log('%cprototype.js line:102 ar', 'color: #007acc;', arrayGrid);