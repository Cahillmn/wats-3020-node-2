/*
Description: a program that takes a string as input and counts how many of each character are in that string.
Input: an Integer
Output: a list of numbers, with fizz if divisible by 3, buzz if divisible by 5, and fizzbuzz if sivisible by both.
Usage: node 1-fizzbuzz <integer>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

// test that input is a number and exit with error
// TODO check if input is not an integer
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
}
else {
  // iterate from 1 to the value of input
  for (let i = 1; i<=input; i++ ) {
    
    //TODO provide for tests for divisible for 3,5, and 15 to create desired output
    if (i % 15 == 0) {
      console.log(`${i} fizzbuzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} fizz`);
    } else if (i % 5 ==0) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`);
    }

  }
}


