// probably should have used arrays... oh well
int [] xPos1;
int [] xPos2;
int [] xPos3;
int [] xPos4;
int [] xPos5;
int [] xPos6;
int [] xPos7;

int nShips1 =7;
int nShips2 =6;
int nShips3=5;
int nShips4=4;
int nShips5=3;
int nShips6=2;
int nShips7=1;

int speed1=1;
int speed2=2;
int speed3=3;
int speed4=4;
int speed5=5;
int speed6=6;
int speed7=7;

int[] initPos(int n) {
  int[] positions =new int [n];
  for (int i=0; i<n; i++) {
    positions[i] =i*width/n;
  }
  return  positions;
}


void setup() {
  size(800, 800);

  xPos1 =initPos(nShips1);
  xPos2 =initPos(nShips2);
  xPos3=initPos(nShips3);
  xPos4=initPos(nShips4);
  xPos5=initPos(nShips5);
  xPos6=initPos(nShips6);
  xPos7=initPos(nShips7);
}

void draw() {
  background(0);
  for (int i=0; i<nShips1; i++) {
    drawShips(xPos1[i], 50, 50);

    xPos1[i]+=speed1;

    if (xPos1[i] +50 >width || xPos1[i] <0) {
      speed1*= -1;
    }
  }

  for (int i=0; i<nShips2; i++) {
    drawShips(xPos2[i], 150, 50);

    xPos2[i]+=speed2;

    if (xPos2[i] +50 >width || xPos2[i] <0) {
      speed2*= -1;
    }
  }

  for (int i=0; i<nShips3; i++) {
    drawShips(xPos3[i], 250, 50);

    xPos3[i]+=speed3;

    if (xPos3[i] +50 >width || xPos3[i] <0) {
      speed3*= -1;
    }
  }
  for (int i=0; i<nShips4; i++) {
    drawShips(xPos4[i], 350, 50);

    xPos4[i]+=speed4;

    if (xPos4[i] +50 >width || xPos4[i] <0) {
      speed4*= -1;
    }
  }
 
  for (int i=0; i<nShips5; i++) {
    drawShips(xPos5[i], 450, 50);

    xPos5[i]+=speed5;

    if (xPos5[i] +50 >width || xPos5[i] <0) {
      speed5*= -1;
    }
  }
   for (int i=0; i<nShips6; i++) {
    drawShips(xPos6[i], 550, 50);

    xPos6[i]+=speed6;

    if (xPos6[i] +50 >width || xPos6[i] <0) {
      speed6*= -1;
    }
  }
  for (int i=0; i<nShips7; i++) {
    drawShips(xPos7[i], 650, 50);

    xPos7[i]+=speed7;

    if (xPos7[i] +50 >width || xPos7[i] <0) {
      speed7*= -1;
    }
  }
}

void drawShips(int x, int y, int size) {
  fill(180);
  rect(x, y, size, size/3);
  triangle(x, y, x+ size/5, y, x+size/10, y+size);

  triangle(x+size, y, x+size-size/5, y, x+size-size/10, y+size);

  triangle(x+(3*size/10), y, x+(7*size/10), y, x+(size/2), y+(2*size));
}
