(function (global) {
    var map,
        geocoder,
        lastMarker,
        isLoading = false,
        $address;

    function init() {
        $address = $("#map-address");

        $("#page-location").on("pageinit", initLocation);
        //show loading mask in case the location lot fount yet 
        //and user returns to the page
        $("#page-location").on("pageshow", showPage);
        //hide loading mask when user leaves the mage and it is only relevant to location
        $("#page-location").on("pagehide", hidePage);

        $("#map-navigate-home").on("click", navigateHome);
        $("#map-search").on("click", searchAddress);
    }

    $(document).on("deviceready", init);

    function initLocation() {
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },

            mapTypeControl: false,
            streetViewControl: false
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        geocoder = new google.maps.Geocoder();
        navigateHome();
    }

    function navigateHome() {
        var position;

        isLoading = true;
        showPage();

        navigator.geolocation.getCurrentPosition(
            function (position) {
                position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.panTo(position);
                putMarker(position);

                isLoading = false;
                hidePage();
            },
            function (error) {
                //default map coordinates
                position = new google.maps.LatLng(43.459336, -80.462494);
                map.panTo(position);

                isLoading = false;
                hidePage();

                navigator.notification.alert("Unable to determine current location. Cannot connect to GPS satellite.",
                    function () { }, "Location failed", 'OK');
            },
            {
                timeout: 30000,
                enableHighAccuracy: true
            }
            );
    }

    function searchAddress() {
        var address = $address.val();

        geocoder.geocode(
            {
                'address': address
            },
            function (results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    navigator.notification.alert("Unable to find address.",
                        function () { }, "Search failed", 'OK');

                    return;
                }

                map.panTo(results[0].geometry.location);
                putMarker(results[0].geometry.location);
            });
    }

    function showPage() {
        if (isLoading) {
            $.mobile.loading("show");
        }

        google.maps.event.trigger(map, "resize");
    }

    function hidePage() {
        $.mobile.loading("hide");
    }

    function putMarker(position) {
        if (lastMarker !== null && lastMarker !== undefined) {
            lastMarker.setMap(null);
        }

        lastMarker = new google.maps.Marker({
            map: map,
            position: position
        });
    }
})(window);