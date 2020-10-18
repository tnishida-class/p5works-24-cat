function setup(){
  createCanvas(100,100);
  background(0);
  let x = 10;
  while(x <= 90){
    rect(x, 0, x, 100);
    x = x + 10;
  }
  // for(x = 10, x <= 90, x += 10){
    // line(x, 0, x, 100)
  // }
}
