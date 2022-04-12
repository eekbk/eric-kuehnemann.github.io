// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // loop beginning at 1, ending at 100
    for (var i = 1; i < 101; i++) {
    // check if current number is multiple of 3 AND 5
        if(i % 3 === 0 && i % 5 ===0) {
            // if so, print 'FizzBuzz'
            console.log('FizzBuzz');
        // check if current number is multiple of 3
        } else if(i % 3 === 0) {
            // if so, print 'Fizz'
            console.log('Fizz');
        // check if current number is multiple of 5
        } else if(i % 5 === 0) {
            // if so, print 'Buzz'
            console.log('Buzz');
        // otherwise print the number
        } else {
            console.log(i);
        }







    }




    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}