// 最終課題を制作しよう
let img1, img2, img3, img4, img5;
function preload(){
  img1 = loadImage('Eye.jpg');
  img2 = loadImage('Ear.jpg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  image(img1, width / 5 * 2, 0);
  image(img2, width / 5 * 2, height / 3);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function arrow(){

}
