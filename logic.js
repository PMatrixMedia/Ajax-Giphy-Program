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



$(buildQueryURL).then(function (response) {

    
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) 
           

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
            
            
        
});
   


$("#submit").on("click", function () {
    event.preventDefault();

    var queryURL = buildQueryURL();

    $.ajax({
        url: queryURL,
        method: "GET"
    })
});