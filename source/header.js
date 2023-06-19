function showHeader() {
  showResetButton();
  showEndingButton();
  image(main_header, width / 2, height / 2, width, height);

  switch (day) {
    case 1:
      image(day1, width / 2, height / 2, width, height);
      break;
    case 2:
      image(day2, width / 2, height / 2, width, height);
      break;
    case 3:
      image(day3, width / 2, height / 2, width, height);
      break;
    case 4:
      image(day4, width / 2, height / 2, width, height);
      break;
    case 5:
      image(day5, width / 2, height / 2, width, height);
      break;
  }

  switch (player.stat_list["금전"]) {
    case 1:
      image(money1, width / 2, height / 2, width, height);
      break;
    case 2:
      image(money2, width / 2, height / 2, width, height);
      break;
    case 3:
      image(money3, width / 2, height / 2, width, height);
      break;
    case 4:
      image(money4, width / 2, height / 2, width, height);
      break;
    case 5:
      image(money5, width / 2, height / 2, width, height);
      break;
    case 6:
      image(money6, width / 2, height / 2, width, height);
      break;
  }
  textFont(font_bold);
  textSize(24);
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  let stat_x = 475;
  let stat_y = 46;
  fill(255);
  text("         / 100", 168, stat_y);
  if (player.stat_list["체력"] > 80) {
    fill(250, 255, 0);
  } else if (player.stat_list["체력"] > 60) {
    fill(5, 255, 0);
  } else if (player.stat_list["체력"] > 40) {
    fill(255);
  } else if (player.stat_list["체력"] > 20) {
    fill(255, 150, 0);
  } else {
    fill(255, 0, 0);
  }
  text(round(player.stat_list["체력"]), 168, stat_y);

  switch (player.stat_list["정신"]) {
    case 0:
      fill(255, 0, 0);
      text("최악", stat_x, stat_y);
      break;
    case 1:
      fill(255, 150, 0);
      text("나쁨", stat_x, stat_y);
      break;
    case 2:
      fill(255);
      text("보통", stat_x, stat_y);
      break;
    case 3:
      fill(5, 255, 0);
      text("좋음", stat_x, stat_y);
      break;
    case 4:
      fill(250, 255, 0);
      text("최상", stat_x, stat_y);
      break;
    case 5:
      fill(250, 255, 0);
      text("최상", stat_x, stat_y);
      break;
  }
  switch (player.stat_list["능력"]) {
    case 0:
      fill(255, 0, 0);
      text("하", stat_x + 254, stat_y);
      break;
    case 1:
      fill(255);
      text("중", stat_x + 254, stat_y);
      break;
    case 2:
      fill(5, 255, 0);
      text("상", stat_x + 254, stat_y);
    case 3:
      fill(5, 255, 0);
      text("상", stat_x + 254, stat_y);
  }
  switch (player.stat_list["인간관계"]) {
    case 0:
      fill(255, 0, 0);
      text("최악", stat_x + 484, stat_y);
      break;
    case 1:
      fill(255, 150, 0);
      text("나쁨", stat_x + 484, stat_y);
      break;
    case 2:
      fill(255);
      text("보통", stat_x + 484, stat_y);
      break;
    case 3:
      fill(5, 255, 0);
      text("좋음", stat_x + 484, stat_y);
      break;
    case 4:
      fill(250, 255, 0);
      text("최상", stat_x + 484, stat_y);
      break;
    case 5:
      fill(250, 255, 0);
      text("최상", stat_x + 484, stat_y);
      break;
  }
}
