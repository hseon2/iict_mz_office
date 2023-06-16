function showScene10Dialogue1() {
  let dialogue = new Dialogue(
    "아니 4시쯤이면 누구나 졸린 거 아니냐고!",
    "동료2"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10Dialogue2() {
  let dialogue = new Dialogue(
    "내 말이. 다들 업무 시간에 카톡하면서 왜 우리한테만 난리람",
    "동료1"
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
    "너네 아침마다 과장님 회사에서 머리 감고 말리는 거 알아? \n감을 머리카락도 몇 가닥 없는 것 같은데.",
    "동료3"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10Dialogue5() {
  let dialogue = new Dialogue(
    "(혼잣말) 하.. 과장님 솔직히 싫긴 한데 뒷담을 해도 되려나?",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showSelectionModal3(){
  
  let modal = new SelectionModal("입이 근질근질한데 이걸 참아, 말아?");
  modal.create();
  selection3_1.show();
  selection3_2.show();

  selection3_1.position(width/2-130-55, height/2-40);
  selection3_2.position(width/2+130-95, height/2-40);

  selection3_1.size(150, 100);
  selection3_2.size(150, 100);

  // 뒷담하기
  selection3_1.mousePressed(() => {
    detail = 6;
    selection3_1.hide();
    selection3_2.hide();
  })
  // 참기
  selection3_2.mousePressed(() => {
    detail = 10;
    selection3_1.hide();
    selection3_2.hide();
  })
}

function showScene10_selection1_1() {
  let dialogue = new Dialogue(
    "그러니까 ㅋㅋㅋ 곧 있으면 과장님도 부장님처럼 대머리 되겠어~",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection1_2() {
  let dialogue = new Dialogue(
    "회의록 작성하랬더니 다들 여기서 감히 상사 뒷담을 까면서 놀아?\n너네 전부 야근해!",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection1_3() {
  let dialogue = new Dialogue(
    "...망했다",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();

  dialogueNextButton.mousePressed(() => {
    player.changeStat("인간관계", -20);
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
    "에이 머리숱으로 뭐라 하는 건 선 넘었지~ 농담이 심하다 ㅎㅎ",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection2_2() {
  let dialogue = new Dialogue(
    "회의록 작성하랬더니 다들 여기서 감히 상사 뒷담을 까면서 놀아?\n" + player.name + "만 내려가서 회의록 작성하고, 나머지는 전부 야근이야!",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene10_selection2_3() {
  let dialogue = new Dialogue(
    "헉 저기서 나타나실 줄이야.. 역시 참길 잘 했어",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
  
  dialogueNextButton.mousePressed(() => {
    player.changeStat("인간관계", 30);
    player.changeStat("체력", 10);
    detail++;
    dialogueTimer = 0;
    textCounter = 0;
    isInConversation = false;
    dialogueNextButton.hide();
    loop();
  });
}