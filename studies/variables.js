/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
/*eslint-disable no-const-assign, no-shadow-global*/
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//3. Let
/**
 * The difference between var and let, Let is blocked scoped, which means that a variable created
 * with the let keyword is only available inside of the block it was created in. An example
 * of blocked scoped is anything in between curly brackes
 **/

// 1. Declaration 

let first;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(first); //=> prints undefined

// 2. initialization or assignment //
first = 1;
console.log(first); // prints => 1

// 3. re-assignment //
first = 'number1';
console.log(first); // prints => 'number1'

//4 . ex of using let in a for loop

let nums = [23, 5, true]; //=>  

for (let i = 0; i < nums.length; i++) {
    console.log(i);  // => inside the loop will print every element in the array
}
console.log(i); // => i is unavailable here because let is blocked within the scope of the for loop
// Reference error is printed to the console


/** 4. Const
*  Turns out, const is almost exactly the same as let. However, 
* the only difference is that once you’ve assigned a value to a variable using const, 
* you can’t reassign it to a new value.
*/ 

// declared and intitalized
const location = "New Orleans"; // => stored in memory and will never change
console.log(location); // => prints: "New Orleans"

// reassignment error
//location = "French Quarters";
console.log(location); // => prints: TypeError: Assignment to a constant variable



/** 5. Hoisting
 * Variable declarations and function declarations are taken to the top of their scope.
 * Different types hoisted differently
 * Variables: Only Name of variable get hoisted
 * Functions: the name and the body
 */


// 1. Ex. of hoisting

// console.log(i); // => i is hoisted without its value, i is undefined
// console.log(k); // => Let declared vairlables also wont be available until the interpreter reaches the line where it was declared
// console.log(l); // => l is hoisted without its value

var i = 1;
let k = 2;
const l = 3; // => const wont be available until the where its initialized is reached

//The variables listed above will be hoisted to the top of the page without there values;
  
console.log(i); // => here prints 1
console.log(k); // => here prints 2
console.log(l); // => here prints 3

/**
*Since javascript reads from top to bottom,
*the console will print the 2nd stack of console logs   
*/
adder(2, 5); // => prints 7 because function declarations are hoisted with its values
           // => 2 and 5 are the functions values


// function declartation because it is declared with the keyword function and given a name
function adder(num1, num2){
    return num1 + num2;
}

//adding(3, 6); // => Throws TypeError function expressions are hoisted without values

//function expression 
var adding = function(num, numm){
    return num + numm;
};  

