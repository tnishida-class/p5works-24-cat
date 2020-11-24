// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
}

function draw(){
  background(200, 200, 0);
  count = (count + 2) % cycle;
  // BLANK[1]
  let size;
  if(count < cycle / 2){
    size = count;
  }
  else{
    size = cycle - count;
  }
  // size = constrain(count, 50, 70);
  fill(255, 0, 0);
  arc(width / 2, height / 2, size, size, PI + HALF_PI + PI / 8, TWO_PI + HALF_PI + PI / 8);
  fill(0, 0, 255);
  arc(width / 2, height / 2, size, size, HALF_PI + PI / 8, PI + HALF_PI + PI / 8);
}
// 心臓っぽいものが分からなかったので2つ用意しておりました。出していなかった方を表示し直しました。
