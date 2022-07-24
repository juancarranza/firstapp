/*Notes: 
    Date format -> MM/dd/YYYY
 */


/* Week 1 Challenge1 (Tuesday) -> 07/18/2022
Ensure question 
Given a string, write a function that returns the string with a question mark ("?") 
appends to the end, unless the original string ends with a question mark, in which case, 
returns the original string */
function ensureQuestion(s) {
    // Code here
    return s.trim().substr(-1) == "?" ? s : s+"?";
    
}

/* Week 1 Challenge1 (Tuesday) -> 07/18/2022
Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */
function reverseWords(str){
    const reverseArray=str.split(" ").reverse();
    return reverseArray.join(" "); // reverse those words
    
}

/* Week 1 Challenge (Wednesday) -> 07/19/2022 
Find the smallest ingeger in the Array
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}



