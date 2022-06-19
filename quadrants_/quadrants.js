
function setup() {
    initializeFields();
    createCanvas(600, 600);
}

function draw() {
    background(100);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    fill(0);
    if (mouseX > 0 && mouseX < width / 2 && mouseY > 0 && mouseY < height / 2) {
        rect(0, 0, width / 2, height / 2);
    }
    if (mouseX > width / 2 && mouseX < width && mouseY < height / 2 && mouseY > 0) {
        rect(width / 2, 0, width / 2, height / 2);
    }
    if (mouseX > 0 && mouseX < width / 2 && mouseY > height / 2 && mouseY > 0) {
        rect(0, height / 2, width / 2, height / 2);
    }
    if (mouseX > width / 2 && mouseX < width && mouseY > height / 2 && mouseY > 0) {
        rect(width / 2, height / 2, width / 2, height / 2);
    }
}

function initializeFields() {
}

