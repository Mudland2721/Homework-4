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
  title.textContent = currentQuestion;
  var currentChoices = quizQuestions[questionIndex].choices;
  var answers = document.querySelector("#optionA #optionB #optionC #optionD");

  //trying to do the same thing with the options but with no luck need to render them to the boxes
  currentChoices.textContent = answers;

  // var options = document.querySelector("buttons");
  // options.textContent = quizQuestions.choices;
}
getQuestion();

// function getQuestion() {
//   var currentQuestion = quizQuestions[questionIndex];
//   title.textContent = currentQuestion;

//   getQuestion();
// }

//loop to keep track of question index
// for (let i = 0; i < quizQuestions.length; i++) {
//   questionIndex = array[i];
// }
