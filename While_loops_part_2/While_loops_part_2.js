function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);
    noStroke();
    var xPos = 10;
    while (xPos < 400) {
        if (mouseX > xPos) {
            fill(64);
        } else {
            fill(196);
        }
        rect(xPos, 10, 25, 380);
        xPos += 1;
    }
    for (var lineX = 3; lineX <= 797; lineX += 3) {
        stroke(random(0, 255), random(0, 255), random(0, 255));
        line(lineX, 0, lineX, height);
    }
}

