float[] circleY=new float[100];
void setup() {
  fullScreen();
  for (int i=0; i<circleY.length; i++) {
    circleY[i]=random(height);
  }
}
void draw() {
  background(50);

  for (int i=0; i<circleY.length; i++) {
    float circleX=width*i/circleY.length;
    ellipse(circleX, circleY[i], random(100), random(100));
    circleY[i]++;


    if (circleY[i]>height) {
      circleY[i]=0;
    }
  }
}
