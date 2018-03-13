// JavaScript source code
function buildQueryURL() {

    var queryURL = "https://api.giphy.com/v1/gifs/search";

    queryURL += "?api_key=hqCndoLEBfCsFtplmnfQ3nHlpeY3qH2c";

    var searchTerm = $("#search-term").val().trim();
    queryURL += "&q=" + searchTerm + "&limit=25";

    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");

    return queryURL;
}




// CLICK HANDLERS
// ==========================================================

// .on("click") function associated with the Search Button
$("#submit").on("click", function () {

    event.preventDefault();

    var queryURL = buildQueryURL();


    $.ajax({
        url: queryURL,
        method: "GET"




        // After the data comes back from the API
    }).then(function (response) {
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {
            // Only taking action if the photo has an appropriate rating


            // Creating a div with the class "item"
            var gifDiv = $("<div class='item'>");



            // Creating an image tag
            var searchCriteria = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            searchCriteria.attr("src",
                results[i].images.fixed_height.url);

            gifDiv.append();
            gifDiv.append(searchCriteria);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);
        }

    });

});

$("src").on("click", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
