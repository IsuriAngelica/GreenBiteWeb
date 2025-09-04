const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const pauseButton = document.getElementById('pause');
const timerBody = document.getElementById('timer-container');
const timerValue = document.getElementById('timer-value');
const message = document.createElement('p');
const timerSound = new Audio("./MindfullnessPage/sounds/alarm_sound.mp3");

let timeLeft = 1500;
let timerInterval;

function updateTimer() {
    let minutes = Math.floor(timeLeft /60);
    let seconds = timeLeft % 60;
    timerValue.textContent = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
}


function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            timerSound.play();
            clearInterval(timerInterval);
            startButton.disabled = true;
            pauseButton.disabled = true;
            timerBody.appendChild(message);
            message.textContent = "Time's up!"
        }
    }, 1000)
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
  timeLeft = 1500;
  let minutes = Math.floor(timeLeft/60); 
  let seconds = timeLeft % 60; 
  pauseTimer();
  timerValue.textContent = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`;
  if (startButton.disabled && pauseButton.disabled) {
    startButton.disabled = false;
    pauseButton.disabled = false;
    message.remove();
  }
}


updateTimer();


startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);