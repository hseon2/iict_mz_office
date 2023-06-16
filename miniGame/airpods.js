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
  background(220);
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
    console.log(millisecond);

    if (millisecond % 800 >= 400) {
      image(img_airpods1, width / 2, height / 2);
    } else {
      image(img_airpods2, width / 2, height / 2);
    }

    //face
    // noStroke();
    // fill(255, 224, 191);
    // ellipse(rhythmX, height / 2, 150, 180);
    // ellipse(rhythmX - 75, height / 2, 35, 40);
    // ellipse(rhythmX + 75, height / 2, 35, 40);

    // //earphone
    // fill(255);
    // ellipse(leftEar, height / 2 + 10, 20, 20);
    // ellipse(rightEar, height / 2 + 10, 20, 20);
    // rectMode(CENTER);
    // rect(leftEar - 4, height / 2 + 15, 10, 25);
    // rect(rightEar + 4, height / 2 + 15, 10, 25);

    // //eye
    // fill(50);
    // ellipse(rhythmX - 30, height / 2, 20, 20);
    // ellipse(rhythmX + 30, height / 2, 20, 20);

    fill(0);
    textAlign(RIGHT);
    textSize(48);
    text(decibels.toFixed(2) + " dB / 115dB", width - 50, height / 10);

    // if (decibels < 100) {
    //   let angle = map(sin(frameCount * 0.1), -1, 1, -PI / 4, PI / 4);
    //   rhythmX = width / 2 - 50 + cos(angle) * 60;
    //   leftEar = rhythmX - 80;
    //   rightEar = rhythmX + 80;
    // }

    // if (decibels >= 100 && decibels < 115) {
    //   leftEar += earphoneSpeed * earphoneDirection;
    //   rightEar += earphoneSpeed * earphoneDirection;

    //   // Reverse direction if earphones reach the limits
    //   if (leftEar <= width / 2 - 100 || leftEar >= width / 2 - 80) {
    //     earphoneDirection *= -1;
    //   }
    //   if (rightEar <= width / 2 + 80 || rightEar >= width / 2 + 100) {
    //     earphoneDirection *= -1;
    //   }
    // }

    if (decibels > decibelMax) {
      isDecibelExceeded = true;
    }
  } else {
    showNextButton();
    image(img_airpods3, width / 2, height / 2);

    // //face
    // noStroke();
    // fill(255, 224, 191);
    // ellipse(width / 2, height / 2, 150, 180);
    // ellipse(width / 2 - 75, height / 2, 35, 40);
    // ellipse(width / 2 + 75, height / 2, 35, 40);

    // //eye
    // fill(50);
    // ellipse(width / 2 - 30, height / 2, 30, 30);
    // ellipse(width / 2 + 30, height / 2, 30, 30);
    // fill(255);
    // ellipse(width / 2 - 33, height / 2 - 8, 9, 9);
    // ellipse(width / 2 + 28, height / 2 - 8, 9, 9);

    // //mouth
    // fill(255, 0, 0);
    // ellipse(width / 2, height / 2 + 50, 30, 35);
    // fill(0);
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
