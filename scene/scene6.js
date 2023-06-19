// 에어팟 게임
function airpodsOpening() {
  resetButton.hide();
  endingButton.hide();
  image(bg_single, width / 2, height / 2);
  image(img_airpods1, width / 2, height / 2, width, height);
  image(airpods_opening, width / 2, height / 2, width, height);

  showStartButton();
  startButton.position(width / 2 - startButton.width / 2, (height * 3.3) / 5);
}
