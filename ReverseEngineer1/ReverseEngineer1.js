function setup() {
    initializeFields();
    createCanvas(800, 800);
    background(224, 204, 132);
}

function draw() {
    var red = color(255, 0, 0);
    var white = color(255, 255, 255);
    var green = color(0, 255, 0);
    var lightBlue = color(0, 255, 234);
    var black = color(0, 0, 0);
    fill(green);
    triangle(790, 20, 790, 790, 90, 790);
    fill(lightBlue);
    circle(625, 625, 150);
    fill(black);
    rect(100, 550, 350, 200);
    fill(red);
    strokeWeight(20);
    stroke(white);
    square(50, 50, 350);
}

function initializeFields() {
}

