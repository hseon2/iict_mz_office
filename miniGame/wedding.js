let arrowAngle = 270; // Initial Angle
let rotationSpeed = 40;
let isSpacebarPressed = false;
let direction = 1;
let paying = 0; // An integer value between 0 and 20
let money = 0;
let money_count;
let statMoney;
let statRelationship;
let wedding_comment;

function Wedding() {
  background(233, 245, 250);

  noStroke();

  // Make it look like a meter
  fill(255, 28, 28); // red
  arc(width / 2, height / 2 + 250, 600, 600, 180, 360);
  fill(255, 235, 107); // yellow
  arc(width / 2, height / 2 + 250, 600, 600, 207, -27);
  fill(84, 255, 82); // green
  arc(width / 2, height / 2 + 250, 600, 600, -108, -72);

  fill(255); // white
  arc(width / 2, height / 2 + 250, 500, 500, 180, 360);

  // Money text
  fill(0);
  textSize(40);
  textAlign(CENTER);

  // Change arrow direction
  if (isSpacebarPressed) {
    arrowAngle += rotationSpeed * direction;

    if (arrowAngle >= 420 || arrowAngle <= 270) {
      direction *= -1;
    }
  }

  push();
  translate(width / 2, height / 2 + 250);
  rotate(arrowAngle + 180);
  fill(0);
  rectMode(CENTER);
  rect(0, 100, 30, 200);
  triangle(0, 250, -30, 200, 30, 200);
  ellipse(0, 0, 60, 60);
  pop();
  if (money <= 0) {
    money_count = 0;
    wedding_comment = "너 미쳤어?";
  } else if (money <= 4) {
    image(wedding_1, width / 2, height / 2, width, height);
    money_count = 1;
    wedding_comment = "좀 적은 것 같기도?";
  } else if (money <= 8) {
    image(wedding_2, width / 2, height / 2, width, height);
    money_count = 2;
    wedding_comment = "뭐, 나쁘지 않네.";
  } else if (money <= 12) {
    image(wedding_3, width / 2, height / 2, width, height);
    money_count = 3;
    wedding_comment = "돈 좀 썼네?";
  } else if (money <= 16) {
    image(wedding_4, width / 2, height / 2, width, height);
    wedding_comment = "요즘 돈 꽤나 많은가봐?";
    money_count = 4;
  } else {
    image(wedding_5, width / 2, height / 2, width, height);
    wedding_comment = "너 부자냐? 좀 과한 것 같은데.";
    money_count = 5;
  }
  fill(0);
  textFont(font_bold);
  textSize(60);
  text(money + "만 원", width / 2 + 450, height / 2 - 200);
  image(wedding_bg, width / 2, height / 2, width, height);

  if (player.stat_list["금전"] < money_count) {
    textSize(40);
    fill(255, 10, 10);
    text("잔액 부족!", width / 2 + 450, height / 2 - 120);
    dialogueNextButton.hide();
  } else {
    showDialogueNextButton();
    dialogueNextButton.mousePressed(() => {
      player.changeStat("금전", -money_count);
      if (money_count === 3) {
        player.changeStat("인간관계", 1);
      }
      detail++;
      dialogueTimer = 0;
      textCounter = 0;
      isInConversation = false;
      dialogueNextButton.hide();
      loop();
    });
  }
}
