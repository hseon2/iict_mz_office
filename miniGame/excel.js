let missions = ['d', 'r', 'a', 'f', 'h']; // 미션 키 배열
let missionIndex = 0; // 현재 미션 인덱스
let completedMissions = 0; // 완료된 미션 수

// 이미지를 담을 객체
let images = {};

let timer = 30; // 제한 시간(초)
let startTime;

function Excel() {
  background(0);
  startTime += deltaTime;

  // 미션 이미지 그리기
  drawMissionImage(missions[missionIndex], width / 2, height / 4);

  // 미션 수행 횟수 표시
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text(completedMissions + '/' + missions.length, width - 50, 50);

  // 타이머 바 표시
  let elapsedSeconds = (millis() - startTime) / 1000;
  let remainingSeconds = max(timer - elapsedSeconds, 0);
  let barWidth = (remainingSeconds / timer) * width;
  fill(255, 0, 0);
  rect(0, height - 40, barWidth, 40);

  // 제한 시간 초과 또는 모든 미션 완료 시 게임 종료
  if (remainingSeconds <= 0 || completedMissions === missions.length) {
    showScoreScreen();
  }
}

function keyPressed() {
  let currentMission = missions[missionIndex];
  if (key === currentMission) {
    missionIndex++;
    completedMissions++;
    if (missionIndex >= missions.length) {
      missionIndex = 0;
    }
  }
}

function drawMissionImage(missionKey, x, y) {
  let missionImage = images[missionKey];
  imageMode(CENTER);
  let imageSize = min(missionImage.width, missionImage.height, 400);
  let imageX = width / 2;
  let imageY = height / 2;
  image(missionImage, imageX, imageY, imageSize, imageSize);
}


function showScoreScreen() {
  // 스코어 화면 그리기
  background(0);
  textSize(50);
  fill(255);
  textAlign(CENTER);
  text('Score: ' + completedMissions, width / 2, height / 2);
}