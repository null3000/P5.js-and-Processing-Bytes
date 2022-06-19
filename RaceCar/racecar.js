var nCars;
var xPos;
var x1;
var x2;
var r;
var g;
var b;

function setup() {
    initializeFields();
    createCanvas(1000, 1000);
    xPos = initRow(nCars);
}

function draw() {
    background(200);
    drawCar(x1, 500, 200);
    x1 = moveCar(x1, 6);
    drawCar(x2, 300, 40);
    x2 = moveCar(x2, 4);
    for (var i = 0; i < nCars; i++) {
        drawCar(xPos[i], 700, 150);
        xPos[i] = moveCar(xPos[i], -10);
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
}

function drawCar(x, y, size) {
    var w = size;
    var h = size / 2;
    var wheelPos = size / 5;
    fill(r, g, b);
    rect(x, y, w, h);
    fill(0);
    ellipse(x + wheelPos, y, size / 3, size / 6);
    ellipse(x + size - wheelPos, y, size / 3, size / 6);
    ellipse(x + wheelPos, y + h, size / 3, size / 6);
    ellipse(x + size - wheelPos, y + h, size / 3, size / 6);
}

function initRow(n) {
    var positions = new Array(n);
    for (var i = 0; i < n; i++) {
        positions[i] = i * width / n;
    }
    return positions;
}

function moveCar(x, speed) {
    var newPos = x + speed;
    if (newPos > width) {
        newPos = 0;
    } else if (newPos < 0) {
        newPos = width;
    }
    return newPos;
}

function initializeFields() {
    nCars = 5;
    xPos = null;
    x1 = 0;
    x2 = 0;
    r = 0;
    g = 0;
    b = 0;
}

