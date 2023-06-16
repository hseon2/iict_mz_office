function createStartButton() {
  startButton = createButton("START");

  startButton.size(100, 40);
  startButton.style("background", "#ffffff");
  startButton.style("textAlign", "center");
  startButton.style("fontSize", "20px");
  startButton.style("textFont", "Arial");

  startButton.hide();
  startButton.position(
    width / 2 - startButton.width / 2,
    height / 2 - startButton.height / 2 + 20
  );
}

function createNextButton() {
  nextButton = createButton("");
  nextButton.html(
    '<img src="' +
      "assets/dialogue_next_button.png" +
      '" width="' +
      50 +
      '" height="' +
      60 +
      '">'
  );

  nextButton.style("background-color", "transparent");
  nextButton.style("cursor", "pointer");
  nextButton.style("border", "none");
  nextButton.hide();
}

function createDialogueNextButton() {
  dialogueNextButton = createButton("");
  dialogueNextButton.html(
    '<img src="' +
      "assets/dialogue_next_button.png" +
      '" width="' +
      50 +
      '" height="' +
      60 +
      '">'
  );

  dialogueNextButton.style("background-color", "transparent");
  dialogueNextButton.style("cursor", "pointer");
  dialogueNextButton.style("border", "none");
  dialogueNextButton.hide();
}

function createAlertCloseButton() {
  alertCloseButton = createButton("확인");
  // alertCloseButton.html(
  //   '<img src="' +
  //     "assets/alert_close_button.png" +
  //     '" width="' +
  //     155 +
  //     '" height="' +
  //     57 +
  //     '">'
  // );

  alertCloseButton.style("background-color", "white");
  alertCloseButton.style("color", "black");
  alertCloseButton.style("font-size", "24px");
  alertCloseButton.style("font-weight", "bold");
  alertCloseButton.style("cursor", "pointer");
  alertCloseButton.style("border", "none");
  alertCloseButton.size(155,57);
  alertCloseButton.hide();
}

function createNameInput() {
  nameInput = createInput();
  nameInput.hide();
}

function createResetButton() {
  resetButton = createButton("다시하기");
  resetButton.hide();
}

function createEndingButton() {
  endingButton = createButton("사표내기");
  endingButton.hide();
}

function createSelection1() {
  selection1_1 = createButton("지하철+킥보드");
  selection1_2 = createButton("따릉이");
  selection1_3 = createButton("택시");

  selection1_1.hide();
  selection1_2.hide();
  selection1_3.hide();
}

function createSelection2() {
  selection2_1 = createButton("샐러드파");
  selection2_2 = createButton("든든파");

  selection2_1.hide();
  selection2_2.hide();
}

function createSelection3() {
  selection3_1 = createButton("나도 같이 욕 좀 해야겠다");
  selection3_2 = createButton("그래도 욕은 하지 말아야지");

  selection3_1.hide();
  selection3_2.hide();
}

function createSelection4() {
  selection4_1 = createButton("아 몰라, 그냥 칼퇴!");
  selection4_2 = createButton("하루쯤 야근하는 것도 나쁘지 않지");

  selection4_1.hide();
  selection4_2.hide();
}

function showStartButton() {
  startButton.show();
  startButton.position(
    width / 2 - startButton.width / 2,
    height / 2 - startButton.height / 2 + 20
  );

  startButton.mousePressed(() => {
    if (!gameStarted) {
      gameStarted = true;
    } else {
      miniGame += 1;
    }
    startButton.hide();
  });
}

function showNextButton() {
  if (!isInConversation) {
    nextButton.show();
  }
  nextButton.position(1180, 612);
  nextButton.mousePressed(() => {
    scene++;
    detail = 0;
    dialogueTimer = 0;
    textCounter = 0;
    nextButton.hide();
    loop();
  });
}

function showDialogueNextButton() {
  if (!isInConversation) {
    dialogueNextButton.show();
  }
  dialogueNextButton.position(1180, 612);
  dialogueNextButton.mousePressed(() => {
    detail++;
    dialogueTimer = 0;
    textCounter = 0;
    isInConversation = false;
    dialogueNextButton.hide();
    loop();
  });
}

function showAlertCloseButton() {
  alertCloseButton.show();
  alertCloseButton.position(640-155/2, 476);
  alertCloseButton.mousePressed(() => {
    alertCloseButton.hide();
    scene++;
    detail = 0;
  });
}

function showNameInput() {
  nameInput.show();
  nameInput.position(
    width / 2 - nameInput.width / 2,
    height / 2 - nameInput.height / 2 + 40
  );
  nameInput.changed(setPlayerName);
}

function setPlayerName() {
  let playerName = nameInput.value();
  if (playerName) {
    player = new Player(playerName);
    gameStarted = true;
    scene++;
    nameInput.value("");
    nameInput.hide();
    detail = 0;
    dialogueTimer = 0;
  }
}

function showResetButton() {
  resetButton.show();
  resetButton.position(width * 0.85, height * 0.03);
  resetButton.mousePressed(() => {
    gameStarted = false;
    resetButton.hide();
    endingButton.hide();
    nextButton.hide();
    delete player;
    scene = -1;
    miniGame = 0;
    detail = 0;
    dialogueTimer = 0;
    showStartPage();
  });
}

function showEndingButton() {
  endingButton.show();
  endingButton.position(width * 0.92, height * 0.03);
  endingButton.mousePressed(() => {
    resetButton.hide();
    endingButton.hide();
    nextButton.hide();
    scene = 100;
  });
}
