// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { join } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./eric-kuehnemann.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//MOST COMMON:
// filter
// map
// reduce
// each

var maleCount = function(array) { 
    let males = _.filter(array, function(element){
        return element.gender === 'male';
    });
    return males.length;
};
// all of these variables will be functions!!
var femaleCount = function(array) {
    // invoke reduce function to accumulate number of female customers
    let numFemales = _.reduce(array, function(accumulator, current, index, collection){
        // determine if current object's gender is female
        if (current.gender === 'female') {
            // if true, add 1 to accumulator
            accumulator += 1; 
        }
        // return accumulator
        return accumulator;
    }, 0);
    return numFemales;
};

var oldestCustomer = function(array){
    //invoke reduce function on input array
    let oldest = _.reduce(array, function(accumulator, current, index, collection){
        // determine if the current object's age property
        if (current.age > accumulator.age){
            accumulator = current;
        }
        return accumulator;
    });
    return oldest.name;
};// could use reduce

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
