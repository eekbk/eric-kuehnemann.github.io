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
