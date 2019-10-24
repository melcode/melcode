// DATA TYPES:
​
// 0. Values of data is a data-type, or how we categorize data.
// There are 2 main types of data that we use in Javascript, Primitive Datatypes, and Complex Datatypes
​
// 1. Primitive Datatypes
// These variables can hold the actual values of the primitive types, but they can hold only references to values of complex types.
// These datatypes are also immutable values(values, which are incapable of being changed)
​
//  Types of Primitive Values:
// 2. Boolean Type
​
// These datatypes represent a logical entity and can have two values
​
var k = true; // k has a value of true
var i = false; // i has a vlue of false
​
// 3. Number type:
// Really any number between -9007199254740992 and 9007199254740992
// there is no specific type for integers
​
k = 1 // k now has a value of the number 1
i = 5 // i now has a value of the number 5
​
// And + Infinity or -Infinity whish is 
​
var maxNumber = Math.pow(10, 1000); // max positive number
​
if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // expected output: "Let's call it Infinity!"
}
​
console.log(1 / maxNumber);
// expected output: 0
​
// There are some special cases that you can us as NaN(not-a-number)
​
k = NaN;
​
// Now if you print var k to the console it will show as NaN
// NaN is not used often but can help determin if a value is a number or not-a-number
​
// 4. String Datatypes:
// Character data that must be inclosed with single or double quotes. '' or "".
// the reason why they are called strings is because it is a string (or an array) of characters.
​
k = 'This is a String';
​
// Strings can also be accessed like an array, if you use array-syntax or bracket notation you can get individual characters from the string
​
console.log(k[0]);
​
// This would print 't' to the console
​
// 5. Undefined
// This data type has no value or the variable is uninitialized.
​
var x;
​
console.log(x);
​
// This would print to the console undefined because x is not assigned a value.
​
// 6. null Datatype
// unlike undefined, null expresses a lack of Identification, indicating that a variable points to no object.
​
function getLetter(string) {
    var p = string.match(/[abcde]/gi);
    if (p === null) {
        return null;
    } else {
        return string.length;
    }
}
console.log(getLetter('fghijk'));
​
// This prints null to the console.
​
// Complex Data types:
// Object
// Array
// Function
​
// Complex data types can aggregate other values and can also be an indefinite size
// They also reference other data types when assigning or passing complex data also known as copy buy reference
​
// Object Data:
// Objects in Javascript an be compared to objects in real life. They use key/value pairs which define their characteristics.
​
// Basic layout of an object is almost like an array but instead of square brackets you use curly braces to identify that it is an object in Javascript
​
var hat = {
    color: 'blue',
    style: 'snapback',
}; 
​
// In an object, if a property is unassigned, the printed value is undefined.
// And objects can contain any number of key/value pairs
// and key/value pairs can also contain complex data as well.
​
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
​
myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';  //=> bracket syntax
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';
​
console.log(myObj);
​
// ARRAY DATA TYPES:
// Used to store multiple values in a single variable.
// created using square brackets [] and separated with commas ,
​
var cars = ['Accord', 'Mustang', 'Supra', 'S2000'];
​
// FUNCTIONS:
// One of the building blocks of Javascript
// a set of statements that performs a task or calculates a value.
// created usually by name, parameters are passed through the function by using parenthese ()
// the body of the function is used with curly brackets {}
​
function saidFunction(parameter) {
    //body of function
    return parameter;
}
​
// then the function can be called by passing arguments.
​
saidFunction('this is an argument');

