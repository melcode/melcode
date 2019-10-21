
/** 
* 0. 
* Strings are useful for holding data that can be represented in text form 
* String literals (denoted by double or single quotes) 
* String manipulation with operators
*/

var str = "hello";
var newStr = str + " world!";
console.log(newStr); // => prints hello world

/**
* 1.
* String operators are comparison operators that can be used on string values
* and strings also work with the concatentation operator (+)
* concantentation takes two strings values and returns a string that joins the operand strings
* in both of these above examples, we conjoin two strings using the + operator
* string manipulation With string methods
* there are tons of string methods, that allow one to manipulate and obtain some information from a string
* examples are 
*
* to find the last index position of any String or Array
* one can also access individual characters using array syntax
* The expression message[6] goes to the character of the String at the 6th index held in the which is a
*/

/** 2.
* .toUpperCase() and .slice() are methods that manipulate strings
* .slice() is a method that requires an argument be passed in
*/
var myString = "hello!";
console.log(myString.slice(0, 2)); 
// begins splitting by taking everything at the first and second position,
// and leaves everything after it - prints "he"


console.log(myString.charAt(0).toUpperCase() + myString.slice(1)); 
// capitalizes the character at the first index and adds the remaineder of the
// string in lower case to the first character - prints "Hello!"