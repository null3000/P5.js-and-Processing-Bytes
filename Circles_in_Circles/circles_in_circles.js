function setup() {
    initializeFields();
    createCanvas(800, 800);
    noStroke();
    noLoop();
}

function drawCircle(x, radius, level) {
    var pingPong = 126 * level / 4.0;
    fill(pingPong);
    ellipse(x, height / 2, radius * 2, radius * 2);
    if (level > 1) {
        level -= 1;
        drawCircle(x - radius / 2, radius / 2, level);
        drawCircle(x + radius / 2, radius / 2, level);
    }
}

function draw() {
    drawCircle(width / 2, 280, 6);
}

function initializeFields() {
}

