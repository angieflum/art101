/* 
lab16.js - Implements XKCD API call to fetch and display comics.
Authors: Angie and Artem
Date: 3 June 2024
*/

function getAndPutData(url) {
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(comicObj) {
            console.log(comicObj);
            let content = `<h2>${comicObj.title}</h2>
                           <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
                           <p>${comicObj.alt}</p>`;
            $('#output').html(content);
        },
        error: function (xhr, status, errorThrown) {
            console.error("Error:", status, errorThrown);
            $('#output').html(`<p>Error fetching comic. Please try again later.</p>`);
        }
    });
}

$(document).ready(function() {
    getAndPutData("https://xkcd.com/info.0.json"); // Initial load for latest comic

    $('#next').click(function() {
        let currentNum = parseInt($('#output img').attr('src').match(/(\d+)/)[0], 10);
        getAndPutData(`https://xkcd.com/${currentNum + 1}/info.0.json`);
    });

    $('#prev').click(function() {
        let currentNum = parseInt($('#output img').attr('src').match(/(\d+)/)[0], 10);
        if (currentNum > 1) { // There is no comic #0
            getAndPutData(`https://xkcd.com/${currentNum - 1}/info.0.json`);
        }
    });
});
