// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(500, 500);
  calendar(2020, 11);
  // text(dayOfWeek(1981, 7, 17), 100, 100);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  text(y, width / 3, 25);
  text(m, width / 2, 25); // yとmを引数で表示するにはどうすれば？
  let dow = dayOfWeek(y, m, 1);
  for(let d = 0; d < daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    text(dayOfWeekAsString(d), width / 15 * d, 50);
    text(d + 1, (width / 15 * dow) + (width / 15 * (d % 7)) , Math.floor(d / 7) * 10 + 65);
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
} // うるう年かどうか

function daysInYear(y){ // 1年当たりの日数
  // BLANK[1]
  if(isLeapYear(y)){
    return 366;
  }
  else{
    return 365;
  }
}

function daysInMonth(y, m){ // ひと月当たりの日数
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){ // ある年における日にち
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){ // ある週における日にち これ多分間違ってる
  // BLANK[2]
  let count = 0;
  if(y >= 1971){
    for(i = 1971; i <= y; i++){
    count + daysInYear(i);
  let ds = count + dayOfYear(y, m, d); // ds = day sum
    return ds % 7;
  }
}
  else{
    let ds = count + dayOfYear(1970, m, d);
  }
}

function dayOfWeekAsString(dow){
  const a = ["火", "水", "木", "金", "土", "日", "月", "火", "水", "木", "金", "土", "日", "月"];
  // 最終的に個々の文字列をイジったらできた。なんでだ？
  return a[dow];
}
