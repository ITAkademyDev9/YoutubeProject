var API_KEY='AIzaSyDZf1-_UReE_LUfu7ElniSME6xO-d8vKlA';
var nbrResult=12;

$(document).ready(function() {
    $('.form_search').submit(function(e) {
        e.preventDefault();
        $('.tab a').removeClass('active');
        $('.tab-results a').addClass('active');
        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    }); 
});
 
function onYouTubeApiLoad(){
    gapi.client.setApiKey(API_KEY);
    searchYouTubeApi();
}
 
function searchYouTubeApi(PageToken)
{
    var query = $('#query').val();
    $('#search_keyword').text(query);
    var request = gapi.client.youtube.search.list(
    {
        part: 'snippet',
        q: query,
        maxResults: nbrResult,
        pageToken: PageToken
    });

    request.execute(onSearchResponse);
}
 
function onSearchResponse(response) {
 
    var responseString = JSON.stringify(response, '', nbrResult);
    // console.log(responseString);
    var resultCount = response.pageInfo.totalResults;
    $('#count').text(resultCount);
   
    var html='';

    for (var i=0; i<response.items.length;i++)
    {
        //store each JSON value in a variable
        var publishedAt=response.items[i].snippet.publishedAt;
        var channelId=response.items[i].snippet.channelId;
        var title=response.items[i].snippet.title;
        var description=response.items[i].snippet.description;
        var thumbnails_default=response.items[i].snippet.thumbnails.default.url;
        var thumbnails_default_width=response.items[i].snippet.thumbnails.default.url;
        var thumbnails_medium=response.items[i].snippet.thumbnails.medium.url;
        var thumbnails_medium_height=response.items[i].snippet.thumbnails.medium.height;
        var thumbnails_high=response.items[i].snippet.thumbnails.high.url;
        var channelTitle=response.items[i].snippet.channelTitle;
        var liveBroadcastContent=response.items[i].snippet.liveBroadcastContent;
        var videoID=response.items[i].id.videoId;


        // title.truncatable({limit:60});
        // description.truncatable({limit:100});

        var html = html + "<div class=\"box col s4\" data-videoId=\""+ videoID +"\"><div class=\"item-search\">";
            html = html + "<div class=\"thumb-search\" style=\"background-image: url('"+ thumbnails_medium +"');height:"+ thumbnails_medium_height +"px;\"></div>";
            html = html + "<div class=\"infos-item-tendances\">";
            html = html + "<h2 class=\"title-item\">" + title + "</h2>";
            html = html + "<p class=\"descript-item\">"+ description +"</p>";
            html = html + "<a class=\"channel-name-item\" href=\"channel.html?q="+ channelId +"\">"+ channelTitle +"</a>";
            html = html + "<div class=\"btns-item\"><span><i class=\"material-icons\" data-type=\"action\" data-videoId=\"ID_VIDEO\" data-action=\"like\">thumb_up</i><strong class=\"nbr_btn\">3</strong></span><span><i class=\"material-icons\" data-type=\"action\" data-videoId=\"ID_VIDEO\" data-action=\"dislike\">thumb_down</i><strong class=\"nbr_btn\">1</strong></span></div></div></div></div>";
                    
        // $('#T').replaceWith("<div id=T><b>Title:</b> "+title+"</div>");
        // $('#C').replaceWith("<div id=C><b>Channel ID: </b>"+channelId+"</div>");
        // $('#D').replaceWith("<div id=D><b>Description </b>"+description+"</div>");
        // $('#P').replaceWith("<div id=P><b>Published on: </b>"+publishedAt+"</div>");
        // $('#CT').replaceWith("<div id=CT><b>Channel Title: </b>"+channelTitle+"</div>");
        // $('#linktoVid').replaceWith("<a id=linktoVid href='http://www.youtube.com/watch v="+videoID+"'><img id=imgTD src=\""+thumbnails_default+"\"/></a><br/><br/><video id=vidTD width=\"320\" height=\"240\" controls poster="+thumbnails_default+"><source src='http://www.youtube.com/watch?v="+videoID+">Your browser does not support the video tag.</video><br/><br/>");
    }


    $('#results .boxs').html(html);
}