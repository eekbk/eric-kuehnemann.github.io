/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called search that takes in a parameter of an animal array and a string representing a name of an animal

function search(animalArr, nameStr){
    // declare an output object
    var outputObj = {};
// loop thru the animal array
   for (var i = 0; i < animalArr.length; i++) {
       // check if current object has that name value
       if (animalArr[i].name === nameStr) {
            // if so, return that animals object
            outputObj = animalArr[i];
            return outputObj;
       
        // if not return null
       } 
           
       } 
       return null;
    }



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    // loop through animals array
    for (var i = 0; i < animals.length; i++) {
    // check if an animal exists with name parameter
        if (animals[i].name === name) {
        // if so, replace its entire object with the replacement object
        animals[i] = replacement;
        }
        return animals
    }

    
    // if not, do nothing
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    // check if animal with that name exists in the animals array
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(animals[i], 1);
        }
    }
    // if so, remove it
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
fuction add(animals, animal) {
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
