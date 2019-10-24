////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//the functions return the smallest or minimum number of two numbers
function min(num1, num2) {
if(num1 > num2) { // checks to see if num1 greater than num2
    return num2; // returns num2 because num2 is the smallest of the numbers 
} else if (num1 < num2) { // checks if num1 is less than num 2 
  return num1;    // return num1 one because we want the smallest of the numbers
 } else {
      return num1; // => this case checks to see if numbers are equal then return one number
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
    if (num === 0) { // checkes to see if number is equals 0
        return true;
    } else if (num % 2 === 0) { // => checks to see if num is divisible by 2
        return true;
    } else { 
        return false; // => return false if all other cases if all other numbers aren't equal
    }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
 var count = 0; // need counter variable to count occurances
 for (var i = 0; i < string.length; i++) { // loop over string to get the fisrt character
    if(string[i] === char) { // compares string to fisrt character
        count++; // once looped through count occurances of character
    }
 }
 return count; //return the count variable here outside of the loops
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
 var count = 0; // need counter variable to count occurances
 for (var i = 0; i < string.length; i++) { // loop over string to get characters
    if(string[i] === "B") { // 
        count++; // once looped through count occurances of character
    }
 }
 return count; //return the count variable here outside of the loops
}              //return how many times be is counted



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
