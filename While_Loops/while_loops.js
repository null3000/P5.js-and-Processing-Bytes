var ovalPos;
function setup() {
    initializeFields();
    createCanvas(600, 600);
}

function draw() {
    background(0);
    var x = 5;
    while (x > 0) {
        ellipse(width / 2, height / 2, 20 * x, 20 * x);
        x -= 1;
    }
    var y = 1;
    while (y < 6) {
        fill(255 / y);
        rect(30, y * 100, 150, 75);
        y += 1;
    }
    var z = 0;
    while (z < 8) {
        fill(255);
        ellipse((z * 60) + 35, ovalPos, 50, 30);
        z += 1;
        ovalPos += 1;
        if (ovalPos > height) {
            ovalPos = 0;
        }
    }
}

function initializeFields() {
    ovalPos = 80;
}

