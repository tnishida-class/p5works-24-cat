// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(270, 180);
  background(0, 0, 255);
  for(let i = 0; i < 12; i++){
    push();
    noStroke();
    fill(255, 204, 0);
    let theta = TWO_PI * i / 12;
    let x = 135 + cos(theta) * 50;
    let y = 90 + sin(theta) * 50;
    // ellipse(x, y, 10); の代わりに
    star(x, y, 10); // これで下のstar関数を呼び出す。ここでは(x座標,y,半径)を決めている。
    pop();
    }
}
function star(cx, cy, r){ // cx cyは円の中心 // cx, cy, rに当てはまってるのが戻り値

      beginShape();
      for(let j = 0; j < 5; j++){
      const theta = TWO_PI * j * 2/5 - HALF_PI;
      const z = cx + cos(theta) * r; // 下のx ver.
      const w = cy + sin(theta) * r; // cyは円の中心のy座標。これにsin足して半径倍する
      vertex(z, w); // これで上の変数を元に点を繋ぐ

      }
      endShape(CLOSE); // 星形にしたのは多分副作用
    }
