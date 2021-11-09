/* Students: Please use this week's project for Week 5: Assignment 5: Shared Libraries. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
/* Students: Please use this week's project for Week 5: Assignment 5: Shared Libraries. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
const myQuiz = [
  {
    number: "Question 1",
    question: "What is the capital of California?",
    answer: ["A) Los Angeles", "B) Monterrey", "C) Sacramento", "D) San Francisco"],
    correct: 2
  },
  {
    number: "Question 2",
    question: "How many teams are in the NFL?",
    answer: ["A) 32", "B) 8", "C) 24", "D) 16"],
    correct: 0
  },
   {
    number: "Question 3",
    question: "Who was the first first president of the United States?",
    answer: ["A) John Adams", "B) George Washington", "C) James Madison", "D) Thomas Jefferson"],
    correct: 1
  },
  {
    number: "Question 4",
    question: "How many states are in the United States?",
    answer: ["A) 25", "B) 20", "C) 30", "D) 50"],
    correct: 3
  }
];
let turn= 0;
//callback
findQuestion();

function findQuestion() {
  $('#move').empty(turn + 1);
  $('#number').text(myQuiz[turn].number);
  $('#question').text(myQuiz[turn].question);
  $('#answer').empty();

for ( let mc in myQuiz[turn].answer) {
  let button = $("<button>");
  button.text(myQuiz[turn].answer[mc]);
  $('#answer').append( button );

  button.click (
    function() {
      checkAnswer(mc);
    }
  );
}
}
function checkAnswer(choice) {
if (choice == myQuiz[turn].correct ) {
  $('#wrong').empty();
  $('#right').html("<strong>Correct</strong>");
  nextQuestion();
}
else{
  $('#wrong').html("<strong>Incorrect</strong>");
  $('#right').empty();
}
}

function nextQuestion() {
  turn++;
  if( turn < myQuiz.length) {
    findQuestion();
  }
  else{
    $('body').html("<h1>You have completed the Quiz</h1>");
  }
}