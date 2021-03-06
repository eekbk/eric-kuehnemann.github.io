////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  // if step has not been passed in
  let output = []
  if (start === end){
    return output;
  } else if (!step && start <= end){
    for (i = start; i <= end; i++){
      output.push(i);
    }
  } else if (!step && start >= end){
    for (i = start; i >= end; i--){
      output.push(i);
    }
  } else if (step <= 0){
    return output;
  } else if (step && start <= end){
    for (i = start; i <= end; i += step){
      output.push(i);
    }
  } else if (step && start >= end) {
    for (i = start; i >= end; i -= step)
      output.push(i);
  }
  return output;
  // else step has been passed in
}

console.log(range(1, 4,)); // => [1, 2, 3, 4]
console.log(range(4, 1)); // => [4, 3, 2, 1]
console.log(range(1, 4, 2)); // => [1, 3]
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, output = 0) {
  // base
  if (array.length === 0){
    return output; 
  }
  // recursion
  output += array[0];
  return sum(array.slice(1), output);

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) { // non-descructive (returns brand new array)
  // initialize an empty array as the output
  let output = [];
  // iterate backwards over the array, pushing each value into the input array
  for (let i = array.length - 1; i >= 0; i--){
    output.push(array[i]);
  }
  // return the output
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { // DESTRUCTIVE (returns orig array, changed)
  // loop over half of the array
  let current;
  let half = Math.floor(array.length / 2);
  for (i = 0; i < half; i++){
    current = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = current;
  }
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array){
  // create rest value
  let rest = null;
  // iterate backwards
  for (let i = array.length - 1; i >= 0; i--){
    // reassign the v object with a key of "value" set to the current item in the array and a key of rest set to the current value of rest
    rest = { value: array[i], rest: rest };
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr = []){
  // base
  if (list.rest === null){
    arr.push(list.value);
    return arr;
  }
  // recursion
    // accessing the current value property and adding it to arr
  arr.push(list.value); // 10
  // using list.rest will alter the input so that you are invoking just the next innermost object
  return listToArray(list.rest, arr);
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return { value, rest: list };
}



////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  //USE RECURSION
  // base
  if (number < 0){
    return undefined;
  } else if (number === 0){
    return list.value;
  }

  // recursion
  return nth(list.rest, number - 1);

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y){
  // determine if both values are not objects
  if (typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }

  // determine if either of the values is not an object
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }

  // create arrays of each inputs keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);

  // determine if the length of the arrays are equal
  if (xKeys.length !== yKeys.length){
    return false;
  }

  for (let i = 0; i < xKeys.length; i++){
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])){
      return false;
    }
      
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
