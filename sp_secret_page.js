'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//=======================================================================

const clickHowManySay = document.getElementById("clickHowManySay");
clickHowManySay.addEventListener("click", actOneSay);

function actOneSay() {
  alert('大事な事なのでもう1回言います');
  window.location.reload();
};

//=======================================================================
