$(function(){
	// After the API loads, call a function to enable the search box.
	function handleAPILoaded() {
	  $('#search-button').attr('disabled', false);
	}

	// Search for a specified string.
	//function search() {
	$('.form_search').submit(function(e){
		e.preventDefault();
		gapi.client.setApiKey('AIzaSyBfFP8e2m3fp2V2RPXAvBzsO4xgXovm7Bk');
		console.log('A');
        gapi.client.load('youtube', 'v3', function() {
			 searchA();
			});
    });


    function searchA() {
    		console.log('B');
            var q = 'pink floyd';
            var request = gapi.client.youtube.channels.list({
                    part: 'statistics',
                    forUsername : 'GameSprout'
            });
            request.execute(function(response) {
                    var str = JSON.stringify(response.result);
                    alert(str);
            });
    }
});