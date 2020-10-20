function setup() {
  createCanvas(100,100);
  background(196);
  fill(0);

  for(let i = 0; i < 9; i++) {
    line(i, 0 , i, 100);
    if(i < 4) {
      strokeWeight(2);
    }
    else(i > 4) {
      storkeWeight(1);
    }
  }
}
