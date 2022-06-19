int nCars =5;
int [] xPos;
int x1;
int x2;
float r;
float g;
float b;

void setup() {
  size(1000, 1000);
  xPos =initRow(nCars);
}

void draw() {
  background(200);
  drawCar(x1, 500, 200);
  x1=moveCar(x1, 6);

  drawCar(x2, 300, 40);
  x2=moveCar(x2, 4);
  
  for(int i=0; i<nCars;i++){
  drawCar(xPos[i],700, 150);
    xPos[i] = moveCar(xPos[i],-10); 
    
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
    
    
  }
  
}


void drawCar(int x, int y, int size) {
  int w = size;
  int h = size/2;
  int wheelPos = size/5;

  fill(r,g,b);
  rect(x, y, w, h);
  fill(0);

  ellipse(x+wheelPos, y, size/3, size/6);
  ellipse(x+size-wheelPos, y, size/3, size/6);
  ellipse(x+wheelPos, y+h, size/3, size/6);
  ellipse(x+size-wheelPos, y+h, size/3, size/6);
}

int[] initRow(int n) {
  int [] positions = new int[n];
  for (int i=0; i<n; i++) {
    positions[i] = i*width/n;
  }
  return positions;
}

int moveCar(int x, int speed) {
  int newPos =x+speed;
  if (newPos>width) {
    newPos=0;
  } else if (newPos<0) {
    newPos =width;
  }
  return newPos;
}
