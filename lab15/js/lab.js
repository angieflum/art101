/* 
lab.js - This is a simple JavaScript used to implement the Yes or No API call.
Authors: Angie and Artem
Date: 1 June 2024
*/

$(document).ready(function() {
    $("#activate").click(function() {
        // Fetch a random Yes or No answer
        $.ajax({
            url: "https://yesno.wtf/api",  // Correct endpoint for Yes or No API
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log("Data received:", data);
                // Create HTML content with the answer and image data
                let content = `<h2>${data.answer}</h2>
                               <img src="${data.image}" alt="Random Yes or No Image">`;
                // Insert the content into the 'output' div
                $("#output").html(content);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching data:", error);
                // Display a user-friendly message in case of error
                $("#output").html(`<p>Error fetching data. Please try again later.</p>`);
            }
        });
    });
});
