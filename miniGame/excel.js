let d = 68;
let t = 84;
let s = 83;
let left = 37;
let up = 38;
let right = 39;
let down = 40;
let enter = 13;
let missions = [
  down,
  down,
  d,
  right,
  down,
  enter,
  enter,
  enter,
  enter,
  right,
  right,
  up,
  left,
  up,
  right,
  up,
  left,
  up,
  right,
  enter,
  t,
  s,
];

let excel_stage = 1;
let life = 5;

let excel_timer = 0;
let excel_playtime = 15;
let gameover = false;
let gameclear = false;

function Excel() {
  console.log(life);
  resetButton.hide();
  endingButton.hide();
  let timer_w = (excel_playtime - excel_timer) / excel_playtime;
  if (!gameover && !gameclear) {
    excel_timer += deltaTime / 1000;

    if (timer_w <= 0 && !gameclear) {
      gameover = true;
    }
    switch (excel_stage) {
      case 1:
        image(excel_1, width / 2, height / 2, width, height);
        break;
      case 2:
        image(excel_2, width / 2, height / 2, width, height);
        break;
      case 3:
        image(excel_3, width / 2, height / 2, width, height);
        break;
      case 4:
        image(excel_4, width / 2, height / 2, width, height);
        break;
      case 5:
        image(excel_5, width / 2, height / 2, width, height);
        break;
      case 6:
        image(excel_6, width / 2, height / 2, width, height);
        break;
      case 7:
        image(excel_7, width / 2, height / 2, width, height);
        break;
      case 8:
        image(excel_8, width / 2, height / 2, width, height);
        break;
      case 9:
        image(excel_9, width / 2, height / 2, width, height);
        break;
      case 10:
        image(excel_10, width / 2, height / 2, width, height);
        break;
      case 11:
        image(excel_11, width / 2, height / 2, width, height);
        break;
      case 12:
        image(excel_12, width / 2, height / 2, width, height);
        break;
      case 13:
        image(excel_13, width / 2, height / 2, width, height);
        break;
      case 14:
        image(excel_14, width / 2, height / 2, width, height);
        break;
      case 15:
        image(excel_15, width / 2, height / 2, width, height);
        break;
      case 16:
        image(excel_16, width / 2, height / 2, width, height);
        break;
      case 17:
        image(excel_17, width / 2, height / 2, width, height);
        break;
      case 18:
        image(excel_18, width / 2, height / 2, width, height);
        break;
      case 19:
        image(excel_19, width / 2, height / 2, width, height);
        break;
      case 20:
        image(excel_20, width / 2, height / 2, width, height);
        break;
      case 21:
        image(excel_21, width / 2, height / 2, width, height);
        break;
      case 22:
        image(excel_22, width / 2, height / 2, width, height);
        break;
      case 23:
        gameclear = true;
        break;
    }
  } else {
    image(excel_22, width / 2, height / 2, width, height);
  }
  if (life === 5) {
    image(excel_life5, width / 2, height / 2, width, height);
  } else if (life === 4) {
    image(excel_life4, width / 2, height / 2, width, height);
  } else if (life === 3) {
    image(excel_life3, width / 2, height / 2, width, height);
  } else if (life === 2) {
    image(excel_life2, width / 2, height / 2, width, height);
  } else if (life === 1) {
    image(excel_life1, width / 2, height / 2, width, height);
  } else {
    gameover = true;
    timer_w = 0;
  }
  image(excel_header1, width / 2, height / 2, width, height);
  fill(255, 50, 50);
  rect(70, 30, timer_w * 705, 30);
  image(excel_header2, width / 2, height / 2, width, height);

  if (gameover) {
    image(excel_over, width / 2, height / 2, width, height);
    showDialogueNextButton();
    dialogueNextButton.mousePressed(() => {
      detail++;
      dialogueTimer = 0;
      textCounter = 0;
      isInConversation = false;
      dialogueNextButton.hide();
      player.changeStat("능력", -1);
      player.changeStat("정신", -1);
      loop();
    });
  } else if (gameclear) {
    image(excel_clear, width / 2, height / 2, width, height);
    showDialogueNextButton();
    dialogueNextButton.mousePressed(() => {
      detail++;
      dialogueTimer = 0;
      textCounter = 0;
      isInConversation = false;
      dialogueNextButton.hide();
      player.changeStat("능력", +1);
      loop();
    });
  }
}
