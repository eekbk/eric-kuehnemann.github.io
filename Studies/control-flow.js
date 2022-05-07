///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// CONTROL FLOW ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
* CONTROL FLOW is how your computer runs code and in which order. JavaScript reads code from top to
*   bottom, unless it hits any code that alters the control flow, such as conditional statements.
*   0. If-Else if-Else statements: The if-else if statement if a syntax for writing conditional
*       statements that will create a control flow for your program
*       A.The if statement contains a block of code that will run IF the statement is true. */
        if(1 < 10){
            console.log('This is TOTALLY true!');
        };             // prints 'This is TOTALLY true'
/**
*       B. Else if: The else if statement follows the if code block. If the initial if statement
*           is false, that code will be skipped and the else-if statement will be evaluated for 
*           for truthiness.*/
        if(1 > 10){
            console.log('This is TOTALLY true!');
        } else if (1 < 10) {
            console.log('OK fine. But THIS is true.')
        };              // prints 'OK fine. But THIS is totally true.'
/**
 *      C. Else: if neither the if, or any else if statements are true, whatever code the else
 *          statement contains will run. */
        if (1 > 10) {
            console.log('This is TOTALLY true!');
        } else if (1 === 10) {
            console.log('OK fine. But THIS is true.')
        } else {
            console.log('I dont know WHAT the heck is true anymore.')
        };              // prints 'I dont know WHAT the heck is true anymore.'
/**
 *  1. Switch Case: Switch case is another type of conditional control flow that can be
 *      especially useful if there are a lot of choices for a particular bit of code. The 
 *      swich case begins with an expression which each case is matched against. If the 
 *      particular case is matched, the code for that case is run. It is important to put
 *      a break after each case, otherwise the following cases will also run (unless, of
 *      course, that is something that you want to happen!). */
        let myCandy = 'Snickers';
        switch (myCandy) {
            case '3 Musketeers':
                console.log('meh');
                break;
            case 'apples':
            case 'balogna':
            case 'Valentines Heart Candy':
                console.log('That\'s not candy.');
                break;
            case 'Snickers':
            case 'KitKat':
            case 'Butterfinger':
            case 'Reese\'s Peanut Butter Cup':
                console.log('yum dude');
                break;
        }       // prints 'yum dude'
