// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // if(count < 50){ count = (count + 1) % cycle; }
  // else if(count = 50){ count = count; }
  // else if(count > 50){ count = (-count - 1) % cycle; }
  // BLANK[1]
  ellipse(width / 2, height / 2, count);
}
