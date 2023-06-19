function showScene11Dialogue1() {
  let dialogue = new Dialogue("아~ 배부르다.", player.name);
  dialogue.create();
  showDialogueNextButton();
}

function showScene11Dialogue2() {
  let dialogue = new Dialogue("밥은 잘 먹고 왔나?", "과장");
  dialogue.create();
  showDialogueNextButton();
}

function showScene11Dialogue3() {
  let dialogue = new Dialogue("네네! 과장님 맛있게 드셨어요?", player.name);
  dialogue.create();
  showDialogueNextButton();
}
function showScene11Dialogue4() {
  let dialogue = new Dialogue(
    "나야 뭐 평소처럼 국밥 든든하게 먹었지. \n근데 별건 아니고 여기..",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene11Dialogue5() {
  let dialogue = new Dialogue("엇 과장님! 결혼하세요?", player.name);
  dialogue.create();
  showDialogueNextButton();
}

function showScene11Dialogue6() {
  let dialogue = new Dialogue(
    "으응. 이번 주말인데, 시간 되면 오고. \n안 주기도 그래서 주는 거니까 부담 갖지 말고 와서 밥이나 먹고 가~",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}
function showScene11Dialogue7() {
  let dialogue = new Dialogue(
    "흠 앞으로 회사생활 하려면 가는 게 좋을 것 같은데, \n축의금을 얼마나 내야 하지?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function weddingOpening() {
  resetButton.hide();
  endingButton.hide();
  image(wedding_opening, width / 2, height / 2, width, height);

  showStartButton();
  startButton.position(width / 2 - startButton.width / 2, (height * 5) / 7);
}

function showScene11Dialogue8() {
  let dialogue = new Dialogue(
    money +"만 원?\n" + wedding_comment,
    "동료2"
  );
  dialogue.create();
  showDialogueNextButton();
}