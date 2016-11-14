$(function(){
	// After the API loads, call a function to enable the search box.
	function handleAPILoaded() {
	  $('#search-button').attr('disabled', false);
	}

	// Search for a specified string.
	function search() {
	//$('.form_search').submit(function(e){
	//e.preventDefault();
		gapi.client.setApiKey('AIzaSyARvwirFktEIi_BTaKcCi9Ja-m3IEJYIRk');
        gapi.client.load('youtube', 'v3', function() {
			  var query = $('#query').val();
			  var request = gapi.client.youtube.search.list({
			    q: query,
			    part: 'snippet'
			  });

			  request.execute(function(response) {
			    console.log(response);
			    var str = JSON.stringify(response.result);
			    console.log(str);
			    $('#search-container').html(str);
			  });
			});
    }
});