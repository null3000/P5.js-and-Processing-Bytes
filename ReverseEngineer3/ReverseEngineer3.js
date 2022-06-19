// probably should have used arrays... oh well
var xPos1;
var xPos2;
var xPos3;
var xPos4;
var xPos5;
var xPos6;
var xPos7;
var nShips1;
var nShips2;
var nShips3;
var nShips4;
var nShips5;
var nShips6;
var nShips7;
var speed1;
var speed2;
var speed3;
var speed4;
var speed5;
var speed6;
var speed7;

function initPos(n) {
    var positions = new Array(n);
    for (var i = 0; i < n; i++) {
        positions[i] = i * width / n;
    }
    return positions;
}

function setup() {
    initializeFields();
    createCanvas(800, 800);
    xPos1 = initPos(nShips1);
    xPos2 = initPos(nShips2);
    xPos3 = initPos(nShips3);
    xPos4 = initPos(nShips4);
    xPos5 = initPos(nShips5);
    xPos6 = initPos(nShips6);
    xPos7 = initPos(nShips7);
}

function draw() {
    background(0);
    for (var i = 0; i < nShips1; i++) {
        drawShips(xPos1[i], 50, 50);
        xPos1[i] += speed1;
        if (xPos1[i] + 50 > width || xPos1[i] < 0) {
            speed1 *= -1;
        }
    }
    for (var i = 0; i < nShips2; i++) {
        drawShips(xPos2[i], 150, 50);
        xPos2[i] += speed2;
        if (xPos2[i] + 50 > width || xPos2[i] < 0) {
            speed2 *= -1;
        }
    }
    for (var i = 0; i < nShips3; i++) {
        drawShips(xPos3[i], 250, 50);
        xPos3[i] += speed3;
        if (xPos3[i] + 50 > width || xPos3[i] < 0) {
            speed3 *= -1;
        }
    }
    for (var i = 0; i < nShips4; i++) {
        drawShips(xPos4[i], 350, 50);
        xPos4[i] += speed4;
        if (xPos4[i] + 50 > width || xPos4[i] < 0) {
            speed4 *= -1;
        }
    }
    for (var i = 0; i < nShips5; i++) {
        drawShips(xPos5[i], 450, 50);
        xPos5[i] += speed5;
        if (xPos5[i] + 50 > width || xPos5[i] < 0) {
            speed5 *= -1;
        }
    }
    for (var i = 0; i < nShips6; i++) {
        drawShips(xPos6[i], 550, 50);
        xPos6[i] += speed6;
        if (xPos6[i] + 50 > width || xPos6[i] < 0) {
            speed6 *= -1;
        }
    }
    for (var i = 0; i < nShips7; i++) {
        drawShips(xPos7[i], 650, 50);
        xPos7[i] += speed7;
        if (xPos7[i] + 50 > width || xPos7[i] < 0) {
            speed7 *= -1;
        }
    }
}

function drawShips(x, y, size) {
    fill(180);
    rect(x, y, size, size / 3);
    triangle(x, y, x + size / 5, y, x + size / 10, y + size);
    triangle(x + size, y, x + size - size / 5, y, x + size - size / 10, y + size);
    triangle(x + (3 * size / 10), y, x + (7 * size / 10), y, x + (size / 2), y + (2 * size));
}

function initializeFields() {
    xPos1;
    xPos2;
    xPos3;
    xPos4;
    xPos5;
    xPos6;
    xPos7;
    nShips1 = 7;
    nShips2 = 6;
    nShips3 = 5;
    nShips4 = 4;
    nShips5 = 3;
    nShips6 = 2;
    nShips7 = 1;
    speed1 = 1;
    speed2 = 2;
    speed3 = 3;
    speed4 = 4;
    speed5 = 5;
    speed6 = 6;
    speed7 = 7;
}

