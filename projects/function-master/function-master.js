//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // create output array
    let newArr = [];
    // loop through the keys in the object
    for (let key in object) {
        // for every key push the value to the output array
        newArr.push(object[key]);

    } 
      // return output array
      return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // create output string
    let newStr = '';
    // loop thru keys in the object
    for (let key in object) {
        // check if current key is a string
        if (typeof key === 'string') {

        // if so add the key to the output string, separated by a space
        newStr += key + ' ';
        }
    }
    // return the string without the final space
    return newStr.slice(0, -1);
   
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create output string
    let newStr = '';
    // loop thru the keys in object
    for (let key in object) {
        // check if current value is a string
        if ( typeof object[key] === 'string') {
            // if so, add value to output string, separated by a space
            newStr += object[key] + ' ';
        }
        // return output string without final space
        
    }
    
    return newStr.slice(0, -1);

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if (typeof collection === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // create a newStr variable of an empty string
    let newStr = '';
    // add the first letter of the string, capitalized, to the output string
    newStr += string[0].toUpperCase();
    //make a for loop for the rest of the letters, adding each to the output string
    for (let i = 1; i < string.length; i++) {
        newStr += string[i];
    }
    // return the output string
    return newStr;
    // 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // create a new empty output string
    let newStr = '';
    // split the input string into an array
    newArr = string.split('');
    // capitalize the first letter and add it to newStr
    newStr += string[0].toUpperCase();
    // iterate thru array
    for (let i = 1; i < newArr.length; i++) {
        // if index before current is a space, capitalize current index and add it to new string
        if (newArr[i - 1] === ' ') {
            newStr += newArr[i].toUpperCase();
        // otherwise add current index to new string
        } else {
            newStr += newArr[i];
        }
    }
    // return newStr 
    return newStr
    /*
    // capitalize the first letter and add it to the newStr
    newStr += string[0].toUpperCase();
    // iterate though each of the characters in the string
    for (let i = 1; i < string.length; i++) {
        // if the character before the current is an empty space, capitalize it and add it to the new string
        if (string[i - 1] === ' ') {
            newStr += string[i].toUpperCase();
        // otherwise, add it to the new string
        } else {
            newStr += string[i];
        }
      // return the new string
    return newStr;

    }
*/
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // create an empty string 
    let newStr = '';    
    // add welcome and a space and the name property, capitalized and exclamation point to strin
    newStr = 'Welcome ' + capitalizeWord(object.name) + '!';
    return newStr;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // create an empty string to return
    let newStr = '';
    // add capitalized name plus " is a " plus capitalized species to string
    newStr = capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
    // return string
    return newStr;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // create output string
    let newStr = '';
    // check if noises property doesn't have a length or if it is undefined
    if (object.noises === undefined || object.noises.length === 0) {
        // if true, make output string 'there are no noises'
        newStr = 'there are no noises';
    // otherwise join array into a string and put in output string
    } else {
        newStr =  object.noises.join(' ');
    }
    // return string
    return newStr;



}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // make string a new lowercase string
    let newStr = string.toLowerCase();
    // make word a new lowercase string
    let newWord = word.toLowerCase();
    // create an array equal to the new string, split at the spaces
    let newArr = newStr.split(' ');
    // iterate thru array
    for (let i = 0; i < newArr.length; i++) {
        if (newWord === newArr[i]) {
            // if word matches a word in the array, return true
            return true;
        }
    } 
    // if iteration is done without a match, return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // create a new array equal to the friends array
    object.friends.push(name);
    // push name into object friend property array
    // return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // iterate thru object friends array
    // if friends is undefined return false
    if (object.friends === undefined) {
        return false;
    }
    for (i = 0; i < object.friends.length; i++) {
        // if name matches a friend return true
        if (name === object.friends[i]) {
            return true;
        }
    }
    // return false if no match found after iteration
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create an output array of name values
    let newArr = [];
    // loop through array objects, adding any name value that is not input name to newArr
    for (let i = 0; i < array.length; i++){
        if (array[i].name !== name) {
            newArr.push(array[i].name);
        }
    }
    
   //locate the input name object 
    for (let k = 0; k < array.length; k++) {
        if (array[k].name === name) {
            // if current name has no friends, return newArr as is
            if (array[k].friends === undefined) {
                return newArr;
            // otherwise
            } else {
                // loop thru input name's friends
                for (let i = 0; i < array[k].friends.length; i++) {
                    // at each iteration, loop through newArr, checking if anyvalues match
                    for (let j = 0; j < newArr.length; j++) {
                        if (array[k].friends[i] === newArr[j]) {        
                            // if so, remove that value from newArr
                            newArr.splice(j, 1);
                        }
                    }
                }
            }
        }
    }
    

    // return newArr
    return newArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}