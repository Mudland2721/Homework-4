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
  var title = document.querySelector("#questions");
  var answersA = document.querySelector("#optionA");
  var answersB = document.querySelector("#optionB");
  var answersC = document.querySelector("#optionC");
  var answersD = document.querySelector("#optionD");
  var currentChoices = quizQuestions[questionIndex].choices[questionIndex];
  //populate question
  title.textContent = currentQuestion;
  //populate answers
  answersA.textContent = currentChoices;
  answersB.textContent = currentChoices;
  answersC.textContent = currentChoices;
  answersD.textContent = currentChoices;

  // console.log(quizQuestions.length);

  for (let i = 0; i < quizQuestions.length; i++) {
    questionIndex = array[i];
  }
}

getQuestion();

//loop to keep track of question index
// for (let i = 0; i < quizQuestions.length; i++) {
//   questionIndex = array[i];
// }
