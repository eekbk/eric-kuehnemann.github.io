/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables. 
* Variables are named identifiers that can point to values of a particular type, like a
* Number, a String, Boolean, Array, Objecto or another data-type. Variables are called so
* because once created, we cam CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for 
* our variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

 // 1. declaration //
 // At the declaration phase, the variable myName is undefined because we have NOT initialized it to anyhing.
var myName;
console.log(myName); // prints => undefined

// 2. initialization or assignment
// When you assign a value to an undeclared variable
myName = 'eric';
console.log(myName); // prints => eric

// 3. Re-assignment
// Changing or updating the value of a previously assigned variable
myName = 'bob';
console.log(myName); // prints => bob

// 4. var, let and const
//  These are keywords used in declaring variables that each behave differently. let and const were introduced 
//      in ES6 to address some of the limitations (or lack thereof) and problems with var.

/* 
    var
    * reassignable: yes
    * hoisted: yes
    * scoped to functions: yes
    * scoped to if blocks: no
    * scoped to loop blocks: no

    let
    * reassignable: yes
    * hoisted: no
    * scoped to function: yes
    * scoped to if blocks: yes
    * scoped to loop blocks: yes

    const
    * reassignable: no
    * hoisted: no
    * scoped to functions: yes
    * scoped to if blocks: yes
    * scoped to loop blocks: yes


// 5. Hoisting. //
* Hoisting is a process performed by the interpreter, where the declaration of
*   variables declared with the var keyword as well as function definittions are 
*   "hoisted" to the top of their scope before the code is executed. This allows 
*   functions to be called before they are declared or defined. In the case of 
*   variables, though, since only the declaration is hoisted, and not the 
*   initialization, use of the variable before it is assigned will result in 
*   undefined. Variables declared with the let and const keywords are not hoisted,
*   however. Calling them will result in a reference error.*/
var myName = 'Eric';
greeting(myName);

function greeting(name){
    console.log('Hello ' + name + '!')
};
// 'Hello Eric!' will be logged to the console

greeting(yourName);
var yourName = 'you old so and so';
// 'Hello undefined!' will be logged to the console.

console.log(friends);
let friends = true;
// results in a reference error

  