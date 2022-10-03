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

// 初期表示時にゲームのセットアップを行う
function setUp() {
  document.getElementById("output").innerHTML = "ARE YOU READY?";
  addEventListener("keydown", start);
}

// ゲームを開始する処理
function start() {
  sortByRandom();
  showQuestion(0);
  removeEventListener("keydown", start);
  addEventListener("keydown", keydownFunc);
}

// 問題をランダムに並べ替える
function sortByRandom() {
  for (var i = questions.length; i > 1; i--) {
    // ランダムで取り出す要素番号を求める
    var randomIndex = Math.floor(Math.random() * i);
    // ランダムで求めた要素番号で既存配列から値を取り出す
    var targetQuestion = questions[randomIndex];
    // ランダムで取り出した要素と要素番号の降順で取り出した要素を入れ替える
    questions[randomIndex] = questions[i - 1];
    questions[i - 1] = targetQuestion;
  }
}

// お題を表示する
function showQuestion(questionCount) {
  // 画面上に問題を表示する
  question = questions[questionCount];
  document.getElementById("img").innerHTML = '<img src="./img/' + question + '.png"></img>';
  document.getElementById("output").innerHTML = question;
}

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
    showQuestion(questionCount);
  }
}

// 初期表示の処理
setUp();
