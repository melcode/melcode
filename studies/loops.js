/**
 *  LOOPS
 * 
 * 0. In Javascript we use loops to repeatedly run a block of code until a certain condition is met
 * 
 * 1. Javascript offers a few different options to repeatedly run our block of code
 * 
 * 2. There is the while loop, the for loop, for in loop and the do while loop(which we hardly ever use) 
 * 
 * 3. While loop
 * 
 * The condition is first evaluated. 
 * If true, the block of statements following the while statement is executed.
 */
 
 
   var sum = 0;
   var number = 1;
   while (number <= 50) {  // -- condition
   sum += number;        // -- body
   number++;             // -- updater/ incrementer
  }
 
 
 /** 
 * 4. Do While
 * The block following do is executed first and then the condition is evaluated. 
 * If the while condition is true, the block is executed again and
 *  repeats until the condition becomes false.
 */
 
/**
var ch = "";  
  do {
   // read a character from keyboard in the body 
   } while (if ch === '0');     // => terminate loop if '0' is entered
  **/
 
 /** 5. For Loop (The most frequently used loop of them all)
  
   * It consists of three parts, separated by semicolons. 
 * The first is the initializer (var i = 1) which initializes the loop and is executed only once at the start. 
 * The second is a test condition (i <= 50). When a conditional expression evaluates to true, the body of the loop is executed. 
 * When false, the loop terminates. 
 * The third part is an updater (i++) which is invoked after each iteration. 
 * The updater typically increments or decrements the loop counter.
 *
 */
    
    var sum = 0;
    
    for (var i = 1; i <= 50; i++) {
     sum = sum + i;
    } console.log(("Sum = " + sum));    // => Sum = 1275
 
 
 
 
 /** 
  * Ex. of looping forwards over the array below
  */
  var arr = [];
 arr.push(1, "monkey", true, ["another", 3], null);
 
 for (var i = 0; i < arr.length; i++) {
     console.log(arr[i]);
 }
 
 /** 
  * Ex. of looping backwards over the array 
  */
 
 for(var i = arr.length - 1; i < -1; i--) {
     console.log(arr[i]);
 }
 
 /** 6. For-in loop
  * A for-in loop iterates through the properties of an object and executes the
 * loop's body once for each enumerable property of the object
 * With each iteration JavaScript assigns the name of the property (a string value) to the variable item.
 * In the example below these are: name, age, and degree.
 **/


var student = { name:"Bill", age: 25, degree: "Masters" };
for (var item in student) {
   console.log((student[item]));     // => "Bill", then 25, then "Masters"
}


