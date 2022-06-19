
function setup() {
    initializeFields();
    createCanvas(800, 800);
}

function draw() {
    background(0);
    fill(30, 200, 90);
    rect(mouseX - 150, mouseY - 200, 300, 400);
    fill(mouseX, mouseY / 3, mouseX / 3);
    circle(300, mouseY, 50);
    fill(mouseY / 3, mouseX, mouseX / 3);
    circle(400, mouseY, 50);
    fill(mouseX / 3, mouseY, mouseX / 3);
    circle(200, mouseY, 50);
}

function mousePressed() {
    fill(255, 0, 0);
    rect(mouseX - 150, mouseY - 200, 300, 400);
}

function keyPressed() {
    background(255);
}

function initializeFields() {
}

