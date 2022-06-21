var n;
var x;
var y;
var yPos;
var xPos;
var speed;

function setup() {
		createCanvas(800, 400);
    n = 5;
    x = width / 2;
    y = height / (n * 4);
    yPos = new Array(n);
    xPos = new Array(n);
    speed = new Array(n);
    for (var i = 0; i < n; i++) {
        xPos[i] = (i + 1) * 50;
        yPos[i] = (i + 1) * (height) / (n + 1);
        speed[i] = int((random(1, 16)));
    }
}

function draw() {
    background(90);
    for (var i = 0; i < n; i++) {
        rect(xPos[i], yPos[i], 100, height / 20);
        xPos[i] -= speed[i];
        if (x + 70 >= xPos[i] && x <= xPos[i] + 100 && y + (height / 22) >= yPos[i] && y <= yPos[i] + height / 20) {
            console.log("hit");
            textSize(128);
            text("loser", width / 2, height / 2);
            for (var k = 0; k < n; k++) {
                speed[k] = 0;
            }
        }
        if (xPos[i] < 0) {
            xPos[i] = width;
            speed[i] = int((random(1, 15)));
        }
    }
    rect(x, y, 70, height / 22);
}

function keyReleased() {
    y = y + height / 20;
    if (y > height) {
        y = height / n * 2;
    }
}