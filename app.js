'use strict';

var answers = [];
var totalGuessCounter = 0;
var correctAnswer = 0;
var questions = [
  'Hi, we are going to play a guessing game. Most questions will be a simple yes or no. The first question is easy. What is your name?',
  'Yes or No, will Gary tolerate idiots?'
  'Does Gary have any cats?',
  'Has Gary been to Peru?',
  'Did Gary play an instrument in High School?',
  'Will Gary buy you a beer?'
 ];

var answersYes = [
  'That is a fine name.',
  'Well, tolerate is a strong word.',
  'Oops, wrong Gary used to have a cat. But no more.',
  'he loves to travel, take him somewhere.',
  'Yep the tuba, you know him really well.',
  'Hmm, you can ask. He does love his beer.'

];
var answersNo = [];

var username = prompt();


var answer1 = prompt().toLowerCase();
console.log('this question weeds out the jerks in the world.');
if(answer1 != 0) {
  if (answer1 === 'yes' || answer1 === 'y') {
    alert();
  } else
  if(answer1 === 'no' || answer1 === 'n') {
    alert('Explain his friends then.');
  } else {
    alert('That was not a valid answer but we will move on anyway.');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong, I hope Gary tolerates you!')
}

var answer2 = prompt( ).toLowerCase();
console.log('he loves cats, dogs and animals of the world.');
if(answer2 != 0) {
  if (answer2 === 'yes' || answer2 === 'y') {
    alert();
  } else
  if(answer2 === 'no' || answer2 === 'n') {
    alert('Yep you are correct.');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}

var answer3 = prompt().toLowerCase();
console.log();
if(answer3 != 0) {
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('You are right and he had a great time.');
  } else
  if(answer3 === 'no' || answer3 === 'n') {
    alert('You are wrong, though you would not know it by his Spanish.');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}

var answer4 = prompt().toLowerCase();
console.log('it was the tuba! it was the tuba!');
if(answer4 != 0) {
  if (answer4 === 'yes' || answer4 === 'y') {
    alert();
  } else
  if(answer4 === 'no' || answer4 === 'n') {
    alert('Ha! He did, he really did.');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}

var answer5 = prompt().toLowerCase();
console.log('maybe you could buy him a beer instead.');
if(answer5 != 0) {
  if (answer5 === 'yes' || answer5 === 'y') {
    alert();
  } else
  if(answer5 === 'no' || answer5 === 'n') {
    alert('What kind of jerk do you think he is?');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}
