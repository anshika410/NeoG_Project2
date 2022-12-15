var readlineSync=require("readline-sync");
var userName=readlineSync.question("Please enter your name: ");
console.log("** Welcome "+userName+' **');
console.log("Let's start the quiz...");
var score=0;
function quiz(question, answer){
  var userAnswer=readlineSync.question(question);
  if (userAnswer=== answer){
    console.log("Right answer :)");
    score=score+1;
    if (score >= 1){
      console.log(" You scored: 1")
    }
    console.log("--------------");
  } else {
    console.log("Wrong answer :(");
    if (score >= 1){
      console.log("You scored: 0")
    }
    console.log("--------------");
  }
}
quiz("Q-1 What is the thing you are passionate about? ","Cricket");
quiz("Q- 2 Who is your Ideal? ", "Virat Kohli");
quiz("Q-3 What do you do for your goal? ","RgularPractice");
quiz("Q-4 Your goal belongs to which field? ","Sports");
quiz("Q-5 From which stage of your age you have this passion?","Childhood");
console.log("Congratulations,Your final score is: "+score);