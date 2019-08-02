// // Declaring the global variable map for testing
// let map = {};

// To initialise Google Map
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        // Fallback location for the map if geolocation is not enabled
        center: { lat: 1.290270, lng: 103.851959 },
        zoom: 10,
    });

    infoWindow = new google.maps.InfoWindow;

    // To enable geolocation
    geolocate(infoWindow, map);

    // To enable auto-complete
    autocomplete();

    // Used for Jasmine Testing
    return true;

}


// To create markers on the map
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

// To create markers on the map
function createNearbyMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/' + 'info-i_maps.png',
        animation: google.maps.Animation.DROP,
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
    alert("Please enable geolocation for the best experience.")
}


//  To auto-complete entries into the start and search location fields
function autocomplete() {

    //  Autocomplete for search location
    let autocompleteSearch = $("#search-location")[0];
    var autocompletedSearch = new google.maps.places.Autocomplete(autocompleteSearch);

}


// To search based on user input with the search button
$("#search-button").on("click", function() {

    let defaultPlace = new google.maps.LatLng(1.290270, 103.851959);

    infowindow = new google.maps.InfoWindow();

    resetDisplay();

    searchLocation(defaultPlace);

    radiusAttractions();

});


// To search based on user input
function searchLocation(defaultPlace) {
    map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15 });

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

            let searchType = typeCheck();

            var request = {
                location: searchLoc,
                radius: $("#search-radius").val(),
                type: searchType,
                rankBy: google.maps.places.RankBy.PROMINENCE,
            };

            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, nearbyMarkers);

        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }

    });

}


// To create the markers for nearby attractions
function nearbyMarkers(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];

            // append the details of the results in the display
            let num = i + 1;

            $("#display-results").append("<tr><td>" + num + "</td>" + "<td>" + place.name + "</td>" + "<td>" + place.vicinity + "</td>" + "<td>" + place.rating + "</td></tr>")

            createNearbyMarker(results[i]);
        }
    }
}


// To check the search radio button selected
function typeCheck() {
    if ($("#lodging").is(":checked")) {
        return $("#lodging").val();
    }
    else if ($("#museum").is(":checked")) {
        return $("#museum").val();
    }
    else if ($("#art-gallery").is(":checked")) {
        return $("#art-gallery").val();
    }
    else if ($("#restaurant").is(":checked")) {
        return $("#restaurant").val();
    }
    else if ($("#shopping-mall").is(":checked")) {
        return $("#shopping-mall").val();
    }

}


// $("#reset-button").on("click", function() {

//     resetDisplay();
//     clearMarkers();

// });


function resetDisplay() {
    $("#display-results").empty()
}


// function clearMarkers() {
//  for (var i = 0; i < markers.length; i++) {
//   if (markers[i]) {
//   markers[i].setMap(null);
//   }
//  }
//  markers = [];
// }
