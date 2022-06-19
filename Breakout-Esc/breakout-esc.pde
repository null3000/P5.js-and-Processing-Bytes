//ball
float ballX;
float ballY;
float xSpeed;
float ySpeed;
//paddle
float paddleX;
//score
int score;
//level colors
int r;
int g;
int b;
//level
int level;


void setup() {
  size(800, 800);
  smooth(8);

  //ball starts
  ballX = width/2;
  ballY = height/2;


  score = 0;
  r =255;
  g =255;
  b =255;
  level =0;
}



void draw() {

  background(0);
  
  frameRate(60);
  textSize(128);
  text(score, 40, 120);

  textSize(30);
  fill(255);
  text("Level 1", 700, 120);


  fill(255, 0, 0);
  text("Level 2", 700, 150);

  fill(0, 255, 0);
  text("Level 3", 700, 180);

  fill(0, 0, 255);
  text("Level 4", 700, 210);

  fill(255, 0, 255);
  text("Level 5", 700, 240);

  fill(0, 255, 255);
  text("Level 6", 700, 270);

  fill(r, g, b);

  circle(ballX, ballY, 50);
  ballX=ballX+xSpeed;
  ballY += ySpeed;

  if (ballX-25<0 || ballX + 25 > width) {
    xSpeed *= -1.025;
  }

  if (ballY-25<0) {
    ySpeed *= -1.;
  }


  rect(mouseX-100, height-5, 200, 20);
  if (ballX>mouseX-100 && ballX < mouseX+100 && ballY +10  > height-10 && ballY -50  <height -10) {
    ySpeed *= -1;
    score+=1;
  }
  if (score >= 0) {
    level =1;
    r=255;
    g=255;
    b=255;
  }
  

  if (score >= 5) {
    level =2;
    r=255;
    g=0;
    b=0;
  }
  if (score >= 10) {
    level =3;
    r=0;
    b=0;
    g=255;
  }
  if (score >= 15) {
    level =4;
    r=0;
    b=255;
    g=0;
  }
  if (score >= 20) {
    level =5;
    r=255;
    b=255;
    g=0;
  }
  if (score >= 25) {
    r=0;
    b=255;
    g=255;
    level= 6;
  }
  if (ballY>width) {
    textSize(64);
    delay(10);
    text("GAME OVER", width/3.3, height/2);
    ballX = 900;
    ballY = 900;
    r=255;
    g=255;
    b=255;

    textSize(32);
    text("Press Any Key To Play Again", width/4, height/1.5);
    
    text("Final Level:" + level,width/4, height/1.7);
    
    text("Final Score:" + score,width/4, height/1.6);
  }

  if (ballY==height/2 && ballX==width/2) {
    textSize(32);
    text("Press Any Key To Start", width/3, height/1.5);
  }
}



void keyPressed() {
  background(0);
  ballX = width/2;
  ballY = height/3;
  xSpeed = random(3, 8);
  ySpeed = -1 * random(3, 8);
  score=0;
  r =255;
  g =255;
  b =255;

  xSpeed = random(3, 8);
  ySpeed = -1 * random(3, 8);
}
