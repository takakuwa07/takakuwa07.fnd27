'use strict'
// 1行目に記載している 'use strict' は削除しないでください


//=======================================================================
// ポケモンバトルのやり直し機能 クリック
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

// 汎用性のあるスリープ関数
function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

//=======================================================================




// ポケモン12匹ランダムで選択開始ボタン
const battleStartBtn = document.getElementById('battleStartBtn');

// ランダム選択されたポケモン[図鑑No.]と[ポケモン名]と[タイプ1]と[タイプ2]が表示されるid
const hand1PNumber1 = document.getElementById('hand1PNumber1');
const hand1PNumber2 = document.getElementById('hand1PNumber2');
const hand1PNumber3 = document.getElementById('hand1PNumber3');
const hand1PNumber4 = document.getElementById('hand1PNumber4');
const hand1PNumber5 = document.getElementById('hand1PNumber5');
const hand1PNumber6 = document.getElementById('hand1PNumber6');

const hand1P1 = document.getElementById('hand1P1');
const hand1P2 = document.getElementById('hand1P2');
const hand1P3 = document.getElementById('hand1P3');
const hand1P4 = document.getElementById('hand1P4');
const hand1P5 = document.getElementById('hand1P5');
const hand1P6 = document.getElementById('hand1P6');

const hand2PNumber1 = document.getElementById('hand2PNumber1');
const hand2PNumber2 = document.getElementById('hand2PNumber2');
const hand2PNumber3 = document.getElementById('hand2PNumber3');
const hand2PNumber4 = document.getElementById('hand2PNumber4');
const hand2PNumber5 = document.getElementById('hand2PNumber5');
const hand2PNumber6 = document.getElementById('hand2PNumber6');

const hand2P1 = document.getElementById('hand2P1');
const hand2P2 = document.getElementById('hand2P2');
const hand2P3 = document.getElementById('hand2P3');
const hand2P4 = document.getElementById('hand2P4');
const hand2P5 = document.getElementById('hand2P5');
const hand2P6 = document.getElementById('hand2P6');

const hand1Ptype11 = document.getElementById('hand1Ptype11');
const hand1Ptype12 = document.getElementById('hand1Ptype12');
const hand1Ptype13 = document.getElementById('hand1Ptype13');
const hand1Ptype14 = document.getElementById('hand1Ptype14');
const hand1Ptype15 = document.getElementById('hand1Ptype15');
const hand1Ptype16 = document.getElementById('hand1Ptype16');

const hand1Ptype21 = document.getElementById('hand1Ptype21');
const hand1Ptype22 = document.getElementById('hand1Ptype22');
const hand1Ptype23 = document.getElementById('hand1Ptype23');
const hand1Ptype24 = document.getElementById('hand1Ptype24');
const hand1Ptype25 = document.getElementById('hand1Ptype25');
const hand1Ptype26 = document.getElementById('hand1Ptype26');

const hand2Ptype11 = document.getElementById('hand2Ptype11');
const hand2Ptype12 = document.getElementById('hand2Ptype12');
const hand2Ptype13 = document.getElementById('hand2Ptype13');
const hand2Ptype14 = document.getElementById('hand2Ptype14');
const hand2Ptype15 = document.getElementById('hand2Ptype15');
const hand2Ptype16 = document.getElementById('hand2Ptype16');

const hand2Ptype21 = document.getElementById('hand2Ptype21');
const hand2Ptype22 = document.getElementById('hand2Ptype22');
const hand2Ptype23 = document.getElementById('hand2Ptype23');
const hand2Ptype24 = document.getElementById('hand2Ptype24');
const hand2Ptype25 = document.getElementById('hand2Ptype25');
const hand2Ptype26 = document.getElementById('hand2Ptype26');


// バトルに出すポケモン3匹を選択する入力部
const select1Panimal = document.getElementById('select1Panimal');
const select2Panimal = document.getElementById('select2Panimal');

// バトルに出すポケモン3匹を決定するボタン
const decision1P = document.getElementById('decision1P');
const decision2P = document.getElementById('decision2P');

// 1回戦STARTボタン
const battleStart1 = document.getElementById('battleStart1');

// 1P側 1回戦選出ポケモン情報
const hand1PselectChoice1 = document.getElementById('hand1PselectChoice1');
const hand1PNumberChoice1 = document.getElementById('hand1PNumberChoice1');
const hand1PChoice1 = document.getElementById('hand1PChoice1');
const hand1Ptype1Choice1 = document.getElementById('hand1Ptype1Choice1');
const hand1Ptype2Choice1 = document.getElementById('hand1Ptype2Choice1');

// 1P側 技名
const Technique1P11 = document.getElementById('Technique1P11');
const Technique1P12 = document.getElementById('Technique1P12');
const Technique1P13 = document.getElementById('Technique1P13');
const Technique1P14 = document.getElementById('Technique1P14');
const Technique1P15 = document.getElementById('Technique1P15');

// 1P側 技名
const TechniqueType1P11 = document.getElementById('TechniqueType1P11');
const TechniqueType1P12 = document.getElementById('TechniqueType1P12');
const TechniqueType1P13 = document.getElementById('TechniqueType1P13');
const TechniqueType1P14 = document.getElementById('TechniqueType1P14');
const TechniqueType1P15 = document.getElementById('TechniqueType1P15');

// 1P側 技名
const TechniqueDamage1P11 = document.getElementById('TechniqueDamage1P11');
const TechniqueDamage1P12 = document.getElementById('TechniqueDamage1P12');
const TechniqueDamage1P13 = document.getElementById('TechniqueDamage1P13');
const TechniqueDamage1P14 = document.getElementById('TechniqueDamage1P14');
const TechniqueDamage1P15 = document.getElementById('TechniqueDamage1P15');


// 2P側 1回戦選出ポケモン情報
const hand2PselectChoice1 = document.getElementById('hand2PselectChoice1');
const hand2PNumberChoice1 = document.getElementById('hand2PNumberChoice1');
const hand2PChoice1 = document.getElementById('hand2PChoice1');
const hand2Ptype1Choice1 = document.getElementById('hand2Ptype1Choice1');
const hand2Ptype2Choice1 = document.getElementById('hand2Ptype2Choice1');

// 2P側 技名
const Technique2P11 = document.getElementById('Technique2P11');
const Technique2P12 = document.getElementById('Technique2P12');
const Technique2P13 = document.getElementById('Technique2P13');
const Technique2P14 = document.getElementById('Technique2P14');
const Technique2P15 = document.getElementById('Technique2P15');

// 2P側 技名
const TechniqueType2P11 = document.getElementById('TechniqueType2P11');
const TechniqueType2P12 = document.getElementById('TechniqueType2P12');
const TechniqueType2P13 = document.getElementById('TechniqueType2P13');
const TechniqueType2P14 = document.getElementById('TechniqueType2P14');
const TechniqueType2P15 = document.getElementById('TechniqueType2P15');

// 2P側 技名
const TechniqueDamage2P11 = document.getElementById('TechniqueDamage2P11');
const TechniqueDamage2P12 = document.getElementById('TechniqueDamage2P12');
const TechniqueDamage2P13 = document.getElementById('TechniqueDamage2P13');
const TechniqueDamage2P14 = document.getElementById('TechniqueDamage2P14');
const TechniqueDamage2P15 = document.getElementById('TechniqueDamage2P15');

// 弱点
const weakness1P1 = document.getElementById('weakness1P1'); //1P側
const weakness2P1 = document.getElementById('weakness2P1'); //2P側

// 抵抗
const resistance1P1 = document.getElementById('resistance1P1'); //1P側
const resistance2P1 = document.getElementById('resistance2P1'); //2P側

// CP（戦闘力）
const combatPower1P1 = document.getElementById('combatPower1P1'); //1P側
const combatPower2P1 = document.getElementById('combatPower2P1'); //2P側

// 1回戦 結果発表ボタン
const fight1Result = document.getElementById('fight1Result');

// 1回戦 結果表示テキスト部
const result1Win = document.getElementById('result1Win');

//=======================================================================

// ランダムで12匹選択するボタン クリック時
battleStartBtn.addEventListener("click", function () {
  let messe = "";

  if (select1Panimal.style.backgroundColor === "black" && select2Panimal.style.backgroundColor === "black") {
    messe = "やり直す時は上のリセットボタン押して下さい\n"
    alert(messe);
    return;
  }

  if (select1Panimal.style.backgroundColor === "black") {
    messe = "1P側は「君に決めた」なのでもう変更できません。\n"
    messe = messe + "やり直す時は上のリセットボタン押して下さい\n"
    messe = messe + "※相手の合意とってね"
    alert(messe);
    return;
  }

  if (select2Panimal.style.backgroundColor === "black") {
    messe = "2P側は「君に決めた」なのでもう変更できません。\n"
    messe = messe + "やり直す時は上のリセットボタン押して下さい\n"
    messe = messe + "※相手の合意とってね"
    alert(messe);
    return;
  }

  // 音を出す
  document.getElementById('btn_dice_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_dice_audio").play(); //クリックしたら音を再生
    
  // alert(allPokemon);


  let index1p = []; // 1P側の手持ち3匹が入った配列
  let index2p = []; // 2P側の手持ち3匹が入った配列

  // allPokemon（ポケモンデータベース）から名前のみ、pokemonEncyclopedia（ポケモン図鑑）配列で入れる
  const pokemonNameEncyclopedia = [];
  for (const element of allPokemon) {
    pokemonNameEncyclopedia.push(element["Name"]);
  }

  // console.log(pokemonNameEncyclopedia);
  // console.log(pokemonNameEncyclopedia.length);


  // ランダムで1P側、2P側、それぞれ3匹を選出。全12匹はかぶらないように処理を作る
  // この6匹が対戦用ポケモンとする
  let mainRandom;
  for (let i = 1; i <= 12; i++) {
    mainRandom = Math.floor(Math.random() * pokemonNameEncyclopedia.length);

    while (index1p.indexOf(mainRandom) !== -1) {
      mainRandom = Math.floor(Math.random() * pokemonNameEncyclopedia.length);
    }
    index1p.push(mainRandom);
  }


  // 今だと1P側に12匹入っているので、その内の6匹を2P側に移動
  // pop（後ろから取得）とshift（前から取得）が3回ずつ使われているのは、
  // コード作成者のきまぐれ。なんとなく公平に選択されるようにした。
  index2p.push(index1p.pop());
  index2p.push(index1p.pop());
  index2p.push(index1p.pop());
  index2p.push(index1p.shift());
  index2p.push(index1p.shift());
  index2p.push(index1p.shift());

  // ==============================================================

  // この時点で1P側6匹、2P側6匹が選択されている（全12匹かぶりはない）
  // ここに入っている数値はポケモン図鑑のインデックス数でする
  // console.log(index1p);
  // console.log(index2p);

  // ポケモン図鑑には欠番があるのでインデックスとポケモン図鑑No.は一致しない
  // その為、ポケモン図鑑No.をインデックスから取得する
  const book1pNumber = [];
  const book2pNumber = [];
  
  for (let i = 0; i < 6; i++) {
    book1pNumber.push(Number(allPokemon[index1p[i]]["Number"]))
  }

  for (let i = 0; i < 6; i++) {
    book2pNumber.push(Number(allPokemon[index2p[i]]["Number"]))
  }

  // ==============================================================

    // 同様にポケモン名を取得
    const book1pName = [];
    const book2pName = [];
    
    for (let i = 0; i < 6; i++) {
      book1pName.push(allPokemon[index1p[i]]["Name"])
    }
  
    for (let i = 0; i < 6; i++) {
      book2pName.push(allPokemon[index2p[i]]["Name"])
    }

    // ==============================================================

    // 同様にタイプ1を取得
    const book1pType1 = [];
    const book1pType2 = [];
    const book2pType1 = [];
    const book2pType2 = [];
    
    for (let i = 0; i < 6; i++) {

      book1pType1.push(allPokemon[index1p[i]]["Types"][0])
      
      // タイプ2が指定ないポケモンがいるので、その時は "-" を入れる
      if (allPokemon[index1p[i]]["Types"][1] === undefined) {
        book1pType2.push("-")
      } else {
        book1pType2.push(allPokemon[index1p[i]]["Types"][1])
      }
    }
  
    for (let i = 0; i < 6; i++) {
      book2pType1.push(allPokemon[index2p[i]]["Types"][0])

      // タイプ2が指定ないポケモンがいるので、その時は "-" を入れる
      if (allPokemon[index2p[i]]["Types"][1] === undefined) {
        book2pType2.push("-")
      } else {
        book2pType2.push(allPokemon[index2p[i]]["Types"][1])
      }      
    }

  // ==============================================================
  // ★HTMLのテキスト（指定ID）に表示
  hand1PNumber1.innerText = book1pNumber[0];
  hand1PNumber2.innerText = book1pNumber[1];
  hand1PNumber3.innerText = book1pNumber[2];
  hand1PNumber4.innerText = book1pNumber[3];
  hand1PNumber5.innerText = book1pNumber[4];
  hand1PNumber6.innerText = book1pNumber[5];

  hand1P1.innerText = book1pName[0];
  hand1P2.innerText = book1pName[1];
  hand1P3.innerText = book1pName[2];
  hand1P4.innerText = book1pName[3];
  hand1P5.innerText = book1pName[4];
  hand1P6.innerText = book1pName[5];

  hand2PNumber1.innerText = book2pNumber[0];
  hand2PNumber2.innerText = book2pNumber[1];
  hand2PNumber3.innerText = book2pNumber[2];
  hand2PNumber4.innerText = book2pNumber[3];
  hand2PNumber5.innerText = book2pNumber[4];
  hand2PNumber6.innerText = book2pNumber[5];

  hand2P1.innerText = book2pName[0];
  hand2P2.innerText = book2pName[1];
  hand2P3.innerText = book2pName[2];
  hand2P4.innerText = book2pName[3];
  hand2P5.innerText = book2pName[4];
  hand2P6.innerText = book2pName[5];

  hand1Ptype11.innerText = book1pType1[0];
  hand1Ptype12.innerText = book1pType1[1];
  hand1Ptype13.innerText = book1pType1[2];
  hand1Ptype14.innerText = book1pType1[3];
  hand1Ptype15.innerText = book1pType1[4];
  hand1Ptype16.innerText = book1pType1[5];

  hand1Ptype21.innerText = book1pType2[0];
  hand1Ptype22.innerText = book1pType2[1];
  hand1Ptype23.innerText = book1pType2[2];
  hand1Ptype24.innerText = book1pType2[3];
  hand1Ptype25.innerText = book1pType2[4];
  hand1Ptype26.innerText = book1pType2[5];

  hand2Ptype11.innerText = book2pType1[0];
  hand2Ptype12.innerText = book2pType1[1];
  hand2Ptype13.innerText = book2pType1[2];
  hand2Ptype14.innerText = book2pType1[3];
  hand2Ptype15.innerText = book2pType1[4];
  hand2Ptype16.innerText = book2pType1[5];

  hand2Ptype21.innerText = book2pType2[0];
  hand2Ptype22.innerText = book2pType2[1];
  hand2Ptype23.innerText = book2pType2[2];
  hand2Ptype24.innerText = book2pType2[3];
  hand2Ptype25.innerText = book2pType2[4];
  hand2Ptype26.innerText = book2pType2[5];
});

//  ==============================================================
// 「君に決めた」ボタンの処理で使う汎用プログラム

function decisionAct(input) {
  // console.log(hand1P1.innerText);
  if (hand1P1.innerText === "???") {
    alert("手順1のSTARTボタンを押して下さい")
    return "処理終了"; 
  }

  if (input.length !== 3) {
    alert("数字3文字で入力して下さい")
    return "処理終了";
  }

  let inputOne;
  for (const str of input) {
    if (isNaN(str) === true) {
      alert("数字以外が含まれています");
      return "処理終了";
    }

    if (Number(str) === 0 || Number(str) >= 7) {
      alert("1～6の中で入力して下さい");
      return "処理終了";
    }
  }

  if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2]) {
      alert("同じポケモンは選べません");
      return "処理終了";
  }
}

//  ==============================================================
// 1P側 バトルに出すポケモン3匹を決定（君に決めた）ボタン クリック時

decision1P.addEventListener("click", function () {

  let input = select1Panimal.value

  if (decisionAct(input) === "処理終了") {
    return;
  }

  select1Panimal.style.backgroundColor = "black";
  select1Panimal.style.color = "white";
  select1Panimal.style.pointerEvents = "none";

  // 音を出す
  document.getElementById('btn_decided_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_decided_audio").play(); //クリックしたら音を再生
});

//  ==============================================================
// 2P側 バトルに出すポケモン3匹を決定（君に決めた）ボタン クリック時

decision2P.addEventListener("click", function () {

  let input = select2Panimal.value

  if (decisionAct(input) === "処理終了") {
    return;
  }

  select2Panimal.style.backgroundColor = "black";
  select2Panimal.style.color = "white";
  select2Panimal.style.pointerEvents = "none";

  // 音を出す
  document.getElementById('btn_decided_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_decided_audio").play(); //クリックしたら音を再生
});


const result = [];
for (const element of allPokemon) {
  result.push(element["Special Attack(s)"]);
}

const result2 = [];
for (const element of allPokemon) {
  result2.push(element["Fast Attack(s)"]);
}

//  ==============================================================

// 1回戦STARTボタン クリック時

battleStart1.addEventListener("click", function () {

  if (select1Panimal.style.backgroundColor !== "black") {
    alert("1P側 ポケモン選択お願いします")
    return "処理終了"; 
  }

  if (select2Panimal.style.backgroundColor !== "black") {
    alert("2P側 ポケモン選択お願いします")
    return "処理終了"; 
  }

  let num = Number(String(select1Panimal.value)[0]);

  let bookNumber;
  let bookName;
  let bookType1;
  let bookType2;
  let listAttack = [];
  let listAttackType = [];
  let listAttackDamage = [];
  let listWeakness = []; // 弱点
  let listResistant= []; // 抵抗


  let bookCombatPower;

  // ランダムセレクトされた6匹の中から指定ポケモンの情報を変数に入れる関数

  // 1P側---------------------------------------------------

  if (num === 1) {
    bookNumber = hand1PNumber1.innerText;
    bookName = hand1P1.innerText;
    bookType1 = hand1Ptype11.innerText;
    bookType2 = hand1Ptype21.innerText;

  } else if (num === 2) {
    bookNumber = hand1PNumber2.innerText;
    bookName = hand1P2.innerText;
    bookType1 = hand1Ptype12.innerText;
    bookType2 = hand1Ptype22.innerText;

  } else if (num === 3) {
    bookNumber = hand1PNumber3.innerText;
    bookName = hand1P3.innerText;
    bookType1 = hand1Ptype13.innerText;
    bookType2 = hand1Ptype23.innerText;
  
  } else if (num === 4) {
    bookNumber = hand1PNumber4.innerText;
    bookName = hand1P4.innerText;
    bookType1 = hand1Ptype14.innerText;
    bookType2 = hand1Ptype24.innerText;

  } else if (num === 5) {
    bookNumber = hand1PNumber5.innerText;
    bookName = hand1P5.innerText;
    bookType1 = hand1Ptype15.innerText;
    bookType2 = hand1Ptype25.innerText;

  } else if (num === 6) {
    bookNumber = hand1PNumber6.innerText;
    bookName = hand1P6.innerText;
    bookType1 = hand1Ptype16.innerText;
    bookType2 = hand1Ptype26.innerText;
  }
  
  for (const element of allPokemon) {
   
    if (element["Number"] ==  Number(bookNumber)) {

      console.log(element);

      // 技名
      listAttack.push(element["Fast Attack(s)"][0]["Name"]);
      listAttack.push(element["Fast Attack(s)"][1]["Name"]);
      listAttack.push(element["Special Attack(s)"][0]["Name"]);

      // ポケモン図鑑No.10のポケモンはスペシャルアタックが二つしか
      // 設定されていないので、エラー会費の為にif判定をしている
      if (element["Special Attack(s)"][1] === undefined) {
        listAttack.push("-");
        listAttack.push("-");
      } else {
        listAttack.push(element["Special Attack(s)"][1]["Name"]);
        listAttack.push(element["Special Attack(s)"][2]["Name"]);
      }

      // 技Type
      listAttackType.push(element["Fast Attack(s)"][0]["Type"]);
      listAttackType.push(element["Fast Attack(s)"][1]["Type"]);
      listAttackType.push(element["Special Attack(s)"][0]["Type"]);

      if (element["Special Attack(s)"][1] === undefined) {
        listAttackType.push("-");
        listAttackType.push("-");
      } else {
        listAttackType.push(element["Special Attack(s)"][1]["Type"]);
        listAttackType.push(element["Special Attack(s)"][2]["Type"]);
      }
      
      // 攻撃力
      listAttackDamage.push(element["Fast Attack(s)"][0]["Damage"]);
      listAttackDamage.push(element["Fast Attack(s)"][1]["Damage"]);
      listAttackDamage.push(element["Special Attack(s)"][0]["Damage"]);

      if (element["Special Attack(s)"][1] === undefined) {
        listAttackDamage.push("-")
        listAttackDamage.push("-")
      } else {
        listAttackDamage.push(element["Special Attack(s)"][1]["Damage"]);
        listAttackDamage.push(element["Special Attack(s)"][2]["Damage"]);
      }
      
      listWeakness = element["Resistant"]
      listResistant = element["Weaknesses"]

      bookCombatPower = element["MaxCP"]

      break;
    }
  }

  hand1PselectChoice1.innerText = num;
  hand1PNumberChoice1.innerText = bookNumber;
  hand1PChoice1.innerText = bookName;
  hand1Ptype1Choice1.innerText = bookType1;
  hand1Ptype2Choice1.innerText = bookType2;

  Technique1P11.innerText = listAttack[0];
  Technique1P12.innerText = listAttack[1];
  Technique1P13.innerText = listAttack[2];
  Technique1P14.innerText = listAttack[3];
  Technique1P15.innerText = listAttack[4];

  TechniqueType1P11.innerText = listAttackType[0];
  TechniqueType1P12.innerText = listAttackType[1];
  TechniqueType1P13.innerText = listAttackType[2];
  TechniqueType1P14.innerText = listAttackType[3];
  TechniqueType1P15.innerText = listAttackType[4];

  TechniqueDamage1P11.innerText = listAttackDamage[0];
  TechniqueDamage1P12.innerText = listAttackDamage[1];
  TechniqueDamage1P13.innerText = listAttackDamage[2];
  TechniqueDamage1P14.innerText = listAttackDamage[3];
  TechniqueDamage1P15.innerText = listAttackDamage[4];


  weakness1P1.innerText = listWeakness;
  resistance1P1.innerText = listResistant;

  combatPower1P1.innerText = bookCombatPower
  
// 2P側 に入れる---------------------------------------------------

  num = Number(String(select2Panimal.value)[0]);
  
  // 初期化

  bookNumber = 0;
  bookName = "";
  bookType1 = "";
  bookType2 = "";

  listAttack = [];
  listAttackType = [];
  listAttackDamage = [];
  listWeakness = []; // 弱点
  listResistant= []; // 抵抗
  bookCombatPower = "";

  if (num === 1) {
    bookNumber = hand2PNumber1.innerText;
    bookName = hand2P1.innerText;
    bookType1 = hand2Ptype11.innerText;
    bookType2 = hand2Ptype21.innerText;

  } else if (num === 2) {
    bookNumber = hand2PNumber2.innerText;
    bookName = hand2P2.innerText;
    bookType1 = hand2Ptype12.innerText;
    bookType2 = hand2Ptype22.innerText;

  } else if (num === 3) {
    bookNumber = hand2PNumber3.innerText;
    bookName = hand2P3.innerText;
    bookType1 = hand2Ptype13.innerText;
    bookType2 = hand2Ptype23.innerText;
  
  } else if (num === 4) {
    bookNumber = hand2PNumber4.innerText;
    bookName = hand2P4.innerText;
    bookType1 = hand2Ptype14.innerText;
    bookType2 = hand2Ptype24.innerText;

  } else if (num === 5) {
    bookNumber = hand2PNumber5.innerText;
    bookName = hand2P5.innerText;
    bookType1 = hand2Ptype15.innerText;
    bookType2 = hand2Ptype25.innerText;

  } else if (num === 6) {
    bookNumber = hand2PNumber6.innerText;
    bookName = hand2P6.innerText;
    bookType1 = hand2Ptype16.innerText;
    bookType2 = hand2Ptype26.innerText;
  }
  
  for (const element of allPokemon) {
   
    if (element["Number"] ==  Number(bookNumber)) {

      console.log(element);

      // 技名
      listAttack.push(element["Fast Attack(s)"][0]["Name"]);
      listAttack.push(element["Fast Attack(s)"][1]["Name"]);
      listAttack.push(element["Special Attack(s)"][0]["Name"]);

      // ポケモン図鑑No.10のポケモンはスペシャルアタックが二つしか
      // 設定されていないので、エラー会費の為にif判定をしている
      if (element["Special Attack(s)"][1] === undefined) {
        listAttack.push("-")
        listAttack.push("-")
      } else {
        listAttack.push(element["Special Attack(s)"][1]["Name"]);
        listAttack.push(element["Special Attack(s)"][2]["Name"]);
      }

      // 技Type
      listAttackType.push(element["Fast Attack(s)"][0]["Type"]);
      listAttackType.push(element["Fast Attack(s)"][1]["Type"]);
      listAttackType.push(element["Special Attack(s)"][0]["Type"]);

      if (element["Special Attack(s)"][1] === undefined) {
        listAttackType.push("-")
        listAttackType.push("-")
      } else {
        listAttackType.push(element["Special Attack(s)"][1]["Type"]);
        listAttackType.push(element["Special Attack(s)"][2]["Type"]);
      }

      // 攻撃力
      listAttackDamage.push(element["Fast Attack(s)"][0]["Damage"]);
      listAttackDamage.push(element["Fast Attack(s)"][1]["Damage"]);
      listAttackDamage.push(element["Special Attack(s)"][0]["Damage"]);

      if (element["Special Attack(s)"][1] === undefined) {
        listAttackDamage.push("-")
        listAttackDamage.push("-")
      } else {
        listAttackDamage.push(element["Special Attack(s)"][1]["Damage"]);
        listAttackDamage.push(element["Special Attack(s)"][2]["Damage"]);
      }
      
      listWeakness = element["Resistant"]
      listResistant = element["Weaknesses"]

      bookCombatPower = element["MaxCP"]
      break;
    }
  }

  hand2PselectChoice1.innerText = num;

  hand2PNumberChoice1.innerText = bookNumber;
  hand2PChoice1.innerText = bookName;
  hand2Ptype1Choice1.innerText = bookType1;
  hand2Ptype2Choice1.innerText = bookType2;

  Technique2P11.innerText = listAttack[0];
  Technique2P12.innerText = listAttack[1];
  Technique2P13.innerText = listAttack[2];
  Technique2P14.innerText = listAttack[3];
  Technique2P15.innerText = listAttack[4];

  TechniqueType2P11.innerText = listAttackType[0];
  TechniqueType2P12.innerText = listAttackType[1];
  TechniqueType2P13.innerText = listAttackType[2];
  TechniqueType2P14.innerText = listAttackType[3];
  TechniqueType2P15.innerText = listAttackType[4];

  TechniqueDamage2P11.innerText = listAttackDamage[0];
  TechniqueDamage2P12.innerText = listAttackDamage[1];
  TechniqueDamage2P13.innerText = listAttackDamage[2];
  TechniqueDamage2P14.innerText = listAttackDamage[3];
  TechniqueDamage2P15.innerText = listAttackDamage[4];


  weakness2P1.innerText = listWeakness;
  resistance2P1.innerText = listResistant;

  combatPower2P1.innerText = bookCombatPower


  // 音を出す
  document.getElementById('btn_battle_start_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_battle_start_audio").play(); //クリックしたら音を再生

});

//  ==============================================================

fight1Result.addEventListener("click", function () {

  console.log("----");

  if (hand2PselectChoice1.innerText === "?") {
    alert("まだbattleが始まってません")
    return "処理終了"; 
  }

  if (Number(combatPower1P1.innerText) >= Number(combatPower2P1.innerText)) {
    result1Win.innerText = "1P"
  } else {
    result1Win.innerText = "2P"
  }


  // 音を出す
  document.getElementById('btn_decided_audio').currentTime = 0; //連続クリックに対応
  document.getElementById("btn_win_audio").play(); //クリックしたら音を再生
});



// 以下の関数作ったが、変数受け渡しがうまくできず断念

//  ==============================================================

// // 「battleStart」ボタンの処理で使う汎用プログラム

// function choiceInfoPokemon(num) {
//   // function choiceInfoPokemon(num, bookNumber, bookName, bookType1, bookType2, listAttack, listAttackType, listWeakness, listResistant) {

//   console.log(typeof num, num);
//   console.log(num === 2);
//   console.log(hand1PNumber2.innerText);

//   if (num === 1) {
//     bookNumber = hand1PNumber1.innerText;
//     bookName = hand1P1.innerText;
//     bookType1 = hand1Ptype11.innerText;
//     bookType1 = hand1Ptype21.innerText;

//   } else if (num === 2) {
//     console.log("aaaaaaa");
//     bookNumber = hand1PNumber2.innerText;
//     bookName = hand1P2.innerText;
//     bookType1 = hand1Ptype12.innerText;
//     bookType2 = hand1Ptype22.innerText;

//   } else if (num === 3) {
//     bookNumber = hand1PNumber3.innerText;
//     bookName = hand1P3.innerText;
//     bookType1 = hand1Ptype13.innerText;
//     bookType2 = hand1Ptype23.innerText;
  
//   } else if (num === 4) {
//     bookNumber = hand1PNumber4.innerText;
//     bookName = hand1P4.innerText;
//     bookType1 = hand1Ptype14.innerText;
//     bookType2 = hand1Ptype24.innerText;

//   } else if (num === 5) {
//     bookNumber = hand1PNumber5.innerText;
//     bookName = hand1P5.innerText;
//     bookType1 = hand1Ptype15.innerText;
//     bookType2 = hand1Ptype25.innerText;

//   } else if (num === 6) {
//     bookNumber = hand1PNumber6.innerText;
//     bookName = hand1P6.innerText;
//     bookType1 = hand1Ptype16.innerText;
//     bookType2 = hand1Ptype26.innerText;
//   }
  
//   console.log(bookNumber, bookName, bookType1, bookType2)


//   for (const element of allPokemon) {
   
//     if (element["Number"] ==  Number(bookNumber)) {

//       console.log(element);
//       listAttack.push(element["Fast Attack(s)"][0]["Name"]);
//       listAttack.push(element["Fast Attack(s)"][1]["Name"]);
//       listAttack.push(element["Special Attack(s)"][0]["Name"]);
//       listAttack.push(element["Special Attack(s)"][1]["Name"]);
//       listAttack.push(element["Special Attack(s)"][2]["Name"]);

//       listAttackType.push(element["Fast Attack(s)"][0]["Type"]);
//       listAttackType.push(element["Fast Attack(s)"][1]["Type"]);
//       listAttackType.push(element["Special Attack(s)"][0]["Type"]);
//       listAttackType.push(element["Special Attack(s)"][1]["Type"]);
//       listAttackType.push(element["Special Attack(s)"][2]["Type"]);
      
//       listWeakness = element["Resistant"]
//       listResistant = element["Weaknesses"]

//       break;
//     }
//   }

// }
