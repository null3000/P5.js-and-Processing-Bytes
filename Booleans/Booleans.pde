boolean pressed =false;

void setup() {
  size(600, 600);
}

void draw() {
  if (pressed==true) {
    background(255);
  } else {
    background(0);
  }
  rect(300, 400, 200, 100);

  if (mouseX>300 && mouseX < (300+200) && mouseY > 400 && mouseY <500) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
}
void mousePressed() {
  if (mouseX>300 && mouseX < (300+200) && mouseY > 400 && mouseY <500) {
    if (pressed == true) {
      pressed = false;
    } else {
      pressed =true;
    }
  }
}
