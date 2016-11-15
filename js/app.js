$(function(){
    var base_url = 'https://www.googleapis.com/youtube/v3/';

    $.ajax({
    	url: base_url + 'channels',
    	type: 'GET',
    	dataType: 'json',
    })
    .done(function() {
    	console.log("success");
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    

});
