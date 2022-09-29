// お題を表示する
function showQuestion() {
  var question = "ringo";
  // 画面上に問題を表示する
  document.getElementById("output").innerHTML = question;
}
showQuestion();

addEventListener("keydown", keydownFunc);
// 入力したキーを判定する
function keydownFunc(event) {
  console.log(event.key);
}
