import { constructor } from "./modules/constructors.js";
import { controller } from "./modules/controllers.js";



var arrayGrid = constructor.createInitialGrid(constructor.ROW_NUMBER, constructor.COLUMN_NUMBER)

constructor.showGrid(arrayGrid);

const rightButton = document.querySelector(".right-button")
const leftButton = document.querySelector(".left-button")

rightButton.addEventListener('click', () => {
    arrayGrid = controller.pressRightButton(arrayGrid);
})

leftButton.addEventListener('click', () => {
    arrayGrid = controller.pressLeftButton(arrayGrid);
})

// console.log('%cprototype.js line:114 ar', 'color: #007acc;', arrayGrid);
// arrayGrid = arrayGrid.map(controller.rightMoveSum) //Ao ocultar os parâmetros da função interna ao array.map, automaticamente é como se você estivesse passando cada elemento do array como parâmetro. Nesse caso, seria o mesmo que: arrayGrid = arrayGrid.map(e => rightMoveSum(e))
// console.log('%cprototype.js line:102 ar', 'color: #007acc;', arrayGrid);