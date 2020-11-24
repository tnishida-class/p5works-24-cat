// テキスト「アニメーション」
let x, y, vx, vy;
const g = 0.5; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8; // 先に変数を宣言しておく。らしい。
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  x += vx; // xをvxずつ増やしていく
  y += vy; // yをvyずつ増やしていく

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);
  // min.が-vyMax=-30, maxがvyMax=30で， vy + gが指すものは何だろうか？

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }
  // これでもいけそう
  // x = x % width;
  // y = y % height;

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; } // 座標の端を越えたら逆方向へ
  if(y > height || y < 0){ vy = -1 * vy; }
  // 上に同じ，ただし，yがheightよりも大きくなったら，の指定だけのため，
  // これだけだとyが0よりも小さくなってしまうときは一生そこに留まり続けるのか？
  // その意味で上の重力に関するコードがあるのならば取りあえず納得はできる
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  // こいつらなかったらどうなるんかな？
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
