/*
Lab ^ JavaScript program
Angie and Artem 
*/
/*
/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
Requirements: jQuery must be loaded for this script to work.
Author: Angie and Artem
Date: May 12 2024
*/

$(document).ready(function() {
    // add button to challenge section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // add button to problems section
    $("#problems").append("<button id='button-problems'>Make Special</button>");

    // add button to results section
    $("#results").append("<button id='button-results'>Make Special</button>");

    // add click listener to the challenge button
    $("#button-challenge").click(function() {
        $("#challenge").toggleClass("special");
    });

    // add click listener to the problems button
    $("#button-problems").click(function() {
        $("#problems").toggleClass("special");
    });

    // add click listener to the results button
    $("#button-results").click(function() {
        $("#results").toggleClass("special");
    });
});