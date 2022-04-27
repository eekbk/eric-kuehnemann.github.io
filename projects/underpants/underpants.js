// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // check if value is an array, and if so return 'array'
    if (Array.isArray(value)) {
        return 'array';
    // check if value is null, if so return 'null';
    } else if (value === null) {
        return 'null';
    // otherwise, return typeof method on value
    } else {
        return typeof value;
    }

};
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    let result = [];
    // check if array is an array, and if not, return []
    if (!Array.isArray(array) || number < 0) {
        return [];
    // check if number is not given or not a number and return the first element in array if the case
    } else if (!number || typeof number !== 'number'){
        return array[0];
    // check if number is bigger than input array, if so return whole array
    } else if (number > array.length) {
        return array;
    // otherwise, return the first <number> of items in the array
    } else {
        // create a for loop for the array
        for (let i = 0; i < number; i++) {
            result.push(array[i]);
        }
    }
// return result
return result;

}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    // create an output result
      let result = [];
    // check if array is an array, and if not, return []
    if (!Array.isArray(array) || number < 0) {
        return [];
    // check if number is not given or not a number and return the last element in array if the case
    } else if (!number || typeof number !== 'number'){
        return array[array.length - 1];
    // check if number is bigger than input array, if so return whole array
    } else if (number > array.length) {
        return array;
    // otherwise, return the first <number> of items in the array
    } else {
        // iterate thru the array starting at
        for (let i = array.length - number; i < array.length; i++) {
            result.push(array[i]);
        }
    }
// return result
return result;

}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // iterate through array and return the index of the first occurance of value
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
  // if value is not in array, return -1
  return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            // if array contains value return true
            return true;
        }
    }
    // return false otherwise
    return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        // if so, iterate thru the array
        for (let i = 0; i < collection.length; i++){
        // call function for each iteration with the argument (element, index, collection)
         action(collection[i], i, collection);
        }
    // otherwise, if it is an object, call the func once for each property with the args (prop value, key, collection)
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(arr){
   // create an output array
   let output = [];
   // loop throughthe input array, checking if the  pushing _.index on each element
   for (let i = 0; i < arr.length; i++) {
       // find the first Occurance of each element
       let firstOccurance = _.indexOf(arr, arr[i]);
       // if the output array doesnt already contain the first unique instance, push it
       if (!_.contains(output, arr[firstOccurance])){
           output.push(arr[firstOccurance]);
       }   
   }
   return output;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    // create new output array
    let newArr = [];
    // go through each element in the array

    for (let i = 0; i < array.length; i++) {
        // check if function returns true on the element
        if (func(array[i], i, array)) {
            // if so, push it into newArr
            newArr.push(array[i]);
        }
    }
    // return new array
    return newArr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    // create output array
    let newArr = [];
    // iterate through input array
    for (let i = 0; i < array.length; i++) {
    // check if function returns false on element
        if (!func(array[i], i, array)) {
            // if so, push into new array
            newArr.push(array[i]);
        }
    }

    // return output array
    return newArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    // create an output array
    let output = [];
    // create a truthy array
    let truthyArr = [];
    // create a falsey array
    let falseyArr = [];
    // iterate thru the input array 
    for (let i = 0; i < array.length; i++) {
        // if function call returns something truthy, push to truthy array
        if (func(array[i], i, array)) {
            truthyArr.push(array[i]);
        // if function call returns something falsey, push to falsey array   
        } else if (!func(array[i], i, array)) {
            falseyArr.push(array[i]);
        }
    }
    // push truthy array and falsey array to output array
    output.push(truthyArr, falseyArr);
    // return output array
    return output;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection> // pass in
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    // create output variable
    let mapped = [];
    // check if collection is an array
    if (Array.isArray(collection)){
        //iterate using for loop
        for (let i = 0; i < collection.length; i++) {
            let result = func(collection[i], i, collection);
            mapped.push(result);
        }
     // else it's an object
    } else {
        for (let key in collection) {
            let result = func(collection[key], key, collection);
            mapped.push(result);
        }

    }
    // return mapped
    return mapped;

}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    // invoke map function on input array
    let result = _.map(array, function(element){
        // what should this function return
        return element[prop];
    });

    return result;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    // determine if collection is an array
    if (Array.isArray(collection)) {
        // loop thru array, checking if the result of calling function on current item is false
        for (let i = 0; i < collection.length; i++) {
            if (func && !func(collection[i], i, collection)){
                // if so, return false
                return false;
            // if no function is passed in, check if any value is falsey
            } else {
                if (!collection[i]) {
                    //return false
                    return false;
                }
            }
        }
    // else its an object
    } else {
    // loop thru object, checking if func exists and if the result of calling function on current item is false
        for (let key in collection) {
            if(func && !func(collection[key], key, collection)) {
               // if so, return falsse
               return false;
            // otherwise check if any value is falsey and return false if so
            } else {
                if (!collection[key]) {
                    return false;
                }
            }
        }
    }
    // else return true
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        // if so, iterate thru array, 
        for (let i = 0; i  < collection.length; i++) {
            // if function isnt provided or doesnt return boolean
            if (!func || typeof func(collection[i], i, collection) !== 'boolean') {
                // check if at least one element is truthy
                if (collection[i]) {
                    return true;
                }
            // else if boolean func exists, call function at every iteration 
            } else {
                // if return value is true for any element return true
                if (func(collection[i], i, collection)){
                    return true;
                }
            }
        }
    // else if collection is not an array
    } else {
        // iterate thru object,
        for (let key in collection){
            // if function isnt provided or doesnt return boolean
            if (!func || typeof func(collection[key], key, collection) !== 'boolean'){
                // check if at least one element is truthy
                if (collection[key]) {
                    return true;
                 }
            // else if boolean func exists, call function at every iteration
            } else {
                // if return value is true for any element return true
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        } 
    }
    // if false for all elements, return false
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    // ****ALEX'S WORKTHROUGH****
    if (seed === undefined) {
        seed = array[0];
        // iterate through input array
        for (let i = 1; i < array.length; i++) {
            // reassign seed to the result of passing seed, the current value of the array, the current index and the collection
            seed = func(seed, array[i], i, array);
        }
    } else {
        // iterate through input array
        for (let i = 0; i < array.length; i++){
            seed = func(seed, array[i], i, array);
        }
    }
    return seed;


    /*
    // ????could I simplify by making the prevResult the if clause
    // make a variable called prevResult
    let prevResult;
    // check if seed is defined. if not, iterate thru array starting at 1 index, using 0 index as seed
    
    if (seed === undefined) {
        for (let i = 1; i < array.length; i++){
            // if it is the first iteration, use 0 index as seed
            if (i === 1) {
                // reassign prevResult as current function call
                prevResult = func(array[0], array[i], i);
            //if it is the final iteration, return the final function call
            } else if (i === array.length - 1) {
                return func(prevResult, array[i], i);
            // otherwise reassign prevresult to current function call
            } else {
                prevResult = func(prevResult, array[i], i);
            }
        }
    } else {
        
        // loop thru array
        for (let i = 0; i < array.length; i++) {
            // if it is the first iteration, use seed as previous result and reassign prevreult to function call
            if (i === 0) {
                prevResult = func(seed, array[i], i);
            // if it is the final iteration, return the final function call
            } else if (i === array.length - 1) {
                return func(prevResult, array[i], i);
            // otherwise iterate through the loop, reassigning prevresult as current func call
            } else {
                prevResult = func(prevResult, array[i], i);
            }
        }
    }
*/
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// can i do this with Object.assign? LOOK IT UP E
_.extend = function(object1, object2, ...objects) {

    // ???  Object.assign(object1, object2, ...objects); using "arguments" as args?
    // ??? maybe I could use the spread operator

    // iterate thru arguments, starting at index 1
    for (let i = 1; i < arguments.length; i++) {
        // iterate thru current object
        for (let key in arguments[i]) {
            // copy current properties to object 1
            object1[key] = arguments[i][key];
        }
    }
    // return object1
    return object1;
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
