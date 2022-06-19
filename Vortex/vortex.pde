float AA=0;
float AR=0;
float RT = 30;
float S =1;
color red= color(255, 0, 0);
color black =color(0, 0, 0);

void setup() {
fullScreen();
  smooth();
  noStroke();
}

void draw() {
  background(black);
  float diam=width;
  float angle = AA;

  while (diam>0) {
    fill(red);
    ellipse(width/2, height/2, diam, diam);
    fill(black);
    arc(width/2, height/2, diam, diam, angle, angle+PI);
    diam -= RT;
    angle += S*RT;
  }
  AA+=S*.01;
  AR +=S*.005;
}

void keyTyped(){
if (key == 'r')RT=max(RT-10,10);
if (key == 'R')RT+=10;
if (key == 's')S=max(RT-.1,.1);
if (key == 'S')RT+=.01;
}
