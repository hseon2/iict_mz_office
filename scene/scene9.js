function showScene9Dialogue1() {
  let dialogue = new Dialogue(
    "신입 너네들 제정신이야? \n부장님이 병풍이야? 정신 안 차려?",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene9Dialogue2() {
  let dialogue = new Dialogue(
    "너희 전부 회의록 제대로 작성해 와. \n오늘 퇴근 전까지 제대로 안 해오면 업무평가 각오해야 할 거야.",
    "과장"
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene9Dialogue3() {
  let dialogue = new Dialogue(
    "하..아직 목요일인데 집에도 못 가게 생겼네...",
    player.name
  );
  dialogue.create();
  showNextButton();
}