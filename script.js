// 画面に表示しているお題
var question = "ringo";
// カウントしている文字数
var charCount = 0;

// お題を表示する
function showQuestion() {
  // 画面上に問題を表示する
  document.getElementById("output").innerHTML = question;
}
showQuestion();

addEventListener("keydown", keydownFunc);
// 入力したキーを判定する
function keydownFunc(event) {
  console.log(event.key);
  // 入力した文字を取得する
  var input = event.key;
  // 画面に表示しているお題を1文字ずつ分割する
  var chars = question.split("");
  // 評価をする文字を取得する
  var char = chars[charCount];
  if (input == char) {
    console.log("OK");
    charCount++;
    // 正しく入力できた文字を赤色にする
    var redChar = question.slice(0, charCount);
    var blackChar = question.slice(charCount, question.length);
    document.getElementById("output").innerHTML = '<span style="color:red">' + redChar + '</span>' + blackChar;
  }
}
