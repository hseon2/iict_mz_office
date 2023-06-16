// 미니게임 3 회의시 딴짓 적발 게임

function showScene8Dialogue1() {
  let dialogue = new Dialogue(
    "벌써 4시가 다 됐네. 얼른 회의실 가야겠다.",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}



function meetingOpening(){
  background(255);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 0, 0);
  textSize(30);
  text(
    "회의 중에 딴짓 중인 동료들ㅠㅠ\n회의를 빨리 끝내야 회의록 작성도 금방 끝내고 퇴근하는데 도와주질 않네ㅜㅜ\n심지어 과잔님이 심기가 불편해보이신다. 동료들 때문에 내 업무평가까지 망칠 순 없다!\n제한 시간 30초 동안 각 동료에 맞는 키보드 버튼을 이용하여 딴짓하는 동료들을 정신차리게 하자.\n잘못 누르면 감점되니 주의!",
      640,
      400
    );
  
  fill(0);

  showStartButton();
  startButton.position(
    width / 2 - startButton.width / 2,
    height *3/ 4
  );
}