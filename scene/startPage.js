function showPlayerNameInput() {
  image(player_name, width / 2, height / 2, width, height);
  showNameInput();
}

function showStartDialogue1() {
  textStyle(ITALIC);
  let dialogue = new Dialogue(
    "MZ 오피스에서는 ‘정신력’, ‘업무능력’, 그리고 ‘대인관계’ 수치를 업무 평가에 반영합니다.",
    "안내"
  );
  dialogue.create();
  showDialogueNextButton();
  textStyle(NORMAL);
}

function showStartDialogue2() {
  textStyle(ITALIC);
  let dialogue = new Dialogue(
    "플레이 도중 사표를 내면 게임이 종료됩니다. \n만약 체력이 0이 되면 주인공이 지쳐서 중도 퇴사 할 수도 있으니 유의하세요!",
    "안내"
  );
  dialogue.create();
  showDialogueNextButton();
  textStyle(NORMAL);
}
