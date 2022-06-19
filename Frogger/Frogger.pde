//1
int n;
int x;
int y;
//2
int [] yPos;
int [] xPos;
int [] speed;

void setup() {
  //3
  fullScreen();
  //4
  n=5;
  x=width/2;
  y=height/(n*4);

  //5
  yPos = new int[n];
  xPos= new int[n];
  speed = new int[n];

  //6
  for (int i=0; i<n; i++) {
    //7
    xPos[i] = (i+1) *50;
    //8
    yPos[i] = (i+1) *(height)/(n+1);
    //9
    speed[i]=(int)(random(1, 16));
  }
}
void draw() {
  //10
  background(90);
  //11
  for (int i=0; i<n; i++) {
    //12
    rect(xPos[i], yPos[i], 100, height/20);
    //13
    xPos[i]-=speed[i];
    //20
    if (x+70>=xPos[i] &&
      x<=xPos[i]+100 &&
      y+(height/22)>=yPos[i] &&
      y<=yPos[i]+height/20) {
      //21

      print("hit ");
      textSize(128);
      text("loser", width/2, height/2);

      for (int k = 0; k<n; k++) {
        speed[k] = 0;
      }
    }

    //14
    if (xPos[i]<0) {
      xPos[i]=width;
      //15
      speed[i]=(int)(random(1, 15));
    }
  }
  //16
  rect(x, y, 70, height/22);
}

//17
void keyReleased() {
  //18
  y=y+height/20;
  if (y>height) {
    y=height/n*2;
  }
}
