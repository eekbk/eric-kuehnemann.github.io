
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  // create an empty string
  let str = ''
  // create a for loop to iterate 7 times
  for (let i = 1; i <= num; i++){
    str += '#';
    console.log(str);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
  // iterate through the numbers between num1, num2
  for (let i = num1; i <= num2; i++) {
    // if a num is divisible by 3 and 5, log 'fizzbuzz'
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    // else if a num is divisible by 3, log fizz
    } else if (i % 3 === 0) {
      console.log('fizz');
    // else if a num is divisible by 5, log 'buzz'
    } else if (i % 5 === 0) {
      console.log('buzz');
    // else log the num
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  // create an empty return string
  let str = '';
  // create a loop for the rows
  for (let i = 0; i < num; i++) {
    // create a nested loop for the comlumns
    for (let j = 0; j < num; j++) {
      // if we are at an even space on the board, add a space to the string
      if ((i + j) % 2 === 0) {
        str += ' ';
      // if we are at an odd space on the board, add a pound symbol
      } else {
        str += '#';
      }
    }
    // add a linebreak after the number of columns reaches num
    str += '\n';
    // print the string
  } console.log(str);

  //
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
