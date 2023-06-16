function showScene13Dialogue1() {
  let dialogue = new Dialogue(
    player.name + "씨, 수고했어요. \n김과장이 주말에 결혼하고 신혼여행을 가느라 내가 대신 업무 평가서를 전달합니다. \n얘기 많이 들었어요. 앞으로도 잘 부탁합니다.",
    "부장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene13Dialogue2() {
  let dialogue = new Dialogue(
    "감사합니다. 열심히 하겠습니다!",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}