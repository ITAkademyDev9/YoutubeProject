$(function() {
	$('.form_search').submit(function(e) {
		e.preventDefault();
		var query = $('#search').val();
		$('body').attr('data-search', query);
		$('.filters').removeClass('open');
		$('.filter-cog').removeClass('active');

		var array_order = ['date', 'rating', 'relevance', 'title', 'viewCount'];
		var order = $(".form_search .filter-order input:checked").val();
		if (!$.inArray(order, array_order)) {
			order = 'relevance';
		}

		var array_lang = ['FR', 'EN'];
		var lang = $(".form_search .filter-lang input:checked").val();
		if (!$.inArray(lang, array_lang)) {
			lang = 'FR';
		}

		var array_duration = ['any', 'long', 'medium', 'short'];
		var duration = $(".form_search .filter-duration input:checked").val();
		if (!$.inArray(duration, array_duration)) {
			duration = 'any';
		}

		var chart = 'mostPopular';
		$.ajax({
				url: 'https://www.googleapis.com/youtube/v3/search',
				type: 'GET',
				dataType: 'json',
				data: {
					part: 'snippet',
					q: query,
					// chart      : chart,
					maxResults: nbrResult,
					// regionCode : 'FR',
					type: 'video',
					order: order,
					videoEmbeddable: true,
					relevanceLanguage: lang,
					videoDuration: duration,
					key: API_KEY
				}
			})
			.done(function(data) {
				onSearchResponse(data, "search-YS");
			})
			.fail(function() {
				alert("Une erreur est survenue lors de l'execution de la recherche, veuillez réessayez ou vérifier votre connexion, merci.");
			});
	});
});