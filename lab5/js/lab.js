// index.js - Vehicle Data Script
// This script stores and displays vehicle data
// Author: Artem and Angie
// April 2024

var make = 'Toyota';
var model = 'Prius';
var color = 'Blue';
var year = 2010;
var ownIt = true;
var currentYear = new Date().getFullYear();
var age = currentYear - year;

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  document.writeln("Make: " + make + "<br>");
  document.writeln("Model: " + model + "<br>");
  document.writeln("Color: " + color + "<br>");
  document.writeln("Year: " + year + "<br>");
  document.writeln("Own It: " + ownIt + "<br>");
  document.writeln("Age: " + age + "<br>");

}

// let's get this party started
main()
