// var arrayGrid = [[0,0,0,0],
//                  [0,0,0,0],
//                  [0,0,0,0],
//                  [0,0,0,0]];

// const HTMLgrid = document.querySelector(".grid");
// genereteGrid();

// const testButton = document.querySelector(".test-button")
// testButton.addEventListener('click', () => {
//     test();
// })

// function genereteGrid() {
//     const arrayGridConvertida = arrayGrid.join('<br>')
    
//     HTMLgrid.innerHTML = arrayGridConvertida
// }

// function getRandomNumber(length) {
//   return Math.floor(Math.random() * length);
// }

// function createNewItem() {
//   if(isGameOver()) 
//     return printGameOver();

//   const rowIndex = getRandomNumber(4);
//   const columnIndex = getRandomNumber(4);
  
//   arrayGrid[rowIndex][columnIndex] === 0? arrayGrid[rowIndex][columnIndex] = 2 : createNewItem();
//   genereteGrid();
  
// }

// function test() {
//     createNewItem();
// }

// function isGameOver() {
//   let gameOver = false;
//   let zeroElementCounter = 0;
//   let nonZeroElementCounter = 0;

//   arrayGrid.forEach(row => row.forEach((column) => {
//     column === 0? zeroElementCounter++ : nonZeroElementCounter++;
//   }))
  
//   nonZeroElementCounter < 15? gameOver = false : gameOver = true;
//   return gameOver;
// }

// function printGameOver() {
//   HTMLgrid.innerHTML = "GAME OVER!"
// }

// AREA DE TESTES

let arrayTeste = [[0,2,4,4],
                  [0,0,2,0],
                  [4,4,2,0],
                  [0,2,2,0]];
                  
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
console.log('%cprototype.js line:114 ar', 'color: #007acc;', arrayTeste);
arrayTeste = arrayTeste.map(efetuaSoma) //Ao ocultar os parâmetros da função interna ao array.map, automaticamente é como se você estivesse passando cada elemento do array como parâmetro. Nesse caso, seria o mesmo que: arrayTeste = arrayTeste.map(e => efetuaSoma(e))
console.log('%cprototype.js line:102 ar', 'color: #007acc;', arrayTeste);
