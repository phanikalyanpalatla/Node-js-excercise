#! npm test ./tests/5-array-sum.js

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} startOfTree An array containing other arrays, ints, strings..
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */
export default function arraySum(startOfTree) {
    //function which takes an array as an input and returns sum of all integers in all nested levels
    
    let sum=0 //set sum to 0

    //iterate through the array
    for (let i = 0; i < startOfTree.length; i++) {
        if (Array.isArray(startOfTree[i]))//if the current element is an array reuse the same function to set the sum
        {
           sum=sum+arraySum(startOfTree[i]);
        }
        else if (Number.isInteger(startOfTree[i]))// if current element is integer add to sum
        {
            sum=sum+startOfTree[i]
        }
   
   }
    
     return sum;   // return sum
}
