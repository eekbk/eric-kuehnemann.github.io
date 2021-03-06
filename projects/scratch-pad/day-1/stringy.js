// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //return the length of the string
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
//initialize a variable named lowerCase
var lowerCase;

//reassign lowercase to value of string.toLowerCase()
lowerCase = string.toLowerCase();

//return lowerCase;
return lowerCase;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //declare a variable called upperCase and set it to the string forced to Uppercase
    var upperCase = string.toUpperCase();

    //return upperCase;
    return upperCase;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // initialize a function named newStr, set to the value of string forced to lowercase
    var newStr;
    newStr = string.toLowerCase();
    // split the string into an array and reassign to newStr
    newStr = newStr.split(' ');
    // join the array back into a string with the items separated by dashes, reassign to newStr
    newStr = newStr.join('-');
    // return newStr
    return newStr


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // initialize a variable called lowerCaseStr and set it equal to the string forced to lowercase
    var lowerCaseStr = string.toLowerCase();
    // initialize a variable called lowerCaseChar and set it equal to the char forced to lowercase
    var lowerCaseChar = char.toLowerCase();
    // initialize a variable called firstChar and set it equal to the first character in lowerCaseStr
    var firstChar = lowerCaseStr.charAt(0);
    // write an if else statement that compares firstChar and lowerCaseChar
    if (firstChar === lowerCaseChar) {
        // if they are exactly equal return true
        return true;

          // otherwise return false
    
    } else {
        return false;
    }
    
  

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
 // initialize a variable called lowerCaseStr and set it equal to the string forced to lowercase
    var lowerCaseStr = string.toLowerCase();
    // initialize a variable called lowerCaseChar and set it equal to the char forced to lowercase
    var lowerCaseChar = char.toLowerCase();
    // initialize a variable called lastChar and set it equal to the last character in lowerCaseStr
    var lastChar = lowerCaseStr.charAt(lowerCaseStr.length - 1);
    // write an if else statement that compares firstChar and lowerCaseChar
    if (lastChar === lowerCaseChar) {
        // if they are exactly equal return true
        return true;

          // otherwise return false
    
    } else {
        return false;
    }
    
  



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // add the strings together using the + operator set it to a variable called newStr
    var newStr = stringOne + stringTwo;

    //return newStr
    return newStr;




    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // initiate a variable called joinedStr and set it equal to an empty string
    var joinedStr = '';

    // iterate through args
    for (var i = 0; i < args.length; i++) {
    // add each item from args to joinedStr
    joinedStr += args[i];
    }
    //return joinedStr
    return joinedStr;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // write an if statement for if stringOne is longer than stringTwo
    if (stringOne.length > stringTwo.length) {
    // if so, return stringOne
        return stringOne;
  
    // if stringTwo is longer, return stringTwo
     } else if (stringTwo.length > stringOne.length) {  
         return stringTwo;
     }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // write an if statement checking if stringOne comes before stringTwo alphabetically. if so, return 1
    if (stringOne < stringTwo) {
        return 1;
    // if stringTwo comes before stringOne alphabetically, return -1
    } else if (stringTwo < stringOne) {
        return -1;
    
    // otherwise return 0
    } else {
        return 0
    }
    
    


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // write an if statement checking if stringOne comes after stringTwo alphabetically. if so, return 1
    if (stringOne > stringTwo) {
        return 1;
    // if stringTwo comes after stringOne alphabetically, return -1
    } else if (stringTwo > stringOne) {
        return -1;
    
    // otherwise return 0
    } else {
        return 0
    }
    
    



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
