'use strict';
var username = prompt('Hi, we are going to play a guessing game. Most questions will be a simple yes or no. The first question is easy. What is your name?');


var answer1 = prompt('Yes or No, '+username+ ' ,will Gary tolerate idiots?').toLowerCase();
console.log('this question weeds out the jerks in the world.');
if(answer1 != 0) {
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Well, tolerate is a strong word.');
  } else
  if(answer1 === 'no' || answer1 === 'n') {
    alert('Explain his friends then.');
  } else {
    alert('That was not a valid answer, looks like we found one, but we will move on anyway.');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong, I hope Gary tolerates you!')
}

var answer2 = prompt('Does Gary have any cats?' ).toLowerCase();
console.log('he loves cats, dogs and animals of the world.');
if(answer2 != 0) {
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Oops, wrong Gary used to have a cat. But no more.');
  } else
  if(answer2 === 'no' || answer2 === 'n') {
    alert('Yep you are correct.');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}

var answer3 = prompt('Has Gary been to Peru?').toLowerCase();
console.log('he loves to travel, take him somewhere.');
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

var answer4 = prompt('Did Gary play an instrument in High School?').toLowerCase();
console.log('it was the tuba! it was the tuba!');
if(answer4 != 0) {
  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Yep the tuba, you know him really well.');
  } else
  if(answer4 === 'no' || answer4 === 'n') {
    alert('Ha! He did, he really did.');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}

var answer5 = prompt('Will Gary buy you a beer?').toLowerCase();
console.log('maybe you could buy him a beer instead.');
if(answer5 != 0) {
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('Hmm, you can ask. He does love his beer.');
  } else
  if(answer5 === 'no' || answer5 === 'n') {
    alert('What kind of jerk do you think he is?');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}
