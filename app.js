'use strict';


var totalGuessCounter = 0;
var numberOfCorrectAnswer = 0;

var questions = [
  'Hi, we are going to play a guessing game. Most questions will be a simple yes or no. The first question is easy. What is your name?',
  'Yes or No, will Gary tolerate idiots?',
  'Does Gary have any cats?               Yes or No',
  'Has Gary been to Peru?               Yes or No',
  'Did Gary play an instrument in High School?           Yes or No',
  'Will Gary buy you a beer              Yes or No?'
 ];

var answersYes = [
  'That is a fine name.',
  'Well, tolerate is a strong word.',
  'Oops, wrong Gary used to have a cat. But no more.',
  'You are right and he had a great time.',
  'Yep the tuba, you know him really well.',
  'Hmm, you can ask. He does love his beer.'
];

var answersNo = [
  'Hey, how did you get here?',
  'Why does he have so many idiots for friends, then?',
  'Yep you are correct.',
  'You are wrong, though you would not know it by his Spanish.',
  'Ha! He did, he really did.',
  'What kind of jerk do you think he is?'
];

var correctAnswer = [true, true, , true, false, true, true];

var consoleStatement = [
  'Let us get to know each other.',
  'this question weeds out the jerks in the world.',
  'he loves cats, dogs and animals of the world.',
  'he loves to travel, take him somewhere.',
  'it was the tuba! it was the tuba!',
  'maybe you could buy him a beer instead.'
];

for (var i = 0; i < questions.length; i++) {
  var insideAnswer = prompt(questions[i]).toLowerCase();
  console.log(consoleStatement[i]);

  if(insideAnswer != 0) {
    if (i === 0) {
      alert(answersYes[i]);
    }
    if (insideAnswer === 'yes' || insideAnswer === 'y') {
      alert(answersYes[i]);
    } else
    if(insideAnswer === 'no' || insideAnswer === 'n') {
      alert(answersNo[i]);
    } else {
      alert('That was not a valid answer please try again.');
    }
  } else {
    alert('You did not even answer... Idiot! Counts as wrong, I hope Gary tolerates you!')
  }
}


var numberGameAnswer = Math.floor(Math.random() * 100 + 1);
var userNumberGuess = parseInt(prompt('Let us see if you can guess my favorite number. You will have four tries. What is your guess?    1-100'));

console.log(userNumberGuess);
console.log(numberGameAnswer);
