let img1, img2;
function preload(){
  img1 = loadImage('cat.jpg');
  img2 = loadImage('man.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function widowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  image(img1, width / 7, height / 5, height / 5 * 2, height / 5 * 2);
  image(img2, width / 7 * 4, height / 5, height / 5 * 2, height / 5 * 2);
  push(); // HPバー満タン
  fill(0, 200, 150);
  rect(width / 7, height / 5 / 3 * 2, width / 7 * 2, height / 15);
  rect(width / 7 * 4, height / 5 / 3 * 2, width / 7 * 2, height / 15);
  pop();
  rect(width / 7, height / 5 * 3, width / 7 * 2, height / 5 * 1); // 技の箱cat
  line(width / 7, height / 10 * 7, width / 7 * 3, height / 10 * 7); // 区切る線cat
  line(width / 7 * 2, height / 5 * 3, width / 7 * 2, height / 5 * 4);
  rect(width / 7 * 4, height / 5 * 3, width / 7 * 2, height / 5 * 1); // 技の箱man
  line(width / 7 * 4, height / 10 * 7, width / 7 * 6, height / 10 * 7); // 区切る線man
  line(width / 7 * 5, height / 5 * 3, width / 7 * 5, height / 5 * 4);
  textSize(height / 30)
  text("   A: 乱れひっかき", width / 7, height / 5 * 3 + height / 30 * 2); // cat skill
  text("   B: ネコのいかり", width / 7 * 2, height / 5 * 3 + height / 30 * 2);
  text("  C: はかいこうせん", width / 7, height / 10 * 7  + height / 30 * 2);
  text("   D: ねこぱんち", width / 7 * 2, height / 10 * 7 + height / 30 * 2);
  text("   E: 正論", width / 7 * 4, height / 5 * 3 + height / 30 * 2); // man skill
  text("  F: 冷静な切り返し", width / 7 * 5, height / 5 * 3 + height / 30 * 2);
  text("  G: はかいこうせん", width / 7 * 4, height / 10 * 7  + height / 30 * 2);
  text("  H: 銃撃", width / 7 * 5, height / 10 * 7 + height / 30 * 2);
  keyPressed();
}

function keyPressed(){
  if(key == "a"){ // 配列使いたい
    push();
    fill(0);
    rect(width / 7, height / 5 * 3, width / 7, height / 10);
    fill(255);
    strokeWeight(5);
    text("   A: 乱れひっかき", width / 7, height / 5 * 3 + height / 30 * 2);
    pop();
  }
  else if(key == "b"){
    push();
    fill(0);
    rect(width / 7 * 2, height / 5 * 3, width / 7, height / 10);
    fill(255);
    strokeWeight(5);
    text("   B: ネコのいかり", width / 7 * 2, height / 5 * 3 + height / 30 * 2);
    pop();
  }
  else if(key == "c"){
    push();
    fill(0);
    rect(width / 7, height / 10 * 7, width / 7, height / 10);
    fill(255);
    strokeWeight(5);
    text("  C: はかいこうせん", width / 7, height / 10 * 7  + height / 30 * 2);
    pop();
  }
  else if(key == "d"){
    push();
    fill(0);
    rect(width / 7 * 2, height / 10 * 7, width / 7, height / 10);
    fill(255);
    strokeWeight(5);
    text("   D: ねこぱんち", width / 7 * 2, height / 10 * 7 + height / 30 * 2);
    pop();
  }
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
