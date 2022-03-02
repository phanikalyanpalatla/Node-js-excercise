#! npm test ./tests/4-longest.js

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {

    //function which takes an array as an input and returns the string in the array which is of maximum length


    let arrayLength = strings.length; // extract length of the array
    let max=-1; //set max to store the index of the element with string of max length, initialize it to -1
    let max_length=-1; //set max_length to store the max length of the element with string of max length, initialize it to -1

    //Iterate through array
    for (var i = 1; i < arrayLength; i++) {

        //If type of the elment is string and iflength of the string> max_length, update max and max_length with current element
        if (typeof (strings[i])=="string" && (strings[i].length > max_length))
        {
            max=i; //set index of current element to max
            max_length=strings[i].length //set length of current element to max_length
            
        }
    }
    return strings[max] //return the element w.r.t the index from max
}
