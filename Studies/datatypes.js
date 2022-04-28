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
*       the associated variable may be reassigned). Primitive data types are stored BY 
*       COPY, meaning that if you store the same data to two different variables, a copy
*       of the data is made  and reassigning one variable will not affect the other.*/
        var num1 = 15;
        var num2 = num1;
        num1 = 30;
        console.log(num2); // logs 15 to the console
/** 
*       Examples of Primitive data types:
*
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
*       Complex data is mutable, meaning that you can alter the value of the data type, using
*       methods. Unlike primitive data types, which are stored by copy, complex data types are 
*       stored BY REFERENCE. This means that when you assign two variable to one object
*       or array, they will be POINTING at the same data, and altering one variable will 
*       affect the value of both. */
        var array1 = [1, 2, 3];
        var array1 = array2;
        array2 = ['a', 'b', 'c'];
        console.log(array1); // logs ['a', 'b', 'c']
/**
*       A. Array: An array is a collection of items, separated by commas. An array
*           is contained inside square brackets, []. The array data type allows for 
*           the storing of multiple items under one variable. The list is ordered, 
*           meaning that items can be accessed by calling on their index number.
*           Different data types can be stored in the same array. Note that 
*           performing a typeof method on array will actually return 'object', 
*           so it is better to use Array.isArray. */
            var myArray = ['Hello', null, 1, false];
            console.log(typeof myArray); // prints 'object'
            console.log(Array.isArray(myArray)); // prints true.
/**
*       B. Object: An object is a collection of key, value pairs. These key value
*           pairs are unordered, separated by commas and contained within curly brackets, {}. */
            var myObject = {
                name: 'Eric',
                age: 42,
                canVote: true
            }
/**
*   2. Infinity and -Infinity
*/
