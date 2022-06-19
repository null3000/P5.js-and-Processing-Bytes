int [] nums=new int[5];

int nCircles=1000;

float[] x=new float[nCircles];
float[] y=new float[nCircles];
float[] size=new float[nCircles];

boolean[] clicked =new boolean[nCircles];

int nClicked =0;

void setup() {
  size(800, 800);
  for (int i=0; i<nCircles; i++) {
    x[i]=random(0, width);
    y[i]=random(0, height);
    size[i]= random(3, 100);

    clicked[i]=false;
  }
}

void draw() {
  background(0);
  for (int i=0; i<nCircles; i++) {
    if (mouseX> x[i] -(size[i]/2) &&
      mouseX<x[i] + (size[i]/2) &&
      mouseY> y[i]-(size[i])&&
      mouseY> y[i]+(size[i]/2)) {
      fill(255, 0, 0);
      if (mousePressed==true) {
        nClicked++;
        clicked[i]=true;
      } else {
        fill(255);
      }
      if (clicked[i]==  false) {
        circle(x[i], y[i], size[i]);
      }
    }
  }
}
