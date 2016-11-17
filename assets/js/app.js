$(function() {

	$('.toggle-aside').click(function() {
		$('.aside').toggleClass('open');
	});

	$('.filter-cog').click(function() {
		$(this).toggleClass('active');
		$('.filters').toggleClass('open');
	});

	$('.player-video:not(.player-video #video)').click(function() {
		$('.player-video').slideToggle('fast');
		$('.player-video').html('');
	});
});