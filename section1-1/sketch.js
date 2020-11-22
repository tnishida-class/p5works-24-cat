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
}
