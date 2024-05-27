/* 
lab.js - This is a simple JavaScript used to implement the FizzBuzz function as described.
Author: Angie and Artem
Date: 27 May 2024
*/
// FizzBuzz function
function fizzBuzz() {
  // Initialize an empty string to collect the results
  let oneLongString = "";

  // Loop through numbers 1 to 200
  for (let i = 1; i <= 200; i++) {
      let output = "";  // Initialize an empty string for each number

      // Check if the number is a multiple of 3, 5, or 7
      if (i % 3 === 0) {
          output += "Fizz";
      }
      if (i % 5 === 0) {
          output += "Buzz";
      }
      if (i % 7 === 0) {
          output += "Boom";
      }

      // If the number is not a multiple of 3, 5, or 7, set output to the number itself
      if (output === "") {
          output = i;
      }

      // Append the result to the oneLongString variable with a line break
      oneLongString += output + "<br>";
  }

  // Output the result to the div with id="output"
  $("#output").html(oneLongString);
}

// Call the fizzBuzz function when the document is ready
$(document).ready(function() {
  fizzBuzz();
});