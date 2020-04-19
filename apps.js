var quizQuestions = [
  {
    question: "What is the best Shooter game?",
    choices: ["COD", "CSGO", "Halo", "DOOM"],
    answer: "DOOM",
  },
  {
    question: "Whats the best horror game?",
    choices: [
      "5 Nights At Freddies",
      "Silent Hill",
      "Out Last",
      "Resident Evil",
    ],
    answer: "Resident Evil",
  },
  // {
  //   question: "Whats the best fighting game?",
  //   choices: ["Super Smash Bros", "MK9", "Injustice", "Soul Caliber"],
  //   answer: "Super Smash Bros",
  // },
  {
    question: "What the best RPG?",
    choices: ["Witcher", "Skyrim", "Destiny 2", "Fallout New Vegas"],
    answer: "Skyrim",
  },
];
var questionIndex = 0;
var startBtn = document.querySelector("startBtn");
// var optionA = document.querySelector("#optionA");
// var optionB = document.querySelector("#optionB");
// var optionC = document.querySelector("#optionC");
// var optionD = document.querySelector("#optionD");
var submit = document.querySelector("submit");
var counter = document.querySelector("counter");
// function startQuiz() {
//   var currentQuestion = questions[questionIndex];
//   var title = document.querySelector("questions");
//   title.textContent = currentQuestion.question;
//   getQuestion();
// }
// console.log(questions);
function getQuestion() {
  var currentQuestion = quizQuestions[questionIndex].question;
  var currentChoices = quizQuestions[questionIndex].choices;
  // var currentAnswer = quizQuestion[questionIndex].answer;
  var title = document.querySelector("#questions");
  var answersA = document.querySelector("#optionA");
  var answersB = document.querySelector("#optionB");
  var answersC = document.querySelector("#optionC");
  var answersD = document.querySelector("#optionD");
  // var userInput = document.querySelector("#optionA");
  //populate question
  title.textContent = currentQuestion;
  //populate answers
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

  answersA.addEventListener("click", function (event) {
    var fu = event.target;
    // console.log(fu.value);

    if (fu.value === quizQuestions[questionIndex].answer) {
      alert("YUP");
      //deduct time
      //save the user input
    }

    if (fu.value !== quizQuestions[questionIndex].answer) {
      alert("You fucked up");
    }

    if (questionIndex !== quizQuestions.length - 1) {
      questionIndex++;
      getQuestion();
    } else {
      //redner results
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
    }

    if (questionIndex !== quizQuestions.length - 1) {
      questionIndex++;
      getQuestion();
    } else {
      //redner results
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
    }

    if (questionIndex !== quizQuestions.length - 1) {
      questionIndex++;
      getQuestion();
    } else {
      //redner results
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
    }

    if (questionIndex !== quizQuestions.length - 1) {
      questionIndex++;
      getQuestion();
    } else {
      //redner results
    }
  });

  // submitBtn.addEventListener("click", function () {
  //   if (currentAnswer === ) {
  //     prompt("Incorrect!");
  //     //deduct time
  //     questionIndex++;
  //     //store answer
  //   }
  //   if (currentAnswer) {
  //     prompt("Thats Correct!");
  //     //reset time
  //     questionIndex++;
  //     //store answer
  //   }
  //   //says quiz question is not defined when i comment out currentAnswer select a answer it returns current answer is not defined.
  //   //If i declair it in the function it removes all my code and does not work. If I remove it my code shows up cannot progress what do?
  // });
}
getQuestion();
//loop to keep track of question index
// for (let i = 0; i < quizQuestions.length; i++) {
//   questionIndex = array[i];
// }

// function for the time on start button
// var that has time
// something to increase or decrease time

// exer 20-24    27-28 to dos
