void setup() {
  size(800, 800);
  noStroke();
  noLoop();
}


void drawCircle(int x, int radius, int level) {
  float pingPong =126 * level/4.0;
  fill(pingPong);
  ellipse(x, height/2, radius*2, radius*2);
  if (level>1) {
    level-=1;
    drawCircle(x-radius/2, radius/2, level);
    drawCircle(x+radius/2, radius/2, level);
  }
}
void draw(){
drawCircle(width/2, 280,6);
}
