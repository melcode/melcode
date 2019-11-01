// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-melcode.github.io");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //must use filter
 
var malesarr =  _.filter(array, function(customerObj, i, array){
     return customerObj.gender === "male";
 });

 return malesarr.length;
};

var femaleCount = function(array){
  return _.reduce(array, function(previousResult, customers, i, array){
      if(customers.gender === 'female') {
          previousResult++;
      }
      return previousResult;
  }, 0);
};

var oldestCustomer = function(array){
  var ages = array.sort(function (a, b){
       return b.age - a.age;
   }); return ages[0].name;
};
    //find the oldest customer age
    //return customer name in a string
    
    //if customers.age and customers.name 
    // return _.reduce(array, function(previousResult, customers, i, array){
    //     if(customers.age ){
    //         return customers.name;
    //     }
    //     console.log(customers.name, customers.age);
        
    // });
    //find the age
    //return string of customers name


var youngestCustomer = function (array){
   var ages = array.sort(function(a, b){
       return a.age - b.age;
   }); return ages[0].name;
};

var averageBalance = function(array){
    //first we want to get all the customers balances 
 var balances = _.reduce(array, function(previousResult, customer){
        if(customer.balance === 'balance'){
            previousResult.push(customer.balance);
            console.log(previousResult);
        }
            return previousResult;
    }, []);

    console.log(balances);
};

var firstLetterCount = function(array){
    
};

var friendFirstLetterCount = function(array){
    
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
