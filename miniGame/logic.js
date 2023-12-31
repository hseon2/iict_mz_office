function keyPressed() {
  if (miniGame === 1) {
    if (keyCode == missions[excel_stage - 1]) {
      sound_keyboard.play();
      excel_stage++;
    } else {
      sound_mistake.play();
      life--;
    }
    console.log(keyCode);
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

    if (!peerState.p1) {
      if (
        mouseX > 350 &&
        mouseX < 350 + w &&
        mouseY > 218 &&
        mouseY < 218 + h
      ) {
        peerState.p1 = true;
        if (isMinigamePlaying){
          sound_meeting.play();
        }
        meetingScore += 5;
      }
    }

    if (!peerState.p2) {
      if (
        mouseX > 591 &&
        mouseX < 591 + w &&
        mouseY > 218 &&
        mouseY < 218 + h
      ) {
        peerState.p2 = true;
        if (isMinigamePlaying){
          sound_meeting.play();
        }
        meetingScore += 5;
      }
    }

    if (!peerState.p3) {
      if (
        mouseX > 830 &&
        mouseX < 830 + w &&
        mouseY > 218 &&
        mouseY < 218 + h
      ) {
        peerState.p3 = true;
        if (isMinigamePlaying){
          sound_meeting.play();
        }
        meetingScore += 5;
      }
    }

    if (!peerState.p4) {
      if (
        mouseX > 1060 &&
        mouseX < 1060 + w &&
        mouseY > 218 &&
        mouseY < 218 + h
      ) {
        peerState.p4 = true;
        if (isMinigamePlaying){
          sound_meeting.play();
        }
        meetingScore += 5;
      }
    }
  }
}

function keyReleased() {
  if (miniGame === 4) {
    if (key === " ") {
      if (miniGame === 4) {
        isSpacebarPressed = false;
        paying = map(arrowAngle, 270, 450, 0, 20);
        money = int(paying);
      }
    }
  }
}
