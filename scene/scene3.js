// 엑셀

function showScene3Dialogue1() {
  let dialogue = new Dialogue(
    player.name +
      "씨, 여기. \n탕비실 간식 구매 내역 적어놓은 건데 누가 했는지 아주 엉망이야.\n엑셀로 좀 보기 좋게 정리해줘요.",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene3Dialogue2() {
  let dialogue = new Dialogue(
    "30분이면 알아서 떡~하니 잘 정리해줄 수 있죠?\n이런걸 요즘 알잘..떡걸센? 이라고 하던가. 허허허",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene3Dialogue3() {
  let dialogue = new Dialogue(
    "ㅎ.. 네 물론이죠! 열심히 해보겠습니다!!!",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}
function showScene3Dialogue4() {
  let dialogue = new Dialogue(
    "어제 자기 전에 엑셀 단축키 외워 둔 보람이 있네. \n얼른 빠르게 해치워버려야겠다.",
    player.name
  );
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
  startButton.position(width / 2 - startButton.width / 2, (height * 3) / 4);
}
