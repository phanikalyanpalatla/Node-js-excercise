#! npm test ./tests/2-even.js

/**
 * Returns true if the input is even
 * @param {Number} i The integer to check.
 * @returns {Boolean} Whether the input is even.
 */
export default function isNumberEven(i) {
    //function which takes i as an integer and return true if i is an even number else false
    return i%2==0;

}
