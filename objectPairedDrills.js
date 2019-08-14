'use strict';

/*function createMyObject(){
  let myObj = {foo: 'bar',answerToUniverse: '42', ['olly olly']: 'oxen free',}
  myObj.hello = function(){
    return 'hello' 
  }
  return myObj;
}

function updateObject(obj){
  obj.foo = 'foo';
  obj.bar ='bar';
  obj.bizz ='bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker(){
  var person ={
    firstName: 'Nick',
    lastName: 'Kerner',
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    },
  };
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
  
function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}*/

/*function makeStudentsReport(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(`${data[i].name}: ${data[i].grade}`);
  }
  return result;
}

const example = [{name: 'Johnny Robot', grade: 'C'}];
console.log(makeStudentsReport(example));*/

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];
  
function enrollInSummerSchool(students) {
  for (let i = 0; i < students.length; i++) {
    students[i].status = 'In summer school';
  }
  return students;
}

let input = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

console.log(enrollInSummerSchool(input));


function findById(items,idNum){
  for(let i = 0;i < items.length; i++){
    if(items[i].id === idNum){
      return items[i]
    }
  }
}

function validateKeys(object,expectedKeys){
  let keys = Object.keys(object);
for(let i = 0; i < keys.length; i ++){
  if(keys[i] === expectedKeys[i] && keys.length === expectedKeys.length){
    return true;
  }
else{return false}
}
}