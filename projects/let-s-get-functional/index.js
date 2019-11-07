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

   var averageB =  _.reduce(array, function(previousValue, customer, i, array){
           var remove = customer.balance.slice(1);  //sliced off dollar signs
           //console.log(remove);
           //eliminate special characaters in customers balances
           remove = remove.split(",").join("");// split and join to remove commas
           remove = Number.parseFloat(remove);
           previousValue += remove;
           //console.log(remove);
           return previousValue;

    }, 0);
    return averageB  / array.length; // to get the average 

};


var firstLetterCount = function (array, letter) {
   return _.reduce(array, function(count, array) {
       if(array.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
           count += 1;
           return count;
       }
       return count;
   }, 0);
};

var friendFirstLetterCount = function (array, name, letter) {
   return _.reduce(array, function(count, array) {
       if(array.name === name) {
           for (var i = 0; i < array.friends.length; i ++){
               if(array.friends[i].name.charAt(0).toLowerCase() === letter.toLowerCase()) count += 1;
           }
           return count;
           }
           return count;
           }, 0);
};


var friendsCount = function(array, name){
    //access customers friends array 
    //check to see if given name is in their friends list
    
    var friends = _.reduce(array, function(previousValue, customer, i, array){
        _.each(customer.friends, function(friend){
            if(friend.name === name) {
                previousValue.push(customer.name);
            }
        });
        return previousValue;
    }, []);
    return friends;
};

var topThreeTags = function(array){
 let topTags = [];
    let counter = {};
    // loop through array
    for(let i = 0; i < array.length; i++) {
        // loop through the tags 
        for(let b = 0; b < array[i].tags.length; b++) {
            // set all the tags to variable
            let customerTag = array[i].tags[b];
            // if tags occurs more than once add more than 1 to object 
            if(counter[customerTag]) {
                counter[customerTag]++;
                
            }
            else {
                // if it occurs once then assign 1 to it 
                counter[customerTag] = 1;
            }
        }
    }
    
    let order = [];
    for(let key in counter) {
        // push the keys in values seperate inside the array 
        order.push([key, counter[key]]);
        
    }
    // sort the array 
    let sortedTags = order.sort((a, b) => a[1] - b[1]);
    // take out the last three tags from the array 
    let topThree = sortedTags.slice(sortedTags.length - 3);
    console.log(topThree);
    //push the to top tags into the array 
    topTags.push(topThree[0][0], topThree[1][0], topThree[2][0]);
    console.log(topTags);
    return topTags; 
};

var genderCount = function(array){
    
   var summaryOfGenders = _.reduce(array, function(summary, customer){ 
    if(customer.gender in summary){
    summary[customer.gender]++;
  } else {
    summary[customer.gender] = 1;
  } 
  return summary;
}, {});
return summaryOfGenders;




};

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
