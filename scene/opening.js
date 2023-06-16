function showOpeningDialogue1() {
  let dialogue1 = new Dialogue("드디어 내일이면 출근이다!", "주인공");
  dialogue1.create();
  showDialogueNextButton();
}

function showOpeningDialogue2() {
  let dialogue2 = new Dialogue(
    "MZ 오피스는 빌런을 걸러내려고 입사 일주일 후에 업무 평가서를 준다는데.. \n좋은 평가를 받을 수 있도록 금요일까지 파이팅해보자!",
    "주인공"
  );
  dialogue2.create();
  showNextButton();
}
