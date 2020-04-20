var quizQuestions = [
  {
    ///0
    question: "What is the best Shooter game?",
    choices: ["COD", "CSGO", "Halo", "DOOM"],
    answer: "DOOM",
  },
  {
    ///1
    question: "Whats the best horror game?",
    choices: [
      "5 Nights At Freddies",
      "Silent Hill",
      "Out Last",
      "Resident Evil",
    ],
    answer: "Resident Evil",
  },
  {
    ///2
    question: "Whats the best fighting game?",
    choices: ["Super Smash Bros", "MK9", "Injustice", "Soul Caliber"],
    answer: "Super Smash Bros",
  },
  {
    ///3
    question: "What the best RPG?",
    choices: ["Witcher", "Skyrim", "Destiny 2", "Fallout New Vegas"],
    answer: "Skyrim",
  },
];
var questionIndex = 0;
var startBtn = document.querySelector("startBtn");
var submit = document.querySelector("submit");
// var counter = document.querySelector("counter");
var answersA = document.querySelector("#optionA");
var answersB = document.querySelector("#optionB");
var answersC = document.querySelector("#optionC");
var answersD = document.querySelector("#optionD");
var displayTimer = document.querySelector("#timer");
var timeRemaining = 60;
var timerInterval;

function startTimer() {
  displayTimer.textContent = timeRemaining;
  timerInterval = setInterval(function () {
    timeRemaining--;
    displayTimer.textContent = timeRemaining;

    if (timeRemaining === 0) {
      prompt("Game Over");
    }
  }, 1000);
}

function getQuestion() {
  var currentQuestion = quizQuestions[questionIndex].question;
  var currentChoices = quizQuestions[questionIndex].choices;
  // var currentAnswer = quizQuestion[questionIndex].answer;
  var title = document.querySelector("#questions");
  // var userInput = document.querySelector("#optionA");
  //populate question
  //where your putting it-how your going to put it there - what goes in it

  title.textContent = currentQuestion;
  //populate answers
  //first answer is what current choice yes
  answersA.textContent = currentChoices[0];

  answersB.textContent = currentChoices[1];
  answersC.textContent = currentChoices[2];
  answersD.textContent = currentChoices[3];
  answersA.setAttribute("value", currentChoices[0]);
  answersB.setAttribute("value", currentChoices[1]);
  answersC.setAttribute("value", currentChoices[2]);
  answersD.setAttribute("value", currentChoices[3]);
  // console.log(quizQuestions[questionIndex]);
  //NOW you just need to be able to get what option the user selects THEN compare it with the currentAnswer, for 3 look back at past activities to help you create a eventListener and get info about what key clicked
}
getQuestion();
// call startTimer
startTimer();

// startBtn.addEventListener("click", function (event) {
//   var click = event.target;
//   if (click === true) {
//     howMuch.textContent = time;
//   }

//   if (click === false) {
//   }
//   // console.log(click)
// });
answersA.addEventListener("click", function (event) {
  var fu = event.target;
  // console.log(fu.value);
  if (fu.value === quizQuestions[questionIndex].answer) {
    alert("YUP");

    //save the user input
  }
  if (fu.value !== quizQuestions[questionIndex].answer) {
    alert("You fucked up");
  }
  if (questionIndex !== quizQuestions.length - 1) {
    questionIndex++;
    getQuestion();
  }
});
answersB.addEventListener("click", function (event) {
  var fu = event.target;
  // console.log(fu.value);
  if (fu.value === quizQuestions[questionIndex].answer) {
    alert("YUP");
    //deduct time
    //save the user input
  }
  if (fu.value !== quizQuestions[questionIndex].answer) {
    alert("You fucked up");
    timeRemaining--;
  }
  if (questionIndex !== quizQuestions.length - 1) {
    questionIndex++;
    getQuestion();
  }
});
answersC.addEventListener("click", function (event) {
  var fu = event.target;
  // console.log(fu.value);
  if (fu.value === quizQuestions[questionIndex].answer) {
    alert("YUP");
    //deduct time
    //save the user input
  }
  if (fu.value !== quizQuestions[questionIndex].answer) {
    alert("You fucked up");
    timeRemaining--;
  }
  if (questionIndex !== quizQuestions.length - 1) {
    questionIndex++;
    getQuestion();
  }
});
answersD.addEventListener("click", function (event) {
  var fu = event.target;
  // console.log(fu.value);
  if (fu.value === quizQuestions[questionIndex].answer) {
    alert("YUP");
    //deduct time
    //save the user input
  }
  if (fu.value !== quizQuestions[questionIndex].answer) {
    alert("You fucked up");
    timeRemaining--;
  }
  if (questionIndex !== quizQuestions.length - 1) {
    questionIndex++;
    getQuestion();
  }
});
//todos
