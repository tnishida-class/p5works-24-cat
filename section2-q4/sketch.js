// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    if(i % 2 == 0){
      fill(blue);
      rect(0, i * d, width, (i + 1) * d);
    }
    else{
      fill(255);
      rect(0, i * d, width, (i + 1) * d);
    }
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(0, d * 2, size, size / 5);
  rect(d * 2, 0, size / 5, size);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}


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
