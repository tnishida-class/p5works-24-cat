// 小手調べ
function setup(){
  createCanvas(100,100);
  background(255);
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    if(i < 5){
      noFill();
      stroke(0, 0, 255);
      ellipse(50, 50, (i + 1) * 10)
    }
    else{
      noFill();
      stroke(255, 0, 0);
      ellipse(50, 50, (i + 1) * 10);
    }
  }
}
