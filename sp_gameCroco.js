'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const crocodileNum = document.getElementById("crocodileNum");

// p11タグ カウントアップ-ダウンでワニが表示されている領域
const paragraph = document.createElement("p11");
// const paragraphCroroNum = document.createElement("p12");

//=======================================================================
// const constBtnCroco = document.getElementById("constBtnCroco");
// constBtnCroco.addEventListener("click", constOutCroco);

// function constOutCroco() {
//   const num = crocoNum.value;
//   console.log("確認", num);
//   if (num == 0 ) {
//     alert("何か入力お願いします＞＜");
//     return;
//   }

//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result = result + "🐊";
//   }
  
//   paragraph.textContent = result;
//   document.getElementById("square2").appendChild(paragraph);
// };

//=======================================================================
// const letBtnCroco = document.getElementById("letBtnCroco");
// letBtnCroco.addEventListener("click", letOutCroco);

// function letOutCroco() {

//   const num = crocoNum.value;
//   console.log("a", num);
//   // console.log("確認", num);
//   if (num == 0) {
//     alert("何か入力お願いします＞＜");
//     return;
//   }

//   let result = paragraph.textContent;
//   console.log("最初", result);

//   if (num > 0) {
//     console.log("ぷらす", num);
//     for (let i = 1; i <= num; i++) {
//       result = result + "🐊"
//       // sleep(1000);
//     } 
//     // result = result + "🐊".repeat(num);
//   } else {
//     console.log("-start", result, num);
//     result = result.substring(num * -1 * 2);
//     console.log("-end", result);
//   }
//   paragraph.textContent = result;
//   document.getElementById("square2").appendChild(paragraph);
// }

//=======================================================================

function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

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

const moveCircleClass = document.querySelector("croroPic");

moveCircle1.addEventListener("click", () => {
  moveCircle1.classList.add("move");
});


button.addEventListener("click", () => {
  button.textContent = "放出中";

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
});

//=======================================================================
const numCount = document.getElementById("numDisply");
//=======================================================================

// 何匹か数える。ボタンを押すとワニを増やす。+1になる
const buttonCount = document.getElementById('countBtn');
buttonCount.addEventListener("click", () => {
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
});

//=======================================================================

// 何匹か数える。ボタンを押すとワニを減らす。-1になる
const buttonDownCount = document.getElementById('countDownBtn');
buttonDownCount.addEventListener("click", () => {

  // ワニを-1する
  const num = 1;
  let result = paragraph.textContent;
  result = result.substring(2);
  paragraph.textContent = result;
  document.getElementById("square2").appendChild(paragraph);

  if (Number(numCount.innerText) > 0) {
    //-1する時の効果音
    document.getElementById('btn_down_audio').currentTime = 0; //連続クリックに対応
    document.getElementById("btn_down_audio").play(); //クリックしたら音を再生

    // 数値を-1する
    numCount.innerText = Number(numCount.innerText) - 1; 
  } 
});

//=======================================================================

