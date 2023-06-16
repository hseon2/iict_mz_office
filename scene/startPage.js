function showStartDialogue1() {
  textStyle(ITALIC);
  let dialogue1 = new Dialogue("플레이어의 이름을 입력해주세요","알림");
  dialogueTimer += deltaTime;
  if (dialogueTimer >= 0) {
    dialogue1.create();
    showDialogueNextButton();
  }
  textStyle(NORMAL);
}

function showPlayerNameInput() {
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(
    "플레이어 이름을 입력해주세요\n(엔터 키를 누르면 입력이 완료됩니다)",
    width / 2,
    height / 2
  );
  showNameInput();
}

