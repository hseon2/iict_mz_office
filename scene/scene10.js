function showScene10Dialogue1() {
  let dialogue = new Dialogue(
    "아니 4시쯤이면 누구나 졸린 거 아니냐고!",
    "동기3"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10Dialogue2() {
  let dialogue = new Dialogue(
    "내 말이. \n다들 업무 시간에 카톡하면서 왜 우리한테만 난리람. 난 당당해!",
    "동기2"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10Dialogue3() {
  let dialogue = new Dialogue(
    "과장님도 지난번에 보니까 유튜브로 게임 영상 보고계셨습니다.",
    "맑눈광"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10Dialogue4() {
  let dialogue = new Dialogue(
    "뭐??? 나 저번에 유튜브 잠깐 봤다고 시말서 썼는데..",
    "동기4"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10Dialogue5() {
  let dialogue = new Dialogue(
    "(혼잣말) 하.. 입이 근질근질한데. \n나도 한 마디 거들어, 아님 말아?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showSelectionModal3() {
  image(img_selection3, width / 2, height / 2, width, height);
  let x = mouseX;
  let y = mouseY;
  if (x > 200 && x < 569 && y > 190 && y < 540) {
    image(img_selection3_1, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      detail = 6;
    }
  } else if (x > 695 && x < 1060 && y > 190 && y < 540) {
    image(img_selection3_2, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      detail = 10;
    }
  }
}

function showScene10_selection1_1() {
  let dialogue = new Dialogue(
    "저번에 과장님 알잘딱깔센도 알잘떡걸센이라고 하시던데ㅋㅋㅋㅋ\n정확히 알지도 못하면 쓰지나 말지",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection1_2() {
  let dialogue = new Dialogue(
    "회의록 작성하랬더니 다들 여기서 감히 상사 뒷담을 까면서 놀아?\n오늘 전부 야근이야!",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection1_3() {
  let dialogue = new Dialogue("...망했다", player.name);
  dialogue.create();
  showDialogueNextButton();

  dialogueNextButton.mousePressed(() => {
    player.changeStat("체력", -30);
    detail++;
    dialogueTimer = 0;
    textCounter = 0;
    isInConversation = false;
    dialogueNextButton.hide();
    loop();
  });
}

function showScene10_selection2_1() {
  let dialogue = new Dialogue(
    "...",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection2_2() {
  let dialogue = new Dialogue(
    "회의록 작성하랬더니 다들 여기서 감히 상사 뒷담을 까면서 놀아?\n" +
      player.name +
      "만 내려가서 회의록 작성하고, 나머지는 전부 야근이야!",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection2_3() {
  let dialogue = new Dialogue(
    "헉 저기서 나타나실 줄이야.. 역시 참길 잘 했어.\n근데 나만 쏙 빠져나가니까 좀 그런데..",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();

  dialogueNextButton.mousePressed(() => {
    player.changeStat("인간관계", -1);
    detail++;
    dialogueTimer = 0;
    textCounter = 0;
    isInConversation = false;
    dialogueNextButton.hide();
    loop();
  });
}
