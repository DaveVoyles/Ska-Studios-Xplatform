$(document).ready(function(){
    getTweets = function(){
 
    var user = $("#tuser").val();
    if(user != ""){
        $("#tweets").html('');
        // show loading image
        $.mobile.showPageLoadingMsg();
        $.getJSON('http://api.twitter.com/1/statuses/user_timeline/'+user+'.json?count=10&callback=?', function(data){
 
        var template = "";
        var screenname = "";
        var realname = "";
        var tweet = "";
        var avatar = "";
        $.each(data, function(index, item){
            screenname  = item.user.screen_name;
            realname    = item.user.name;
            tweet       = item.text;
            created_at  = item.created_at;
            avataar     = item.user.profile_image_url;
            created_at  = created_at.split(" ");
 
            // create list item template
            $("#tweets").append('<li><a href="#"><img style="margin:1%;" src="'+avatar+'" /><h3>'+screenname+'</h3><p>'+tweet+'</p><p class="light-text">'+created_at[1]+' '+created_at[2]+'</p></a></li>');
 
            // Refresh list so jquery mobile can apply iphone look to the list
            $("#tweets").listview();
            $("#tweets").listview("refresh");       
 
        });
        // hide loading image
        $.mobile.hidePageLoadingMsg();
        });
      }
    }
 });