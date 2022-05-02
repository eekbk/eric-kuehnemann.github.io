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
/** */