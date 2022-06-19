
function setup() {
    initializeFields();
    createCanvas(800, 800);
    background(0);
    stroke(255);
}

function draw() {
    line(0, random(800), 800, random(800));
}

function initializeFields() {
}