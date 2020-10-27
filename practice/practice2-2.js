// アメリカの国旗途中
function setup(){
  createCanvas(270, 180);
  fill(0);
  let h = height / 13;
  for(let i = 0; i < 13; i++){
    if(i % 2 == 0){
      fill(255, 0, 0)
      rect(0, i * h, width, h);
    }
    else{
      fill(255);
      rect(0, i * h, width, h);
    }
  }
  noStroke();
  fill(0, 0, 255)
  rect(0, 0, width * 3 / 7, 7 * h);
  fill(255);
  for(let j = 0; j < 6; j++){
    for(let k = 0; k < 5; k++){
      let w = width / 14;
      let hh = height / 8.5;
      let x = j * w + w * 0.5;
      let y = k * hh + hh * 0.3;
      star(x, y, 5);
    }
  }
  for(let j = 0; j < 5; j++){
    for(let k = 0; k < 4; k++){
      let w = width / 14;
      let hh = height / 8.5;
      let x = (j + 0.5) * w + w * 0.5;
      let y = (k + 0.5) * hh + hh * 0.3;
      star(x, y, 5);
    }
  }
}

function star(cx, cy, r){
  beginShape();
  for(i = 0; i < 5; i++){
      const theta = TWO_PI * i * 2/5 - HALF_PI;
      const p = cx + cos(theta) * r;
      const q = cy + sin(theta) * r;
      vertex(p, q);
  }
  endShape();
}
