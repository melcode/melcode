/**
 * The two phases to using functions: First we must ___? 
 * Next we can execute (or two other words for executing a function?) a function by?
* What’s the difference between a function’s parameters and arguments PASSED to a function?
* /**
* The functions parameters act as passengers or placeholders
* The functions aruguments are used when the function is actually invoked
* */
/**
* What’s the syntax for a NAMED function?
*
**
* ex. of a named or function declaration function
 */
   function adder(num1, num2){
       return num1 + num2;
   }
   
/** How do we assign a function to a variable?
 * ex of function expression
 */

 var add = function(plus1, plus2){
     return plus1 + plus2;
 } 
 
/** Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
*How do we specify inputs, and how do we specify outputs?
**/

function print(){
    console.log(); // => example of a function that can optionally take arguments 
}

return print(5); // => This function print will print whatever its passed, prints 5
 
/** Scope: Functions can see and modify variables in parent or global scopes.
 *The inverse is NOT true.
 **/

// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  
  return add();
}

getScore(); // Returns "Chamahk scored 5"



/**
* Closures: Functions form closures around the data they house. 
*
* If an object returned from the Function and is held in memory somewhere (referenced),
*  that closure stays ALIVE, and data can continue to exist in these closures! 
 **/

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer 
                             //function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');
   
myPet();                     // Returns "Vivie"