'use strict';

// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];

// function findOne(arr, query) {
// for (let i = 0; i < arr.length; i++) {
//   for (let key in query) {
//     if (arr[i][key] === query[key]) {
//       return arr[i];
//     } else {
//       return null;
//     }
//   }
// }
// }

// console.log(findOne(HEROES, { id: 1 }));

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne(query) {
    for (let i = 0; i < object.this.length; i++) {
      for (let key in query) {
        if (object.this[key] === query[key]) {
          return object.this[i];
        } else {
          return null;
        }
      }
    }
  }
};

console.log(Database.findOne({ id: 2 }));