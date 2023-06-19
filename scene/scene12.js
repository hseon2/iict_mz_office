function showScene12Dialogue1() {
  let dialogue = new Dialogue("드디어 금요일! 내일이면 주말이다~", player.name);
  dialogue.create();
  showDialogueNextButton();
  dialogueNextButton.mousePressed(() => {
    player.changeStat("정신", 1);
    detail++;
    dialogueTimer = 0;
    textCounter = 0;
    isInConversation = false;
    dialogueNextButton.hide();
    loop();
  });
}

function showScene12Dialogue2() {
  let dialogue = new Dialogue(
    "금요일이 되어 '정신력'이 한 단계 상승했습니다",
    "알림"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene12Dialogue3() {
  let dialogue = new Dialogue(
    "헉 벌써 퇴근시간. 아직 일 다 마무리 못 했는데..",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene12Dialogue4() {
  let dialogue = new Dialogue(
    "야근해서 마무리하고 가야 하나??\n아니지, 오늘 불금인데 뭔가 억울해. 그냥 퇴근할까..?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showSelectionModal4(){
  
  image(img_selection4, width / 2, height / 2, width, height);
  let x = mouseX;
  let y = mouseY;
  if (x > 200 && x < 569 && y > 190 && y < 540) {
    image(img_selection4_1, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      detail = 5;
      player.changeStat("정신", -1);
      player.changeStat("체력", +25);
    }
  } else if (x > 695 && x < 1060 && y > 190 && y < 540) {
    image(img_selection4_2, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      detail = 6;
      player.changeStat("정신", +1);
      player.changeStat("체력", -15);
    }
  }
}