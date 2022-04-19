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
//  These are keywords used in declaring variables that each behave differently
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
    