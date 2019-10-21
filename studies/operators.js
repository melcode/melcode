/**
* Operators:
*
* The language Javascript includes operators like many other languages. 
* Operators are used to perform specific mathematical and logical computations on operands.
* In JavaScript operators are used for compare values, perform arithmetic operations etc.
* Below you will find the various types of operators and examples of them.
*/

/** 1. Arithmetic Operators
*  Arithmetic operators are used to perform mathematical operations between numeric operands.
*/


var x = 10;
var y = 2;
var z = 5;

/**
*  Some examples of arithmetic operators are:
*  +     Adds two numeric operands.   
*          ex.  x + y; returns 12

*  - 	Subtract right operand from left operand  
*          ex.  x - z; returns 5

*  * 	Multiply two numeric operands.
*          ex.  y * z; returns 10

*  / 	Divide left operand by right operand. 
*          ex. x / y;  returns 5

*  % 	Modulus operator. Returns remainder of two operands.
*          ex. z % 5; returns 1  

*  ++	Increment operator. Increase operand value by one.
*          ex. x++; returns 11

*  --	Decrement operator. Decrease value by one. 
*          ex. x--; returns 9
**/ 
 
 
/**
 * 2. Comparison Operators:
 * JavaScript language includes operators that compare two operands and return Boolean value true or false.
 */

/**
 ==   Compares the equality of two operands without considering type.
===	  Compares equality of two operands with type.
!=	  Compares inequality of two operands.
>	  Checks whether left side value is greater than right side value. If yes then returns true otherwise false.
<	  Checks whether left operand is less than right operand. If yes then returns true otherwise false.
>=	  Checks whether left operand is greater than or equal to right operand. If yes then returns true otherwise false.
<=	  Checks whether left operand is less than or equal to right operand. If yes then returns true otherwise false
*/

/**
Ex.
var a = 5, b = 10, c = "5";
var x = a;


console.log(a == c); // returns true
console.log(a === c; // returns false
console.log(a == x); // returns true
console.log(a != b); // returns true
console.log(a > b); // returns false
console.log(a < b); // returns true
console.log(a >= b); // returns false
console.log(a <= b); // returns true
console.log(a >= c); // returns true
console.log(a <= c); // returns true
**/ 
 
 
 /**
  * 3. Assignment Operator
  * 
  * An assignment operator assigns a value to its left operand based on the value of its right operand.
  *  The basic assignment operator is equal (=).
  *  The other assignment operators are shorthand for another operation plus the assignment.
  */
 
 //Ex.
 
 //Below I am using an equal(assignment operator) to assign the variable str to a string
 var str = 'string';
 
 /**
  * 4. Logical Operators
  * Logical operators compare Boolean values and return a Boolean response. 
  * There are two types of logical operators - Logical AND, and Logical OR.
  * These operators are often written as && for AND, and || for OR.
  */
 
 //Ex.
    
    if (1 + 5 > 2 + 3 || false) {
        return "The fisrt condition is greater!";
    } else if (4+3 > 2 + 2 && 5+4 < 10 + 2) {
        return "Both are true!"; //=> Will return both condtions are true because of the && operator
    } // also both conditions have to be true
 
 /**
  * 5. Unary Operators
  * A unary operation is an operation with only one operand. This operand comes either before or after the operator. 
  * Unary operators are more efficient than standard JavaScript function calls.
  *  Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.
  */
 
 //Ex.
// delete - operator deletes an object, 
  // an object's property, or an element at a specified index in an array. The syntax is:
// typeof - operator returns a string indicating the type of the unevaluated operand
// void - operator specifies an expression to be evaluated without returning a value.
// instanceof - operator returns true if the specified object is of the specified object type
 
 /**
  * 6. Ternary Operators
  * The conditional (ternary) operator is the only JavaScript operator that takes three operands.
  *  This operator is frequently used as a shortcut for the if statement.
  */
 
 //Ex.
 //  condition ? value if true : value if false
 