function setup(){
  createCanvas(400, 400);
  kobeCity(50, 50, 40);
}
function kobeCity(x, y, wh){ // whはw と hの意味
  push();
  noFill();
  strokeWeight(wh * 0.5);
  ellipseMode(RADIUS);
  strokeCap(SQUARE);
  arc(x, y, wh, wh, PI + PI / 4, PI / 4 + TWO_PI);
  arc(x + wh * 1.25, y, wh, wh, PI * 3 / 4, PI * 3 / 4 + PI);
  pop();
}
