/* Creates animations for introducing / removing objects on page
 * ©Dave Voyles & Ska Studios, 2013
 */

document.addEventListener('deviceready', function () {
    // Add header and footer to each page
    //alert("Hey!  Pay attention!");
    //$('.top-header').load("header.html");
    //$('.footer').load("footer.html");
        
    var $allPages   = $("div[data-role='page']");
    var $allFooters = $("div[data-role='footer']");
    var $allHeaders = $("div[data-role='header']");

    
    // Forces the header and footer to always remain on the page, rather than disappearing
    $allHeaders.fixedtoolbar({ tapToggle: false });
    $allFooters.fixedtoolbar({ tapToggle: false });
    
     // Applies padding to top of screen to adjust for the iOS7 error
     // http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/
    if (parseFloat(window.device.version) >= 7.0 ) {
         document.body.style.marginTop = "200px";
       //$allPages.css('margin-top', '10px');
         $allHeaders.css( "margin-top", "20px" );       
    }
      
    
});
