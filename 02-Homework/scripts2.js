//create a function for the check box questions
//when i click a box and hit submit that means next question
//whats the question? each one needs a tittle for the question
//vars needed for each question
//var needed to store the question
//var needed to store the input
//needs to be put in array
function questions
addEventListener("click", function () {
    //first shot at creating first question
    //trying to pass title of question
  document.querySelector("card-tittle").append("What is the best kind of music?");

// questions
  var firstQuestion1 = "Rock";
  var firstQuestion2 = "Classical";
  var firstQuestion3 = "None is better than the other";
//boolen if statements
  if (firstQuestion1 === true) {
      prompt("Wrong!")

    return

  } if (firstQuestion2 === true) {

    prompt("Nuh huh");

    return

  } if (firstQuestion3 === true) {

    prompt("Bingo!");

  }

  
  // var theDiv = document.getElementById("<ID_OF_THE_DIV>");
  // var content = document.createTextNode("<YOUR_CONTENT>");
  // theDiv.appendChild(content);


})

function theSecondQuestion() {
  document.querySelector("card-tittle").append("What is your dream vacation?");

  var secondQuestion1 = "The Beach";
  var secondQuestion2 = "The Mountains";
  var secondQuestion3 = "At home for a week";

  document.getElementById("question1").append("secondQuestion1");

  document.getElementById("question2").append("secondQuestion2");

  document.getElementById("question2").append("secondQuestion3");
}
