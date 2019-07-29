// To initialise Google Map
function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        // Fallback location for the map if geolocation is not enabled
        center: { lat: 1.290270, lng: 103.851959 },
        zoom: 10,
    });

    infoWindow = new google.maps.InfoWindow;

    // To enable geolocation
    geolocate(infoWindow, map)
    
    // To enable auto-complete
    autocomplete()

    return true;

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


// Function for find me button

$("#find-me").on("click", function() {

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
    });

    infoWindow = new google.maps.InfoWindow;

    // geolocation
    geolocate(infoWindow, map)

});



// Auto-complete function
function autocomplete() {

    // Autocomplete for start location
    var autocompleteSearch = $("#start-location")[0]
    new google.maps.places.Autocomplete(autocompleteSearch);

    // Autocomplete for search location
    var autocompleteSearch = $("#search-location")[0]
    new google.maps.places.Autocomplete(autocompleteSearch);

}
