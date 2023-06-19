// 맑눈광 인트로

function showScene5Dialogue1() {
  let dialogue = new Dialogue(
    "간식도 먹었으니 얼른 과장님께 자료 가져다 드려야지. \n열심히 했는데 한 번에 통과됐음 좋겠다",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene5Dialogue2() {
  let dialogue = new Dialogue(
    "오케이, 잘 했네.\n돌아가는 길에 저어기 저 눈 맑아보이는 친구한테 이것 좀 전달해줘요.",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene5Dialogue3() {
  let dialogue = new Dialogue(
    "넵! 엇 근데 저분 에어팟을 꼽고 있네..\n음악에 완전히 심취해있는 것 같은데 어떻게 부르지?",
    player.name
  );
  dialogue.create();
  showNextButton();
}
