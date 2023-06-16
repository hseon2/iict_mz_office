// 에어팟 제거 이후

function showScene7Dialogue1() {
  let dialogue = new Dialogue(
    player.name + "님, 자료 전달 감사해요.",
    "맑눈광"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene7Dialogue2() {
  let dialogue = new Dialogue(
    "근데 음악 들으면 집중 안 되지 않아요?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene7Dialogue3() {
  let dialogue = new Dialogue(
    "저는 에어팟을 껴야 집중이 더 잘 됩니다.",
    "맑눈광"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene7Dialogue4() {
  let dialogue = new Dialogue(
    "아 네..ㅎㅎ 4시에 회의 있는 거 아시죠?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene7Dialogue5() {
  let dialogue = new Dialogue("그럼요! 이따 봬요~", "맑눈광");
  dialogue.create();
  showNextButton();
}
