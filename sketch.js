let startButton;
let resetButton;
let endingButton;
let nextButton;
let dialogueNextButton;
let alertCloseButton;
let nameInput;
let gameStarted = false;
let player;
let scene = 3;
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
let speedText = 50;
let isInConversation;

function preload() {
  excel = loadImage("assets/excel.png");
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/tube2.mp3");

  img_dialogue = loadImage("assets/dialogue.png");
  img_alert = loadImage("assets/alert.png");

  game_header = loadImage("assets/game_header.png");
  game_header2 = loadImage("assets/game_header2.png");

  //폰트
  font_bold = loadFont("assets/EliceDigitalBaeum_Bold.ttf");
  font_regular = loadFont("assets/EliceDigitalBaeum_Regular.ttf");

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

  img_start = loadImage("assets/startpage.png");
  img_airpods1 = loadImage("assets/airpods1.png");
  img_airpods2 = loadImage("assets/airpods2.png");
  img_airpods3 = loadImage("assets/airpods3.png");
  bg_single = loadImage("assets/singleColor.png");
  bg_room_morning = loadImage("assets/playerRoomMorning.png");
  bg_room_noon = loadImage("assets/playerRoomNoon.png");
  bg_office = loadImage("assets/office.png");
  peer1 = loadImage("assets/meeting1.png");
  peer11 = loadImage("assets/meeting11.png");
  peer2 = loadImage("assets/meeting2.png");
  peer22 = loadImage("assets/meeting22.png");
  peer3 = loadImage("assets/meeting3.png");
  peer33 = loadImage("assets/meeting33.png");
  peer4 = loadImage("assets/meeting4.png");
  peer44 = loadImage("assets/meeting44.png");
  meeting_boss1 = loadImage("assets/meeting_boss1.png");
  meeting_boss2 = loadImage("assets/meeting_boss2.png");
  meeting_boss3 = loadImage("assets/meeting_boss3.png");
  meeting_boss4 = loadImage("assets/meeting_boss4.png");
  meeting_desk = loadImage("assets/meeting_desk.png");
}

function setup() {
  createCanvas(1280, 720);
  // 버튼 생성
  createStartButton();
  createNextButton();
  createResetButton();
  createEndingButton();
  createDialogueNextButton();
  createAlertCloseButton();

  //분기점 버튼 생성
  createSelection1();
  createSelection2();
  createSelection3();
  createSelection4();

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
  if (gameStarted) {
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
  } else {
    showStartPage();
  }
}
