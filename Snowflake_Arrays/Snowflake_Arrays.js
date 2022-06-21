var circleY;

function setup() {
    createCanvas(800, 800);
		circleY = new Array(100);
    for (var i = 0; i < circleY.length; i++) {
        circleY[i] = random(height);
    }
}

function draw() {
    background(50);
    for (var i = 0; i < circleY.length; i++) {
        var circleX = width * i / circleY.length;
        ellipse(circleX, circleY[i], random(100), random(100));
        circleY[i]++;
        if (circleY[i] > height) {
            circleY[i] = 0;
        }
    }
}
