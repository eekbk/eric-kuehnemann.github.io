// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { // FACTORY FUNCTION
    // create an an empty output object to add key/values to
    var obj = {};
    // add id value
    obj.id = id;
    // add nameFirst value
    obj.nameFirst = nameFirst;
    // add nameLast value
    obj.nameLast = nameLast;
    // return output object
    return obj;

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //we've already set it to empty array. imagine
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // push fullname to lowercase and save to lowerCaseName
            var lowerCaseName = fullName.toLowerCase();
            // separate full name at spaces and add to nameArray variable
            var nameArray = lowerCaseName.split(' ');
                // iterate through contacts list
                for (var i = 0; i < contacts.length; i++) {
                    // iterate through values in current object
                    for (var key in contacts[i]) {
                        // push current value to lowercase and save as a variable
                        var valLowerCase = contacts[i][key].toLowerCase();
                        // check if the current value is equal to the first name
                        if(nameArray[0] === valLowerCase) {
                            // if so, let's do another loop iterating through contacts
                            for (var j = 0; j < contacts.length; j++) {
                                // iterate through values in the current object
                                for (var key in contacts[j]) {
                                    // push current value to lowercase and save as a new variable
                                    var val2LowerCase = contacts[j][key].toLowerCase();
                                    //check if the current value is equal to the last name
                                    if(nameArray[1] === val2LowerCase) {
                                        // if so return current object
                                        return contacts[j];
                                    }
                                }
                            }

                        }


                        }
                    } return undefined;
                    

                },
                removeContact: function(contact) {
                    // iterate through contacts array
                    for (var i = 0; i < contacts.length; i++) {
                        // check if current element is equal to input
                        if(contacts[i] === contact) {
                            // if so, remove current element
                            contacts.splice(i, 1);
                        }
                    
                    }
                    // return new contacts
                    return contacts;
                },
                printAllContactNames: function() {
                     // create a variable of a string to print, set to empty
                    var strPrint = '';
                    // iterate through contacts array
                    for (var i = 0; i < contacts.length; i++){
                        // make sure current element is not the final element
                        // if so 
                        if(contacts[i] !== contacts[contacts.length - 1]) {
                             //add nameFirst and a space and nameLast and a return
                             strPrint += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
                        // if final element do not add line break
                        } else {
                            strPrint += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                        }   
                    }
                    // return strPrint
                    return strPrint;
                    
                   
                 
                  
                },
            
            }
            

        
    
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
