//Board
var blockSize = 20;
var rows = 20;
var cols = 20;
var board;
var context;

//the snakes head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//the snakes food
var foodX;
var foodY;

var gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //this is used for the drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000 / 10); // update placement in canvas every 100 milliseconds
};