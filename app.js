'use strict';

// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.


var answer = prompt('Do Gary have any cats?').toLowerCase();
if(answer != 0) {
  if (answer === 'yes' || answer === 'y') {
    alert('Oops, wrong Gary used to have a cat. But no more.');
  } else
  if(answer === 'no' || answer === 'n') {
    alert('Yep you are correct.');
  } else {
    alert('That was not a valid answer but we will move on');
  }
} else {
  alert('You did not even answer... Idiot! Counts as wrong.')
}
