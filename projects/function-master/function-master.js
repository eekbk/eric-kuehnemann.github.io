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

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

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