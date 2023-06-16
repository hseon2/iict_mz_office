// 탕비실

function showScene4Dialogue1() {
  let dialogue = new Dialogue(
    "어제 야근했더니 너무 피곤하다.. \n먹고 살기 힘드네. 그래도 이제 수요일이니 조금만 더 힘내자!", player.name);
  dialogue.create();
  showDialogueNextButton();
}

function showScene4Dialogue2() {
  let dialogue = new Dialogue(
    "탕비실에서 커피나 한 잔 하고 와야겠다.", player.name);
  dialogue.create();
  showDialogueNextButton();
}

function showScene4Dialogue3() {
  let dialogue = new Dialogue(
    "역시 소확횡(소소하지만 확실한 횡령)이 최고야^^", player.name);
  dialogue.create();
  showNextButton();
}