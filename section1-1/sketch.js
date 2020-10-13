function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);

  fill(278, 138, 122);
  triangle(12,120,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,108,106,108,106,0);
  fill(123, 242, 98);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
