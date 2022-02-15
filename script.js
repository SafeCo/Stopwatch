const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
const buttonLog = document.getElementById('button-log');
const table = document.getElementById('table');
let secondInterval = 0;
let minutesInterval = 0;
let seconds = null;
let minutes = null;
const storeNum = [];
let numAdd= 0
const storeTime = [];
let startSwitch = true;

buttonStart.addEventListener("click", startTimer);
buttonStop.addEventListener("click", stopTimer);
buttonReset.addEventListener("click", resetTimer);
buttonLog.addEventListener("click", tableLog);

if (minutesInterval < 10){
  minutesInterval = "0" + minutesInterval;
}
if (secondInterval < 10){
  secondInterval = "0" + secondInterval;
}

function startTimer() {
  
  if (startSwitch == true){
    seconds = setInterval(startSeconds, 1000);
    minutes = setInterval(startMinutes, 60000);
  }
  startSwitch = false;
}

function startSeconds(){
  secondInterval++;

  if (secondInterval < 10) {
    secondInterval =  "0" + secondInterval;
  }
  if (secondInterval >= 60) {
    secondInterval = 0;
    secondInterval =  "0" + secondInterval;
  }
  appendSeconds.innerHTML = secondInterval;
}

function startMinutes() {
  minutesInterval++
  if (minutesInterval < 10){
  minutesInterval = "0" + minutesInterval;
}
  appendMinutes.innerHTML = minutesInterval;
}

function resetTimer() {
  clearInterval(seconds);
  clearInterval(minutes);
  secondInterval = 0;
  minutesInterval = 0;
  appendSeconds.innerHTML = "0" + secondInterval;
  appendMinutes.innerHTML = "0" + minutesInterval;
  startSwitch = true;
}

function stopTimer () {
  clearInterval(seconds);
  clearInterval(minutes);
  startSwitch = true;
}

function tableLog () {
  numAdd++;
  storeNum.push(numAdd);
  let row = table.insertRow(-1);
  let numCell = row.insertCell(0);
  numCell.innerHTML = numAdd;

  let time = minutesInterval + ":" + secondInterval;
  storeTime.push(time);
  let timeCell = row.insertCell(1);
  timeCell.innerHTML = time;
}