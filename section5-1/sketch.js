// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }
  console.log(scores);
  barchart(scores);
}

// テキスト「配列と繰り返し」
function sum(arr){
  let n = 0;
  for(let i = 0; i < arr.length; i++){ n += arr[i]; }
  return n;
  console.log(n);
}

//　テキスト「配列と繰り返し」練習問題 配列に含まれる値の平均値を求める
function average(arr){
  // BLANK[1]
  let n = 0;
  for(let i = 0; i < arr.length; i++){
    n += arr[i];
  }
  n = n / arr.length;
  return(n);
}

function largest(arr){ // 配列に含まれる値のうちの最大値を返す
  let n = 0;
  for(let i = 0; i < arr.length; i++){
    // BLANK[2]
    if(arr[i] > n){
      n = arr[i];
    }
    else{
      n = n;
    }
  }
  return n;
  console.log(n);
}

function smallest(arr){ // 配列に含まれる値のうちの最小値を返す
  let n = 100;
  for(let i = 0; i < arr.length; i++){
    // BLANK[3]
    if(arr[i] < n){
      n = arr[i];
    }
    else{
      n = n;
    }
  }
  return n;
}

// テキスト「配列を使った描画」棒グラフ まだ合ってない
function barchart(scores){
  scaleY(10);
  // BLANK[4] (hint: largest, smallest, average を使って先にそれぞれの値を計算しておきます)
  let l = largest(scores);
  let s = smallest(scores);
  let a = average(scores);
  console.log(l);
  console.log(s);
  console.log(a);

  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    fill(0);
    // BLANK[5] (hint: 条件分岐を使って色を変更します)
    if(scores[i] == l){ // 合っていると思うのだが，全部これで反映される　理由分からん
      push();
      fill(255, 0, 0);
      rect(i * dx + 2, height - h, dx - 4, h);　// rectは多分OK
      text(scores[i].toPrecision(3), i * dx, height - h)
      pop();
    }
    else if(scores[i] == s){
      push();
      fill(0, 0, 255);
      rect(i * dx + 2, height - h, dx - 4, h);
      text(scores[i].toPrecision(3), i * dx, height - h)
      pop();
    }
    else{
    rect(i * dx + 2, height - h, dx - 4, h);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
  }
  // BLANK[6] (hint: 平均点の線を引きます)
  stroke(0, 255, 255);
  line(0, height - height * a / 100, width, height - height * a / 100);
  fill(0);
  text(a.toPrecision(3), 0, height - height * a / 100)
  // 線も引けん
}

function scaleY(n){
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
}

function scaleX(n){
  for(let i = 0; i < n; i++){ line(width * i / n, 0, width * i / n, height); }
}
