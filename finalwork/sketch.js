// 最終課題を制作しよう
// text("特殊神経エネルギー説", width / 6 * 5 , height / 60 * 59)
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
  image(img1, width / 4 * 1, 0, width / 10, height / 5); // eye
  image(img2, width / 4 * 1, height / 5 * 2, width / 10, height / 5); // ear
  image(img3, width / 4 * 1, height / 5 * 4, width / 10, height / 5); // nose
  image(img4, 0, 0, width / 10, height / 5); // sun
  image(img5, 0, height / 5 * 2, width / 10, height / 5); // speaker
  image(img6, 0, height / 5 * 4, width / 10, height / 5); // food
  image(img7, width / 3 * 2, height / 8 * 1, width / 3, height / 4 * 3); // brain
  line(width / 20 * 7, height / 10, width / 100 * 95, height / 2); // eye
  line(width / 20 * 7, height / 2, width / 100 * 90, height / 3); // ear
  line(width / 20 * 7, height / 10 * 9, width / 100 * 70, height / 2); // nose
  KeyPressed();
  noFill();
  ellipse(width / 20 * 13, height / 10 * 3, height / 10); // eye
  ellipse(width / 8 * 5, height / 12 * 5, height / 10); // ear
  ellipse(width / 40 * 21, height / 10 * 7, height / 10); // nose
  let x = mouseX; // 長くなるので変数宣言し代入
  let y = mouseY;
  let w = width;
  let h = height;
  if(x > w / 20 * 13 - h / 20 && x < w / 20 * 13 + h / 20 && y > h / 10 * 3 - h / 20 && y < h / 10 * 3 + h / 20){
    push();
    fill(255, 255, 0);
    stroke(255, 255, 0);
    ellipse(width / 20 * 13, height / 10 * 3, height / 10); // eye
    textSize(height / 30);
    text("視覚in後頭葉", width / 100 * 90, height / 2);
    pop();
    push();
    stroke(0);
    fill(0);
    textSize(height / 30);
    text("神経の興奮でも感覚は生じる", width / 3 * 2, height / 8 * 2);
    text("特殊神経エネルギー説", width / 6 * 5 , height / 60 * 59);
    pop();
  }
  if(x > w / 8 * 5 - h / 20 && x < w / 8 * 5 + h / 20 && y > h / 12 * 5 - h / 20 && y < h / 12 * 5 + h / 20){
    push();
    fill(0, 0, 255);
    stroke(0, 0, 255);
    ellipse(width / 8 * 5, height / 12 * 5, height / 10); // ear
    textSize(height / 30);
    text("聴覚in側頭葉", width / 100 * 85, height / 3);
    pop();
    push();
    stroke(0);
    fill(0);
    textSize(height / 30);
    text("神経の興奮でも感覚は生じる", width / 8 * 5, height / 2);
    text("特殊神経エネルギー説", width / 6 * 5 , height / 60 * 59);
    pop();
  }
  if(x > w / 40 * 21 - h / 20 && x < w / 40 * 21 + h / 20 && y > h / 10 * 7 - h / 20 && y < h / 10 * 7 + h / 20){
    push();
    fill(150, 0, 255);
    stroke(150, 0, 255);
    ellipse(width / 40 * 21, height / 10 * 7, height / 10); // nose
    textSize(height / 30);
    text("嗅覚in大脳辺縁系", width / 100 * 65, height / 2);
    pop();
    push();
    stroke(0);
    fill(0);
    textSize(height / 30);
    text("神経の興奮でも感覚は生じる", width / 2, height / 5 * 4);
    text("特殊神経エネルギー説", width / 6 * 5 , height / 60 * 59);
    pop();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function arrow(x, y){ // ? / 20 ずつふやしていけばよさそう
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

function KeyPressed(){ // 反応しない，drawと変数を対応させないとダメなのかな
  // KeyPressed();をdrawに置いたらできた。
  if(key == "a"){
    // 四角Aにもなんか処理したい
    push();
    fill(255, 255, 0);
    stroke(255, 255, 0);
    arrow(width / 20 * 3, height / 10); //
    ellipse(width / 20 * 13, height / 10 * 3, height / 10); // eye
    textSize(height / 30);
    text("視覚in後頭葉", width / 100 * 90, height / 2);
    strokeWeight(10);
    stroke(0);
    textSize(height / 30);
    text("A", 0, height / 40);
    pop();
  }
  else if(key == "b"){
    push();
    fill(0, 100, 255);
    stroke(0, 100, 255);
    arrow(width / 20 * 3, height / 2);
    ellipse(width / 8 * 5, height / 12 * 5, height / 10); // ear
    textSize(height / 30);
    text("聴覚in側頭葉", width / 100 * 85, height / 3);
    textSize(height / 30);
    strokeWeight(10);
    stroke(0);
    textSize(height / 30);
    text("B", 0, height / 5 * 2 + height / 40);
    pop();
  }
  else if(key == "c"){
    push();
    fill(150, 0, 255);
    stroke(150, 0, 255);
    arrow(width / 20 * 3, height / 10 * 9);
    ellipse(width / 40 * 21, height / 10 * 7, height / 10); // nose
    textSize(height / 30);
    text("嗅覚in大脳？？？", width / 100 * 65, height / 2);
    strokeWeight(10);
    stroke(0);
    textSize(height / 30);
    text("C", 0, height / 5 * 4 + height / 40);
    pop();
  }
}
