// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // create a for loop to iterate over the array
  for (var i = 0; i < array.length; i++) {
     // print to the console before moving on
     console.log(array[i]);
  }
 
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // iterate backwards over the array
  for (var i = array.length - 1; i >= 0; i--) {
  // print values to console
    console.log(array[i]);
  }
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // declare an output variable and set it to an empty array
  var newArray = [];
  // iterate through the object
  for (var key in object) {
 // push the current object key to the new array
  newArray.push(key);
  }
 
  // return the new array
  return newArray;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // loop over object
  for (var key in object) {
  // print current key
    console.log(key);
  }

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // declare an output variable and set it to an empty array
  var newArray = [];
  // iterate through the object
  for (var key in object) {
  // push current key's value to output variable
    newArray.push(object[key]);
  }

  // return array
  return newArray;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // iterate over the object
  for (var key in object) {
  // print current key's value to the console
    console.log(object[key]);
  }

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // declare a count variable and set it to 0
  var count = 0;
  // iterate over the object
  for (var key in object) {
  // add 1 to the count
    count += 1;
  }
 
  // return the count
  return count;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // declare a new variable equal to an empty array
  var newArray = [];
  // loop over the object
  for (var key in object) {
 // push current value to the array
  newArray.push(object[key]);

  }
  // iterate over array in reverse
  for (var i = newArray.length - 1; i >= 0; i--) {
      // print current value to the console
      console.log(newArray[i]);
  }

  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
