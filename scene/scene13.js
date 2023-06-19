function showScene13Dialogue0() {
  let dialogue = new Dialogue(
    "흐.. 일주일이 생각보다 금방 지나갔네.\n곧 업무평가 결과 나올텐데 뭔가 무섭다...",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene13Dialogue1() {
  let dialogue = new Dialogue(
    player.name +
      "씨, 수고했어요. \n김과장이 주말에 결혼하고 신혼여행을 가느라 내가 대신 업무 평가서를 전달합니다.",
    "부장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene13Dialogue2() {
  let dialogue = new Dialogue(
    "원래 입사 초는 누구나 완벽하지 않으니 결과에 너무 연연하지 말아요.\n신입 사원이었을 때 생각나네. 허허허",
    "부장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene13Dialogue3() {
  let dialogue = new Dialogue(
    "감사합니다. 앞으로도 열심히 하겠습니다!",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function gameoverAlert() {
  let dialogue = new Dialogue(
    "체력을 모두 소진하여 중도퇴사하게 되었습니다. \n게임을 다시 플레이하시려면 상단의 다시하기 버튼을 눌러주세요.",
    "알림"
  );
  dialogue.create();
  showDialogueNextButton();
}

function endingComment() {
  let m_comment;
  let w_comment;
  let r_comment;

  if (player.stat_list["정신"] < 1) {
    m_comment = "-멘탈/의지가 약한 모습이 자주 관찰됨\n";
  } else if (player.stat_list["정신"] < 2) {
    m_comment = "-멘탈/의지가 약한 모습이 종종 관찰됨\n";
  } else if (player.stat_list["정신"] < 3) {
    m_comment = "-멘탈/의지가 약하지도 강하지도 않음\n";
  } else if (player.stat_list["정신"] < 4) {
    m_comment = "-멘탈/의지가 강한 모습이 종종 관찰됨\n";
  } else {
    m_comment = "-멘탈/의지가 강한 모습이 자주 관찰됨\n";
  }

  if (player.stat_list["능력"] < 1) {
    w_comment = "-다소 일머리가 없어 보임\n";
  } else if (player.stat_list["능력"] < 2) {
    w_comment = "-업무 능력 수준은 보통임\n";
  } else {
    w_comment = "-업무 능력이 매우 뛰어남\n";
  }
  if (player.stat_list["인간관계"] < 1) {
    r_comment = "-주변 동료/상사로부터의 평이 매우 나쁨";
  } else if (player.stat_list["인간관계"] < 2) {
    r_comment = "-주변 동료/상사로부터의 평이 \n   좋지 않은 편";
  } else if (player.stat_list["인간관계"] < 3) {
    r_comment = "-주변 동료/상사와 관계는 그저 그럼";
  } else if (player.stat_list["인간관계"] < 4) {
    r_comment = "-주변 동료/상사와의 관계가 좋음";
  } else {
    r_comment = "-주변 동료/상사와의 관계가 매우 좋음";
  }

  textFont(font_bold);
  fill(0);
  textAlign(LEFT);
  textSize(26);
  textLeading(70);
  textStyle(NORMAL);
  text(m_comment + w_comment + r_comment, 305, 391);

  resetButton.show();
}
