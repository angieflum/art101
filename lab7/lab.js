// Function to sort the user's name
function sortUserName() {
    let userName = prompt("Please enter your name:");
    let userNameArray = userName.split('');
    userNameArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    return userNameArray.join('');
  }
  
  // Function call and output the result
  document.addEventListener('DOMContentLoaded', function() {
    let sortedName = sortUserName();
    document.getElementById('output').innerText = `Sorted Name: ${sortedName}`;
  });
