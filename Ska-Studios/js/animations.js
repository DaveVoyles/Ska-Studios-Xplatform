/* Creates animations for introducing / removing objects on page
 * ©Dave Voyles & Ska Studios, 2013
 */

/* When the device is ready for calls, begin running essential parts of the app
 ************************************************************************************/
document.addEventListener('deviceready', function () { 
    var app = new Application();
        app.wireEventHandlers(); 
        app.fixedHeaderAndFooter();
});

// Container for all of the init functions and event handlers
function Application() {};


Application.prototype = {    
    
    /* Connects all event handlers for external URLs
     ********************************************************************************/
    wireEventHandlers: function() {         
        var self  = this;      
        var doc   = document;
        var blog  = doc.getElementsByClassName('blog' );
        var music = doc.getElementsByClassName('music');
        var art   = doc.getElementsByClassName('art'  );
        
        for (var i = 0; i < blog.length; i++) {
            blog .addEventListener('click', self._openBlogPage , false);
        }
        
        for (var i = 0; i < music.length; i++) {
            music.addEventListener('click', self._openMusicPage, false);
        }
        
        for (var i = 0; i < art.length; i++) {
            art  .addEventListener('click', self._openArtPage  , false);
        }
    },
  
     /* footer and header to remain on page at all times, and in fixed location
     ********************************************************************************/
    fixedHeaderAndFooter: function() {        
         // Grab header and footer from all pages    
         var $allFooters = $("div[data-role='footer']"),
             $allHeaders = $("div[data-role='header']");
                
        // Forces the header and footer to always remain on the page, rather than disappearing
        $allHeaders.fixedtoolbar({ tapToggle: false });
        $allFooters.fixedtoolbar({ tapToggle: false });     
    },
    
    
    /* Applies padding to top of screen to adjust for the iOS7 error
     * http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/
     ********************************************************************************/
    _applyMarginToiOSHeader: function() {   
        var $allHeaders = $("div[data-role='header']");
        
        if (parseFloat(window.device.version) >= 7.0 ) {
            $allHeaders.css( "margin-top", "20px" );       
        }
    },      

    _openMusicPage: function() {
        window.open("http://music.ska-studios.com/", "_blank");
    },
  
    
    _openBlogPage: function() {
        window.open("http://ska-studios.com/", "_blank");    
    },
    
    _openArtPage: function() {
        window.open("http://ska-studios.com/the-art-unicorner/", "_blank");        
    }    
}