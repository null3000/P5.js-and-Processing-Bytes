
var gameOver;
// player variables
var px;
var py;
var playerSize;
// pipe variables
var pipeX;
var pipeWidth;
var pipeSpeed;
var gapSize;
var pipe1Height;
var pipe2y;
var pipe2Height;

function setup() {
    initializeFields();
    createCanvas(800, 800);
    px = width / 5;
    py = height / 4;
    playerSize = 20;
    gameOver = false;
    pipeWidth = 50;
    resetPipe();
    pipeSpeed = 5;
}

function draw() {
    background(3, 190, 252);
    drawPlayer();
    drawPipe();
    if (gameOver === false) {
        movePlayer();
        movePipe();
        checkCollisions();
    }
}

function drawPlayer() {
    fill(140, 0, 255);
    square(px, py, playerSize);
}

function drawPipe() {
    fill(30, 180, 80);
    rect(pipeX, 0, pipeWidth, pipe1Height);
    rect(pipeX, pipe2y, pipeWidth, pipe2Height);
}

function movePlayer() {
    if (keyIsPressed === true) {
        py -= 8;
    } else {
        py += 8;
    }
}

function movePipe() {
    pipeX -= pipeSpeed;
    if (pipeX + pipeWidth < 0) {
        resetPipe();
        pipeSpeed *= 1.1;
    }
}

function checkCollisions() {
    if (py < 0 || py + playerSize > height) {
        gameOver = true;
    }
    if (px + playerSize > pipeX && px < pipeX + pipeWidth && py < pipe1Height && py + playerSize > 0) {
        gameOver = true;
    }
    if (px + playerSize > pipeX && px < pipeX + pipeWidth && py < pipe2Height + pipe2y && py + playerSize > pipe2y) {
        gameOver = true;
    }
}

function resetPipe() {
    pipeX = width;
    pipe1Height = random(height / 5, 2 * height / 3);
    gapSize = random(6 * playerSize, 12 * playerSize);
    pipe2y = pipe1Height + gapSize;
    pipe2Height = height - pipe2y;
}

function initializeFields() {
    gameOver = false;
    px = 0;
    py = 0;
    playerSize = 0;
    pipeX = 0;
    pipeWidth = 0;
    pipeSpeed = 0;
    gapSize = 0;
    pipe1Height = 0;
    pipe2y = 0;
    pipe2Height = 0;
}

