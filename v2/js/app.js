$(function(){
    var base_url = 'https://www.googleapis.com/youtube/v3/';

    $('.form_search').submit(function(e) {
        e.preventDefault();
        search();
    });
});
