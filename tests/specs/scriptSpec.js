// GoogleMap Tests
describe("googleMap", function() {

   //  Testing for initMap function
   describe("googleMapInit function", function() {
      // Test if the function initMap runs
      it("initMap function should return true", function() {
         expect(initMap()).toBe(true);
      });
      // Test if the map is displayed in the website (Manual check)
      // Test if the map is displaying the correct location as specified (Manual Check)

   });


   // Testing the geolocate function
   describe("geolocate", function() {
      // Test that geolocate is not null or undefined
      it("geolocate() should not be null", function() {
         expect(geolocate()).not.toEqual(null);
      });

   });
   
   // Testing the handleLocationError
   describe("handleLocationError", function(){
      // Test if it returns the correct alert message
      it("handleLocationError should have an alert", function(){
         expect(handleLocationError()).toBe(alert("Please enable geolocation for the best experience."))
      });
   });
   
   
   // Testing the autocomplete function
   describe("autocomplete", function(){
      // Test that autocomplete is not null or undefined
      it("autocomplete should return a correct value", function(){
         expect(autocomplete()).not.toEqual(null)
      })
      
   })



   // Testing the function for find me button 

   // Test the button should run the function on click
   // Test that the function does not return null (Not.toBeNull())
   // Test the return of the function is placed in the start location field


   // Testing the auto-complete function
   // Test that the inputs autocomplete (Manually)

   // Testing the marker function
   // Check that the marker is placed (Manually)

   // Testing the search function

   // Test that the inputs are working
   describe("searchLocation", function() {
      // Test that searchLocation is not null or undefined
      it("searchLocation() should not be null", function() {
         let defaultPlace = new google.maps.LatLng(1.290270, 103.851959);
         expect(searchLocation(defaultPlace)).not.toEqual(null);
      });
      // Test that searchLocation returns the right inputs

   });

   // Testing the radiusAttractions function
   describe("radiusAttractions", function(){
      
      it("radiusAttractions () should not be null", function() {
      expect(radiusAttractions()).not.toEqual(null);
      });
      
   });




});
