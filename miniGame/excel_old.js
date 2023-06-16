let stage = 1;
let score = 0;
let excel;
let timer = 0;
let gameStart = false;
let xl = 540;
let xh = 740;
let yl = 310;
let yh = 510;
let statAbility;

function Excel() {
  let caseDuration1 = 10000;
  let caseDuration2 = 5000;
  let remainingTime = 5000;

  switch (stage) {
    case 1: // timer for studying
      background(255);
      image(excel, 120, 50, 1040, 585);
      timer += deltaTime;

      if (timer >= caseDuration1) {
        stage = 2;
        timer = 0;
      }

      fill(255, 0, 0);
      textSize(30);
      textAlign(CENTER);
      textStyle(BOLD);
      text("지금부터 10초간 빠르게 엑셀 단축키를 외워보자!", 640, 680);
      remainingTime = (caseDuration1 - timer) / 1000;
      displayTimer(caseDuration1, remainingTime);
      break;

    case 2: // level1
      background(0);

      timer += deltaTime;
      if (timer >= caseDuration2) {
        stage = 3;
        remainingTime = 5000;
        timer = 0;
      }

      fill(255);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(50);
      text("'부징'이라는 단어를 '부장'으로 한 번에 바꾸자.", 640, 300);
      text("Press Ctrl + ?", 640, 450);
      textSize(30);
      fill(255);
      text("Score", 1200, 70);
      text(score, 1200, 120);
      remainingTime = (caseDuration2 - timer) / 1000;
      displayTimer(caseDuration2, remainingTime);
      break;

    case 3: // level2
      background(0);

      timer += deltaTime;
      if (timer >= caseDuration2) {
        stage = 4;
        remainingTime = 5000;
        timer = 0;
      }

      fill(255);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(50);
      text(
        "'A1'셀에 있는 값을 'A2:A100' 범위에 자동으로 채워넣고 싶어.",
        640,
        300
      );
      text("Press Ctrl + ?", 640, 450);
      textSize(30);
      fill(255);
      text("Score", 1200, 70);
      text(score, 1200, 120);
      remainingTime = (caseDuration2 - timer) / 1000;
      displayTimer(caseDuration2, remainingTime);
      break;

    case 4: // level3
      background(0);
      timer += deltaTime;

      if (timer >= caseDuration2) {
        stage = 5;
        remainingTime = 5000;
        timer = 0;
      }

      fill(255);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(50);
      text(
        "'A1:A100'셀의 값을 우측 'B2:D100'에 자동으로 채워넣고 싶어.",
        640,
        300
      );
      text("Press Ctrl + ?", 640, 450);
      textSize(30);
      fill(255);
      text("Score", 1200, 70);
      text(score, 1200, 120);
      remainingTime = (caseDuration2 - timer) / 1000;
      displayTimer(caseDuration2, remainingTime);
      break;

    case 5: // level4
      background(0);
      timer += deltaTime;

      if (timer >= caseDuration2) {
        stage = 6;
        remainingTime = 5000;
        timer = 0;
      }

      fill(255);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(50);
      text("'신입'이라는 단어를 찾고 싶어", 640, 300);
      text("Press Ctrl + ?", 640, 450);
      textSize(30);
      fill(255);
      text("Score", 1200, 70);
      text(score, 1200, 120);
      remainingTime = (caseDuration2 - timer) / 1000;
      displayTimer(caseDuration2, remainingTime);
      break;

    case 6: // level5
      background(0);
      timer += deltaTime;

      if (timer >= caseDuration2) {
        stage = 7;
        remainingTime = 5000;
        timer = 0;
      }

      fill(255);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(50);
      text("엑셀 범위를 전체 선택할래.", 640, 300);
      text("Press Ctrl + ?", 640, 450);
      textSize(30);
      fill(255);
      text("Score", 1200, 70);
      text(score, 1200, 120);
      remainingTime = (caseDuration2 - timer) / 1000;
      displayTimer(caseDuration2, remainingTime);
      break;

    case 7: // ending
      background(255);
      fill(0);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(50);
      text("Your Score is " + score, width / 2, height / 2);
      statAbility = score;
      showDialogueNextButton();
      dialogueNextButton.mousePressed(() => {
        player.changeStat("능력", statAbility);
        detail++;
        dialogueTimer = 0;
        textCounter = 0;
        isInConversation = false;
        dialogueNextButton.hide();
        loop();
      });
      break;
    default: //
  }
}

function displayTimer(caseDuration, remainingTime) {
  stroke(0);
  strokeWeight(3);
  fill(0, 0, 255);
  circle(100, 100, 150);
  fill(255);
  noStroke();
  textStyle(BOLD);
  textAlign(CENTER);
  text("Time", 100, 90);
  text(Math.ceil(remainingTime) + "초", 100, 130);
}

function mouseClicked() {
  if (stage == 0 && gameStart == true) {
    stage = 1;
    showImage = true;
    timer = 0;
  }
}
