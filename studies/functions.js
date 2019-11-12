/** 0. Functions
* The two phases to using functions: First we must ___? 
*   - first we must define a function using the keyword function
*   -  then we must call/ invoke the function
* 
* Ex. of function declaration
* function print(value){
*   console.log(value);
}
Ex. of function expression

var adjective = function(str) {
    console.log("You are the best " + " " + str + " " + "in town!")
}

Next we can execute (or two other words for executing a function?) a function by?
  - calling or invoking the function by its name, by givng it a value
*  print("Helllo"); 
* 
* 
* 1. What’s the difference between a function’s parameters and arguments PASSED to a function?
**/
     // => The functions parameters act as passengers or placeholders
     
     function print(value){ // => the word value here is a parameter/placeholder/passenger
        console.log(value);
    }
    // => The functions aruguments are used when the function is actually invoked
    print(3); // => here the function is being invoked and the value atthis point is an argument
    
/**
* 2. What’s the syntax for a NAMED function?
*   ex. of a named or function declaration function
*/
   function adder(num1, num2){
       return num1 + num2;
   }
   
/**
 * 3.
 * How do we assign a function to a variable?
 * ex of function expression
 */

 var add = function(plus1, plus2){
     return plus1 + plus2;
 } 
 
/**
 * 4.
 * Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
*How do we specify inputs, and how do we specify outputs?
**/

function printer(value){
    return value; // => example of a function that can optionally take arguments 
}
printer();

 // => This function print will print whatever its passed, prints 5
 
/**
 * 5.
 * Scope: Functions can see and modify variables in parent or global scopes.
 *The inverse is NOT true.
 **/


/**
 * 6.
 * The following variables are defined in the global scope
 */
var num11 = 20;
var num22 = 3;
var name1 = 'Chamahk';

// This function is defined in the global scope

function multiply(num1, num2) {
  return num1 * num2;
}

multiply(30, 2); // => Returns 60

/** 
 * 7.
 * A nested function example
 */
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name1 + ' scored ' + (num1 + num2);
  }
  
  return add();
}

getScore(); // => Returns "Chamahk scored 5"



/**
* 8.
* Closures: Functions form closures around the data they house. 
*
* If an object returned from the Function and is held in memory somewhere (referenced),
*  that closure stays ALIVE, and data can continue to exist in these closures! 
 **/

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer 
                             //function
  };
  return getName;            // Return the inner function, thereby exposing it to outer scopes
};

var myPet = pet('Vivie');
   console.log(myPet);                     // Returns "Vivie"          