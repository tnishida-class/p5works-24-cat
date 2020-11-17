// 最終課題を制作しよう
let img1, img2, img3, img4, img5;
function preload(){
  img1 = loadImage('cat.jpg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  image(img1, width / 2, height / 2);
}

function draw(){
  background(160, 192, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
