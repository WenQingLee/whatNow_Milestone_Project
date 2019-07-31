// To initialise Google Map
function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        // Fallback location for the map if geolocation is not enabled
        center: { lat: 1.290270, lng: 103.851959 },
        zoom: 10,
    });

    infoWindow = new google.maps.InfoWindow;

    // To enable geolocation
    geolocate(infoWindow, map);

    // To enable auto-complete
    autocomplete();

    return true;

}


// To create markers on the map
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}


/*  
*   To get the user's location
*   @param infowindow , map
*   Precondition: 
*   infowindow: must be defined
*   map: must be defined
*   Post condition:
*   geolocate: must return
@   return google map location
*/
function geolocate(infoWindow, map) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow);
        });
    }
    else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow);
    }

}


/*  To handle browsers that don't support geolocation
 *   Return error Message
 */
function handleLocationError() {
    // Alert message to key in the origin and destinations manually
    $("#find-me").append("Google Map will not work properly as geolocation is not supported in this browser")
    alert("Geolocation is not supported by this browser.")
}

//  To auto-complete entries into the start and search location fields
function autocomplete() {

    //  Autocomplete for start location
    let autocompleteStart = $("#start-location")[0];
    var autocompletedStart = new google.maps.places.Autocomplete(autocompleteStart);

    //  Autocomplete for search location
    let autocompleteSearch = $("#search-location")[0];
    var autocompletedSearch = new google.maps.places.Autocomplete(autocompleteSearch);

}


//  To locate the user's position if geolocation is enabled
$("#find-me").on("click", function() {

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
    });

    infoWindow = new google.maps.InfoWindow;

    // geolocation
    geolocate(infoWindow, map)

});


// To search based on user input with the search button
$("#search-button").on("click", function() {

    let defaultPlace = new google.maps.LatLng(1.290270, 103.851959);

    infowindow = new google.maps.InfoWindow();

    searchLocation(defaultPlace);

    radiusAttractions();


});


// To search based on user input
function searchLocation(defaultPlace) {
    map = new google.maps.Map(
        document.getElementById('map'), { center: defaultPlace, zoom: 15 });

    var request = {
        query: $("#search-location").val(),
        fields: ['name', 'geometry'],
    };

    service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
        }
    });

}


// to locate nearby attractions
function radiusAttractions() {


    geocoder = new google.maps.Geocoder();

    let searchAddress = $("#search-location").val()

    geocoder.geocode({ "address": searchAddress }, function(results, status) {
        if (status == "OK") {
            let searchLat = results[0].geometry.location.lat();
            let searchLng = results[0].geometry.location.lng();

            let searchLoc = new google.maps.LatLng(searchLat, searchLng);

            // To determine the radio button depressed
            var searchType;
            if ($("#lodging").is(":checked")) {
                alert("lodging is checked")
                let searchType = ["lodging"];
                console.log(searchType)
                // To find nearby searches
                var request = {
                    location: searchLoc,
                    radius: $("#search-radius").val(),
                    type: searchType
                };

                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);
            }
            else if ($("#attractions").is(":checked")) {
                alert("attractions is checked")
                let searchType = ["museum"];
                console.log(searchType)
                // To find nearby searches
                var request = {
                    location: searchLoc,
                    radius: $("#search-radius").val(),
                    type: searchType
                };

                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);
            }
            else if ($("#restaurant").is(":checked")) {
                alert("restaurant is checked")
                let searchType = ["restaurant"];
                console.log(searchType)
                // To find nearby searches
                var request = {
                    location: searchLoc,
                    radius: $("#search-radius").val(),
                    type: searchType
                };

                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);
            }

            console.log(searchType);




        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }

    });

}


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        }
    }
}
