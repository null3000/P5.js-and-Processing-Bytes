var n;
var size;
var x;
var y;
var r;
var g;
var b;
var moving;
var xSpeed;
var ySpeed;

function init() {
    n = 300;
    size = 10;
    x = new Array(n);
    y = new Array(n);
    r = new Array(n);
    g = new Array(n);
    b = new Array(n);
    moving = new Array(n);
    xSpeed = new Array(n);
    ySpeed = new Array(n);
}

function setup() {
    init();
    createCanvas(800, 800);
    for (var i = 0; i < n; i++) {
        x[i] = random(0, width);
        y[i] = random(0, height);
        r[i] = random(0, 255);
        g[i] = random(0, 255);
        b[i] = random(0, 255);
        moving[i] = false;
    }
}

function draw() {
    background(0);
    for (var i = 0; i < n; i++) {
        drawDot(i);
        moveDot(i);
        collideOnWall(i);
        hitOtherParticles(i);
        moveWithMouse(i);
    }
}

function drawDot(i) {
    fill(r[i], g[i], b[i]);
    circle(x[i], y[i], size);
}

function moveDot(i) {
    if (moving[i] == true) {
        x[i] += xSpeed[i];
        y[i] += ySpeed[i];
        xSpeed[i] *= .99;
        ySpeed[i] *= .99;
        if (abs(xSpeed[i]) < .05 && abs(ySpeed[i]) < .05) {
            ySpeed[i] = 0;
            xSpeed[i] = 0;
            moving[i] = false;
        }
    }
}

function collideOnWall(i) {
    if (x[i] + (size / 2) > width || x[i] - (size / 2) < 0) {
        xSpeed[i] *= -1;
    }
    if (y[i] + (size / 2) > height || y[i] - (size / 2) < 0) {
        ySpeed[i] *= -1;
    }
}

function hitOtherParticles(i) {
    for (var j = 0; j < n; j++) {
        if (i != j && moving[i] == true && moving[j] == false && collisionBetween(x[i], y[i], x[j], y[j]) == true) {
            beginMoving(i);
        }
    }
}

function beginMoving(i) {
    moving[i] = true;
    xSpeed[i] = random(-10, 10);
    ySpeed[i] = random(-10, 10);
}

function collisionBetween(x1, y1, x2, y2) {
    if (x1 + (size / 2) > (x2 - size) && x1 - (size / 2) < x2 + (size / 2) && y1 + (size / 2) > (y2 - size) && y1 - (size / 2) < y2 + (size / 2)) {
        return true;
    } else {
        return false;
    }
}

function moveWithMouse(i) {
    if (moving[i] == false && collisionBetween(mouseX, mouseY, x[i], y[i]) == true) {
        beginMoving(i);
    }
}


