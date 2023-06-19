// 탕비실

function showScene4Dialogue1() {
  let dialogue = new Dialogue(
    "하루종일 컴퓨터 화면만 봤더니 넘 피곤하다.. \n먹고 살기 힘드네. 그래도 이제 수요일이니 조금만 더 힘내자!",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene4Dialogue2() {
  let dialogue = new Dialogue(
    "탕비실에서 커피나 한 잔 하고 와야겠다.\n가는 김에 간식도 몇 개 좀 훔쳐와야징",
    player.name
  );
  dialogue.create();
  showDialogueNextButton();
}

function showScene4Dialogue3() {
  let dialogue = new Dialogue(
    "역시 소확횡(소소하지만 확실한 횡령)이 최고야^^",
    player.name
  );
  dialogue.create();
  showNextButton();
}

function showCoffeeScene() {
  image(coffee_desk, width / 2, height / 2, width, height);
  let x = mouseX;
  let y = mouseY;
  if (mnm) {
  } else if (x > 0 && x < 343 && y > 257 && y < 650) {
    image(mnm_hover, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      mnm = true;
      sound_clear.play();
    }
  } else {
    image(mnm_basic, width / 2, height / 2, width, height);
  }
  if (coffee) {
    image(coffee_click, width / 2, height / 2, width, height);
  } else if (x > 778 && x < 1180 && y > 140 && y < 610) {
    image(coffee_hover, width / 2, height / 2, width, height);
    if (mouseIsPressed) {
      coffee = true;
      sound_clear.play();
    }
  } else {
    image(coffee_basic, width / 2, height / 2, width, height);
  }
  if (mnm && coffee) {
    detail++;
  }
}
