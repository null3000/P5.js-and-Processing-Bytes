void setup() {
  size(800,800);
}

void draw() {
  background(0);
   fill(30,200,90);
   rect(mouseX - 150,mouseY - 200,300,400);
  
   fill(mouseX,mouseY/3,mouseX/3);
   circle(300,mouseY,50);
   
   fill(mouseY/3,mouseX,mouseX/3);
   circle(400,mouseY,50);
   
   fill(mouseX/3,mouseY,mouseX/3);
   circle(200,mouseY,50);
  
   
   
}

void mousePressed(){
   fill(255,0,0);
    rect(mouseX - 150,mouseY - 200,300,400);

}

void keyPressed(){
  background(255);

}
