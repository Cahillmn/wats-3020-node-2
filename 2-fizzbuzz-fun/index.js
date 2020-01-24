/*
Description: an adaptation of the FizzBuzz algorithm but with a function.
Input: an Integer
Output: a list of numbers, with fizz if divisible by 3, buzz if divisible by 5, and fizzbuzz if sivisible by both.
Usage: node 1-fizzbuzz-fun <integer>

*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(n) {
  if (n % 15 == 0) {
    return 'fizzbuzz';
  } else if (n % 3 == 0) {
    return `fizz`;
  } else if (n % 5 == 0) {
    return `buzz`;
  } else {
    return ``;
  }
}



if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
} else {

  for (let i = 1; i <= input; i++) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}