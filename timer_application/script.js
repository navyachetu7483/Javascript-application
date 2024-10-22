let startTime;
let updatedTime;
let difference;
let timeInterval;
let savedTime = 0;
let paused = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", startTimer);

pauseButton.addEventListener("click", pauseTimer);

resumeButton.addEventListener("click", resumeTimer);

resetButton.addEventListener("click", resetTimer);

function startTimer() {
  startTime = new Date().getTime();
  timeInterval = setInterval(updateTimer, 1000);

  startButton.style.display = "none";
  pauseButton.style.display = "inline";
}
function updateTimer() {
  updatedTime = new Date().getTime();

  difference = updatedTime - startTime + savedTime;

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  timerDisplay.textContent =
    formateTime(hours) + ":" + formateTime(minutes) + ":" + formateTime(seconds);
}
function formateTime(time) {
  return time < 10 ? "0" + time : time;
}

function pauseTimer() {
  clearInterval(timeInterval);
  savedTime = difference;
  paused = true;
  pauseButton.style.display = "none";
  resumeButton.style.display = "inline";
}

function resumeTimer() {
  if (paused) {
    startTime = new Date().getTime();
    timeInterval = setInterval(updateTimer, 1000);
    pauseButton.style.display = "inline";
    resumeButton.style.display = "none";
  }
}

function resetTimer() {
  clearInterval(timeInterval);
  startButton.style.display = "inline";
  pauseButton.style.display = "none";
  resumeButton.style.display = "none";
  timerDisplay.textContent = "00:00:00";
  savedTime = 0;
  paused = false;
}
