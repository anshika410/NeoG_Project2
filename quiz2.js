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
quiz("Q-1 who won the Bharat-Ratna award in singing? ","Lata Mangeshkar");
quiz("Q- 2 Lata Mangeshkar's first song is dedicated to... ", "Mother");
quiz("Q-3 When she sang her first song? ","1943");
quiz("Q-4 which song is on top trending in 2022? ","Shrivalli");
quiz("Q-5 Which female singer is on top in the world?","Taylor Swift");
console.log("Congratulations,Your final score is: "+score);
