//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var greencount = 0;
var bluecount = 0;
var pinkcount = 0;
var blackcount = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var result = document.getElementById("result");
//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", green);
q1a2.addEventListener("click", blue);
q1a3.addEventListener("click", black);
q1a4.addEventListener("click", pink);
q2a1.addEventListener("click", blue);
q2a2.addEventListener("click", black);
q2a3.addEventListener("click", pink);
q2a4.addEventListener("click", green);
q3a1.addEventListener("click", blue);
q3a2.addEventListener("click", pink);
q3a3.addEventListener("click", black);
q3a4.addEventListener("click", green);

// restart.addEventListener("click", restart);
//#TODO: Define quiz functions here
function green() {
  greencount += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}
function blue() {
  bluecount += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function black() {
  blackcount += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function pink() {
  pinkcount += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function updateResult() {
  if (greencount >= 2) {
    result.innerHTML = "Your Result is: Green!!!";
  } else if (bluecount >= 2) {
    result.innerHTML = "Your Result is: Blue!!!";
  } else if (pinkcount >= 2) {
    result.innerHTML = "Your Result is: Pink!!!";
  } else if (blackcount >= 2) {
    result.innerHTML = "Your Result is: Black!!!";
  } else {
    result.innerHTML = "Your Result is: Rainbow!!!";
  }
}

var restart = document.getElementById("restart");
restart.addEventListener("click", redo);

// function restartQuiz() {}
// }
function redo() {
  result.innerHTML = "Your Result is...";
  questionCount = 0;
  greencount = 0;
  bluecount = 0;
  pinkcount = 0;
  blackcount = 0;
}