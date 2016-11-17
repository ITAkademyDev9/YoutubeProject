$(function() {
	var trends = sessionStorage.getItem("trends-YS");
	if (trends !== null) {
		$('#result_search').html(trends);
		calliframe();
	} else {
		$.ajax({
				url: 'https://www.googleapis.com/youtube/v3/videos',
				type: 'GET',
				dataType: 'json',
				data: {
					part: 'snippet',
					chart: 'mostPopular',
					maxResults: nbrResult,
					regionCode: 'FR',
					videoEmbeddable: true,
					key: API_KEY
				},
			})
			.done(function(data) {
				onSearchResponse(data, "trends-YS");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	}
});