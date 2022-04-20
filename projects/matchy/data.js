/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'orca';
animal['name'] = 'Toothie';
animal.noises = [];

console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'whistle';
noises.push('chomp');
noises.unshift('screech');
noises[noises.length] = 'splash';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('screech 2');

console.log(animal)

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);

console.log(animals);

var duck = {
   species: 'duck', 
   name: 'Jerome', 
   noises: ['quack', 'honk', 'sneeze', 'woosh'] 
   }

animals.push(duck);

var cow = {
  species: 'cow',
  name: 'Matchy',
  noises: ['moo1', 'moo2', 'moo3']
};

var bear = {
  species: 'bear',
  name: 'Oso',
  noises: ['roar', 'roar2', 'roar3']
};

animals.push(cow, bear);


console.log(animals);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I think array is the best choice for a list of friends bc array is a list
var friends = [];

function getRandom(arr){
//  use Math.random to get a random index in the array (which will be a random animal object)
 
  return Math.floor(Math.random() * arr.length);
  
}

// get a random animal and store it as a variable
var randomAnimal = animals[getRandom(animals)];

// add the random animal's name to friends array
friends.push(randomAnimal.name);

// console.log(friends)
console.log(friends);
/*
use bracket notation to add the friends array as a property to a 
friends key on one of the animals in the animals array
*/

animals[1]['friends'] = friends;


// console.log(animals)


console.log(randomAnimal); 

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}