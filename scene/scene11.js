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
    "나야 뭐. 늘 비슷하지~ \n근데 별건 아니고 여기..",
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
  background(255);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  text("경조금으로 얼마를 내야 할까?", 640, 200);
  fill(255, 0, 0);
  textSize(30);
  text(
    "과장님과 아직 그리 친하지 않은 사이긴 한데.. \n 부서도 같고, 뭔가 많이 내야 할 것 같아.\n 하지만! 난 이제 막 입사해서 갓 돈 벌기 시작한 신입이라고..\n 그래도,. 뷔페 가격 생각하면 많이 내야겠지?\n\n 에라 모르겠다. 룰렛으로 정해보자. \nSpace바를 눌러서 금액을 랜덤으로 결정해보자!",
    640,
    400
  );
  fill(0);

  showStartButton();
  startButton.position(width / 2 - startButton.width / 2, (height * 3) / 4);
}
