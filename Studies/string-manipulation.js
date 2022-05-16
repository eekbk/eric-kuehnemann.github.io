///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// STRING MANIPULATION ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
*   Manipulation is possible on strings even though they are a primitive data type.
*       0. With operators.
*           A. plus operator + : The plus or addition operator can be used to concatenate two or 
*               more strings together. */
                let greeting = 'Hello';
                let yourName = 'you old so and so';
                let myCleverGreeting = greeting + ' ' + yourName + '!';
                console.log(myCleverGreeting);      // prints 'Hello you old so and so!'
/**
*           B. addition assignment operator += : Strings can also be concatenated with the addition
*                   assignment operator */
                let myPlea = 'Can we go out for tacos tonight?';
                myPlea += 'PRETTY PLEASE?!'
                comsole.log(myPlea);            // 'Can we go out for tacos tonight? PRETTY PLEASES?!'
/**
*       1. With methods
*           A.  .toUpperCase(): toUpperCase capitalizes every letter in a string */
                let someWords = 'oh you know';
                console.log(someWords.toUpperCase());   // prints 'OH YOU KNOW'
/**
*           B.  .toLowerCase(): makes every letter lowercase */
                let singer = 'Billie Eilish';
                console.log(singer.toLowerCase());      // prints 'billie eilish'
/**
*           C.  .split(): splits the string into an array, with the items separated at the arguments 
*                   passed into the parantheses. */
                let spellItOut = 'Mississippi';
                console.log(spellItOut.split(''));      // prints ['M', 'i', 's', 's','i', 's', 's', 'i',
/**                                                               'p', 'p', 'i']
*
*           D. .concat(): concatenates two or more strings together, as arguments 
*                   passed within the parantheses */
                let text1 = 'We *breath* ';
                let text2 = 'were playing *breath* ';
                let text3 = 'cards.';
                console.log(text1.concat(text2, text3));    // prints 'We *breath* were playing *breath* cards.' */
/**
 *      2. Other notes
 *          A.  .length: like with arrays, JavaScript can use .length to find the length of a string */
                let myStr = 'Hello!'
                console.log(myStr.length);      // prints 6
/**
*           B.  bracket notation: bracket notation can be used to access the index of a given string */
                let newman = 'Hello, Jerry.'
                console.log(newman[0]);         // preints "H"
                console.log(newman[newman.length - 1]);     // prints '.'
