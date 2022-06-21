
var nStars;
var score;
var xStar;
var yStar;
// enemy ships
var nShips;
var xShip;
var yShip;
var show;
var shipSpeed;
// player ship
var pX;
var pY;
var pSpeed;
// add shots
var shotX;
var shotY;
var shotSpeed;
var shotShow;

function init() {
    nStars = 600;
    score = 0;
    xStar = new Array(nStars);
    yStar = new Array(nStars);
    nShips = 5;
    xShip = new Array(nShips);
    yShip = new Array(nShips);
    show = new Array(nShips);
    shipSpeed = 5;
}


function setup() {
    init();
    createCanvas(800, 800);
    // intital player values
    pX = width / 2;
    pY = height - 50;
    pSpeed = 0;
    // initial shot values
    shotX = pX;
    shotY = pY;
    shotSpeed = 0;
    shotShow = false;
    for (var i = 0; i < nStars; i++) {
        xStar[i] = random(0, width);
        yStar[i] = random(0, height);
    }
    // enemy ships loop
    for (var i = 0; i < nShips; i++) {
        xShip[i] = i * (width / nShips);
        yShip[i] = 50;
        show[i] = true;
    }
}

function draw() {
    background(0, 0, 80);
    // stars
    if (score >= 5) {
        textSize(32);
        text("Imagine Actually Playing This Game", width / 8, height / 2);
        text("You'vewasted your time and are a drain on society ", width / 8, height / 1.8);
    }
    fill(255);
    for (var i = 0; i < nStars; i++) {
        circle(xStar[i], yStar[i], 5);
    }
    if (pX > width - 75) {
        pX = width - 75;
    }
    if (pX < 0) {
        pX = 0;
    }
    for (var i = 0; i < nShips; i++) {
        if (show[i] == true) {
            rect(xShip[i], yShip[i], 50, 30);
            xShip[i] += shipSpeed;
            if (shotX > xShip[i] && shotX < xShip[i] + 50 && shotY > yShip[i] && shotY < yShip[i] + 30) {
                show[i] = false;
                // reset shot
                shotY = pY;
                shotShow = false;
                shotSpeed = 0;
                score++;
            }
        }
    }
    var leftShip = 0;
    var rightShip = nShips - 1;
    textSize(128);
    text(score, 40, 200);
    while (leftShip < nShips - 1 && show[leftShip] == false) {
        leftShip++;
    }
    while (rightShip > 0 && show[rightShip] == false) {
        rightShip--;
    }
    if (xShip[rightShip] + 50 > width || xShip[leftShip] < 0) {
        shipSpeed *= -1;
    }
    rect(pX, pY, 80, 30);
    pX += pSpeed;
    if (shotShow == false) {
        shotX = pX + 40;
    } else {
        fill(255, 0, 0);
        circle(shotX, shotY, 20);
        shotY -= shotSpeed;
    }
    if (shotY - 10 < 0) {
        shotY = pY;
        shotShow = false;
        shotSpeed = 0;
    }
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        pSpeed = 5;
    }
    if (keyCode == LEFT_ARROW) {
        pSpeed = -5;
    }
}

function mousePressed() {
    shotShow = true;
    shotSpeed = 10;
}


