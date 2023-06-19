function createStartButton() {
  startButton = createButton("START");

  startButton.hide();
  startButton.position(
    width / 2 - startButton.width / 2,
    height / 2 - startButton.height / 2
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

  alertCloseButton.style("background-color", "white");
  alertCloseButton.style("color", "black");
  alertCloseButton.style("font-size", "26px");
  alertCloseButton.style("font-weight", "bold");
  alertCloseButton.style("cursor", "pointer");
  alertCloseButton.style("border", "none");
  alertCloseButton.size(155, 57);
  alertCloseButton.hide();
}

function createNameInput() {
  nameInput = createInput();
  nameInput.hide();
}

function createResetButton() {
  resetButton = createButton("");
  resetButton.html(
    '<img src="' +
      "assets/reset.png" +
      '" width="' +
      90 +
      '" height="' +
      80 +
      '">'
  );

  resetButton.style("background-color", "transparent");
  resetButton.style("cursor", "pointer");
  resetButton.style("border", "none");
  resetButton.hide();
}

function createEndingButton() {
  endingButton = createButton("");
  endingButton.html(
    '<img src="' +
      "assets/ending.png" +
      '" width="' +
      90 +
      '" height="' +
      80 +
      '">'
  );

  endingButton.style("background-color", "transparent");
  endingButton.style("cursor", "pointer");
  endingButton.style("border", "none");
  endingButton.hide();
}



function showStartButton() {
  startButton.show();
  startButton.size(220, 80);
  startButton.style("fontSize", "36px");
  startButton.style("background-color", "transparent");
  startButton.style("color", "#ffffff");
  startButton.style("border-style", "solid");
  startButton.style("border-width", "4px");
  startButton.style("border-color", "#ffffff");
  startButton.style("font-weight", "bold");
  startButton.style("letter-spacing", "1px");

  startButton.style("textFont", font_regular);
  startButton.mousePressed(() => {
    if (!gameStarted) {
      gameStarted = true;
      startButton.hide();
    } else {
      miniGame += 1;
      startButton.hide();
    }
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
    dialogueNextButton.hide();
    loop();
  });
}

function showAlertCloseButton() {
  alertCloseButton.show();
  alertCloseButton.position(640 - 155 / 2, 465);
  alertCloseButton.mousePressed(() => {
    alertCloseButton.hide();
    scene++;
    detail = 0;
  });
}

function showNameInput() {
  nameInput.show();
  nameInput.position(439, 391);
  nameInput.size(402, 94);
  nameInput.style("border-radius", "10px");
  nameInput.style("font-size", "34px");
  nameInput.style("text-align", "CENTER");
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
  resetButton.position(width - 115, 10);

  resetButton.mousePressed(() => {
    location.reload();
  });
}

function showEndingButton() {
  endingButton.show();
  endingButton.position(width - 195, 10);
  endingButton.mousePressed(() => {
    endingButton.hide();
    nextButton.hide();
    dialogueNextButton.hide();
    miniGame = 0;
    detail = 0;
    dialogueTimer = 0;
    scene = 100;
    ending();
  });
}
