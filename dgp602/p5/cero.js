function setup() {
  createCanvas(windowWidth/2,windowHeight/2);
background(color(0, 0, 255));
noLoop();
}

function draw() {
  background(200);
//  ellipse(width/2, height/2, 50, 50);
//line(30, 20, 85, 75);
//triangle(30, 75, 60, 20, 90, 75);
  for (var x = 0; x < windowWidth/2; x+=10) {
    for (var y = 0; y < windowHeight/2; y+=10) {
  rect(x,y,5,5);
  }
 }
}
