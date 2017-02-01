$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        var query = $("#query").val();
        console.log(query);
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
        }).done(function(response) {
            console.log(response.data[1].embed_url);

            var url = response.data[1].embed_url;

            var image = $('<img>');
            image.attr('src', url);
            $("#results").append(image);

            image[0].src = response.data[0].images.fixed_width_downsampled.url;

            $("#results").append(image);
        });
    })
});
