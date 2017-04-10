function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
  noLoop();
}

function draw() {
  for (var x = 0; x < windowWidth; x+=windowWidth/25) {
    colorMode(HSB, 100);
    noStroke();
    fill(200,x/15,255);
    ellipseMode(CENTER);
    ellipse(x, windowHeight/4, 50, 50);
  }
}
