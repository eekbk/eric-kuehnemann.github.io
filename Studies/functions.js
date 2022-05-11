///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * FUNCTIONS are blocks of code that take in an input and return an output. They are useful because 
 *  they can be reused many times using different inputs (or *arguments*), which allows for much 
 *  quicker programming with less chance of mistakes. There are two stages to using functions.
 *  0. FUNCTION DECLARATION/DEFINITION
 *      During the function declaration stage, you create the action or instruction you want the
 *          computer to perform. Because we want to abstract the code out as much as possible, to 
 *          allow for the greatest number of uses for our function (as opposed to *hard coding*),
 *          functions contain something called PARAMETERS. Parameters are function scoped variables
 *          as inputs in the function. The syntax for a named functions is the function keyword, 
 *          followed by a space, followed by the function name. After that are parantheses that 
 *          contain the parameters. After that come curly brackets, which contain the function body,
 *          the instructions for the computer to perform. The function body OPTIONALLY contains a 
 *          return statement which is the output of the function. If there is no return statement,
 *          the function will return undefined.*/
            function sum(x, y){     // x and y are the PARAMETERS
                return x + y;       // inside the {} is the FUNCTION BODY, the instructions for what
            }                        //      we want the function to do.
/**         
 *          You could also assign the function to a variable like so: */
            let diff = function(x, y){
                return x - y; 
            };
/**
 *          You can create a function that takes in no parameters, as well as doesn't return a 
 *              value. */
            function rockDontCare(){
                console.log('It doesn\'t matter what you think!');
            }                       // when called, will print to the console, but will return
                                    //      undefined.
/**
 *  1. FUNCITON CALL/ INVOCATION/ EXECUTION
 *      The function call is where the computer actually does what the function asks it to do. During
 *          this stage, actual values (called ARGUMENTS) are passed into the function where the
 *          parameter was acting as a place-holder. You can call a function like so: */
            sum(3, 4); // here we passed in 3 and 4 as the arguments. 
/**
 *          Of course, in the above example, the information had nothing to contain it, meaning it 
 *          wasn't stored in memory, so it kind of gets 'lost'. You could however save the result to 
 *          a variable. */
            let result = sum(3, 4);
            console.log(result); // prints 7
/**
 *  2. SCOPE
 *      All variables declared within a function, are function scoped, regardless if the keyword used
 *          is var, let or const. This means that if the variable cannot be accessed outside of the 
 *          function. */
            function greeting(){
                var message = 'Hello there!';
                console.log(message);
            }

            console.log(message); // results in a ReferenceError: message is not defined
/**
 *  3. CLOSURE
 *      Closure is the ability of a function created inside another function (a 'parent' function) to
 *          hold onto any variables declared within that function. You can think of the parent function
 *          as the home the child function grew up in and even though the child moves out, and maybe the 
 *          home no longer exists, the child has memory of the information it learned in its environment. */
            function describeMomsHouse(street, city){
                let color = 'green';
                let tree = 'pine';
                let car = true;
                return function(){
                    console.log(`I grew up on ${street} in ${city}. The house was ${color}, there was a ${tree} tree in the yard. Did we have a car? It is ${car}.`)
                };
            }
            let myLifeStory = describeMomsHouse('Park Lane', 'North Syracuse');
            myLifeStory();      // prints "I grew up on Park Lane in North Syracuse. The house was green,
                                //      there was a pine tree in the yard. Did we have a car? It is true."
/**
 *          In the above example, the parent function, describeMomsHouse, returned a function. When we saved
 *          the function invocation with arguments to a variable and then invoked THAT function, all of the 
 *          variables and arguments from the original declaration and subsequent invocation were remembered
 *          and used in the function.
 */
