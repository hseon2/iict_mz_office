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
  let modal = new SelectionModal("출근 방법 선택");
  modal.create();
  selection1_1.show();
  selection1_2.show();
  selection1_3.show();

  selection1_1.position(width / 2 - 130 - 50, height / 2 - 40);
  selection1_2.position(width / 2 - 50, height / 2 - 40);
  selection1_3.position(width / 2 + 130 - 50, height / 2 - 40);

  selection1_1.size(100, 100);
  selection1_2.size(100, 100);
  selection1_3.size(100, 100);

  // 지하철 + 킥보드
  selection1_1.mousePressed(() => {
    detail = 3;
    selection1_1.hide();
    selection1_2.hide();
    selection1_3.hide();
    player.changeStat("금전", -10);
    player.changeStat("체력", -10);
    player.changeStat("인간관계", -10);
  });
  // 따릉이
  selection1_2.mousePressed(() => {
    detail = 4;
    selection1_1.hide();
    selection1_2.hide();
    selection1_3.hide();
    player.changeStat("금전", -30);
    player.changeStat("체력", 0);
    player.changeStat("인간관계", 0);
  });
  // 택시
  selection1_3.mousePressed(() => {
    detail = 5;
    selection1_1.hide();
    selection1_2.hide();
    selection1_3.hide();
    player.changeStat("금전", 0);
    player.changeStat("체력", -15);
    player.changeStat("인간관계", -15);
  });
}
