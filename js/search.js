$(function(){
	// After the API loads, call a function to enable the search box.
	function handleAPILoaded() {
	  $('#search-button').attr('disabled', false);
	}

	// Search for a specified string.
	//function search() {
	$('.form_search').submit(function(e){
		e.preventDefault();
		gapi.client.setApiKey('AIzaSyDZf1-_UReE_LUfu7ElniSME6xO-d8vKlA');
        gapi.client.load('youtube', 'v3', function() { searchA(); });
    });


    function searchA() {
            var query = $('#query').val();
            var request = gapi.client.youtube.channels.list({
                q: query,
                part: 'snippet',
            });
            request.execute(function(response) {
                var str = JSON.stringify(response.result);
                $('#result').append(response);
                console.log(response);
            });
    }
});


// 7lCDEYXw3mM