function showScene12Dialogue1() {
  let dialogue = new Dialogue("드디어 금요일! 내일이면 주말이다~", player.name);
  dialogue.create();
  showDialogueNextButton();
  dialogueNextButton.mousePressed(() => {
    player.changeStat("정신", 25);
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
    "금요일이 되어 '정신' 스텟이 25점 상승했습니다.",
    "알림"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene12Dialogue3() {
  let dialogue = new Dialogue(
    "아직 일 다 마무리 못 했는데..",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene12Dialogue4() {
  let dialogue = new Dialogue(
    "급한 건 아니지만 이것도 업무 평가에 반영되니까 야근해서 마무리하고 가야 하나??\n아니지, 오늘 불금인데 뭔가 억울해. 그냥 퇴근할까..?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showSelectionModal4(){
  
  let modal = new SelectionModal("업무 평가만 아니었어도..ㅜ 어떡하지?");
  modal.create();
  selection4_1.show();
  selection4_2.show();

  selection4_1.position(width/2-130-55, height/2-40);
  selection4_2.position(width/2+130-95, height/2-40);

  selection4_1.size(150, 100);
  selection4_2.size(150, 100);

  //칼퇴
  selection4_1.mousePressed(() => {
    detail = 5;
    selection4_1.hide();
    selection4_2.hide();
    player.changeStat("능력", -20);
    player.changeStat("금전", -10);
    player.changeStat("체력", +10);
    player.changeStat("정신", +20);
  })
  // 야근
  selection4_2.mousePressed(() => {
    detail = 6;
    selection4_1.hide();
    selection4_2.hide();
    player.changeStat("능력", +20);
    player.changeStat("금전", +10);
    player.changeStat("체력", -15);
    player.changeStat("정신", -15);
  })
}