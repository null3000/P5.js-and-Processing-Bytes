var nums;
var nCircles;
var x;
var y;
var size;
var clicked;
var nClicked;

function setup() {
    initializeFields();
    createCanvas(800, 800);
    for (var i = 0; i < nCircles; i++) {
        x[i] = random(0, width);
        y[i] = random(0, height);
        size[i] = random(3, 100);
        clicked[i] = false;
    }
}

function draw() {
    background(0);
    for (var i = 0; i < nCircles; i++) {
        if (mouseX > x[i] - (size[i] / 2) && mouseX < x[i] + (size[i] / 2) && mouseY > y[i] - (size[i]) && mouseY > y[i] + (size[i] / 2)) {
            fill(255, 0, 0);
            if (mouseIsPressed === true) {
                nClicked++;
                clicked[i] = true;
            } else {
                fill(255);
            }
            if (clicked[i] === false) {
                circle(x[i], y[i], size[i]);
            }
        }
    }
}

function initializeFields() {
    nums = new Array(5);
    nCircles = 1000;
    x = new Array(nCircles);
    y = new Array(nCircles);
    size = new Array(nCircles);
    clicked = new Array(nCircles);
    nClicked = 0;
}

