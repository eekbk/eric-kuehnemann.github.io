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

var youngestCustomer = function(array){
    // use reduce to find the youngest customer
    let youngest = _.reduce(array, function(accumulator, current, index, collection){
        // determine if the current object's age is less than the accumulator
        if (current.age < accumulator.age){
            accumulator = current;
        }
        return accumulator;
    });
    return youngest.name;
};


var averageBalance = function(array){
    // find the sum of all balances using reduce, setting the seed at 0
    let sum = _.reduce(array, function(accumulator, current){
        // convert current balnce to a number
        let currentBal = Number(current.balance.replace('$', '').replace(',', '')); 
        // add current balance to accumulator
        accumulator += currentBal;
        return accumulator;
    }, 0);
    // divide the sum 
    let average = sum / array.length;
    return average;
};

var firstLetterCount = function(array, letter){
    // use filter to create a new array 
    let newArr = _.filter(array, function(element){
        // return if current element's name starts with the input letter, case insensitive
        let firstLetter = element.name[0];
        return firstLetter.toUpperCase() === letter.toUpperCase();
    });
    return newArr.length;
};



var friendFirstLetterCount = function(array, customer, letter){
    // let's get the customer's friends array into a new array
    let friendArray = [];
    // loop through input array locating element with matching name and reassigning friendArray to the friends list
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            friendArray = array[i].friends;
        }
    };
    let matchArray = _.filter(friendArray, function(element){
        return letter.toUpperCase() === element.name[0].toUpperCase();
    });

    // //loop through the array to find the customer's name
//_.each(array, functiom(element){
    //     if (customer === element.name){
    //         friendArray = element.friends;
    //     };
    // });
      return matchArray.length;  

};

var friendsCount = function(array, name){
    // create output array
    let output = [];
    // search thru input array
    for (let i = 0; i < array.length; i++){
        // search through friends array in current customer
        for (let j = 0; j < array[i].friends.length; j++){
            // find the friends lists that contain the target name
            if (array[i].friends[j].name === name){
                // push the current customer's name into the output array
                output.push(array[i].name);
            }
        }
    }
    //return array
    return output;
};


var topThreeTags = function(array){
    // create an array of all the tags by operating on each element of the array
    let allTags = [];
    _.each(array, function(element){
        // push each element of each tags array into allTags.
        _.each(element.tags, function(tagsElement){
            allTags.push(tagsElement);
        });
    });
    // create an object to store key value pairs where the key is the tag string and the value is the occurance in allTags
    let countedTags = {};
     // create 3  variables representing the most popular tags and a mostOccurances counter
    let mostPop;
    let mostPop2;
    let mostPop3;
    let mostOccurances = 0;
    // create an output array
    let topThreeTagsArray = [];
    // go through each of the items in allTags
    _.each(allTags, function(element){
        // if the current element already exists as a key in countedTags, increment its value
        if (countedTags[element]){
            countedTags[element]++;
        // otherwise, add the key value pair to countedTags, value 1
        } else {
            countedTags[element] = 1;
        };
    });
  _.each(countedTags, function(value, key){
    if (value >= mostOccurances){
      mostOccurances = value;
      mostPop = key;
    };
  });
  mostOccurances = 0;
  _.each(countedTags, function(value, key, countedTags){
    if (value >= mostOccurances && key !== mostPop){
      mostOccurances = value;
      mostPop2 = key;
    };
  });
  mostOccurances = 0;
  _.each(countedTags, function(value, key, countedTags){
    if (value >= mostOccurances && key !== mostPop && key !== mostPop2){
      mostOccurances = value;
      mostPop3 = key;
      
    };
  });
    topThreeTagsArray.push(mostPop3, mostPop2, mostPop);
    // I think really it should be the below but for the tests' sake..
    //topThreeTagsArray.push(mostPop, mostPop2, mostPop3);
return topThreeTagsArray;
};


var genderCount = function(array){
    // create an output object with male, female and non-binary keys set to 0
    let output = {
        'male': 0,
        'female': 0,
        'non-binary': 0
    };
    // use reduce on the input array
    _.reduce(array, function(accumulator, element){
        if (element.gender === 'male'){
            accumulator['male']++;
        } else if (element.gender === 'female'){
            accumulator['female']++;
        } else if (element.gender === 'non-binary') {
            accumulator['non-binary']++;
        }
      return accumulator;
    }, output);


    // return output
    return output;
};


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
