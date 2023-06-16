// 게임 시작 화면
let img_start;

function showStartPage() {
  imageMode(CENTER);
  image(img_start, width / 2, height / 2);
  showStartButton();
  startButton.position(
    width / 2 - startButton.width / 2,
    height / 2 - startButton.height / 2 + 300
  );
  startButton.size(180, 70);
  startButton.style("fontSize", "36px");
  startButton.style("background", "#ffffff");
  startButton.style("color", "#000099");
  startButton.style("border-style", "solid");
  startButton.style("border-width", "6px");
  startButton.style("font-weight", "bold");

  fill(255);
}

// 오프닝 장면
function showOpening() {
  switch (detail) {
    case 0:
      image(bg_single, width / 2, height / 2);
      showOpeningDialogue1();
      break;
    case 1:
      image(bg_single, width / 2, height / 2);
      showOpeningDialogue2();
      break;
  }
}

// 플레이어 이름 입력하는 장면
function startGame() {
  switch (detail) {
    case 0:
      image(bg_single, width / 2, height / 2);
      showStartDialogue1();
      break;
    case 1:
      image(bg_single, width / 2, height / 2);
      showPlayerNameInput();
      break;
  }
}

// 분기점 1
function scene1() {
  switch (detail) {
    case 0:
      dialogueTimer += deltaTime;
      image(bg_room_noon, width / 2, height / 2);
      if (dialogueTimer <= 2000) {
        fill(255);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text(
          "(침대 옆에 비치된 미니 책상 위에 놓여있는 아이폰 알람이 따라라랑 울리는 장면)",
          width / 2,
          height / 4
        );
      } else if (dialogueTimer > 2000 && dialogueTimer <= 4000) {
        fill(255);
        textStyle(BOLD);
        textSize(30);
        text(
          "(알람 소리를 못 듣고 여전히 잠들어있는 플레이어)",
          width / 2,
          height / 4
        );
      } else if (dialogueTimer > 4000) {
        image(bg_room_morning, width / 2, height / 2);
        showScene1Dialogue1();
      }
      break;
    case 1:
      image(bg_room_morning, width / 2, height / 2);
      showScene1Dialogue2();
      break;
    case 2:
      image(bg_room_morning, width / 2, height / 2);
      showSelectionModal1();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      strokeWeight(1);
      alert = new Alert(
        "15분 지각.. 그래도 돈 굳었다!\n‘금전’ -10, ‘체력’ -10, ‘인간관계’ -10"
      );
      alert.create();
      break;
    case 4:
      image(bg_office, width / 2, height / 2);
      strokeWeight(1);
      alert = new Alert(
        "1시간 지각.. 따릉이는 역시 무리였나\n ‘체력’ -15, ‘인간관계’ -15"
      );
      alert.create();
      break;
    case 5:
      image(bg_office, width / 2, height / 2);
      strokeWeight(1);
      alert = new Alert(
        "1분 남기고 무사 도착! 택시비 2만원 쓴 보람이 있네\n‘금전’ -30"
      );
      alert.create();
  }
  showHeader();
}

// 장면 2
function scene2() {
  switch (detail) {
    case 0:
      dialogueTimer += deltaTime;
      image(bg_office, width / 2, height / 2);
      if (dialogueTimer <= 1500) {
      } else {
        showScene2Dialogue1();
      }
      break;
    case 1:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2500) {
        background(0);
        fill(255);
        textStyle(BOLD);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("다음날", width / 2, height / 2);
      } else {
        image(bg_office, width / 2, height / 2);
        showScene2Dialogue2();
      }
      break;
    case 2:
      background(0);
      fill(255);
      textStyle(BOLD);
      textSize(30);
      textAlign(CENTER, CENTER);
      text(
        "MZ오피스는 개인의 취향에 따라 샐러드파와 든든파로 나뉘어 점심식사를 한다. \n점심으로 누구와 무엇을 먹을지 선택해보자!",
        width / 2,
        height / 2
      );
      showDialogueNextButton();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      showScene2Dialogue3();
      break;
    case 4:
      image(bg_office, width / 2, height / 2);
      showSelectionModal2();
      break;
    case 5:
      //샐러드파 선택
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "이따 배는 고프겠지만 그래도 동기들이랑 친해졌다 헤헤\n‘인간관계’ +30, ‘체력’ -20"
      );
      alert.create();
      break;
    case 6:
      //든든파 선택
      background(255);
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "역시 사람은 밥을 먹어야지. 근데 동기들 나빼고 다 친해진 듯..\n‘체력’ +30, ‘인간관계’ -20"
      );
      alert.create();
      break;
  }
  showHeader();
}

function scene3() {
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      showScene3Dialogue1();
      showHeader();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene3Dialogue2();
      showHeader();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      showScene3Dialogue3();
      showHeader();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      showScene3Dialogue4();
      showHeader();
      break;
    case 4:
      if (miniGame === 1) {
        Excel();
      } else {
        excelOpening();
      }
      break;
    case 5:
      image(bg_office, width / 2, height / 2);
      strokeWeight(1);
      alert = new Alert("'능력’스텟을 " + score + "만큼 획득하셨습니다");
      alert.create();
      break;
  }
}

function scene4() {
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      showScene4Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene4Dialogue2();
      break;
    case 2:
      dialogueTimer += deltaTime;
      image(bg_office, width / 2, height / 2);
      if (dialogueTimer <= 2000) {
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text(
          "회사 탕비실에 비치된 KANU 커피를 집어 들어 종이컵에 커피를 탐",
          width / 2,
          height / 4
        );
      } else if (dialogueTimer <= 4000) {
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text(
          "(주변 눈치를 살피다 초콜릿 세 봉지를 주머니에 넣는다)",
          width / 2,
          height / 4
        );
      } else {
        showScene4Dialogue3();
      }
      break;
  }
  showHeader();
}

function scene5() {
  switch (detail) {
    case 0:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2000) {
        image(bg_office, width / 2, height / 2);
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text(
          "(양손에 인쇄한 엑셀 자료를 꼭 쥐고 두근두근한 표정을 지음)",
          width / 2,
          height / 4
        );
      } else {
        image(bg_office, width / 2, height / 2);
        showScene5Dialogue1();
      }
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene5Dialogue2();
      break;
    case 2:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2000) {
        image(bg_office, width / 2, height / 2);
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text(
          "과장님의 요청에 따라 자료를 들고 동기의 자리에 감",
          width / 2,
          height / 4
        );
      } else {
        image(bg_office, width / 2, height / 2);
        showScene5Dialogue3();
      }
      break;
  }
  showHeader();
}

function scene6() {
  if (miniGame === 2) {
    Airpods();
    showNextButton();
  } else {
    airpodsOpening();
  }
}
function scene7() {
  textStyle(NORMAL);
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      showScene7Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene7Dialogue2();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      showScene7Dialogue3();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      showScene7Dialogue4();
      break;
    case 4:
      image(bg_office, width / 2, height / 2);
      showScene7Dialogue5();
      break;
  }
  showHeader();
}

function scene8() {
  switch (detail) {
    case 0:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2000) {
        image(bg_office, width / 2, height / 2);
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text("시계가 4시를 가리키고 있음", width / 2, height / 4);
      } else {
        image(bg_office, width / 2, height / 2);
        showScene8Dialogue1();
      }
      showHeader();
      break;
    case 1:
      if (miniGame === 3) {
        dialogueTimer += deltaTime;
        if (dialogueTimer <= 30000) {
          Meeting();
        } else {
          background(255);
          alert = new Alert("Score : " + meetingScore + "\n~ 스텟이 ~만큼 ..");
          alert.create();
        }
      } else {
        meetingOpening();
      }
      break;
  }
}

function scene9() {
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      showScene9Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene9Dialogue2();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      showScene9Dialogue3();
      break;
  }
  showHeader();
}

function scene10() {
  switch (detail) {
    case 0:
      image(bg_single, width / 2, height / 2);
      showScene10Dialogue1();
      break;
    case 1:
      image(bg_single, width / 2, height / 2);
      showScene10Dialogue2();
      break;
    case 2:
      image(bg_single, width / 2, height / 2);
      showScene10Dialogue3();
      break;
    case 3:
      image(bg_single, width / 2, height / 2);
      showScene10Dialogue4();
      break;
    case 4:
      image(bg_single, width / 2, height / 2);
      showScene10Dialogue5();
      break;
    case 5:
      image(bg_single, width / 2, height / 2);
      showSelectionModal3();
      break;
    case 6:
      // 뒷담하기
      image(bg_single, width / 2, height / 2);
      showScene10_selection1_1();
      break;
    case 7:
      image(bg_single, width / 2, height / 2);
      showScene10_selection1_2();
      break;
    case 8:
      image(bg_single, width / 2, height / 2);
      showScene10_selection1_3();
      break;
    case 9:
      // 알림창
      image(bg_single, width / 2, height / 2);
      alert = new Alert(
        "상사의 뒷담에 동조하다가 발각되어 \n'인간관계'가 20점 하락했습니다. \n 야근이 확정되어 체력이 30점 하락했습니다."
      );
      alert.create();
      break;
    case 10:
      // 참기
      image(bg_single, width / 2, height / 2);
      showScene10_selection2_1();
      break;
    case 11:
      image(bg_single, width / 2, height / 2);
      showScene10_selection2_2();
      break;
    case 12:
      image(bg_single, width / 2, height / 2);
      showScene10_selection2_3();
      break;
    case 13:
      image(bg_single, width / 2, height / 2);
      alert = new Alert(
        "상사의 신임을 얻어\n'인간관계'가 30점 상승했습니다. \n 야근을 피하게 되어 체력이 10점 상승했습니다."
      );
      alert.create();
      break;
  }
  showHeader();
}

function scene11() {
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      showScene11Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene11Dialogue2();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      showScene11Dialogue3();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      showScene11Dialogue4();
      break;
    case 4:
      background(255);
      fill(0);
      textSize(24);
      textAlign(CENTER, CENTER);
      text("청첩장 클로즈업", width / 2, height / 2);
      showDialogueNextButton();
      break;
    case 5:
      image(bg_office, width / 2, height / 2);
      showScene11Dialogue5();
      break;
    case 6:
      image(bg_office, width / 2, height / 2);
      showScene11Dialogue6();
      break;
    case 7:
      image(bg_office, width / 2, height / 2);
      showScene11Dialogue7();
      break;
    case 8:
      if (miniGame === 4) {
        Wedding();
      } else {
        weddingOpening();
      }
      break;
    case 9:
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "축의금으로 " +
          money +
          "만 원을 지출하였습니다. \n'금전' :" +
          statMoney +
          "점\n인간관계: " +
          statRelationship +
          "점"
      );
      alert.create();
      break;
  }
  showHeader();
}

function scene12() {
  switch (detail) {
    case 0:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2000) {
        image(bg_office, width / 2, height / 2);
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text("사무실 시계가 9시를 가리키고 있음", width / 2, height / 4);
      } else {
        showScene12Dialogue1();
      }
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene12Dialogue2();
      break;
    case 2:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2000) {
        image(bg_office, width / 2, height / 2);
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text("시간가는 줄 모르고 열일하는 주인공", width / 2, height / 4);
      } else if (dialogueTimer <= 4000) {
        image(bg_office, width / 2, height / 2);
        fill(0);
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER, CENTER);
        text("시계가 6시를 가리킴", width / 2, height / 4);
      } else {
        image(bg_office, width / 2, height / 2);
        showScene12Dialogue3();
      }
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      showScene12Dialogue4();
      break;
    case 4:
      image(bg_office, width / 2, height / 2);
      showSelectionModal4();
      break;
    case 5:
      //칼퇴
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "칼퇴를 하고 친구들과 즐겁게 금요일 저녁을 보냈습니다.\n '능력' : -20,  '금전' : -10, '체력' : +10, '정신' : +20"
      );
      alert.create();
      break;
    case 6:
      //야근
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "야근을 해서 할 일을 무사히 마무리했습니다.\n '능력' : +20,  '금전' : +10, '체력' : -15, '정신' : -15"
      );
      alert.create();
      break;
  }
  showHeader();
}

function scene13() {
  resetButton.hide();
  endingButton.hide();
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      showScene13Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      showScene13Dialogue2();
      break;
    case 2:
      background(255);
      fill(0);
      textSize(24);
      textAlign(CENTER, CENTER);
      text("업무평가서", width / 2, height / 2);
      showDialogueNextButton();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      fill(0);
      textSize(24);
      textAlign(CENTER, CENTER);
      text("플레이어 최종 대사 + 엔딩", width / 2, height / 2);
      resetButton.show();
      break;
  }
}

function ending() {
  background(255);
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(
    player.name +
      "님의 사표를 승인합니다. \n귀하의 업무평가 결과는 다음과 같습니다.\n ~~~\n당사는 귀하의 무궁한 발전을 기원하겠습니다.",
    width / 2,
    height / 2
  );
}

//--------------------------
// -------- 미니게임 ---------
