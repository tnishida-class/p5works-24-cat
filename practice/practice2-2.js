function setup(){
  createCanvas(270, 180);
  fill(0);
  let h = height / 13;
  for(let i = 0; i < 13; i++){
    if(i % 2 == 0){
      fill(255, 0, 0)
      rect(0, i * h, width, h);
    }
    else{
      fill(255);
      rect(0, i * h, width, h);
    }
  }
  fill(0, 0, 255)
  rect(0, 0, width * 3 / 7, 7 * h);
}
