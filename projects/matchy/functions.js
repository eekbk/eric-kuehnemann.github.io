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

//const { animal } = require("./data");

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
        return animals;
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
            // if so, remove it
            animals.splice(i, 1);
        }
    }

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animalArr, animalObj) {
    // create a variable called isUnique
    var isUnique;
    // check if animalObj it has a unique name by looping through animal array
    for (var i = 0; i < animalArr.length; i++){
        if (animalArr[i].name === animalObj.name){
            // if name is found, change isUnique to 'false'
            isUnique = false;
            }
        }
    // check if animal object has a name property with a length > 0 AND  has a species property woth length > 0
    if (animalObj.name.length > 0 && animalObj.species.length > 0 && isUnique !== false) {
        // if all conditions pass, add this animal to the array
       animalArr.push(animalObj);
       return animalArr;
        
    }
    
   
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
