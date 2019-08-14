'use strict';

// function createMyObject(){
//   let myObj = {foo: 'bar',answerToUniverse: '42', ['olly olly']: 'oxen free',}
//   myObj.hello = function(){
//     return 'hello' 
//   }
//   return myObj;
// }
// ////////////////
// function updateObject(obj){
//   obj.foo = 'foo';
//   obj.bar ='bar';
//   obj.bizz ='bizz';
//   obj.bang = 'bang';
//   return obj;
// }
// ////////////////
// function personMaker(){
//   var person ={
//     firstName: 'Nick',
//     lastName: 'Kerner',
//     fullName: function(){
//       return this.firstName + ' ' + this.lastName;
//     },
//   };
// }
// ////////////////
// const sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }
// ////////////////
// function makeStudentsReport(data) {
//   let result = [];
//   for (let i = 0; i < data.length; i++) {
//     result.push(`${data[i].name}: ${data[i].grade}`);
//   }
//   return result;
// }

// const example = [{name: 'Johnny Robot', grade: 'C'}];
// console.log(makeStudentsReport(example));*/
// ////////////////
// const studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology',
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science',
//   },
// ];
  
// function enrollInSummerSchool(students) {
//   for (let i = 0; i < students.length; i++) {
//     students[i].status = 'In summer school';
//   }
//   return students;
// }

// let input = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology'
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics'
//   }
// ];

// console.log(enrollInSummerSchool(input));
// ////////////////

// function findById(items,idNum){
//   for(let i = 0;i < items.length; i++){
//     if(items[i].id === idNum){
//       return items[i]
//     }
//   }
// }
// ////////////////
// function validateKeys(object,expectedKeys){
//   let keys = Object.keys(object);
//   for(let i = 0; i < keys.length; i++) {
//     if(keys[i] === expectedKeys[i] && keys.length === expectedKeys.length){
//       return true;
//       } else {
//         return false;
//     }
//   }
// }
// ////////////////
// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration() {
//     return (this.water / this.flour) * 100;
//   },
// }

// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());
// ////////////////
// const object = {
//   foo: 'hello',
//   bar: 42,
//   fum: true,
//   quux: 'string',
//   spam: 5
// }

// for (let key in object) {
//   console.log(`${key}'s value is ${object[key]}`);
// }
// ////////////////


// const hobbit = {
//   meals: ['breakfast','second breakfast','elevenses','lunch','afternoon tea','dinner','supper']
// };
// console.log(hobbit.meals[3]);
// ////////////////

// let person1 = {
//   name: 'Will',
//   jobTitle: 'Programmer',
//   boss: 'juan'
// };
// let person2 = {
//   name: 'Nick',
//   jobTitle: 'Developer',
//   boss: 'Jen'
// };
// let person3 = {
//   name: 'Steve',
//   jobTitle: 'Swimmer'
// };

// let personArray = [person1, person2, person3];

// function arrayOfObjects(array) {
//   for (let i = 0; i < array.length; i++) {
//     if('boss' in array[i]){
//         console.log(`${array[i].jobTitle} ${array[i].name} reports to ${array[i].boss}`);
//     }
//     else{console.log(`${array[i].jobTitle} ${array[i].name} doesn't report to anybody.`);

//   }
  
// }
// }
// arrayOfObjects(personArray);
// ////////////////

// const cipher = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5
// };

// let input = 'craft block argon meter bells brown croon droop';

// function decode(string, object) {
//   let result = [];
//   let array = string.split(' ');
//   for (let i = 0; i < array.length; i++) {
//     for (let key in object) {
//       if (array[i][0] === key) {
//         result.push(array[i][object[key] - 1]);
//       }
//     }
//   }
//   return result;
// }

// console.log(decode(input, cipher));
// ////////////////

function createCharacter(){
  const lotrChar = ['Gandalf the White', 'Bilbo Baggins', 'Frodo Baggins', 'Aragorn son of Arathorn', 'Legolas'];
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight(character){
      if(y - x <= 0){
        return 'Your opponent takes 0 damage'
      }

        
    }

  }
}

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
const characters = [gandalf, bilbo, frodo, aragorn, legolas];

characters.push(createCharacter('Arwen Undomiel is a Half-Elf of Rivendell', 'arwen', 'Elf', 'Rivendell', 10, 10));

let aragornDescribe = characters.find(nickname => {
  if (nickname === 'aragorn') {
    console.log(describe());
  }
});

let onlyHobbits = characters.filter(race => race === 'Hobbit');

let attackAboveFive = characters.filter(attack => attack > 5);