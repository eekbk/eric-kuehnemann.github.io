/**
* OPERATORS
*   In JavaScript, an operator is a special symbol used to perform operations on 
*   operands (values and variables). Different types of operators have different
*   purposes.
*
*   1. Assignment operators.
*       Assignment operators are used to assign values to variables. Some common 
*       examples: */
//          A. =    The equal assignment sets a variable equal to a value. 
                let a = 0; // 0 

//          B. +=   The addition assignment 
                a += 2; // a = a + 2

//          C. -=   The subtraction assignment
                a -= 2; // a = a - 2

//          D. *=   The multipliication assignment
                a *= 2; // a = a * 2

//          E. /=   The division assignment
                a /= 2; // a = a / 2
/**
*   2. Arithmetic operators
*       Arithmetic operators are used to perform arithmetic calculations. In addition 
*       to +, -, * and / (addition, subtraction, multiplication and division,
*       respectively), there are some other useful arithmetic operators.  */
//          A. ++   The increment operator. Increases current value by 1
                a++;    // a + 1

//          B. --   The decrement operator. Decreases current value by 1
                a--;    // a - 1

//          C. %    The remainder operator (modulus). Finds the remainder after dividing
//                  two numbers.
                5 % 2;  // 1

//          D. **   The exponent operator. 
                a ** b; // a to the power of b
/**
*   3. Comparison operators
*       Comparison operators compare to values and return a boolean value of true
*       or false. */
//          A. ==   Equal to: returns true if values are equal, even if of different
//                  types.
                'fish' == 'fish';   // returns true
                2 == '2';           // returns true

//          B. !=   Not equal to: returns true if the operands are not equal.
                'fish' != 'cat';    // returns true
                2 != '2';           // returns false

//          C. ===  Strictly equal to: returns true only if the operands are equal
//                  AND of the same type.
                'fish' === 'fish';  // returns true
                2 === '2';          // returns false

//          D. !==  Strictly not equal to: returns true if the operands are not equal
//                  OR are equal but of a different type.
                'fish' !== 'cat';   // returns true
                2 !== '2';          // returns true

//          E. >    Greater than: returns true if the operand on the left is greater
//                  than the operand on the right.
                2 > 1;              // returns true
                2 > 2;              // returns false

//          F. >=   Greater than or equal to: returns true if the operand on the left
//                  is greater than OR equal to the operand on the right.
                2 >= 1;              // returns true
                2 >= 2;              // returns true

//          G. <    Less than: returns true if the operand on the left is less than the
//                  the operand on the right
                1 < 2;              // returns true
                1 < 1;              // returns false

//          H. <=   Less than or equal to: Returns true if the operand on the left is 
//                  less than OR equal to the one on the right
                1 <= 2;             // returns true
                1 <= 1;             // returns true
/**
*   4. Logical Operators
*       Logical operators perform logical operations and return a boolean value, either 
*       true or false.  */
//          A. Logical AND: Returns true if BOTH operands are true. Otherwise returns false
                (1 < 2 && 3 < 4)    // returns true
                (1 < 2 && 3 > 4)    // returns false
/**
*           B. Logical OR: Returns true if EITHER of the operands are true. Returns false
*           only if both are false. */
                (1 < 2 || 2 > 3)    // returns true
                (1 > 2 || 2 > 3)    // returns false
/**
*           C. BANG operator (Logical NOT): True if the operand is false and vice versa */
                !true               // returns false
                !false              // returns true
/**
*   5. Unary Operators: A unary operator means that the operator requires only one operand,
*       either before or after the operator. The BANG operator above is an example of a 
*       unary operator. Some others include:
*           A. delete: The delete operator will remove a property from an object. This 
*               includes arrays. Using delete with an array, however, will delete the value, 
*               but won’t change the overall length of the array. Delete can be useful to remove 
*               a single property from an object without leaving anything behind like an undefined
*               value for the property. */
                let fullObject = {
                    name: 'Eric',
                    age: 42
                };
                delete fullObject.age;
                console.log(fullObject); // logs { name: 'Eric" }
                let fullArray = [ 1, 2, 3 ];
                delete fullArray[0];  
                console.log(fullArray); // logs [<1 empty item>, 2, 3]
/**
*           B. typeof: The typeof operator will evaluate and return a string of the type of the 
*               operand value. This can be useful when checking the type of value being held by
*               a variable before performing additional operations upon the value. */
                typeof fullObject // 'object'
/**
*           C. unary plus (+): The unary plus will attempt to convert the value next to it into
*               a number. This works with numbers, strings that contain only numbers as a string 
*               (ex. '246'), and boolean values. For booleans, adding a + before a true value will 
*               convert it into 1 and false into 0. */
                let myCash = '102';
                console.log(+myCash);            // logs 102
                let canVote = true;
                console.log(+canVote);           // logs 1
/**
*   6. Ternary Operator
*           A. The ternary logical operator is the only javaScript operator that takes 3 operands: 
*               a condition followed by a question mark (?), then an expression to execute if the 
*               condition is truthy followed by a colon (:), and finally the expression to execute 
*               if the condition is falsy. This operator is frequently used as an alternative to an 
*               if...else statement. */
                let custAge = 31;
                let beverage = (custAge >= 21) ? beer : sunnyD; // beer
                
