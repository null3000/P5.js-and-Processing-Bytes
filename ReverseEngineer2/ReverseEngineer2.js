var rectH;
var rectW;
var circleSize;

function setup() {
    rectH = 100;
    rectW = 100;
    circleSize = 200;
    createCanvas(800, 800);
}

function draw() {
    background(0);
    rect(mouseX, mouseY, rectW, rectH);
    rectW = rectW + 2;
    rectH = rectH + 2;
    circle(400, 400, circleSize);
    circleSize = circleSize - 1;
    circle(400, 500, 50);
}

