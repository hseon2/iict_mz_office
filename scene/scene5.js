// 맑눈광 인트로

function showScene5Dialogue1() {
  let dialogue = new Dialogue(
    "얼른 과장님께 자료 가져다 드려야지. \n진짜 열심히 했는데.. 한번에 통과되겠지?", player.name);
  dialogue.create();
  showDialogueNextButton();
}

function showScene5Dialogue2() {
  let dialogue = new Dialogue(
    player.name + "씨 수고 했어요. 자리로 돌아가는 길에 A씨에게 이 자료 좀 전달해줘요.", "과장");
  dialogue.create();
  showDialogueNextButton();
}

function showScene5Dialogue3() {
  let dialogue = new Dialogue(
    "에어팟을 꼽고 있네..\n음악에 완전히 심취해있는 것 같은데 어떻게 부르지?", player.name);
  dialogue.create();
  showNextButton();
}

