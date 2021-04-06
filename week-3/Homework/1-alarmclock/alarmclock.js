/*let setTime = document.querySelector("#set");
let timeRe = document.querySelector("#timeRemaining");

setTime.addEventListener("click", function() {
  const myInsertText = document.querySelector("#alarmSet");
  //myInsertText.innerText = setTime;
  timeRe.innerText(myInsertText);
});*/

function setAlarm() {
  let alarmTime = document.querySelector("#alarmSet").valueAsNumber;

  let text = document.querySelector("#timeRemaining");

  let currentTime = alarmTime;

  timerID = setInterval(
    function (num) {
      if (currentTime === 0) {
        clearInterval(timerID);
        //let bodyColor = document.querySelector("body");
        document.body.style.backgroundColor = "pink";
        playAlarm();
      }
      if (currentTime >= 0) {
        text.innerText = "Time Remaining: 00:" + currentTime;
        console.log(currentTime);
      }
      currentTime = currentTime - 1; 
    }, 
    1000, 
    alarmTime
  );
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
