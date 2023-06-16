
function showScene2Dialogue1() {
  let dialogue = new Dialogue(
    "뭐야.. 첫날이라 아무것도 안 시키시네. \n책상에 짐 옮겨놓고 동기들 얼굴 익히다보니 벌써 하루가 다 갔어."
  , player.name);
  dialogue.create();
  showDialogueNextButton();
}


function showScene2Dialogue2() {
  let dialogue = new Dialogue(
    "동기사랑 나라사랑! 오늘은 어제 만난 동기들이랑 더 친해져야지."
  , player.name);
  dialogue.create();
  showDialogueNextButton();
}

function showScene2Dialogue3() {
  let dialogue = new Dialogue(
    "점심에 샐러드 먹으면 저녁까지 배고픈데.. 친해지고 싶었던 동기들이 다 샐러드파네. \n든든파는 비싼 한정식 코스를 먹으러 간다는데.. 상상만으로도 행복하다."
  , player.name);
  dialogue.create();
  showDialogueNextButton();
}

function showSelectionModal2(){
  
  let modal = new SelectionModal("점심 메뉴 선택");
  modal.create();
  selection2_1.show();
  selection2_2.show();

  selection2_1.position(width/2-130-55, height/2-40);
  selection2_2.position(width/2+130-95, height/2-40);

  selection2_1.size(150, 100);
  selection2_2.size(150, 100);

  // 샐러드파
  selection2_1.mousePressed(() => {
    detail = 5;
    selection2_1.hide();
    selection2_2.hide();
    player.changeStat("인간관계", 30);
    player.changeStat("체력", -20);
  })
  // 든든파
  selection2_2.mousePressed(() => {
    detail = 6;
    selection2_1.hide();
    selection2_2.hide();
    player.changeStat("인간관계", -20);
    player.changeStat("체력", 30);
  })
}