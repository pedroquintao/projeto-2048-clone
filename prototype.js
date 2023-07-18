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

var arr = [2,4,4,2];

function moveParaDireita() {
  
  let newArray = new Array(arr.length)
  
  for(i = 0; i < newArray.length; i++){
    newArray[i] = 0
  }
  
  let count = arr.length - 1
  
  for(i = arr.length - 1; i >= 0; i--){
    if(arr[i] !== 0) {
      newArray[count] = arr[i]
      count--
    }
  }
  
  arr = newArray
  return newArray 
}

function efetuaSoma() { //ANOTACAO: aparentemente, o problema está sendo o "i" no for dessa função. Quando a linha 90 é executada, o "i" do for da linha 84 é transportado para o "i" do for dentro da função moveParaDireita, na linha 65. Uma possível forma de correção é alterar o nome de alguma das variáveis "i" para outra letra como "j" por exemplo.
  let newArray = moveParaDireita()
  for(j = arr.length - 1; j >= 0; j--) {
    if(newArray[j - 1] === newArray[j]) {
      newArray[j] += newArray[j - 1]
      newArray[j - 1] = 0
      console.log('%cprototype.js line:84 j', 'color: #007acc;', j);
      
      newArray = moveParaDireita()
      
    }
  }
  return arr = newArray
}

console.log("array ANTES: ", arr)
efetuaSoma()
console.log("array DEPOIS: ", arr)