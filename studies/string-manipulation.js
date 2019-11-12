
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
* String operators are operators that can be used to manipulate string values.
* Strings also work with the concatentation operator (+)
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

var lastChar = newStr[newStr.length - 1]; 

console.log(lastChar); // => brings back the last character of the new str variable  

/** 2.
* .toUpperCase() and .slice() are methods that manipulate strings
* .slice() is a method that requires an argument be passed in
*/


//Ex.
var myString = "hello!";
console.log(myString.slice(0, 2)); 
// begins splitting by taking everything at the first and second position,
// and leaves everything after it - prints "he"

//Ex.
console.log(myString.charAt(0).toUpperCase() + myString.slice(1)); //=> prints "Hello!"
// capitalizes the character at the first index and adds the remaineder of the
// string in lower case to the first character

//Ex.
var newStr = myString.split(""); // => this split method turns a string into an array
console.log(newStr); // => prints ["h","e","l","l","o"] characters are seperated with quotes because of the quotes inside the split("")

//Ex.

var str = "Hello";
var planet = "World";

console.log(str + " " + planet); // => use of concat method
// => prints "Hello World"


//Ex. accessing characters in a string
planet.charAt(0); // => prints "W"
planet[3]; // => prints "l" 
// => The charAt method brings back the character at the index position in the string


//Ex.
console.log(planet.toLowerCase()); // => prints "world"
console.log(planet.toUpperCase()); // => prints "HELLO"


var strPlant = str.concat( planet); 
console.log(strPlant); // => prints "Hello World" 
//concat method joins two or more 



