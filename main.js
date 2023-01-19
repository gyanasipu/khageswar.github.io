let startingMinutes = 30; // minutes
const answerArr = [
  2, 4, 1, 3, 4, 1, 2, 3, 2, 2, 4, 3, 4, 4, 3, 2, 4, 4, 2, 2, 2, 3, 1, 3, 2, 4,
  4, 2, 1, 3, 3, 1, 2, 4, 3, 1, 4, 4, 2, 3, 3, 3, 2, 4, 4, 1, 3, 2, 4, 1,
];
let wrongClick = -0.25;
let correctClick = 1;
let start = false;
let qNumber = answerArr.length;
let allQuestions = document.getElementById("allquestions");
let timerBtn = document.getElementById("timeSubmit");
timerBtn.addEventListener("click", () => {
  startingMinutes = document.getElementById("timerInput").value
    ? document.getElementById("timerInput").value
    : startingMinutes;

  document.querySelector(".inputTime").style.transform = "scale(0)";

  document.querySelector(".timer").innerHTML = `${startingMinutes}:00`;
});
// console.log(allQuestions);
// option fillup in html
for (let i = 0; i < answerArr.length; i++) {
  allQuestions.innerHTML =
    allQuestions.innerHTML +
    `<div class="question">
<!-- 1 -->
<div class="qno">${i + 1}.</div>
<div class="opt">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
<div class="optscore"></div>
</div>`;
}
// top navigation
let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  document.querySelector(".scoreboard").classList.toggle("menuopen");
});
let startBtn = document.querySelector(".start");
startBtn.addEventListener("click", examStart);
// startfunction
function examStart() {
  startBtn.removeEventListener("click", examStart);
  readyForClick();
  start = true;
  let time = startingMinutes * 60;

  setTimeout(scoreCount, 1000 * time);
  let timer = document.querySelector(".timer");
  setInterval(() => {
    if (!start) {
      timer.innerHTML = "00:00";

      return;
    }

    const minutes = Math.floor(time / 60);
    // const hour = Math.floor(time / 3600);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = `${minutes}:${seconds}`;
    time--;
  }, 1000);
}
// top
// click array
let clickArr = [];
for (let f = 0; f < qNumber; f++) {
  clickArr[f] = 0;
}
// convert a to 1 b to 2
let optcode = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
};
let option = document.querySelectorAll(".opt");
// console.log(option);
function readyForClick() {
  for (let j = 0; j < option.length; j++) {
    let optDiv = option[j].querySelectorAll("div");

    for (let i = 0; i < optDiv.length; i++) {
      optDiv[i].addEventListener("click", () => {
        if (optDiv[i].classList.contains("click")) {
          optDiv[i].classList.remove("click");
          clickArr[j] = 0;
        } else {
          optDiv[i].classList.add("click");
          for (let k = 0; k < optDiv.length; k++) {
            if (k == i) continue;
            optDiv[k].classList.remove("click");
          }

          clickArr[j] = optcode[optDiv[i].innerText];
        }

        // console.log(optcode[optDiv[i].innerText]);
        // console.log(clickArr);
      });
    }
  }
}

document.querySelector(".submit").addEventListener("click", scoreCount);
// click option function

// score count
function scoreCount() {
  let count = 0;
  let totalEmpty = 0;
  let totalWrong = 0;
  let totalRight = 0;
  for (let i = 0; i < qNumber; i++) {
    let optscore = document.querySelectorAll(".optscore");
    let optDiv = option[i].querySelectorAll("div");
    optDiv[answerArr[i] - 1].classList.add("correct");

    if (clickArr[i] == answerArr[i]) {
      totalRight++;
      count = count + correctClick;
      optscore[i].classList.add("correctscore");
      optscore[i].innerHTML = "&#10004;";
    } else if (clickArr[i] == 0) {
      totalEmpty++;
      count = count + 0;
      optscore[i].classList.add("empty");

      optscore[i].innerHTML = "&#8856";
    } else {
      totalWrong++;
      count = count + wrongClick;
      optDiv[clickArr[i] - 1].classList.add("wrong");
      optscore[i].classList.add("wrongscore");
      optscore[i].innerHTML = "&#10008;";
    }
  }
  // console.log(count);
  start = false;
  scoreboard(count, totalEmpty, totalWrong, totalRight);
  disableClick();
}

// scoreboard
function scoreboard(count, totalEmpty, totalWrong, totalRight) {
  let totalQuestions = (document.getElementById("totalQn").innerText =
    answerArr.length);
  let totalClicked = (document.getElementById("totalClick").innerText =
    totalRight + totalWrong);
  let correctclick = (document.getElementById("correctClick").innerText =
    totalRight);
  let wrongclick = (document.getElementById("wrongclick").innerText =
    totalWrong);
  let notClick = (document.getElementById("notClick").innerText = totalEmpty);
  let overAllScore = (document.getElementById("overAllScore").innerText =
    count);
}
function disableClick() {
  document.querySelector(".submit").removeEventListener("click", scoreCount);
  document.querySelector(".disable").classList.add("on");
  // let allOptions = document.querySelectorAll(".opt div");
  // for (let i = 0; i < allOptions.length; i++) {
  //   allOptions[i].removeEventListener("click", readyForClick);
  // }
}
// console.log(clickArr);
