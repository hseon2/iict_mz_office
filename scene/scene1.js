// 주인공의 집

function showScene1Dialogue1() {
  let dialogue = new Dialogue(
    "분명 조금 잤는데 왜 이렇게 개운하지… \n.....? 와 미쳤다 첫 날부터 지각이다",
    player.name
  );
  dialogue.create();
  dialogue.showName();
  showDialogueNextButton();
}

function showScene1Dialogue2() {
  let dialogue = new Dialogue(
    "지하철 타고 근처역으로 가서 킥보드를 타고 갈까? 비싸도 눈 딱 감고 택시를 부를까? \n아님.. 어차피 늦은 거 따릉이 타고 아침 운동이나 해볼까?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene1Dialogue3() {
  let dialogue = new Dialogue("자네 제정신이야?", 과장);
  dialogue.create();
  showDialogueNextButton();
}

function showSelectionModal1() {
  image(img_selection1, width / 2, height / 2, width, height);
  let x = mouseX;
  let y = mouseY;
  if (x > 37 && x < 407 && y > 240 && y < 590) {
    image(img_selection1_1, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      detail = 3;
      player.changeStat("금전", -1);
      player.changeStat("체력", -10);
      player.changeStat("인간관계", -1);
    }
  } else if (x > 450 && x < 819 && y > 240 && y < 590) {
    image(img_selection1_2, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      detail = 4;
      player.changeStat("금전", -3);
      player.changeStat("체력", 0);
      player.changeStat("인간관계", 1);
    }
  } else if (x > 863 && x < 1233 && y > 240 && y < 590) {
    image(img_selection1_3, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      detail = 5;
      player.changeStat("금전", 0);
      player.changeStat("체력", -15);
      player.changeStat("인간관계", -2);
    }
  }


}
