void setup(){
size(800,800);
background(175);

}
void draw(){
 

  
  
color black = color (0,0,0);
color skin = color(215, 159, 136);

//head
fill(skin);
ellipse(400,200,100,100);

//torso
line(400,250,400,450);

//arm1
line(400,300,500,280); 

//arm 2
line(400,300,300,280);

//leg 1
line(400,450,500,535);

//leg 2
line(400,450,300,535);

//eye1
ellipse(380,195,10,10);

//eye2
ellipse(420,195,10,10);

//pupil1
fill(black);
ellipse(380,195,4,4);

//pupil2
fill(black);
ellipse(420,195,4,4);

//smile
noFill();
arc(400, 230, 35, 25, 0, PI);
  }

void keyPressed(){
    arc(400, 230, 35, 25, PI, TWO_PI);
}
void mousePressed(){
    background(70,70,150);
}
