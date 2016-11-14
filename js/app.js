$(function(){
	var channels = ['UCUagJzaUxRT1YCTI_Zu0fsA', ''];

	$('.video-item').click(function(){
		var videoId = $(this).attr('data-videoId');
		console.log(videoId);
		YTPlayer(videoId);
	});
});