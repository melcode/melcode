// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //input value\
    //ouput boolean value true or false 
    //
    
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //new Date object
    // Array.isArray returns true
    //input: value
    //output: return true if value is object, otherwise return false
    //constraint: use if statement
    //edge case: null returns object, array returns object, new Date returns null,  test against other 
    //datatypes
    
   
    // check against each case to make sure they don't equate to an object
    //Check against date
    //check against array
    //check agaisnt null
    //
//    if(value === null) {
//        return false
//    } else if (value === Array.isArray()) {
//        return false
//    } else if (value === instanceof Date) {
//        return false;
//    } else if (value !== {}) {
//        
//    }
    
  if (value instanceof Date) {
      return false;
  } else if (value === null) {
      return false;
  } else if (Array.isArray(value)) {
      return false;  
  } if (typeof value === "object") {
      return true;
  } else {
    return false;
  }
  
  
//
//  if (value && typeof(value) === "object"  && value.constructor === Object){
//        return true
//     } else {
//        return false 
//    }
//  

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (value instanceof Date) {
      return false;
  } else if (value === null) {
      return false;
  } else if (Array.isArray(value)) {
      return true;  
  } if (typeof value === "object") {
      return true;
  } else {
    return false;
  }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    
if (Array.isArray(value)) {
           return 'array';
       }
       if (value instanceof Date) {
           return 'date';
       }
       if (typeof value === 'string') {
           return 'string';
       }
       if (value === null) {
           return 'null';
       }
       if (typeof value === 'object') {
           return 'object';
       }
       if (typeof value === "undefined") {
           return 'undefined';
       }
       if (typeof value === 'boolean') {
           return 'boolean';
       }
       if (typeof value === 'function') {
            return 'function';
           
       } if (typeof value === 'number') {
           return 'number';
       }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
