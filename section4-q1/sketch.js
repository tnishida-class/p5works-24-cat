// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(200, 200, 0);
  count = (count + 1) % cycle;
  // BLANK[1]
  let size;
  // if(count < cycle / 2){
  //   size = count;
  // }
  // else{
  //   size = cycle - count;
  // }
  size = constrain(count, 50, 70);
  fill(255, 0, 0)
  ellipse(width / 2, height / 2, size);
}
