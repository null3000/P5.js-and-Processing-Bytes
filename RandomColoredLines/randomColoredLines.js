function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    stroke(random(255), random(255), random(255));
    line(0, 100, random(800), random(800));
}

