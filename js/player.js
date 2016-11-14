$('.video-item').click(function(){
  var videoID = $(this).attr('data-videoId');

  // var tag = document.createElement('script');
  // tag.src = "https://www.youtube.com/player_api";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubePlayerAPIReady() {
    var player_width = $('.ytplayer').width();
    var player_height = $('.ytplayer').height();
    player = new YT.Player('ytplayer', {
      height: player_height,
      width: player_width,
      videoId: videoID
    });
  }
});
