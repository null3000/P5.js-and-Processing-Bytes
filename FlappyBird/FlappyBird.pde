boolean gameOver;

//player variables
int px;
int py;
int playerSize;

//pipe variables
int pipeX;
int pipeWidth;
float pipeSpeed;
float gapSize;

float pipe1Height;
float pipe2y;
float pipe2Height;


void setup() {
  size(800, 800);
  px=width/5;
  py=height/4;
  playerSize=20;

  gameOver=false;
  pipeWidth=50;
  resetPipe();
  pipeSpeed=5;
}

void draw() {
  background(3, 190, 252);
  drawPlayer();
  drawPipe();

  if (gameOver == false) {
    movePlayer();
    movePipe();
    checkCollisions();
  }
}
void drawPlayer() {
  fill(140, 0, 255);
  square(px, py, playerSize);
}
void drawPipe() {
  fill(30, 180, 80);
  rect(pipeX, 0, pipeWidth, pipe1Height);
  rect(pipeX, pipe2y, pipeWidth, pipe2Height);
}

void movePlayer() {
  if (keyPressed==true) {
    py-=8;
  } else {
    py+=8;
  }
}
void movePipe() {
  pipeX-=pipeSpeed;

  if (pipeX+pipeWidth<0) {
    resetPipe();
    pipeSpeed *= 1.1;
  }
}
void checkCollisions() {
  if (py<0 || py+playerSize>height) {
    gameOver=true;
  }

  if (px+playerSize> pipeX &&
    px<pipeX+pipeWidth  &&
    py<pipe1Height &&
    py+playerSize>0) {

    gameOver=true;
  }
  if (px+playerSize>pipeX &&
    px<pipeX+pipeWidth &&
    py<pipe2Height +pipe2y &&
    py+playerSize>pipe2y) {
    gameOver=true;
  }
}
void resetPipe() {
  pipeX=width;
  pipe1Height =random(height/5,2*height/3);
  gapSize=random(6*playerSize,12*playerSize);
  
  pipe2y=pipe1Height+gapSize;
  pipe2Height=height-pipe2y;
}
