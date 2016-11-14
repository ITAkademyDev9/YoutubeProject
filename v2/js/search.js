// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
    var query = $('#query').val();

    gapi.client.setApiKey('AIzaSyDZf1-_UReE_LUfu7ElniSME6xO-d8vKlA');
    gapi.client.load('youtube', 'v3', function() {
        var request = gapi.client.youtube.channels.list({
                part: 'search',
                q: query
        });
        request.execute(function(response) {
            var str = JSON.stringify(response.result);
            console.log(response);
        });
    });
}