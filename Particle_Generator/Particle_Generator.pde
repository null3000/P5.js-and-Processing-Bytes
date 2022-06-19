
int n =300;

int size =10;

float [] x =new float[n];
float [] y =new float[n];

float [] r =new float[n];
float [] g =new float[n];
float [] b =new float[n];

boolean [] moving =new boolean[n];

float [] xSpeed =new float[n];
float [] ySpeed =new float[n];

void setup() {
  size(800, 800);

  for (int i =0; i<n; i++) {

    x[i] = random(0, width);
    y[i] = random(0, height);

    r[i] = random(0, 255);
    g[i] = random(0, 255);
    b[i] = random(0, 255);

    moving[i] = false;
  }
}

void draw() {
  background(0);
  for (int i=0; i<n; i++) {
    drawDot(i);
    moveDot(i);
    collideOnWall(i);
    hitOtherParticles(i);
    moveWithMouse(i);
  }
}

void drawDot(int i) {
  fill(r[i], g[i], b[i]);
  circle(x[i], y[i], size);
}
void moveDot(int i) {
  if (moving[i] == true) {
    x[i] += xSpeed[i];
    y[i] += ySpeed[i];

    xSpeed[i] *=.99;
    ySpeed[i] *=.99;

    if (abs(xSpeed[i])<.05 && abs(ySpeed[i])<.05) {
      ySpeed[i]=0;
      xSpeed[i]=0;
      moving[i]=false;
    }
  }
}
void collideOnWall(int i) {
  if (x[i]+(size/2) > width || x[i] -(size/2)<0) {
    xSpeed[i]*=-1;
  }

  if (y[i]+(size/2) > height || y[i] -(size/2)<0) {
    ySpeed[i]*=-1;
  }
}
void hitOtherParticles(int i) {
  for (int j =0; j<n; j++) {
    if (i!=j && moving[i] == true && moving[j] == false && collisionBetween(x[i], y[i], x[j], y[j]) ==true) {
      beginMoving(i);
    }
  }
}

void beginMoving(int i) {
  moving[i] =true;
  xSpeed[i] =random(-10, 10);
  ySpeed[i] =random(-10, 10);
}

boolean collisionBetween(float x1, float y1, float x2, float y2) {
  if (x1+ (size/2)> (x2-size)&&
    x1-(size/2) < x2+(size/2) &&
    y1+ (size/2)> (y2-size) &&
    y1-(size/2) < y2+(size/2)) {
    return true;
  } else {
    return false;
  }
}

void moveWithMouse(int i) {
  if (moving[i] == false && collisionBetween(mouseX, mouseY, x[i], y[i]) == true) {
    beginMoving(i);
    
  }
}
