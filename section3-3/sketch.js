// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

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
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    
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

function dayOfWeek(y, m, d){ // ある週における日にち
  // BLANK[2]
  const ys = 1970 // s : year standard 1970.01.01(Thu.)
  let count = 0;
  for(i = 1970; i < y; i++){
    count + daysInYear(i);
  }
  let ds = count + dayOfYear(y, m, d); // ds = day sum
    return ds % 7;
  }
}

function dayOfWeekAsString(dow){
  const a = ["木", "金", "土", "日", "月", "火", "水", "木"];
  return a[dow];
}
