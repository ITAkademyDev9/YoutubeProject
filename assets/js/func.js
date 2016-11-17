function onSearchResponse(response, varSession = null) {
	var responseString = JSON.stringify(response, '', nbrResult);
	var html = "";
	for (var i = 0; i < response.items.length; i++)

	{

		//store each JSON value in a variable

		var publishedAt = response.items[i].snippet.publishedAt;

		var channelId = response.items[i].snippet.channelId;

		var title = response.items[i].snippet.title;

		var description = response.items[i].snippet.description;

		var thumbnails_default = response.items[i].snippet.thumbnails.default.url;

		var thumbnails_default_width = response.items[i].snippet.thumbnails.default.url;

		var thumbnails_medium = response.items[i].snippet.thumbnails.medium.url;

		var thumbnails_medium_height = response.items[i].snippet.thumbnails.medium.height;

		var thumbnails_high = response.items[i].snippet.thumbnails.high.url;

		var channelTitle = response.items[i].snippet.channelTitle;

		var liveBroadcastContent = response.items[i].snippet.liveBroadcastContent;

		var videoID = response.items[i].id;

		if (videoID == '[object Object]') {

			var videoID = videoID.videoId;

		}



		html = html + "<div class=\"item\">";
		html = html + "<div class=\"inter-item\">";
		html = html + "<div class=\"thumb-item\" data-videoID=\"" + videoID + "\" style=\"background-image: url('" + thumbnails_medium + "');\"><i class=\"fa fa-play-circle-o icon-player\"></i></div>";
		html = html + "<div class=\"infos-item\"><strong class=\"title-item\">" + title + "</strong>";
		html = html + "<div class=\"channel-item\"><a href=\"http://youtube.com/channel/" + channelId + "\" target=\"_blank\" class=\"name-channel-item color-blue\" data-channelID=\"" + channelId + "\">" + channelTitle + "</a></div>";

		html = html + "</div></div></div>";
	}



	sessionStorage.setItem(varSession, html);

	$('#result_search').html(html);
	calliframe();
}

function calliframe() {
	$(".thumb-item").click(function(e) {
		e.preventDefault();
		var base_url = 'https://www.youtube.com/embed/';
		var videoID = $(this).attr('data-videoID');
		var url = base_url + videoID;

		$('.player-video').html('<iframe src="https://www.youtube.com/embed/' + videoID + '?enablejsapi=1&amp;key=' + API_KEY + ';origin=http%3A%2F%2Ftrowme.com&amp;widgetid=1;autoplay=1" title="YouTube video player" allowfullscreen="1" id="video" frameborder="0" height="100%" width="100%"></iframe>');
		$('.player-video').attr('data-videoID', videoID);
		$('.player-video').slideToggle('fast');
	});
}