let startButton;
let resetButton;
let endingButton;
let nextButton;
let dialogueNextButton;
let alertCloseButton;
let nameInput;
let gameStarted = false;
let player;
let scene = -1;
let miniGame = 0;
let detail = 0;
let dialogueTimer = 0;
let selection1_1;
let selection1_2;
let selection1_3;
let selection2_1;
let selection2_2;
let alert;
let textCounter = 0;
let speedText = 120;
let isInConversation;
let day = 1;
let tp = 255;
let playtime = 0;
let mnm = false;
let coffee = false;
let audioContext;
let audioSource;
let isGameOver = false;
let isPlaying = false;
let isMinigamePlaying = false;
let showAlert = false;

let playBgmStart = false;
let playBgmEarly = false;
let playBgmMiddle = false;
let playBgmLater = false;
let playBgmMinigame = false;
let playBgmGameover = false;

function preload() {
  excel = loadImage("assets/excel.png");
  soundFormats("mp3", "ogg");
  sound_meeting = loadSound("assets/tube2.mp3");
  sound_hungry = loadSound("sound/꼬르륵 소리.mp3");
  sound_gameover = loadSound("sound/사표내기 or 게임오버.mp3");
  sound_bird = loadSound("sound/새소리.mp3");
  sound_clock = loadSound("sound/시계 째깍째깍 소리.mp3");
  sound_alarm = loadSound("sound/알람소리.mp3");
  sound_airpods = loadSound("sound/에어팟 뽑는 소리.mp3");
  sound_ending = loadSound("sound/엔딩 축하 사운드.mp3");
  sound_keyboard = loadSound("sound/키보드 소리.mp3");
  sound_mistake = loadSound("sound/실수.mp3");
  sound_clear = loadSound("sound/성공.mp3");
  sound_fail = loadSound("sound/게임오버.mp3");
  sound_next = loadSound("sound/다음으로.wav");
  sound_close = loadSound("sound/알림닫기.wav");
  sound_alert = loadSound("sound/알림창.wav");

  bgm_start = loadSound("sound/배경음악_시작.mp3");
  bgm_early = loadSound("sound/배경음악_초반.mp3");
  bgm_middle = loadSound("sound/배경음악_뒷담장면.mp3");
  bgm_later = loadSound("sound/배경음악_후반부.mp3");
  bgm_minigame = loadSound(
    "https://hseon2.github.io/iict_mz_office/sound/배경음악_미니게임.mp3"
  );

  //배경화면
  bg_single = loadImage("assets/singleColor.png");
  bg_room_morning = loadImage("assets/playerRoomMorning.png");
  bg_room_noon = loadImage("assets/playerRoomNoon.png");
  bg_office = loadImage("assets/office.png");
  bg_rooftop = loadImage("assets/bg_rooftop.png");

  //시계
  clock_2 = loadImage("assets/clock_2.png");
  clock_4 = loadImage("assets/clock_4.png");
  clock_6 = loadImage("assets/clock_6.png");
  clock_11 = loadImage("assets/clock_11.png");
  clock_1 = loadImage("assets/clock_1.png");
  clock_9 = loadImage("assets/clock_9.png");

  //시작화면
  player_name = loadImage("assets/player_name.png");
  game_rules = loadImage("assets/game_rules.png");
  game_rules1 = loadImage("assets/game_rules1.png");
  game_rules2 = loadImage("assets/game_rules2.png");

  //캐릭터
  player_clean = loadImage("assets/player_clean.png");
  player_sad = loadImage("assets/player_sad.png");
  player_dirty = loadImage("assets/player_dirty.png");
  co_1 = loadImage("assets/co_1.png");
  co_2 = loadImage("assets/co_2.png");
  co_3 = loadImage("assets/co_3.png");
  co_4 = loadImage("assets/co_4.png");
  boss1 = loadImage("assets/boss1.png");
  boss1_angry = loadImage("assets/boss1_angry.png");
  boss2 = loadImage("assets/boss2.png");
  boss2_happy = loadImage("assets/boss2_happy.png");

  //대사창 및 알림창
  img_dialogue = loadImage("assets/dialogue.png");
  img_alert = loadImage("assets/alert.png");

  //헤더
  game_header = loadImage("assets/game_header.png");
  game_header2 = loadImage("assets/game_header2.png");
  main_header = loadImage("assets/header_main.png");

  day1 = loadImage("assets/mon.png");
  day2 = loadImage("assets/tue.png");
  day3 = loadImage("assets/wed.png");
  day4 = loadImage("assets/thu.png");
  day5 = loadImage("assets/fri.png");

  money1 = loadImage("assets/money1.png");
  money2 = loadImage("assets/money2.png");
  money3 = loadImage("assets/money3.png");
  money4 = loadImage("assets/money4.png");
  money5 = loadImage("assets/money5.png");
  money6 = loadImage("assets/money6.png");

  //분기점
  img_selection1 = loadImage("assets/selection1.png");
  img_selection1_1 = loadImage("assets/selection1-1.png");
  img_selection1_2 = loadImage("assets/selection1-2.png");
  img_selection1_3 = loadImage("assets/selection1-3.png");

  img_selection2 = loadImage("assets/selection2.png");
  img_selection2_1 = loadImage("assets/selection2-1.png");
  img_selection2_2 = loadImage("assets/selection2-2.png");

  img_selection3 = loadImage("assets/selection3.png");
  img_selection3_1 = loadImage("assets/selection3-1.png");
  img_selection3_2 = loadImage("assets/selection3-2.png");

  img_selection4 = loadImage("assets/selection4.png");
  img_selection4_1 = loadImage("assets/selection4-1.png");
  img_selection4_2 = loadImage("assets/selection4-2.png");

  //탕비실
  coffee_desk = loadImage("assets/coffee_desk.png");
  coffee_basic = loadImage("assets/coffee_basic.png");
  coffee_hover = loadImage("assets/coffee_hover.png");
  coffee_click = loadImage("assets/coffee_click.png");
  mnm_basic = loadImage("assets/mnm_basic.png");
  mnm_hover = loadImage("assets/mnm_hover.png");
  mnm_click = loadImage("assets/mnm_click.png");

  //폰트
  font_bold = loadFont("assets/EliceDigitalBaeum_Bold.ttf");
  font_regular = loadFont("assets/EliceDigitalBaeum_Regular.ttf");

  excel_opening = loadImage("assets/excel_opening.png");
  wedding_opening = loadImage("assets/wedding_opening.png");
  airpods_opening = loadImage("assets/airpods_opening.png");
  meeting_opening = loadImage("assets/meeting_opening.png");

  //엑셀 게임
  excel_1 = loadImage("assets/excel-1.png");
  excel_2 = loadImage("assets/excel-2.png");
  excel_3 = loadImage("assets/excel-3.png");
  excel_4 = loadImage("assets/excel-4.png");
  excel_5 = loadImage("assets/excel-5.png");
  excel_6 = loadImage("assets/excel-6.png");
  excel_7 = loadImage("assets/excel-7.png");
  excel_8 = loadImage("assets/excel-8.png");
  excel_9 = loadImage("assets/excel-9.png");
  excel_10 = loadImage("assets/excel-10.png");
  excel_11 = loadImage("assets/excel-11.png");
  excel_12 = loadImage("assets/excel-12.png");
  excel_13 = loadImage("assets/excel-13.png");
  excel_14 = loadImage("assets/excel-14.png");
  excel_15 = loadImage("assets/excel-15.png");
  excel_16 = loadImage("assets/excel-16.png");
  excel_17 = loadImage("assets/excel-17.png");
  excel_18 = loadImage("assets/excel-18.png");
  excel_19 = loadImage("assets/excel-19.png");
  excel_20 = loadImage("assets/excel-20.png");
  excel_21 = loadImage("assets/excel-21.png");
  excel_22 = loadImage("assets/excel-22.png");
  excel_header1 = loadImage("assets/excel_header1.png");
  excel_header2 = loadImage("assets/excel_header2.png");
  excel_life1 = loadImage("assets/excel_life1.png");
  excel_life2 = loadImage("assets/excel_life2.png");
  excel_life3 = loadImage("assets/excel_life3.png");
  excel_life4 = loadImage("assets/excel_life4.png");
  excel_life5 = loadImage("assets/excel_life5.png");
  excel_clear = loadImage("assets/excel_clear.png");
  excel_over = loadImage("assets/excel_over.png");

  //에어팟 게임
  img_start = loadImage("assets/startpage.png");
  img_airpods1 = loadImage("assets/airpods1.png");
  img_airpods2 = loadImage("assets/airpods2.png");
  img_airpods3 = loadImage("assets/airpods3.png");

  //회의실 딴짓 적발 게임
  peer1 = loadImage("assets/meeting1.png");
  peer11 = loadImage("assets/meeting11.png");
  peer2 = loadImage("assets/meeting2.png");
  peer22 = loadImage("assets/meeting22.png");
  peer3 = loadImage("assets/meeting3.png");
  peer33 = loadImage("assets/meeting33.png");
  peer4 = loadImage("assets/meeting4.png");
  peer44 = loadImage("assets/meeting44.png");
  meeting_boss1 = loadImage("assets/Bujanghair3.png");
  meeting_boss2 = loadImage("assets/Bujanghair2.png");
  meeting_boss3 = loadImage("assets/Bujanghair1.png");
  meeting_boss4 = loadImage("assets/Bujanghair0.png");
  meeting_desk = loadImage("assets/meeting_desk.png");
  meeting_frame = loadImage("assets/frame3.png");
  meeting_room = loadImage("assets/conferenceRoom.png");

  //경조금 게임
  wedding_card = loadImage("assets/wedding_card.png");
  wedding_bg = loadImage("assets/wedding_bg.png");
  wedding_1 = loadImage("assets/wedding_1.png");
  wedding_2 = loadImage("assets/wedding_2.png");
  wedding_3 = loadImage("assets/wedding_3.png");
  wedding_4 = loadImage("assets/wedding_4.png");
  wedding_5 = loadImage("assets/wedding_5.png");

  //엔딩
  ending_bg = loadImage("assets/ending_bg.png");
  ending_good = loadImage("assets/ending_good.png");
  ending_sad = loadImage("assets/ending_sad.png");
  ending_bad = loadImage("assets/ending_bad.png");
  game_over = loadImage("assets/game_over.png");
}

function setup() {
  createCanvas(1280, 720);
  userStartAudio()
    .then(() => {
      audioContext = getAudioContext();
      audioSource = createOscillator();
      audioSource.start();
    })
    .catch((error) => {
      console.log(error);
    });
  // 버튼 생성
  createStartButton();
  createNextButton();
  createResetButton();
  createEndingButton();
  createDialogueNextButton();
  createAlertCloseButton();

  // input 요소 생성
  createNameInput();
  setupAirpods();
  angleMode(DEGREES);
  player = new Player("임시");

  // 텍스트 생성 속도
  frameRate(speedText);
}

function draw() {
  // console.log(scene);
  speedText = 100;

  if (gameStarted && !isGameOver) {
    if (player) {
      player.stat_list["체력"] -= 0.005;
      if (player.stat_list["체력"] <= 0) {
        isGameOver = true;
      }
    }
    switch (scene) {
      case -1:
        showOpening();
        break;
      case 0:
        startGame();
        break;
      case 1:
        scene1();
        break;
      case 2:
        scene2();
        break;
      case 3:
        scene3();
        break;
      case 4:
        scene4();
        break;
      case 5:
        scene5();
        break;
      case 6:
        scene6();
        break;
      case 7:
        scene7();
        break;
      case 8:
        scene8();
        break;
      case 9:
        scene9();
        break;
      case 10:
        scene10();
        break;
      case 11:
        scene11();
        break;
      case 12:
        scene12();
        break;
      case 13:
        scene13();
        break;
      case 100:
        ending();
        resetButton.show();
        break;
    }
  } else if (isGameOver) {
    image(game_over, width / 2, height / 2, width, height);
    gameoverAlert();
    showHeader();
    endingButton.hide();
  } else {
    showStartPage();
  }
}
