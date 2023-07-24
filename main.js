import { constructor } from "./modules/constructors.js";
import { controller } from "./modules/controllers.js";



var arrayGrid = constructor.createInitialGrid(constructor.ROW_NUMBER, constructor.COLUMN_NUMBER)

constructor.showGrid(arrayGrid);

const rightButton = document.querySelector(".right-button")
const leftButton = document.querySelector(".left-button")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")


rightButton.addEventListener('click', () => {
    arrayGrid = controller.pressRightButton(arrayGrid);
})

leftButton.addEventListener('click', () => {
    arrayGrid = controller.pressLeftButton(arrayGrid);
})

upButton.addEventListener('click', () => {
    arrayGrid = controller.pressUpButton(arrayGrid);
})

downButton.addEventListener('click', () => {
  
    arrayGrid = controller.pressDownButton(arrayGrid);
})