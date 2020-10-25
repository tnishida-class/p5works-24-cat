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
  fill(0, 0, 255)
  rect(0, 0, width * 3 / 7, 7 * h);
  function star(cx, cy, r){
    beginShape();    // 点つなぎを始める
    for(let i = 0; i < 5; i++){
      const theta = TWO_PI * i * 2 / 5 - HALF_PI;
      const x = cx + cos(theta) * r;
      const y = cy + sin(theta) * r;
      vertex(x, y);  // 次につなぐ点を１つ増やす
    }
    endShape(CLOSE); // 点つなぎを終わる
  }
}
