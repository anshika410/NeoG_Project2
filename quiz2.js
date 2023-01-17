var readlineSync = require("readline-sync");
var userName = readlineSync.question("Please enter your name: ");
console.log("** Welcome " + userName + ' **');
console.log("Let's start the quiz...");
var score = 0;
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right answer :)");
    score = score + 1;
    if (score >= 1) {
      console.log(" You scored: 1")
    }
    console.log("------------------------------------");
  } else {
    console.log("Wrong answer :(");
    if (score >= 1) {
      console.log("You scored: 0")
    }
    console.log("------------------------------------");
  }
}
quiz("Q-1 who won the Bharat-Ratna award in singing?\n (a)Rhreya Ghoshal      (b)Arijit Singh \n (c)Lata Mangeshkar     (d)Neeti Mohan \nYour answer : ", "c");
quiz("Q- 2 Lata Mangeshkar's first song is dedicated to...\n(a)Brother      (b)Mother\n(c)Nation       (d)Soldiers\nYour answer: ", "b");
quiz("Q-3 When she sang her first song?\n(a)1953            (b)1964\n(c)1973            (d)1943\nYour answer:  ", "d");
quiz("Q-4 which song is on top trending in 2022?\n(a)Shrivalli           (b)Pasoori\n(c)Oo Antava           (d)Dholida\nYour answer:  ", "a");
quiz("Q-5 Which female singer is on top in the world?\n(a)Sia Furler           (b)Taylor Swift\n(c)Miley Cyrus           (d) Selena Gomez\nYour answer:  ", "b");
console.log("Congratulations,Your final score is: " + score);
