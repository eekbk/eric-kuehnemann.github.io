/**
* DATA TYPES
*   Data types are how JavaScript dilineates between different types of information, or
*   data. A word, like a person's name is going to be used by programmers in a very 
*   different way than a number, which will be useful in a very different way than a
*   collection of items. Because of this, JavaScript recognizes different data types 
*   and each of these behave differently.
*
*   0. Primitive data types
*       Primitive data types are immutable, meaning that they cannot be changed (though
*       the associated variable may be reassigned).
*       Examples of Primitive data types:
*       A. String: A string is a collection of characters. The string is contained inside
*           either single or double quotes (use either, just be consistent!). */
            var str = 'string';
/**
*       B. Number: JavaScript has only one type of number, which may be written with or
*           without decimals.*/
            var num = 14;
            var decNum = 14.00;
/**
*       C. Boolean: A boolean is a data type that has one of two values: true or false.
*           A boolean can also be written as a logical statement that resolves to either
*           true or false. */
            var myBool = true;
            var aDamnLie = (1 > 10); // resolves to false
/**
*       D. Undefined: undefined is a data type representing the value of undefined. If
*           a variable has no value, then it is undefined. */
            var noVal = undefined;
            var nada;
            console.log(nada); // prints undefined
/**
*       E. NaN: NaN in Javascript means 'not a number'. It is returned if trying to
*           perform an arithmetic operation (besides +) on anything besides a number. */
            var notMath = 'chicken' - 4;
            console.log(notMath); // prints NaN 
/**
*       F. Null: null is a data type representing the value null. It represents the 
*           absence of any object value. Though it is treated as a primitive value
*           type, performing a typeof operation on it will return 'object'. */
            var myNull = null;
            console.log(typeof myNull); // prints 'object'
/**
*   1. Complex Data Types
*       A. Array: 
 */
