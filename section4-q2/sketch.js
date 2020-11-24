// テキスト「アニメーション」
let x, y, vx, vy, angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 3;
  vy = 3;
  angle = 1;
}

function draw(){
  background(30, 30, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
  x += vx;
  y += vy;
  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }
  x = x % width;
  y = y % height;
  // rotate(PI / angle);
  angle += .03;
  star(x, y, 30, angle);
  star(x + 25, y - 25, 20, -angle);
  star(x - 25, y + 25, 20, angle);
  stroke(255, 250, 0);
  line(x - 60, y - 60, x - 5, y - 5);
  line(x - 60 + 25, y - 60 - 25, x - 5 + 25, y - 5 - 25);
  line(x - 60 - 25, y - 60 + 25, x - 5 - 25, y - 5 + 25);
  // 2こめ
  star(x + 80, y - 400, 30, angle);
  star(x + 25 + 80, y - 25 - 400, 20, -angle);
  star(x - 25 + 80, y + 25 - 400, 20, angle);
  stroke(255, 250, 0);
  line(x - 60 + 80, y - 60 - 400, x - 5 + 80, y - 5 - 400);
  line(x - 60 + 25 + 80, y - 60 - 25 - 400, x - 5 + 25 + 80, y - 5 - 25 - 400);
  line(x - 60 - 25 + 80, y - 60 + 25 - 400, x - 5 - 25 + 80, y - 5 + 25 - 400);
}

function star(cx, cy, r, angle){
  push();
  noStroke();
  fill(255, 255, 0);
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？) わかんない
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
