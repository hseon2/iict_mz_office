// 엑셀

function showScene3Dialogue1() {
  let dialogue = new Dialogue(
    player.name +
      "씨, 여기. 탕비실 간식 구매 내역 적어놓은 건데 누가 했는지 아주 엉망이야.\n엑셀로 좀 보기 좋게 정리해줘요.",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene3Dialogue2() {
  let dialogue = new Dialogue(
    "30분이면 알아서 떡-하니 잘 정리해줄 수 있죠?\n이런걸 요즘 알잘..떡걸센? 이라고 하던가. 흠",
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
  resetButton.hide();
  endingButton.hide();
  image(excel_opening, width / 2, height / 2, width, height);

  showStartButton();
  startButton.position(width / 2 - startButton.width / 2, (height * 4) / 5);
}
