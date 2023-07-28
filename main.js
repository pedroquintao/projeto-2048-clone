import { constructor } from "./modules/constructors.js";
import { controller } from "./modules/controllers.js";



var arrayGrid = constructor.createInitialGrid(constructor.ROW_NUMBER, constructor.COLUMN_NUMBER)

console.log('%cmain.js line:17 arrayGrid', 'color: #007acc;', arrayGrid);
constructor.showGrid(arrayGrid);

const rightButton = document.querySelector(".right-button")
const leftButton = document.querySelector(".left-button")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")

rightButton.addEventListener('click', () => {
    arrayGrid = controller.pressButton(arrayGrid, "right");
})

leftButton.addEventListener('click', () => {
    arrayGrid = controller.pressButton(arrayGrid, "left");
})

upButton.addEventListener('click', () => {
    arrayGrid = controller.pressButton(arrayGrid, "up");
})

downButton.addEventListener('click', () => {
    arrayGrid = controller.pressButton(arrayGrid, "down");
})

// rightButton.addEventListener('click', () => {
//     arrayGrid = controller.pressRightButton(arrayGrid);
// })

// leftButton.addEventListener('click', () => {
//     arrayGrid = controller.pressLeftButton(arrayGrid);
// })

// upButton.addEventListener('click', () => {
//     arrayGrid = controller.pressUpButton(arrayGrid);
// })

// downButton.addEventListener('click', () => {
//     arrayGrid = controller.pressDownButton(arrayGrid);
// })