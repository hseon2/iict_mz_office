let peerState = {
  p1: true,
  p2: true,
  p3: true,
  p4: true,
};
let rate = 0;
let stoprate;
let mySound;

let aimg1;
let aimg2;
let aimg3;

let aimg1Duration = 120;
let aimg1DurationS = 90;
let aimg1DurationD = 120;
let aimg1DurationF = 110;

let presstimeA = false;
let presstimeS = false;
let presstimeD = false;
let presstimeF = false;
let meetingScore = 0;
let meeting_timer = 0;
let meeting_playtime = 20;

let decg3;

function Meeting() {
  resetButton.hide();
  endingButton.hide();
  meeting_timer += deltaTime / 1000;
  let timer_w = (meeting_playtime - meeting_timer) / meeting_playtime;
  image(meeting_frame, width / 2, height / 2, width, height);
  image(meeting_room, width / 2, height / 2, width, height);

  if (meeting_timer < 5) {
    image(meeting_boss1, width / 2, height / 2, width, height);
  } else if (meeting_timer < 10) {
    image(meeting_boss2, width / 2, height / 2, width, height);
  } else if (meeting_timer < 15) {
    image(meeting_boss3, width / 2, height / 2, width, height);
  } else {
    image(meeting_boss4, width / 2, height / 2, width, height);
  }

  image(game_header, width / 2, height / 2, width, height);
  rectMode(CORNER);
  fill(255, 237, 190);
  rect(68, 33, timer_w * 781, 30);
  image(game_header2, width / 2, height / 2);

  textFont(font_bold);
  textSize(50);
  fill(0);
  text(meetingScore, 1126, 37);
  rate++;

  let decision = random(6);
  if (decision < 3 && rate % 20 == 0) {
    peerState.p1 = false;
    aimg1Duration = 120;
  }

  if (decision < 4 && rate % 37 == 0) {
    peerState.p2 = false;
    aimg1DurationS = 90;
  }

  if (decision < 2 && rate % 10 == 0) {
    peerState.p3 = false;
    aimg1DurationD = 120;
  }

  if (decision < 2 && rate % 25 == 0) {
    peerState.p4 = false;
    aimg1DurationF = 110;
  }

  if (peerState.p1) {
    imageMode(CENTER);
    image(peer1, width / 2, height / 2, width, height);
  } else if (peerState.p1 == false && presstimeA && aimg1Duration > 0) {
    imageMode(CENTER);
    image(peer1, width / 2, height / 2, width, height);
    aimg1Duration--;
    if (aimg1Duration == 0) {
      peerState.p1 = true;
    }
  } else if (peerState.p1 == false && presstimeA == false) {
    imageMode(CENTER);
    image(peer11, width / 2, height / 2, width, height);
  }

  if (peerState.p2) {
    imageMode(CENTER);
    image(peer2, width / 2, height / 2, width, height);
  } else if (peerState.p2 == false && presstimeS && aimg1DurationS > 0) {
    imageMode(CENTER);
    image(peer2, width / 2, height / 2, width, height);
    aimg1DurationS--;
    if (aimg1DurationS == 0) {
      peerState.p2 = true;
    }
  } else if (peerState.p2 == false && presstimeS == false) {
    imageMode(CENTER);
    image(peer22, width / 2, height / 2, width, height);
  }

  if (peerState.p3) {
    imageMode(CENTER);
    image(peer3, width / 2, height / 2, width, height);
  } else if (peerState.p3 == false && presstimeD && aimg1DurationD > 0) {
    imageMode(CENTER);
    image(peer3, width / 2, height / 2, width, height);
    aimg1DurationD--;
    if (aimg1DurationD == 0) {
      peerState.p3 = true;
    }
  } else if (peerState.p3 == false && presstimeD == false) {
    imageMode(CENTER);
    image(peer33, width / 2, height / 2, width, height);
  }

  if (peerState.p4) {
    imageMode(CENTER);
    image(peer4, width / 2, height / 2, width, height);
  } else if (peerState.p4 == false && presstimeF && aimg1DurationF > 0) {
    imageMode(CENTER);
    image(peer4, width / 2, height / 2, width, height);
    aimg1DurationF--;
    if (aimg1DurationF == 0) {
      peerState.p4 = true;
    }
  } else if (peerState.p4 == false && presstimeF == false) {
    imageMode(CENTER);
    image(peer44, width / 2, height / 2, width, height);
  }
}
