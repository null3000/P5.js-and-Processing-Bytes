int x;
int y;

int r=100;
int ballX;
int ballY;
int xSpeed;
int ySpeed;

void setup() {
  size(800, 800);
  y = 0;
  x = width/2;

  ballX = width/2;
  ballY =height/2;
  xSpeed = 9;
  ySpeed =-7;
}

void draw() {
  background(100);

  fill(r, 100, 150);
  rect(width/4, height/4, width/3, height/3);

  fill(r, 0, 0);
  rect(x, y, 50, 60);
  y=y+3;
  x=x-5;

  if (y>800) {
    y=0;
  }
  if (x<0) {
    x=width;
    r=255;
  } 
  else {
    r=r-1;
  }
 /**
  circle(ballY,ballX,100);
  ballX= ballX + xSpeed;
  ballY = ballY + ySpeed;

 if (ballX> width){
 xSpeed = xSpeed*-1;
 }
 if(ballY> 0){
 ySpeed= ySpeed*-1;
 }
 if (ballX< 0){
 xSpeed = xSpeed*-1;
 }
  if(ballY< 800){
 ySpeed = ySpeed*-1;
 }
 */
}
