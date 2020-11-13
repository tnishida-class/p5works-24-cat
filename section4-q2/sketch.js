// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(30, 30, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
  star(x, y, 30, 3);
  star(x + 25, y - 25, 20, 3);
  star(x - 25, y + 25, 20, 3);
  // x += vx;
  // y += vy;
  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }
  x = x % width;
  y = y % height;
}

function star(cx, cy, r, angle){
  push();
  noStroke();
  fill(255, 255, 0);
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？) わかんない
    var angle = angle / 180 * PIE;
    theta += angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
