console.log("JavaScript is the coolest language in the world?");
console.log("0:Yes");
console.log("1:No");
var input = prompt("Please select the correct answer");


input == 0 ? console.log("Correct answer"):console.log("Incorrect answer"); 



function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

var question1 = new Question("Is the javascript the best language in the world", "Yes", 0);