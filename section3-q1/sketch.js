// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  let c = color(0, 0, 255)
  let d = color(0, 255, 0)
  balloon("I love keyakizaka46", c, d, 80, 160, 240, 80);
}

function balloon(t, c0, c1, x, y, w0, h0){
  // let w = textWidth(t);
  // let h = textAscent() + textDescent();
  // let p = 2;
  fill(c0);
  rect(x, y, w0, h0);
  rect()
  fill(c1);
  text(t, x + w0 / 4, y + h0 / 2); // これyは下だな　
}
