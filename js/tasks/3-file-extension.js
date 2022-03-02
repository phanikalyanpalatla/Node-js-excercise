#! npm test ./tests/3-file-extension.js

/**
 * Returns the file extension of a filename.
 * @param {String} filename The string from which to extract the file extension
 * @returns {String} The file extension (with no period), or false if there is none.
 */
export default function getFileExtension(filename) {

    //function which takes string as an input and returns the extension considering . as the seperator

    //step 1 finding the index of . in the given string
    let index_of_period = filename.indexOf('.') //indexOf returns index of . in the string, if not found returns -1

    //step 2 validate if the string has . and doesnot have . as the right most character
    if ((index_of_period!=-1) && (filename.length> index_of_period+1))
    {
        //return right most characters from .
        return filename.slice(index_of_period+1);
    }
    else
    {
        return false
        
    }



}
