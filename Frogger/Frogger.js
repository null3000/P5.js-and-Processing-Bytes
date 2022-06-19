var n;
var x;
var y;
// 2
var yPos;
var xPos;
var speed;

function setup() {
    initializeFields();
		createCanvas(800, 400);
    // 4
    n = 5;
    x = width / 2;
    y = height / (n * 4);
    // 5
    yPos = new Array(n);
    xPos = new Array(n);
    speed = new Array(n);
    // 6
    for (var i = 0; i < n; i++) {
        // 7
        xPos[i] = (i + 1) * 50;
        // 8
        yPos[i] = (i + 1) * (height) / (n + 1);
        // 9
        speed[i] = int((random(1, 16)));
    }
}

function draw() {
    // 10
    background(90);
    // 11
    for (var i = 0; i < n; i++) {
        // 12
        rect(xPos[i], yPos[i], 100, height / 20);
        // 13
        xPos[i] -= speed[i];
        // 20
        if (x + 70 >= xPos[i] && x <= xPos[i] + 100 && y + (height / 22) >= yPos[i] && y <= yPos[i] + height / 20) {
            // 21
            print("hit ");
            textSize(128);
            text("loser", width / 2, height / 2);
            for (var k = 0; k < n; k++) {
                speed[k] = 0;
            }
        }
        // 14
        if (xPos[i] < 0) {
            xPos[i] = width;
            // 15
            speed[i] = int((random(1, 15)));
        }
    }
    // 16
    rect(x, y, 70, height / 22);
}

// 17
function keyReleased() {
    // 18
    y = y + height / 20;
    if (y > height) {
        y = height / n * 2;
    }
}

function initializeFields() {
    n = 0;
    x = 0;
    y = 0;
    yPos = null;
    xPos = null;
    speed = null;
}

