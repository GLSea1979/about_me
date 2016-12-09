'use strict';

var juan = {
  course: '201d17',
  firstName: 'Juan',
  lastInitial: 'V',
  faveNumber: 17,
  isCodeNinja: true,
  introduction: function () {
    console.log('My name is ' + firstName + ' and my favorite number is ' + this.faveNumber);
  }
};


// constuctor    refactor  add this to all keywords

function Student(firstName, lastInitial, faveNumber) {
  this.course = '201d17';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.introduction = function () {
    console.log('My name is ' + firstName + ' and my favorite number is ' + this.faveNumber);
  }
  mahClass.push(this)
}
var mahClass = [];
// build the objects
new Student('Juan', 'V', 17);
new Student('Gary', 'L', 8);




function catTableJS() {
  var catTable = document.getElementById('catjs')
  console.log('catTable is ' + catTable);

  var trEl= document.createElement('tr');
  var thEl= document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  var thEl= document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  var thEl= document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  for (var i = 0; i < )

  catTable.appendChild(trEl);
}

catTableJS();
 // grab the traits of cats
  allCats[0].name;
  allCats[0].tail;
