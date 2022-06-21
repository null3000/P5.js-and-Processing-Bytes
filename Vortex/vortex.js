var AA;
var AR;
var RT;
var S;
var red;
var black;

function setup() {
    AA = 0;
    AR = 0;
    RT = 30;
    S = 1;
    red = color(255, 0, 0);
    black = color(0, 0, 0);
    createCanvas(800, 800);
    smooth();
    noStroke();
}

function draw() {
    background(black);
    var diam = width;
    var angle = AA;
    while (diam > 0) {
        fill(red);
        ellipse(width / 2, height / 2, diam, diam);
        fill(black);
        arc(width / 2, height / 2, diam, diam, angle, angle + PI);
        diam -= RT;
        angle += S * RT;
    }
    AA += S * .01;
    AR += S * .005;
}

function keyTyped() {
    if (key == 'r')
        RT = max(RT - 10, 10);
    if (key == 'R')
        RT += 10;
    if (key == 's')
        S = max(RT - .1, .1);
    if (key == 'S')
        RT += .01;
}

