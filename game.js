
import {update as updateSnake, draw as drawSnake,snake_speed} from "./snake.js"
import {update as updateFood,draw as drawFood } from "./food.js"
// variables
let lastRenderTime=0;
const gameBoard=document.getElementById("game-board");

//function when i run next frame
function main(currentTime){
window.requestAnimationFrame(main);
const secondsSinceLastRender= (currentTime-lastRenderTime)/1000;
if(secondsSinceLastRender < 1/snake_speed) return
 
lastRenderTime=currentTime;
update();
draw();

}
window.requestAnimationFrame(main);

//functions
 function update(){
    updateSnake()
    updateFood()
 }
 function draw(){
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
    drawFood(gameBoard);
 }