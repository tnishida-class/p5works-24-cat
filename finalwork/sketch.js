// 最終課題を制作しよう
let img1, img2, img3, img4, img5;
function preload(){
  img1 = loadImage('Eye.jpg');
  img2 = loadImage('Ear.jpg');
  img3 = loadImage('Nose.jpg');
  img4 = loadImage('Sun.png');
  img5 = loadImage('Speaker.png');
  img6 = loadImage('Food.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  image(img1, width / 5 * 2, 0, width / 10, height / 5);
  image(img2, width / 5 * 2, height / 5 * 2, width / 10, height / 5);
  image(img3, width / 5 * 2, height / 5 * 4, width / 10, height / 5);
  image(img4, 0, 0, width / 10, height / 5);
  image(img5, 0, height / 5 * 2, width / 10, height / 5);
  image(img6, 0, height / 5 * 4, width / 10, height / 5);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function arrow(){

}
