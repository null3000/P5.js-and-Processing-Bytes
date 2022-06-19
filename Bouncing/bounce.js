var x;
var speed;
var g;

function setup() {
    initializeFields();
    createCanvas(800, 800);
    x = width / 2;
    speed = 5;
    g = 100;
}

function draw() {
    background(100);
    fill(0, g, 0);
    rect(x, 100, 200, 150);
    x = x + speed;
    if (x + 200 > 800 || x < 0) {
        speed = speed * -1;
    }
}

function mousePressed() {
    if (mouseX > x && mouseX < x + 200 && mouseY > 100 && mouseY < 250) {
        g = g + 10;
    }
}

function initializeFields() {
    x = 0;
    speed = 0;
    g = 0;
}

