var x;
var y;
var r;
var ballX;
var ballY;
var xSpeed;
var ySpeed;

function setup() {
    initializeFields();
    createCanvas(800, 800);
    y = 0;
    x = width / 2;
    ballX = width / 2;
    ballY = height / 2;
    xSpeed = 9;
    ySpeed = -7;
}

function draw() {
    background(100);
    fill(r, 100, 150);
    rect(width / 4, height / 4, width / 3, height / 3);
    fill(r, 0, 0);
    rect(x, y, 50, 60);
    y = y + 3;
    x = x - 5;
    if (y > 800) {
        y = 0;
    }
    if (x < 0) {
        x = width;
        r = 255;
    } else {
        r = r - 1;
    }
}

function initializeFields() {
    x = 0;
    y = 0;
    r = 100;
    ballX = 0;
    ballY = 0;
    xSpeed = 0;
    ySpeed = 0;
}

