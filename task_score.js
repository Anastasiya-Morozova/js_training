let introScore = 100;
let gitScore = 180;
let jsScore = 240;

let avgScore = Math.floor((introScore + gitScore + jsScore)/3);

//console.log(avgScore);

let studentName = "Eren";
let studentSurname = "Yeager";

console.log(`${studentName.slice(0,1)}. ${studentSurname}\`s average score for the Intro, Git and JS modules is ${avgScore}.`);