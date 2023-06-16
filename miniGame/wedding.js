let arrowAngle = 270; // Initial Angle
let rotationSpeed = 100;
let isSpacebarPressed = false;
let direction = 1;
let paying = 0; // An integer value between 0 and 20
let money = 0;

let statMoney;
let statRelationship;

function Wedding() {
  background(220);
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
  text("10", width / 2, height / 2 - 80);
  text("0", width / 2 - 350, height / 2 + 250);
  text("20", width / 2 + 350, height / 2 + 250);

  // Change arrow direction
  if (isSpacebarPressed) {
    arrowAngle += rotationSpeed * direction;

    if (arrowAngle >= 450 || arrowAngle <= 270) {
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

  //green part
  if (money == 10) {
    statRelationship = 30;
  }

  if (money >= 8 && money <= 12) {
    statRelationship = 20;
  }

  //yellow part
  if ((money >= 3 && money <= 7) || (money >= 13 && money <= 17)) {
    statRelationship = 10;
  }

  //red part
  if (money == 1 || money == 2 || money == 18 || money == 19) {
    statRelationship = 0;
  }

  if (money == 0 || money == 20) {
    statRelationship = -10;
  }

  statMoney = -money;

  //represent variables
  fill(0);
  textSize(60);
  text(money, width / 2 + 350, height / 2 - 250);
  text("만원", width / 2 + 450, height / 2 - 250);
  textSize(40);
  text("금전 " + statMoney, width / 2 + 450, height / 2 - 150);
  text("인간관계 " + statRelationship, width / 2 + 430, height / 2 - 70);

  showDialogueNextButton();
  dialogueNextButton.mousePressed(() => {
    player.changeStat("금전", statMoney);
    player.changeStat("인간관계", statRelationship);
    detail++;
    dialogueTimer = 0;
    textCounter = 0;
    isInConversation = false;
    dialogueNextButton.hide();
    loop();
  });
}
