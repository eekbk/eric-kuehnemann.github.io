////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if (num1 <= num2) {
    return num1;
  } else if (num1 > num2) {
    return num2;

  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  // determine if the remainder of dividing it by two is 0
 /*
     if (num % 2 === 0) {
    // if yes, return true
    return true;
    // if 1 is the remainder, return false
  } else {
    return false;
  }
  // otherwise, hol up i think I'm doing this without recursion
*/
  // starting again, using their 0 == even deal
  // if the number is equal to 0, its even
  if (num == 0) {
    return true;
  // if the number is equal to 1, it's odd
  } else if (num == 1) {
    return false;
  // if the number is a negative, let's pass its positive as an argument and start over
  } else if (num < 0) {
    return isEven(-num);
  // if none of these are true, let's just try the next number 2 down
  } else {
    return isEven(num -2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  // create an output counter set to 0
  let counter = 0;
  // iterate through the string
  for (let i = 0; i < string.length; i++) {
    // if the current character is equal to the input char
    if (string[i] === char) {
      // increment the counter
      counter++;
    }
  }
  // return counter
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  // create an outputcounter
  let counter = 0;
  // iterate thru the string
  for (let i = 0; i < string.length; i++) {
    // if current character is equal to B, increment the counter
    if (string[i] === 'B') {
      counter++;
    }
  }
  // return counter
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
