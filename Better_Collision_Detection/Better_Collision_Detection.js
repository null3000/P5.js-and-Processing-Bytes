var x;
var r;
var g;
var b;

function setup() {
    createCanvas(800, 800);
    x = 0;
}

function draw() {
    background(r, g, b);
    rect(x, 50, 100, 200);
    x += 2;
    if (x > 800) {
        x = 0;
    }
    rect(600, 75, 75, 75);
    if (675 < x + 100 && 600 > x && 75 > 50 && 75 + 75 < 50 + 200) {
        r = 200;
        g = 10;
        b = 150;
    } else {
        r = 0;
        g = 200;
        b = 150;
    }
}



