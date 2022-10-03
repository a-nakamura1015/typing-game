// すべてのお題
var questions = [
  "ringo", "sakuranbo", "momo", "remon", "budou", "mikan", "kaki", "banana", "masukatto", "painappuru"
];
// 完了したお題の数
var questionCount = 0;
// 画面に表示しているお題
var question = questions[0];
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
  // お題の文字がすべて入力できたかをチェックする
  if (charCount == question.length) {
    console.log("COMPLETED");
    questionCount++;
  } else {
    // お題がまだ途中の場合は処理を中断する
    return;
  }
  // すべてのお題が完了したかをチェックする
  if (questionCount == questions.length) {
    console.log("FINISH!");
    removeEventListener("keydown", keydownFunc);
  } else {
    // 最後のお題ではない場合、カウント中の文字数を初期化してと次の問題を表示する
    charCount = 0;
    question = questions[questionCount];
    document.getElementById("output").innerHTML = question;
  }
}
