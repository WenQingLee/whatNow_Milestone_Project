// Higher order functions for googlemap initialisation and form buttons

// To initialise Google Map, show the user's location and let the search location field be auto-completed
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        // Fallback location for the map if geolocation is not enabled
        center: { lat: 1.290270, lng: 103.851959 },
        zoom: 10,
    });

    infoWindow = new google.maps.InfoWindow;

    // To find user's location and place an infowindow
    geolocate(infoWindow, map, geolocateResult);

    // To enable auto-complete in the search location input field
    autocomplete();

    // Used for Jasmine Testing
    return true;

}

// For the locate me button that will place the address of the user's current location into the search location input field
$("#locate-me-button").on("click", function() {

    geolocateResult();

});

// To reset the results display and search the nearby attractions on user input with the search button
$("#search-button").on("click", function() {

    resetDisplay();

    // Sucesss and Error handling for user input fields
    if ($("#search-location").val() && $("#search-radius").val() && $("#search-radius").val() > 0 && $("#search-radius").val() <= 50000) {

        infowindow = new google.maps.InfoWindow();

        // To place the user's location on the map
        searchLocation();

        // To find the nearby attractions based on user's inputs
        radiusAttractions();

    }
    else {

        alert("Please fill up both the search location and radius of search (between 0 to 50,000) before searching");
    }


});

// To toggle the show/hide details button to display/hide the search details
$("#show-details").on("click", function() {
    if ($(".display")[0].style.height === "0px") {
        $(".display")[0].style.height = "600px";
    }
    else {
        $(".display")[0].style.height = "0px";
    }
});

// Supporting functions for google map initialisation and form buttons

// To find the user's location and place an infowindow on the map
function geolocate(infoWindow, map, geolocateResult) {

    // If geolocation is enabled/supported, to show user's location on the map
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
            handleLocationError(true);
        });
    }
    else {
        handleLocationError(false);
    }

}

//  To return error alerts if geolocation is not enabled or if the browser don't support geolocation
function handleLocationError(browserHasGeoLocation) {
    // If, else ternary function to show alert message accordingly
    browserHasGeoLocation ?
        alert("Please enable geolocation for the best experience and for the 'Locate Me' button to work.") :
        alert("This browser doesn't support geolocation and the 'Locate Me' button will not work");
    // To remove the locate-me button if geolocation is not enabled or supported
    $("#locate-me-button")[0].remove();

}

//  To auto-complete entries into search location input field
function autocomplete() {

    //  Autocomplete for search location
    let autocompleteSearch = $("#search-location")[0];
    var autocompletedSearch = new google.maps.places.Autocomplete(autocompleteSearch);

}

// Use geolocation to obtain a human-readable address and place it as an input for the search location input
function geolocateResult() {

    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.lat + "," + pos.lng + "&key=AIzaSyDoEv5jmhi5Iw1bPJTBGAEAWUsS-BQnBro")
            .then(function(response) {
                let result = response.data.results[0].formatted_address;
                $("#search-location").val(result)
            });

    });

}

//To reset the display in the display results table
function resetDisplay() {

    $("#display-results").empty()

}

// To find the location based on user input and place a marker
function searchLocation() {
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

// To create the search location and show the user position as a marker on the map
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: "images/icons/position.png"
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

// To locate nearby attractions based on the user input location
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

// To check the type of search radio button selected
function typeCheck() {

    if ($("#lodging").is(":checked")) {
        return $("lodging").val();
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

// To create the markers and append the details of the results in the display for nearby attractions
function nearbyMarkers(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];

            // append the details of the results in the display
            let num = i + 1;

            $("#display-results").append("<tr><td>" + num + "</td>" + "<td>" + place.name + "</td>" + "<td>" + place.vicinity + "</td>" + "<td>" + place.rating + "</td></tr>")

            createNearbyMarker(place, num);
        }
    }
}

// To create markers and infowindows on the map for the nearby attractions
function createNearbyMarker(place, num) {

    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
        icon: {
            url: iconType(),
            labelOrigin: new google.maps.Point(18, 8)
        },
        label: {
            text: num.toString(),
            fontWeight: "bold"
        }
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent("<div><strong>" + place.name + "</strong><br />" + "Address: " + place.vicinity + "<br />" + "Rating (Out of 5): " + place.rating + "</div>");
        infowindow.open(map, this);
    });
}

// To select the icon type to display as a marker based on type of search radio button selected
function iconType() {

    if ($("#lodging").is(":checked")) {
        return "images/icons/lodging.png";
    }
    else if ($("#museum").is(":checked")) {
        return "images/icons/museum.png";
    }
    else if ($("#art-gallery").is(":checked")) {
        return "images/icons/art-gallery.png";
    }
    else if ($("#restaurant").is(":checked")) {
        return "images/icons/restaurant.png";
    }
    else if ($("#shopping-mall").is(":checked")) {
        return "images/icons/shopping-mall.png";
    }

}
