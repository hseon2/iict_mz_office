function keyPressed() {
  if (miniGame === 1) {
    remainingTime = 5000;
    if (stage == 2) {
      if (keyCode == 72) {
        // h를 눌렀을 때 (ctrl+h는 한 번에 바꾸기)
        timer = 0;
        stage = 3;
        score += 5;
      } else {
        stage = 3;
      }
    } else if (stage == 3) {
      // d을 눌렀을 때 (ctrl+d은 아래쪽 채우기)
      if (keyCode == 68) {
        timer = 0;
        stage = 4;
        score += 5;
      } else {
        stage = 4;
      }
    } else if (stage == 4) {
      if (keyCode == 82) {
        // r를 눌렀을 때 (ctrl + r은 우측 자동 채우기)
        timer = 0;
        stage = 5;
        score += 5;
      } else {
        stage = 5;
      }
    } else if (stage == 5) {
      if (keyCode == 70) {
        // f를 눌렀을 때 (ctrl + f은 찾기)
        timer = 0;
        stage = 6;
        score += 5;
      } else {
        stage = 6;
      }
    } else if (stage == 6) {
      if (keyCode == 65) {
        // a를 눌렀을 때 (ctrl + a는 전체 선택)
        timer = 0;
        stage = 7;
        score += 5;
      } else {
        stage = 7;
      }
    }
  } else if (miniGame === 4) {
    if (key === " ") {
      isSpacebarPressed = true;
    }
  }
}

function mouseClicked() {
  if (miniGame === 3) {
    let w = 220;
    let h = 380;
    console.log(mouseX, mouseY);

    if (!peerState.p1){
      if (mouseX > 350 && mouseX < (350 + w) && mouseY > 218 && mouseY < 218 + h) {
        peerState.p1 = true;
        mySound.play();
        meetingScore += 5;
      }
    }

    if (!peerState.p2){
      if (mouseX > 591 && mouseX < (591 + w) && mouseY > 218 && mouseY < 218 + h) {
        peerState.p2 = true;
        mySound.play();
        meetingScore += 5;
      }
    }

    if (!peerState.p3){
      if (mouseX > 830 && mouseX < (830 + w) && mouseY > 218 && mouseY < 218 + h) {
        peerState.p3 = true;
        mySound.play();
        meetingScore += 5;
      }
    }

    if(!peerState.p4){
      if (mouseX > 1060 && mouseX < (1060 + w) && mouseY > 218 && mouseY < 218 + h) {
        peerState.p4 = true;
        mySound.play();
        meetingScore += 5;
      }
    }
  }
}

function keyReleased() {
  if (miniGame === 2) {
    if (key === "a") {
      keys.a = false;
    }

    if (key === "s") {
      keys.s = false;
    }

    if (key === "d") {
      keys.d = false;
    }

    if (key === "f") {
      keys.f = false;
    }
  } else if (miniGame === 4) {
    if (key === " ") {
      if (miniGame === 4) {
        isSpacebarPressed = false;
        paying = map(arrowAngle, 270, 450, 0, 20);
        money = int(paying);
      }
    }
  }
}
