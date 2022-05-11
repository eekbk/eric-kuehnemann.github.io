///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// LOOPS ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * LOOPS are a way for a program to repeatedly execute a block of code. Without loops, a programmer
 *  would have to write a block of code over and over again, which would be very time consuming and
 *  also would leave a lot of room for errors and mistakes.
 *  
 *  0. WHILE LOOPS: While loops are based on a conditional statement. As long as the statement is 
 *      true, the code will iterate. */
        let count = 0;

        while (count < 10) {
            console.log(count);
            count += 2
        };

        // prints
        //  2
        //  4
        //  6
        //  8
/**
 *  1. FOR LOOPS are very useful when you know how long you would like to iterate for. A common use
 *      of for loops is to iterate through an array. The for loop has three statements. The first 
 *      statement represents where you would like the loops to start. The secong represents when
 *      you would like the loop to stop. The third statement is how the variable should change after
 *      each iteration. Be careful, though, not to start an infinite loop. */
        let myArray = [1, 2, 3, 4];
        for (let i = 0; i < myArray.length; i++){
            console.log(myArray[i]);
        }
        // prints
        // 1
        // 2
        // 3
        // 4

        // You can also iterate BACKWARDS over an array
        let newArray = [1, 2, 3, 4];
        for (let i = newArray.length - 1; i >= 0; i--){
            console.log(myArray[i]);
        }
        // prints
        // 4
        // 3
        // 2
        // 1
/**
 *  2. FOR IN LOOPS are used for looping over an object. Because objects are unordered,
 *      the iteration happens in an arbitrary order, so it is best not to add or remove keys
 *      during a for loop because you cannot tell if the iteration will affect the key or not.
 */     let personObj = {
                name: 'Eric',
                age: 42,
                canHazCheezburger: true
             };
        for (let key in personObj){
            console.log(`My ${key} is ${personObj[key]}.`);
        };
        // prints:  "My name is Eric."
        //          "My age is 42."
        //          "My canHazCheezburger is true."