function showHeader() {
  showResetButton();
  showEndingButton();

  fill(0);
  rectMode(CORNER);
  rect(0, 0, width, height * 0.1);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(`이름: ${player.name}`, width * 0.05, height * 0.05);
  let i = 0;
  for (stat in player.stat_list) {
    fill(255);
    textSize(15);
    textAlign(CENTER, CENTER);
    text(`${stat}`, width * 0.15 + i * width * 0.13, height * 0.05);
    noStroke();
    rectMode(CORNER);

    rect(width * 0.2 + i * width * 0.13 - 30, height * 0.035, 80, 20);
    if (player.stat_list[stat] < 25) {
      fill(255, 0, 0);
    } else if (player.stat_list[stat] < 50) {
      fill(255, 128, 0);
    } else if (player.stat_list[stat] < 75) {
      fill(255, 255, 0);
    } else if (player.stat_list[stat] <= 100) {
      fill(0, 255, 0);
    }
    rect(
      width * 0.2 + i * width * 0.13 - 30,
      height * 0.035,
      (player.stat_list[stat] / 100) * 80,
      20
    );

    i++;
  }
}
