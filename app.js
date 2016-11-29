'use strict';

// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answer1s, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.


var answer1 = prompt('Do Gary have any cats?').toLowerCase();
if( != 0) {
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Oops, wrong Gary used to have a cat. But no more.');
  } else
  if(answer1 === 'no' || answer1 === 'n') {
    alert('Yep you are correct.');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}
