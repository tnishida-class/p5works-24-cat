// 最終課題を制作しよう
// リンク　https://tnishida-class.github.io/p5works-24-cat/finalwork/index.html
let img1, img2, img3, img4, img5;
function preload(){
  img1 = loadImage('Eye.png');
  img2 = loadImage('Ear.png');
  img3 = loadImage('Nose.png');
  img4 = loadImage('Sun.png');
  img5 = loadImage('Speaker.png');
  img6 = loadImage('Food.png');
  img7 = loadImage('Brain.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  push();
  stroke(0);
  fill(0);
  textSize(height / 30);
  text("感覚が生じる仕組み　簡便図", width / 3 * 2, height / 8 * 1);
  text("A", 0, height / 40);
  text("B", 0, height / 5 * 2 + height / 40);
  text("C", 0, height / 5 * 4 + height / 40);
  pop();
  // テキスト入れ込み，push();pop();は余計な混じり込みを防ぐためこの後も随所に入れている
  image(img1, width / 4 * 1, 0, width / 10, height / 5); // Eye
  image(img2, width / 4 * 1, height / 5 * 2, width / 10, height / 5); // Ear
  image(img3, width / 4 * 1, height / 5 * 4, width / 10, height / 5); // Nose
  image(img7, width / 3 * 2, height / 8 * 1, width / 3, height / 4 * 3); // Brain
  // 画像の挿入
  line(width / 20 * 7, height / 10, width / 100 * 95, height / 2); // eye
  line(width / 20 * 7, height / 2, width / 100 * 90, height / 3); // ear
  line(width / 20 * 7, height / 10 * 9, width / 100 * 70, height / 2); // nose
  // 神経代わりの線
  noFill();
  stimulation(width / 20 * 13, height / 10 * 3, height / 10); // eye
  stimulation(width / 8 * 5, height / 12 * 5, height / 10); // ear
  stimulation(width / 40 * 21, height / 10 * 7, height / 10); // nose
  // 刺激マーク（下部に自作関数）
  let x = mouseX; // 長くなるので変数宣言し代入
  let y = mouseY;
  let w = width;
  let h = height;
  KeyPressed(); // 画面に表示されたものと同じキーを押すと，下に作成した関数に従って動くものが3つ
  if(x > w / 20 * 13 - h / 20 && x < w / 20 * 13 + h / 20 && y > h / 10 * 3 - h / 20 && y < h / 10 * 3 + h / 20){ // マウスカーソル：目
    push();
    fill(255, 255, 0);
    stroke(255, 255, 0);
    stimulation(width / 20 * 13, height / 10 * 3, height / 10); // eye
    textSize(height / 30);
    text("視覚in後頭葉", width / 100 * 90, height / 2);
    pop();
    push();
    stroke(0);
    fill(0);
    textSize(height / 30);
    text("神経の興奮だけでも感覚は生じる", width / 3 * 2, height / 8 * 2);
    text("特殊神経エネルギー説", width / 6 * 4 , height / 60 * 59);
    pop();
  }
  if(x > w / 8 * 5 - h / 20 && x < w / 8 * 5 + h / 20 && y > h / 12 * 5 - h / 20 && y < h / 12 * 5 + h / 20){ // マウスカーソル：耳
    push();
    fill(0, 0, 255);
    stroke(0, 0, 255);
    stimulation(width / 8 * 5, height / 12 * 5, height / 10); // ear
    textSize(height / 30);
    text("聴覚in側頭葉", width / 100 * 85, height / 3);
    pop();
    push();
    stroke(0);
    fill(0);
    textSize(height / 30);
    text("神経の興奮だけでも感覚は生じる", width / 8 * 5, height / 2);
    text("特殊神経エネルギー説", width / 6 * 4 , height / 60 * 59);
    pop();
  }
  if(x > w / 40 * 21 - h / 20 && x < w / 40 * 21 + h / 20 && y > h / 10 * 7 - h / 20 && y < h / 10 * 7 + h / 20){ // マウスカーソル：鼻
    push();
    fill(0, 100, 100);
    stroke(0, 100, 100);
    stimulation(width / 40 * 21, height / 10 * 7, height / 10); // nose
    textSize(height / 30);
    text("嗅覚in大脳辺縁系", width / 100 * 65, height / 2);
    pop();
    push();
    stroke(0);
    fill(0);
    textSize(height / 30);
    text("神経の興奮だけでも感覚は生じる", width / 2, height / 5 * 4);
    text("特殊神経エネルギー説", width / 6 * 4 , height / 60 * 59);
    pop();
  }
}

function windowResized(){ // もともとあったやつ
  resizeCanvas(windowWidth, windowHeight);
}

function arrow(x, y){ // 矢印はこれで
  beginShape();
  push();
  noStroke();
  vertex(x, y);
  vertex(x + width / 20, y);
  vertex(x + width / 20, y + height / 40);
  vertex(x + width / 40 * 3, y - height / 40); // 矢印の先端
  vertex(x + width / 20, y - height / 40 * 3);
  vertex(x + width / 20, y - height / 20);
  vertex(x, y - height / 20);
  vertex(x, y);
  endShape();
  pop();
}

function KeyPressed(){ // キーを押したらこんな風に動く
  if(key == "a"){　// aを押した場合
    push();
    image(img4, 0, 0, width / 10, height / 5); // Sun
    fill(0);
    textSize(height / 30);
    text("A, B, C 以外のキーを離すと元に戻るよ", width / 2, height / 10 * 9);
    pop();
    push();
    fill(255, 255, 0);
    stroke(255, 255, 0);
    arrow(width / 20 * 3, height / 10); //
    stimulation(width / 20 * 13, height / 10 * 3, height / 10); // Eye
    textSize(height / 30);
    text("視覚in後頭葉", width / 100 * 90, height / 2);
    strokeWeight(10);
    stroke(0);
    textSize(height / 30);
    text("A", 0, height / 40);
    pop();
  }
  else if(key == "b"){ // bを押した場合
    push();
    image(img5, 0, height / 5 * 2, width / 10, height / 5); // Speaker
    fill(0);
    textSize(height / 30);
    text("A, B, C 以外のキーを離すと元に戻るよ", width / 2, height / 10 * 9);
    pop();
    push();
    fill(0, 100, 255);
    stroke(0, 100, 255);
    arrow(width / 20 * 3, height / 2);
    stimulation(width / 8 * 5, height / 12 * 5, height / 10); // Ear
    textSize(height / 30);
    text("聴覚in側頭葉", width / 100 * 85, height / 3);
    textSize(height / 30);
    strokeWeight(10);
    stroke(0);
    textSize(height / 30);
    text("B", 0, height / 5 * 2 + height / 40);
    pop();
  }
  else if(key == "c"){ // cを押した場合
    push();
    image(img6, 0, height / 5 * 4, width / 10, height / 5); // Food
    fill(0);
    textSize(height / 30);
    text("A, B, C 以外のキーを離すと元に戻るよ", width / 2, height / 10 * 9);
    pop();
    push();
    fill(0, 100, 100);
    stroke(0, 100, 100);
    arrow(width / 20 * 3, height / 10 * 9);
    stimulation(width / 40 * 21, height / 10 * 7, height / 10); // Nose
    textSize(height / 30);
    text("嗅覚in大脳辺縁系", width / 100 * 65, height / 2);
    strokeWeight(10);
    stroke(0);
    textSize(height / 30);
    text("C", 0, height / 5 * 4 + height / 40);
    pop();
  }
}


function stimulation(cx, cy, r){ // 刺激マークの描画はこれで指定
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 16; i++){
    const theta = TWO_PI * i * 10 / 32 - HALF_PI;
    const x = cx + cos(theta) * (r - height / 30);
    const y = cy + sin(theta) * (r - height / 30);
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
