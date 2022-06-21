var x;
var yPos;
var xPos;
var speeds;
var speed;

function setup() {
    createCanvas(1000, 1000);
    x = 100;
    yPos = new Array(9);
    xPos = new Array(9);
    speeds = new Array(9);
    for (var i = 0; i < yPos.length; i++) {
        yPos[i] = (100 * i) + 100;
        xPos[i] = (50 * i) + 10;
        speeds[i] = int(random(1, 10));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < yPos.length; i++) {
        rect(xPos[i], yPos[i], 50, 30);
        xPos[i] = xPos[i] + speeds[i];
        if (xPos[i] > width) {
            xPos[i] = 0;
        }
    }
}

