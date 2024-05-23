/* 
lab.js - This simple JavaScript/jQuery script uses conditionals to determine the house of user
Requirements: create logic for sorting users into Hogwarts houses
Author: Angie and Artem
Date: 23 May, 2024
*/

const houses = [
  { house: "Gryffindor", description: "You are brave and daring!" },
  { house: "Ravenclaw", description: "You are wise and creative!" },
  { house: "Slytherin", description: "You are cunning and ambitious!" },
  { house: "Hufflepuff", description: "You are loyal and hardworking!" },
  { house: "Gryfflepuff", description: "You are brave and hardworking!" },
  { house: "Raverin", description: "You are wise and ambitious!" },
  { house: "Slitherclaw", description: "You are cunning and creative!" },
  { house: "Huffleclaw", description: "You are loyal and creative!" }
];

// Simple hash function
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = hash * 31 + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function sortingHat(str) {
  let hash = simpleHash(str);
  let mod = hash % houses.length;
  return houses[mod];
}

$(document).ready(function() {
  $("#submit").click(function() {
    let name = $("#user-name").val();
    let result = sortingHat(name);
    $("#output").html("<p>The Sorting Hat has sorted you into <strong>" + result.house + "</strong>. " + result.description + "</p>");
  });
});
