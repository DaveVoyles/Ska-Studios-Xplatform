/* Connects event handlers for URLs
 * ©Dave Voyles & Ska Studios, 2013
 */

/* When the device is ready for calls, begin running essential parts of the app
 ************************************************************************************/
document.addEventListener('deviceready', function () { 
    var app = new Application();
        app.wireEventHandlers(); 
        app.wireBuyNowButtons();
        app.wireTwitterButtons();
        app.fixedHeaderAndFooter();
});

// Container for all of the init functions and event handlers
function Application() {};


Application.prototype = {    
    
    /* Connects all event handlers for external URLs
     ********************************************************************************/
    wireEventHandlers: function() {         
        var self            = this,      
            doc             = document,
            blog            = doc.getElementsByClassName('blog'           ),
            music           = doc.getElementsByClassName('music'          ),
            art             = doc.getElementsByClassName('art'            );
        
        // We have multiple footers (one for each page), so we need to loop through each, and apply the link
        for (var i = 0; i < blog.length; i++) {
            blog[i] .addEventListener('click', self._openBlogPage , false);
        }
        
        for (var j = 0; j < music.length; j++) {
            music[j].addEventListener('click', self._openMusicPage, false);
        }
        
        for (var k = 0; k < art.length; k++) {
            art[k]  .addEventListener('click', self._openArtPage  , false);
        }
    },
    
    /* Connects all event handlers for external URLs for "Buy Now" buttons
    ********************************************************************************/
    wireBuyNowButtons: function(){
        var self          = this,
            doc           = document,
            charlieMurder = doc.getElementById('cm-btn'           ),
            vampireSmile  = doc.getElementById('vs-btn'           ),
            deadSamurai   = doc.getElementById('ds-btn'           ),
            timeViking    = doc.getElementById('tv-btn'           ),
            zp2kx         = doc.getElementById('zp2kx-btn'        ),
            zp2k9         = doc.getElementById('zp2k9-btn'        ),
            guitar        = doc.getElementById('guitar-btn'       ),
            zombies       = doc.getElementById('zombies-btn'      ),    
            zombiesPhone  = doc.getElementById('zombies-phone-btn');
        
            charlieMurder.addEventListener('click', self._openCharlieMurderPage, false);
            vampireSmile .addEventListener('click', self._openVampireSmilePage,  false);
            deadSamurai  .addEventListener('click', self._openDeadSamuraiPage,   false);
            timeViking   .addEventListener('click', self._openTimeVikingPage,    false);
            zp2kx        .addEventListener('click', self._openZp2kxPage,         false);
            zp2k9        .addEventListener('click', self._openZp2k9Page,         false);
            guitar       .addEventListener('click', self._openGuitarPage,        false);
            zombies      .addEventListener('click', self._openZombiesPage,       false);
            zombiesPhone .addEventListener('click', self._openZombiesPhonePage,  false);        
    },
    
    wireTwitterButtons: function(){
        var self            = this,
            doc             = document,
            jamesTwitter    = doc.getElementById('jamesTwitter'   ),
            michelleTwitter = doc.getElementById('michelleTwitter'),
            dustinTwitter   = doc.getElementById('dustinTwitter'  ),
            skaTwitter      = doc.getElementById('skaTwitter'     );
        
            jamesTwitter   .addEventListener('click', self._openJamesTwitterPage,    false),
            michelleTwitter.addEventListener('click', self._openMichelleTwitterPage, false),
            dustinTwitter  .addEventListener('click', self._openDustinTwiterPage,    false),
            skaTwitter     .addEventListener('click', self._openSkaTwitterPage,      false);

    },
  
     /* footer and header to remain on page at all times, and in fixed location
     ********************************************************************************/
    fixedHeaderAndFooter: function() {        
         // Grab header and footer from all pages    
         var $allFooters = $("div[data-role='footer']"),
             $allHeaders = $("div[data-role='header']");
                
        // Forces the header and footer to always remain on the page, rather than disappearing
        // If Toggle: true, bars disappear after a few seconds
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

    /* Opens links in a new windows
     ********************************************************************************/
    _openMusicPage: function() {
        window.open("http://music.ska-studios.com/", "_blank");
    },
    
    _openBlogPage: function() {
        window.open("http://ska-studios.com/", "_blank");    
    },
    
    _openArtPage: function() {
        window.open("http://ska-studios.com/the-art-unicorner/", "_blank");        
    },    
    
    _openJamesTwitterPage: function() {
        window.open("http://www.twitter.com/jamezila",    "_blank");
    },
    
    _openMichelleTwitterPage: function() {
        window.open("http://www.twitter.com/shelldragon", "_blank");
    },
    
    _openDustinTwiterPage: function() {
        window.open("http://www.twitter.com/superdunner", "_blank");
    },
    
    _openSkaTwitterPage: function() {
        window.open("http://www.twitter.com/skastudios", "_blank");
    },
    
    _openCharlieMurderPage: function() {
        window.open('http://marketplace.xbox.com/en-US/Product/Charlie-Murder/66acd000-77fe-1000-9115-d80258410b83', "blank");
    },
    
    _openVampireSmilePage: function() {
        window.open("http://www.vampiresmile.com/", "blank");
    },
    
    _openDeadSamuraiPage: function() {
         window.open('http://marketplace.xbox.com/en-US/Product/ZP2KX-Zombies-Pterodactyls/66acd000-77fe-1000-9115-d80258550732?DownloadType=Game#LiveZone"00-77fe-1000-9115-d80258410902', "blank");
    },
    
    _openTimeVikingPage: function() {
        window.open( "http://marketplace.xbox.com/en-US/Product/TIME-VIKING-ANDSPACERAPTOR/66acd000-77fe-1000-9115-d80258550e08", "blank");
    },
    
    _openZp2kxPage: function() {
        window.open("http://marketplace.xbox.com/en-US/Product/ZP2KX-Zombies-Pterodactyls/66acd000-77fe-1000-9115-d80258550732?DownloadType=Game#LiveZone", "blank");
    },
    
    _openZp2k9Page: function() {
        window.open("http://marketplace.xbox.com/en-US/Product/ZP2K9/66acd000-77fe-1000-9115-d802585501ba", "blank");
    },
    
    _openGuitarPage: function() {
        window.open("http://marketplace.xbox.com/en-US/Product/ZSX4-Guitarpocalypse/66acd000-77fe-1000-9115-d80258550129", "blank");
    },
    
     _openZombiesPage: function() {
        window.open("http://marketplace.xbox.com/en-US/Product/I-MAED-A-GAM3-W1TH-Z0MB1ES-1/66acd000-77fe-1000-9115-d802585502a6", "blank");
    },
    
    _openZombiesPhonePage: function() {
        window.open("http://www.windowsphone.com/en-us/store/app/z0mb1es-on-teh-ph0ne/eb52de06-ad4f-4433-b652-987255481eb0", "blank");
    },
}