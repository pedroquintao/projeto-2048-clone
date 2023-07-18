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



function moveParaDireita(arr) {
  
  let count = arr.length - 1

  for(i = arr.length - 2; i >= 0; i--){
    if(arr[i] !== 0) {

      arr[count] = arr[i]
      // arr[i] = 0
      count--
    }
  }
  return arr 
}

function efetuaSoma(arr) {
  
  arr = moveParaDireita(arr)

  for(j = arr.length - 1; j >= 0; j--) {
    if(arr[j - 1] === arr[j]) {
      arr[j] += arr[j - 1]
      arr[j - 1] = 0   
         
      arr = moveParaDireita(arr)
      
    }
  }
  return arr
}

let arrayTeste = [[0,2,4,2],
                  [0,0,2,0],
                  [0,4,2,2],
                  [0,2,0,0]];
    // RESULTADO ESPERADO:
    // [[0,2,4,2],
    // [0,0,0,2],
    // [0,0,4,4],
    // [0,0,0,2]
console.log('%cprototype.js line:101 Antes', 'color: #007acc;', arrayTeste);
arrayTeste.forEach((e, i) => {
  arrayTeste[i] = efetuaSoma(e)
});
console.log('%cprototype.js line:101 Depois', 'color: #007acc;', arrayTeste);
