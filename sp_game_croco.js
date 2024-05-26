'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// const crocodileNum = document.getElementById("crocodileNum");



// const paragraphCroroNum = document.createElement("p12");

//=======================================================================

// 汎用性のあるスリープ関数
function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

//=======================================================================
// ワニ放出のやり直し機能 クリック
const clickReset = document.getElementById("resetBtn");
clickReset.addEventListener("click", function () {

  // 音を出す
  document.getElementById('btn_reset_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_reset_audio").play(); //クリックしたら音を再生

  // 1秒止めないとなぜか音鳴らないので入れた
  sleep(500);

  window.location.reload();
  alert('リセットします');
}
);

//=======================================================================

const button = document.getElementById('startBtn');

const moveCircle1 = document.getElementById("box1");
const moveCircle2 = document.getElementById("box2");
const moveCircle3 = document.getElementById("box3");
const moveCircle4 = document.getElementById("box4");
const moveCircle5 = document.getElementById("box5");
const moveCircle6 = document.getElementById("box6");
const moveCircle7 = document.getElementById("box7");
const moveCircle8 = document.getElementById("box8");
const moveCircle9 = document.getElementById("box9");
const moveCircle10 = document.getElementById("box10");
const moveCircle11 = document.getElementById("box11");
const moveCircle12 = document.getElementById("box12");
const moveCircle13 = document.getElementById("box13");
const moveCircle14 = document.getElementById("box14");
const moveCircle15 = document.getElementById("box15");
const moveCircle16 = document.getElementById("box16");
const moveCircle17 = document.getElementById("box17");
const moveCircle18 = document.getElementById("box18");
const moveCircle19 = document.getElementById("box19");

// const moveCircleClass = document.querySelector("croroPic");

const countEnd = document.getElementById("countEnd"); // 採点ボタン

const resultDisplay = document.getElementById("resultDisplay"); // 採点結果を表示する領域
const idResultDisplay = document.getElementById("idResultDisplay"); // 採点結果を表示するテキスト部

//=======================================================================

// 放出開始ボタン クリック
button.addEventListener("click", () => {

  // 決まった条件の時は処理を折らせる
  if (returnNo() === "処理終了") {return;}

  // 再度ボタン押された時は処理を終了
  if (button.textContent === "放出中!!数えて") {
    return;
  }

  // 音を出す
  document.getElementById('btn_open_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_open_audio").play(); //クリックしたら音を再生

  // button.classList.add("moveStart");
  
  button.textContent = "放出中!!数えて";

  moveCircle1.style.display = "block";
  moveCircle2.style.display = "block";
  moveCircle3.style.display = "block";
  moveCircle4.style.display = "block";
  moveCircle5.style.display = "block";
  moveCircle6.style.display = "block";
  moveCircle7.style.display = "block";
  moveCircle8.style.display = "block";
  moveCircle9.style.display = "block";
  moveCircle10.style.display = "block";
  moveCircle11.style.display = "block";
  moveCircle12.style.display = "block";
  moveCircle13.style.display = "block";
  moveCircle14.style.display = "block";
  moveCircle15.style.display = "block";
  moveCircle16.style.display = "block";
  moveCircle17.style.display = "block";
  moveCircle18.style.display = "block";
  moveCircle19.style.display = "block";

  moveCircle1.classList.add("move1");
  moveCircle2.classList.add("move2");
  moveCircle3.classList.add("move3");
  moveCircle4.classList.add("move4");
  moveCircle5.classList.add("move5");
  moveCircle6.classList.add("move6");
  moveCircle7.classList.add("move7");
  moveCircle8.classList.add("move8");
  moveCircle9.classList.add("move9");
  moveCircle10.classList.add("move10");
  moveCircle11.classList.add("move11");
  moveCircle12.classList.add("move12");
  moveCircle13.classList.add("move13");
  moveCircle14.classList.add("move14");
  moveCircle15.classList.add("move15");
  moveCircle16.classList.add("move16");
  moveCircle17.classList.add("move17");
  moveCircle18.classList.add("move18");
  moveCircle19.classList.add("move19");

  countEnd.style.display = "block";
});

//=======================================================================
const numCount = document.getElementById("numDisply"); // ワニの数字が書かれているテキスト部

// p11タグ カウントアップ-ダウンでワニ（絵文字）を表示するテキスト部
const paragraph = document.createElement("p11");
document.getElementById("square2").appendChild(paragraph);

// // p15タグ 採点ボタン押した時に表示するテキスト部
// const checkPara = document.createElement("p15");


//=======================================================================

// 何匹か数える。ボタンを押すとワニを増やす。+1になる
const buttonCount = document.getElementById('countBtn');
buttonCount.addEventListener("click", () => {

  // 決まった条件の時は処理を折らせる
  if (returnNo() === "処理終了") {return;}

  // 放出開始ボタン押される前に押された時はメッセージ表示
  if (button.textContent === "ワニ放出開始") {
    alert("ワニ放出開始ボタンを押した後に使ってね")
    return;
  }

  // 27匹を超えては押せない
  if (Number(numCount.innerText) < 27) {

    // 音を出す
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById("btn_audio").play(); //クリックしたら音を再生

    // ワニを+1する
    let result = paragraph.textContent;
    result = result + "🐊"
    paragraph.textContent = result;
    document.getElementById("square2").appendChild(paragraph);

    // +1する時の効果音
    numCount.innerText = Number(numCount.innerText) + 1;
  }
});

//=======================================================================

// 何匹か数える。ボタンを押すとワニを減らす。-1になる
const buttonDownCount = document.getElementById('countDownBtn');
buttonDownCount.addEventListener("click", () => {

  // 決まった条件の時は処理を折らせる
  if (returnNo() === "処理終了") {return;}

  // 放出開始ボタン押される前に押された時はメッセージ表示
  if (button.textContent === "ワニ放出開始") {
    alert("ワニ放出開始ボタンを押した後に使ってね")
    return;
  }

  // ワニを-1する
  const num = 1;
  let result = paragraph.textContent;
  result = result.substring(2);
  paragraph.textContent = result;

  if (Number(numCount.innerText) > 0) {
    //-1する時の効果音
    document.getElementById('btn_down_audio').currentTime = 0; //連続クリックに対応
    document.getElementById("btn_down_audio").play(); //クリックしたら音を再生

    // 数値を-1する
    numCount.innerText = Number(numCount.innerText) - 1; 
  } 
});

//=======================================================================
// 採点ボタン クリック
countEnd.addEventListener("click", () => {

  resultDisplay.style.display = "block"; //採点後のメッセージを表示
  countEnd.style.display = "none"; // 採点ボタンを非表示

  let num = Number(numCount.innerText);
  let messe;

  // 正解は 17
  if (num === 17) {
    soundCorrectAnswer(); // 正解の音を出す
    messe = "【大大大正解】動体視力Lv…神様レベル\n"
    messe = messe + "おめでとう！\n"
    messe = messe + "\n"
    messe = messe + "左上のHOMEボタンで戻れるよ"

  } else if (num >= 15 && num <= 19) {
    soundIncorrectCorrectAnswer(); // 不正解の音を出す
    messe = "【不正解すごくおしい】動体視力Lv…アスリートレベル\n"
    messe = messe + "※左のRESETボタンでもう一度チャレンジ\n"
    messe = messe + "ヒント…プログラミング基礎27\n"
    messe = messe + "メンバーの数を思い出してね"

  } else if (num >= 12 && num < 22) {
    soundIncorrectCorrectAnswer(); // 不正解の音を出す
    messe = "【不正解】動体視力Lv…人間レベル\n"
    messe = messe + "※左のRESETボタンでもう一度チャレンジ\n"
    messe = messe + "ヒント…プログラミング基礎27\n"
    messe = messe + "メンバーの数を思い出してね"

  } else {
    soundIncorrectCorrectAnswer(); // 不正解の音を出す
    messe = "【不正解】動体視力Lv…計測不可\n"
    messe = messe + "※左のRESETボタンでもう一度チャレンジ\n\n"
    messe = messe + "よかったらもう少し遊んでいってね\n"
  }

  document.getElementById("idResultDisplay").innerText = messe;
});
//=======================================================================

function soundCorrectAnswer() {
    // 正解の音を出す
    document.getElementById('btn_answer_audio').currentTime = 0; //連続クリックに対応
    document.getElementById("btn_answer_audio").play(); //クリックしたら音を再生
}

function soundIncorrectCorrectAnswer() {
  // 不正解の音を出す
  document.getElementById('btn_incorrect_answer_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_incorrect_answer_audio").play(); //クリックしたら音を再生
}

//=======================================================================

// 採点後にはカウントボタンなど押せないようにする処理
function returnNo() {
  const messe = document.getElementById("idResultDisplay").innerText
  if (messe.startsWith("【") === true) {
    alert('やり直しは左のRESETボタンを押してね');
    return "処理終了"
  }
}
