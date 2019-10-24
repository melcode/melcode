// CONTROL FLOW:
// 0 . When code is run in order from the first line in the file to the last line. And there are some specific parts of Javascript that allow us to control
// the flow of our applications as well using if, else if, else, and switch statments. IF statments let you compare values after they are coerced to a boolean value.
// 1. To start a conditional statement or block of code, you first use an if statment. You can also chain together any number of else-if statements
// if there are more than one condition that needs to be met.
// 2. for the basic breakdown of an if statement it would look something like this:
//  if (test-condition in parentheses) {body of code that is executed if the condition is true}
var nameFirst = 'Melvin';
if (nameFirst === 'Melvin') {
   console.log('Hi my name is Melvin');
}
// Again you can chain else-if statements to if when there are more than one condition.
else if (nameFirst === 'Byron') {
   console.log('Hi my name is Byron');
}
// The at the end you can connect an else statment if no condition is true
else {
   console.log('I HAVE NO NAME!');
}
// 3. Switch statements are used if there are multiple conditions, resulting in cleaner code in some cases.
// With Switch statments, you start the block with the switch, case, and break, keywords
var car = 'Hyundai';
switch (car) {
   case 'Nissan':
       console.log('I have a Nissan!');
       break;
   case 'Hyundai':
       console.log('I have a Hyundai!');
       break;
   case 'BMW':
       console.log('I have a BMW!');
       break;
}
// you can also run one block of code for more than one case
switch (car) {
   case 'Nissan':
   case 'Honda':
   case 'Toyota':
       console.log('It\'s an Import!');
       break;
   case 'Chevrolet':
   case 'Dodge':
   case 'Ford':
       console.log('It\'s a Domestic vehicle!');
       break;
}
// But you must remember to always use a break statement to kill the switch block, if you don't one or more blocks will run accidentally.
// In programming we must remember that in if statements and in switch statements the value is interpreted as either truthy or falsey values.
// if there is no value like 0, NaN, null, an empty string, or undefined the value is "falsey"
// But if there is some value or type they it is considered "truthy"

