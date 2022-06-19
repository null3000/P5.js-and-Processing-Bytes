int rectH = 100;
int rectW = 100;
int circleSize = 200;

void setup(){
size(800,800);


}

void draw(){
  background(0);
rect(mouseX,mouseY,rectW,rectH);
rectW = rectW + 2;
rectH = rectH + 2;



circle(400,400,circleSize);
circleSize = circleSize - 1;

circle(400,500,50);

}