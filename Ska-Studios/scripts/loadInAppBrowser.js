
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
    var app = new Application();
    app.run();
}

function Application() {}

$('#apache').click(function() {
    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
    ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
    ref.addEventListener('exit', function() { alert(event.type); });
    
});


Application.prototype = {
    
        run: function() {
                var that = this,
          	    console.log('run is called');

                openExternalInAppBrowser 	= document.getElementById("openExternalInAppBrowser"),
                openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser");
                      
                openExternalInAppBrowser.addEventListener(	 "click", that.openExternalInAppBrowser);
                openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
        },

 
        openExternalInAppBrowser:  function () {
            window.open("http://icenium.com", "_blank", 'location=yes');
            console.log('open external in app browser');
        },
    
        openExternalInSystemBrowser:function () {
            window.open("http://wiki.apache.org/cordova/InAppBrowser", "_system");
            console.log('open external in system browser');
        }
}