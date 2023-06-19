// 미니게임 3 회의시 딴짓 적발 게임

function showScene8Dialogue1() {
  let dialogue = new Dialogue(
    "벌써 4시가 다 됐네. 얼른 회의실 가야겠다.",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene8Dialogue2() {
  let dialogue = new Dialogue(
    "ㅁ..뭐야 회의 중인데 다들 딴짓만 하네?\n부장님이 좀 슬퍼보이시는데.. 자칫하다간 퇴근이 늦어지겠어 ㅠ",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function meetingOpening() {
  resetButton.hide();
  endingButton.hide();
  image(meeting_frame, width / 2, height / 2, width, height);
  image(meeting_room, width / 2, height / 2, width, height);
  image(meeting_boss1, width / 2, height / 2, width, height);
  image(peer1, width / 2, height / 2, width, height);
  image(peer2, width / 2, height / 2, width, height);
  image(peer3, width / 2, height / 2, width, height);
  image(peer4, width / 2, height / 2, width, height);
  image(meeting_opening, width / 2, height / 2, width, height);

  showStartButton();
  startButton.position(width / 2 - startButton.width / 2, (height * 4.5) / 7);
}
