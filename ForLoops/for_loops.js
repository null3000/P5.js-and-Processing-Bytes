function setup() {
    initializeFields();
    createCanvas(800, 800);
}

function draw() {
    background(100);
    stroke(255);
    for (var lineX = 3; lineX <= 797; lineX += 3) {
        stroke(random(0, 255), random(0, 255), random(0, 255));
        line(lineX, 0, lineX, height);
    }
}

function initializeFields() {
}

