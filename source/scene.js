// 게임 시작 화면
let img_start;

function showStartPage() {
  imageMode(CENTER);
  image(img_start, width / 2, height / 2, width, height);
  showStartButton();
  startButton.position(
    width / 2 - startButton.width / 2,
    height / 2 - startButton.height / 2
  );

  startButton.size(250, 70);
  startButton.style("background", "#4C4341");
  startButton.style("textAlign", "center");
  startButton.style("fontSize", "41px");
  startButton.style("border-radius", "10px");
  startButton.style("border", "4px solid");
  startButton.style("border-color", "#383332");
  startButton.style("color", "white");
  startButton.style("cursor", "pointer");
  startButton.style("letter-spacing", "4px");
  startButton.position(width / 2 - startButton.width / 2, height - 105);

  startButton.style("textFont", font_bold);
  fill(255);
}

// 오프닝 장면
function showOpening() {
  switch (detail) {
    case 0:
      image(bg_single, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showOpeningDialogue1();
      break;
    case 1:
      image(bg_single, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showOpeningDialogue2();
      break;
  }
}

// 플레이어 이름 입력하는 장면
function startGame() {
  switch (detail) {
    case 0:
      image(bg_single, width / 2, height / 2);
      image(game_rules1, width / 2, height / 2, width, height);
      showStartDialogue1();
      break;
    case 1:
      image(bg_single, width / 2, height / 2);
      image(game_rules2, width / 2, height / 2, width, height);
      showStartDialogue2();
      break;
    case 2:
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
        //침대 옆에 비치된 미니 책상 위에 놓여있는 아이폰 알람이 따라라랑 울리는 장
        fill(0, 0, 0, tp);
        rectMode(CORNER);
        rect(0, 0, width, height);
      } else if (dialogueTimer > 2000 && dialogueTimer <= 4000) {
        tp -= 10;
        fill(0, 0, 0, tp);
        rect(0, 0, width, height);
      } else if (dialogueTimer > 4000) {
        image(bg_room_morning, width / 2, height / 2);
        showScene1Dialogue1();
        tp = 255;
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
      //지하철+킥보드
      image(bg_office, width / 2, height / 2);
      strokeWeight(1);
      alert = new Alert(
        "오랜만에 킥보드를 타서 '체력'이 10 하락했습니다.\n킥보드 대여료로 '금전'을 1만큼 사용했습니다.\n15분 지각으로 '대인관계'가 한 단계 하락합니다.\n"
      );
      alert.create();
      break;
    case 4:
      //택시
      image(bg_office, width / 2, height / 2);
      strokeWeight(1);
      alert = new Alert(
        "택시비로 '금전'을 3만큼 사용했습니다.\n지각을 하지 않아 '대인관계'가 한 단계 상승합니다.\n"
      );
      alert.create();
      break;
    case 5:
      //따릉
      image(bg_office, width / 2, height / 2);
      strokeWeight(1);
      alert = new Alert(
        "허벅지에 쥐가 나 '체력'이 15 하락했습니다.\n1시간 지각으로 '대인관계'가 두 단계 하락합니다.\n"
      );
      alert.create();
  }
  showHeader();
}

// 장면 2
function scene2() {
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(player_sad, width / 2, height / 2, width, height);
      showScene2Dialogue1();
      break;
    case 1:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2500) {
        background(0);
        fill(255);
        textStyle(BOLD);
        textSize(70);
        textAlign(CENTER, CENTER);
        text("다음날", width / 2, height / 2);
      } else {
        day = 2;
        image(bg_office, width / 2, height / 2);
        image(player_clean, width / 2, height / 2, width, height);
        showScene2Dialogue2();
      }
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      image(player_sad, width / 2, height / 2, width, height);
      showScene2Dialogue3();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      showSelectionModal2();
      break;
    case 4:
      //샐러드파 선택
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "동기들과 친해져서 '대인관계'가 한 단계 상승했습니다.\n샐러드만으로 배가 안 차 '체력'이 20 감소했습니다.\n"
      );
      alert.create();
      break;
    case 5:
      //든든파 선택
      background(255);
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "한정식을 배불리 먹어 '체력'이 20 상승했습니다.\n동기들과 함깨하지 못하여 '대인관계'가 한 단계 하락했습니다.\n"
      );
      alert.create();
      break;
  }
  showHeader();
}

function scene3() {
  day = 2;
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(boss1, width / 2, height / 2, width, height);
      showScene3Dialogue1();
      showHeader();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      image(boss1, width / 2, height / 2, width, height);
      showScene3Dialogue2();
      showHeader();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene3Dialogue3();
      showHeader();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
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
      if (gameover) {
        if (life === 0) {
          alert = new Alert(
            "실수를 5회 이상 하여 '업무능력'이 한 단계 하락했습니다.\n멘탈이 부서져 '정신력'이 한 단계 하락했습니다.\n"
          );
          alert.create();
        } else {
          alert = new Alert(
            "시간 내에 문서를 작성하지 못하여\n'업무능력'이 한 단계 하락했습니다.\n멘탈이 부서져 '정신력'이 한 단계 하락했습니다.\n"
          );
          alert.create();
        }
      } else if (gameclear) {
        if (life === 5) {
          alert = new Alert(
            "제한 시간 내에 실수 없이 문서를 작성하여\n'업무능력'이 한 단계 상승했습니다.\n실수 없이 문서를 작성하여 과장님이 매우 흡족해합니다.\n"
          );
          alert.create();
        } else {
          alert = new Alert(
            "제한 시간 내에 문서를 작성하여\n'업무능력'이 한 단계 상승했습니다.\n"
          );
          alert.create();
        }
      }
      showHeader();
      break;
  }
}

function scene4() {
  day = 3;
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(player_sad, width / 2, height / 2, width, height);
      showScene4Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene4Dialogue2();
      break;
    case 2:
      showCoffeeScene();
      break;
    case 3:
      image(coffee_desk, width / 2, height / 2, width, height);
      image(coffee_click, width / 2, height / 2, width, height);
      showScene4Dialogue3();
      break;
  }
  showHeader();
}

function scene5() {
  day = 3;
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene5Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      image(boss1, width / 2, height / 2, width, height);
      showScene5Dialogue2();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      image(player_dirty, width / 2, height / 2, width, height);
      showScene5Dialogue3();
      break;
  }
  showHeader();
}

function scene6() {
  day = 3;
  if (miniGame === 2) {
    Airpods();
  } else {
    airpodsOpening();
  }
}
function scene7() {
  textStyle(NORMAL);
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(co_1, width / 2, height / 2, width, height);
      showScene7Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      image(player_dirty, width / 2, height / 2, width, height);
      showScene7Dialogue2();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      image(co_1, width / 2, height / 2, width, height);
      showScene7Dialogue3();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene7Dialogue4();
      break;
    case 4:
      image(bg_office, width / 2, height / 2);
      image(co_1, width / 2, height / 2, width, height);
      showScene7Dialogue5();
      break;
  }
  showHeader();
}

function scene8() {
  day = 3;
  switch (detail) {
    case 0:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 2000) {
        tp -= 10;
        image(clock_4, width / 2, height / 2, width, height);

        fill(0, 0, 0, tp);
        rect(0, 0, width, height);
      } else {
        image(clock_4, width / 2, height / 2, width, height);
        showScene8Dialogue1();
      }
      showHeader();
      break;
    case 1:
      image(bg_single, width / 2, height / 2);
      image(player_dirty, width / 2, height / 2, width, height);
      showScene8Dialogue2();
      showHeader();
      break;
    case 2:
      if (miniGame === 3) {
        dialogueTimer += deltaTime;
        if (dialogueTimer <= 20000) {
          Meeting();
        } else {
          image(meeting_frame, width / 2, height / 2, width, height);
          image(meeting_room, width / 2, height / 2, width, height);
          image(meeting_boss4, width / 2, height / 2, width, height);
          image(peer1, width / 2, height / 2, width, height);
          image(peer2, width / 2, height / 2, width, height);
          image(peer3, width / 2, height / 2, width, height);
          image(peer4, width / 2, height / 2, width, height);
          alert = new Alert(
            "점수를 " +
              meetingScore +
              "점 획득했습니다.\n보상으로 체력이 " +
              round(meetingScore / 10) +
              " 만큼 증가합니다.\n"
          );
          alert.create();
          alertCloseButton.mousePressed(() => {
            alertCloseButton.hide();
            scene++;
            detail = 0;
            player.changeStat("체력", round(meetingScore / 10));
          });
        }
      } else {
        image(bg_single, width / 2, height / 2);
        meetingOpening();
      }
      break;
  }
}

function scene9() {
  day = 4;
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(boss1_angry, width / 2, height / 2, width, height);
      showScene9Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      image(boss1_angry, width / 2, height / 2, width, height);
      showScene9Dialogue2();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      image(player_dirty, width / 2, height / 2, width, height);
      showScene9Dialogue3();
      break;
  }
  showHeader();
}

function scene10() {
  day = 4;
  switch (detail) {
    case 0:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(co_3, width / 2, height / 2, width, height);
      showScene10Dialogue1();
      break;
    case 1:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(co_2, width / 2, height / 2, width, height);
      showScene10Dialogue2();
      break;
    case 2:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(co_1, width / 2, height / 2, width, height);
      showScene10Dialogue3();
      break;
    case 3:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(co_4, width / 2, height / 2, width, height);
      showScene10Dialogue4();
      break;
    case 4:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(player_dirty, width / 2, height / 2, width, height);
      showScene10Dialogue5();
      break;
    case 5:
      image(bg_rooftop, width / 2, height / 2, width, height);
      showSelectionModal3();
      break;
    case 6:
      // 뒷담하기
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(player_clean, width / 2, height / 2, width, height);
      showScene10_selection1_1();
      break;
    case 7:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(boss1_angry, width / 2, height / 2, width, height);
      showScene10_selection1_2();
      break;
    case 8:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(player_dirty, width / 2, height / 2, width, height);
      showScene10_selection1_3();
      break;
    case 9:
      // 알림창
      image(bg_rooftop, width / 2, height / 2, width, height);
      alert = new Alert(
        "뒷담에 동조하다가 발각되어 야근이 확정되었습니다.\n'체력'이 30 하락합니다.\n"
      );
      alert.create();
      break;
    case 10:
      // 참기
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(player_clean, width / 2, height / 2, width, height);
      showScene10_selection2_1();
      break;
    case 11:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(boss1_angry, width / 2, height / 2, width, height);
      showScene10_selection2_2();
      break;
    case 12:
      image(bg_rooftop, width / 2, height / 2, width, height);
      image(player_dirty, width / 2, height / 2, width, height);
      showScene10_selection2_3();
      break;
    case 13:
      image(bg_rooftop, width / 2, height / 2, width, height);
      alert = new Alert(
        "혼자만 야근을 피하게 되어 \n'대인관계'가 한 단계 하락했습니다.\n"
      );
      alert.create();
      break;
  }
  showHeader();
}

function scene11() {
  day = 5;
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene11Dialogue1();
      showHeader();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      image(boss1, width / 2, height / 2, width, height);
      showScene11Dialogue2();
      showHeader();
      break;
    case 2:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene11Dialogue3();
      showHeader();
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      image(boss1, width / 2, height / 2, width, height);
      showScene11Dialogue4();
      showHeader();
      break;
    case 4:
      image(bg_office, width / 2, height / 2);
      image(wedding_card, width / 2, height / 2, width, height);
      showDialogueNextButton();
      showHeader();
      break;
    case 5:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene11Dialogue5();
      showHeader();
      break;
    case 6:
      image(bg_office, width / 2, height / 2);
      image(boss1, width / 2, height / 2, width, height);
      showScene11Dialogue6();
      showHeader();
      break;
    case 7:
      image(bg_office, width / 2, height / 2);
      image(player_sad, width / 2, height / 2, width, height);
      showScene11Dialogue7();
      showHeader();
      break;
    case 8:
      if (miniGame === 4) {
        Wedding();
      } else {
        weddingOpening();
      }
      showHeader();
      break;
    case 9:
      image(bg_office, width / 2, height / 2, width, height);
      image(co_2, width / 2, height / 2, width, height);
      showScene11Dialogue8();
      showHeader();
      break;
    case 10:
      image(bg_office, width / 2, height / 2);
      if (money_count === 3) {
        alert = new Alert(
          "축의금으로 " +
            money +
            "만 원을 지출하여\n'금전'이 " +
            money_count +
            "만큼 감소합니다.\n적절한 금액을 맞추어 대인관계가 한 단계 상승합니다.\n"
        );
        alert.create();
      } else {
        alert = new Alert(
          "축의금으로 " +
            money +
            "만 원을 지출하여\n'금전'이 " +
            money_count +
            "만큼 감소합니다.\n적절한 금액을 맞추지 못했습니다.\n"
        );
        alert.create();
      }

      showHeader();
      break;
      break;
  }
}

function scene12() {
  day = 5;
  switch (detail) {
    case 0:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene12Dialogue1();
      break;
    case 1:
      image(bg_office, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene12Dialogue2();
      break;
    case 2:
      dialogueTimer += deltaTime;
      if (dialogueTimer <= 3000) {
        image(clock_2, width / 2, height / 2, width, height);
      } else if (dialogueTimer <= 4000) {
        image(clock_4, width / 2, height / 2, width, height);
      } else if (dialogueTimer <= 6000) {
        image(clock_6, width / 2, height / 2, width, height);
      } else {
        image(clock_6, width / 2, height / 2, width, height);
        showScene12Dialogue3();
      }
      break;
    case 3:
      image(bg_office, width / 2, height / 2);
      image(player_sad, width / 2, height / 2, width, height);
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
        "칼퇴를 하고 친구들과 즐겁게 금요일 저녁을 보냈습니다.\n'정신력'이 한 단계 하락했습니다.\n'체력'이 25 상승했습니다.\n"
      );
      alert.create();
      break;
    case 6:
      //야근
      image(bg_office, width / 2, height / 2);
      alert = new Alert(
        "야근을 해서 할 일을 무사히 마무리했습니다.\n'정신력'이 한 단계 상승했습니다.\n'체력'이 15 감소했습니다.\n"
      );
      alert.create();
      break;
  }
  showHeader();
}

function scene13() {
  day = 1;
  resetButton.hide();
  endingButton.hide();
  switch (detail) {
    case 0:
      image(bg_single, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene13Dialogue0();
      break;
    case 1:
      image(bg_single, width / 2, height / 2);
      image(boss2, width / 2, height / 2, width, height);
      showScene13Dialogue1();
      break;
    case 2:
      image(bg_single, width / 2, height / 2);
      image(boss2_happy, width / 2, height / 2, width, height);
      showScene13Dialogue2();
      break;
    case 3:
      image(bg_single, width / 2, height / 2);
      image(player_clean, width / 2, height / 2, width, height);
      showScene13Dialogue3();
      break;
    case 4:
      let total_stat =
        player.stat_list["정신"] +
        player.stat_list["능력"] +
        player.stat_list["인간관계"];

      image(ending_bg, width / 2, height / 2, width, height);
      textAlign(LEFT);
      textFont(font_bold);
      fill(0);
      textSize(30);
      text(" 총평 : ", 305, height - 150);
      textSize(60);
      if (total_stat > 7) {
        image(ending_good, width / 2, height / 2, width, height);
        fill(0, 0, 255);
        text("이대로만 쭉!", 305, height - 90);
      } else if (total_stat > 4) {
        image(ending_sad, width / 2, height / 2, width, height);
        fill(0, 255, 0);
        text("그럭저럭", 305, height - 90);
      } else {
        image(ending_bad, width / 2, height / 2, width, height);
        fill(255, 0, 0);
        text("엉망진창", 305, height - 90);
      }
      endingComment();
      break;
  }
}

function ending() {
  endingComment();
  image(ending_bg, width / 2, height / 2, width, height);
  image(ending_bad, width / 2, height / 2, width, height);
  textFont(font_bold);
  fill(0);
  textAlign(LEFT);
  textSize(30);
  text(" 총평 : ", 305, height - 150);
  fill(255, 0, 0);
  textSize(60);
  text("의지박약", 305, height - 90);
  endingComment();
}
