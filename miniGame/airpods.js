let amplitude;
let maxRectHeight;
let isDecibelExceeded = false;
let leftEar;
let rightEar;
let earphoneSpeed = 7;
let earphoneDirection = 1;
let millisecond;
let decibels;

let decibelMax = 115;

function setupAirpods() {
  mic = new p5.AudioIn();
  mic.start();

  amplitude = 0;
  maxRectHeight = height - 650;
  rhythmX = width / 2;

  leftEar = width / 2 - 80;
  rightEar = width / 2 + 80;
}

function Airpods() {
  image(bg_office, width / 2, height / 2);
  console.log(amplitude);
  millisecond = millis();
  decibels = amplitudeToDecibels(amplitude);
  amplitude = mic.getLevel();
  // Draw a rectangle based on decibel values
  let rectHeight = map(decibels, -120, -90, 0, maxRectHeight) * 0.8;
  if (!isDecibelExceeded) {
    background(255, 153, 153);
    fill(255);
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, rectHeight);

    if (millisecond % 800 >= 400) {
      image(img_airpods1, width / 2, height / 2, width, height);
    } else {
      image(img_airpods2, width / 2, height / 2, width, height);
    }

    fill(0);
    textAlign(RIGHT, CENTER);
    textFont(font_bold);
    textSize(52);
    text(round(decibels.toFixed(2)) + " dB / 115dB", width - 50, height / 10);

    if (decibels > decibelMax) {
      isDecibelExceeded = true;
    }
  } else {
    showNextButton();
    image(img_airpods3, width / 2, height / 2, width, height);
  }
}

function amplitudeToDecibels(amplitude) {
  const reference = 1; // Reference amplitude for decibel calculations
  const maxAmp = 1; // The maximum amplitude value of the input audio signal

  let db = 20 * Math.log10(amplitude / reference);
  db = Math.max(db, -Infinity); // If the amplitude is too small
  db = Math.max(db, -120); // Limit to -120, the lowest decibel actually available

  // Convert decibel values to positive values
  let positiveDB = db + 120;

  return positiveDB;
}
