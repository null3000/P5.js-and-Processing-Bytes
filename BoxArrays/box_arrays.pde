int x;
int [] yPos;
int [] xPos;
int [] speeds;
int speed=5;

void setup() {
  size(1000, 1000);
  x=100;
  yPos = new int[9];
  xPos= new int[9];

  speeds = new int[9];

  for (int i=0; i<yPos.length; i++) {
    yPos[i]=(100*i)+100;
    xPos[i]=(50*i)+10;
    speeds[i]=int(random(1, 10));
  }
}
void draw() {
  background(0);
  for (int i=0; i<yPos.length; i++) {
    rect(xPos[i], yPos[i],50,30);
    xPos[i]= xPos[i]+speeds[i];
    
    if(xPos[i]> width){
    xPos[i]=0;
    }
  }
}
