const os = require('os');
const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = ['Paul', 'Peter', 'Thomas', 'Jonny', 'Lars'];
const femaleNames = ['Katy', 'Cloe', 'Alex', 'Barbara', 'Margaret'];
const lastNames = ['Kot', 'Pies', 'Ptak', 'Ryba', 'Lew'];

randChoice = (arr) => {
  getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
  return arr[getRndInteger(0, arr.length )];
}

const people = [];

for (let i = 1; i <= 20; i++ ) {
const gender = randChoice(genders);
let name = '';
const lastName = randChoice(lastNames);

if (gender === 'Male') {
    name = randChoice(maleNames);
  }
  else {name = randChoice(femaleNames);
  }
  const minAge = 18;
  const maxAge = 78;
  const age = Math.floor(Math.random()* (maxAge - minAge) + minAge);
  
 
  people.push({geder: gender, name: name, lastName: lastName, age: age});
};
console.log('people:', people);

fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
