// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
 * START OF OUR LIBRARY!
 * Implement each function below it's instructions
 */

/** _.identity
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Returns <value> unchanged
 * Examples:
 *   _.identity(5) === 5
 *   _.identity({a: "b"}) === {a: "b"}
 */

_.identity = function(value) {
    return value;
};




/** _.typeOf
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Return the type of <value> as a string
 *       Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * Examples:
 * _.typeOf(134) -> "number"
 * _.typeOf("javascript") -> "string"
 * _.typeOf([1,2,3]) -> "array"
 */

_.typeOf = function(value) {
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
    }
    if (typeof value === 'number') {
        return 'number';
    }
};

/** _.first
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the first element in <array>.
 *   3) Otherwise, return the first <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */

_.first = function(array, number) {
    //function takes an array and a number
    //function should return an (array) is not if is not array 
    //if number is not given , return fisrt element in array 
    // return first number of items in array
    // what if number is negative 
    //what if number is greater than array.length
    var nums = [];
    if (!Array.isArray(array)) {
        return [];
    }
    if (!number || typeof number !== 'number') {
        return array[0];
    }
    if (number < 0) {
        return [];
    }
    if (number > array.length) {
        return array;
    }
    else {
        for (var i = 0; i < number; i++) {
            nums.push(array[i]);
        }
        return nums;
    }
};


/** _.last
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the last element in <array>.
 *   3) Otherwise, return the last <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */

_.last = function(array, number) {

    var nums = [];
    if (!Array.isArray(array)) {
        return [];
    }
    if (!number || typeof number !== 'number') {
        return array[array.length - 1];
    }
    if (number < 0) {
        return [];
    }
    if (number > array.length) {
        return array;
    }
    else {
        for (var i = array.length - number; i < array.length; i++) {
            nums.push(array[i]);
        }
        return nums;
    }

};


/** _.indexOf
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return the index of <array> that is the first occurrance of <value>
 *   2) Return -1 if <value> is not in <array>
 *   3) Do not use [].indexOf()!
 * Edge Cases:
 *   1) What if <array> has multiple occurances of val?
 *   2) What if <val> isn't in <array>?
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */

_.indexOf = function(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};



/** _.contains
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return true if <array> contains <value>
 *   2) Return false otherwise
 *   3) You must use the ternary operator in your implementation.
 * Edge Cases:
 *   1) did you use === ?
 *   2) what if no <value> is given?
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */

_.contains = function(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value ? true : false) {
            return true;
        }
    }
    return false;
    //(array[i] === value) ? true : false ; return false;
};


/** _.each
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) if <collection> is an array, call <function> once for each element
 *      with the arguments:
 *         the element, it's index, <collection>
 *   2) if <collection> is an object, call <function> once for each property
 *      with the arguments:
 *         the property's value, it's key, <collection>
 * Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */

_.each = function(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};


/** _.unique
 * Arguments:
 *   1) An array
 * Objectives:
 *   1) Return a new array of all elements from <array> with duplicates removed
 *   2) Use _.indexOf() from above
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */

_.unique = function(array) {

    return _.filter(array, function(element, i, array) {
        return _.indexOf(array, element) === i;
    });
}

/** _.filter
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned true
 * Edge Cases:
 *   1) What if <function> returns something other than true or false?
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 * Extra Credit:
 *   use _.each in your implementation
 */

_.filter = function(array, action) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (action(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}


/** _.reject
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned false
 *   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

_.reject = function(array, action) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (!action(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, action) {

    return [_.filter(array, action), _.reject(array, action)];
}


/** _.map
 * Arguments:
 *   1) A collection
 *   2) a function
 * Objectives:
 *   1) call <function> for each element in <collection> passing the arguments:
 *        if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 *   2) save the return value of each <function> call in a new array
 *   3) return the new array
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */

_.map = function(collection, action) {
    var newArr = [];
    // if(Array.isArray(collection)) {
    // for(var i = 0; i < collection.length; i++) {
    //     newArr.push(action(collection[i], i, collection));
    //     } 
    // } else {
    // for(var key in collection) {
    //     newArr.push(action(collection[key],key, collection));
    //   }
    // }
    _.each(collection, function(e, i, a) {
        newArr.push(action(e, i, a));
    });
    return newArr;
};


/** _.pluck
 * Arguments:
 *   1) An array of objects
 *   2) A property
 * Objectives:
 *   1) Return an array containing the value of <property> for every element in <array>
 *   2) You must use _.map() in your implementation.
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */

_.pluck = function(array, prop) {
    // create new Array to return values
    return _.map(array, function(object, index, array) {
        return object[prop];
    });
}


/** _.every
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *      if <collection> is an array:
 *          current element, it's index, <collection>
 *      if <collection> is an object:
 *          current value, current key, <collection>
 *   2) If the return value of calling <function> for every element is true, return true
 *   3) If even one of them returns false, return false
 *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */

_.every = function(collection, action) {
    var flag = null;
    if (!action) {
        _.each(collection, function(e) {
            if (!e) {
                flag = false;
            }
        });
    }
    else {
        _.each(collection, function(e, i, a) {
            if (!action(e, i, a)) {
                flag = false;
            }
        });
    }

    if (flag === null) {
        return true;
    }
    else {
        return false;
    }

};

/** _.some
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *       if <collection> is an array:
 *        current element, it's index, <collection>
 *       if <collection> is an object:
 *        current value, current key, <collection>
 *   2) If the return value of calling <function> is true for at least one element, return true
 *   3) If it is false for all elements, return false
 *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */

_.some = function(collection, func) {
    var flag = null;
    if (func === undefined) {
        _.each(collection, function(e) {
            if (e) {
                flag = true;
            }
        });
    }

    else {
        if (Array.isArray(collection)) {
            if (_.reject(collection, func).length === collection.length) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            for (var key in collection) {
                if (collection[key]) {
                    flag = true;
                }
            }
        }
    }

    if (flag === true) {
        return true;
    }
    else {
        return false;
    }
};


/** _.reduce
 * Arguments:
 *   1) An array
 *   2) A function
 *   3) A seed
 * Objectives:
 *   1) Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *   2) Use the return value of <function> as the "previous result"
 *      for the next iteration
 *   3) On the very first iteration, use <seed> as the "previous result"
 *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *   5) After the last iteration, return the return value of the final <function> call
 * Edge Cases:
 *   1) What if <seed> is not given?
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */

_.reduce = function(array, action, startValue) {
    // input: array, action, startValue
    // output: depends on case
    // edgeCase: create conditions based on startvalue
    // Constraint:

    var previousResult = startValue;
    var i = 0;
    if (startValue === undefined) {
        previousResult = array[0];
        i = 1;
    }

    for (; i < array.length; i++) {
        previousResult = action(previousResult, array[i], i);
    }
    return previousResult;
};


/** _.extend
 * Arguments:
 *   1) An Object
 *   2) An Object
 *   ...Possibly more objects
 * Objectives:
 *   1) Copy properties from <object 2> to <object 1>
 *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
 *   3) Return the update <object 1>
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */

_.extend = function(object1, ...objects) {

    // var copyFromObjects = Array.prototype.slice.call(arguments);
    // copyTo
    // // will make slice the this object for call . It the same for any method in javascript. 
    // // The calling object is the this object for the method being called. 
    // // So to create the bound slice shortcut funr4ction with our simple bind function we need to bind slice to call 
    // //console.log(copyFromObjects);

    // for (var i = 0; i < copyFromObjects.length; i++) {
    //     var copyFrom = copyFromObjects[i];
    //   //  console.log(copyFrom);
    //     for (var key in copyFrom) {
    //         copyTo[key] = copyFrom[key];
    //     //    console.log(copyTo[key]);
    //     }
    // }
    // console.log(copyTo);
    // return copyTo;

    for (let i = 0; i < objects.length; i++) {
        for (let key in objects[i]) {
            let currentObjectInLoop = objects[i];
            object1[key] = currentObjectInLoop[key];
        }
    }
    return object1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
