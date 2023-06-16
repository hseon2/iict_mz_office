// 엑셀

function showScene3Dialogue1() {
  let dialogue = new Dialogue(
    player.name + "씨, 이 자료를 참고해서 오늘까지 상반기 매출 추이를 엑셀로 보기 좋게 정리해줘요."
  , "과장");
  dialogue.create();
  showDialogueNextButton();
}

function showScene3Dialogue2() {
  let dialogue = new Dialogue(
    "엑셀은 당연히 잘 다룰 줄 알죠?"
  , "과장");
  dialogue.create();
  showDialogueNextButton();
}

function showScene3Dialogue3() {
  let dialogue = new Dialogue(
    "하필 엑셀이라니ㅜ 이럴 줄 알았으면 컴활 미리 공부해둘 걸..ㅎ"
  , player.name);
  dialogue.create();
  showDialogueNextButton();
}
function showScene3Dialogue4() {
  let dialogue = new Dialogue(
    "작업 속도를 높이려면 아무래도 단축키가 편하겠지? 얼른 외워서 빨리 해치워버려야겠다."
  , player.name);
  dialogue.create();
  showDialogueNextButton();
}

function excelOpening() {
  background(255);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  text("퇴근 전까지 엑셀 시트를 채워보자!", 640, 200);
  fill(255, 0, 0);
  textSize(30);
  text(
    "엑셀 단축키를 활용해 제한 시간 안에 문서를 작성하자!\n\n<게임설명>\n- 10초 동안 엑셀 단축키를 암기할 수 있다.\n- 5개의 문제가 주어지며, 문제별 제한시간은 5초이다.\n- 문제를 맞출 때마다 ‘능력’ 스탯을 5점씩 획득할 수 있다.",
    640,
    400
  );
  fill(0);

  showStartButton();
  startButton.position(
    width / 2 - startButton.width / 2,
    height *3/ 4
  );
}
