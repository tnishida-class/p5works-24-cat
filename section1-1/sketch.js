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
  text("   A: 乱れひっかき", width / 7, height / 5 * 3 + height / 30 * 2); // cat
  text("   B: ネコのいかり", width / 7 * 2, height / 5 * 3 + height / 30 * 2);
  text("  C: はかいこうせん", width / 7, height / 10 * 7  + height / 30 * 2);
  text("   D: ねこぱんち", width / 7 * 2, height / 10 * 7 + height / 30 * 2);
  text("   A: 正論", width / 7 * 4, height / 5 * 3 + height / 30 * 2); // man
  text("  B: 冷静な切り返し", width / 7 * 5, height / 5 * 3 + height / 30 * 2);
  text("  C: はかいこうせん", width / 7 * 4, height / 10 * 7  + height / 30 * 2);
  text("  D: 銃撃", width / 7 * 5, height / 10 * 7 + height / 30 * 2);
}
