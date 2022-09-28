
import {update as updateSnake, draw as drawSnake,snake_speed,getSnakeHead,snakeIntersection} from "./snake.js"
import {update as updateFood,draw as drawFood } from "./food.js"
import{outsideGrid} from "./grid.js"
// variables
let lastRenderTime=0;
let gameOver=false;
const gameBoard=document.getElementById("game-board");

//function when i run next frame
function main(currentTime) {
 

   // if (!gameOver) {
   //    if (confirm('You lost. Press ok to restart.')) {
   //      window.location="/"
   //    }
   //    return
   //  }

   window.requestAnimationFrame(main)
   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
   if (secondsSinceLastRender < 1 / snake_speed) return


   
   lastRenderTime = currentTime
   update()
   draw()
  
}


 window.requestAnimationFrame(main)

//function  to update elements
 function update(){
    updateSnake()
    updateFood()
    checkDeath()
 }
 function draw(){
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
    drawFood(gameBoard);
 }

 function checkDeath(){
 
   gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
 }