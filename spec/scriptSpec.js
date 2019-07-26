// GoogleMap Tests
describe ("googleMap", function(){
    
   //  Testing for initMap function
   describe ("googleMapInit function", function(){
      
      // To check if the function initMap runs
      it("initMap function should return true", function(){
         expect(initMap()).toBe(true);
      }); 
      // To check if the map is displayed in the website (Manual check)
      // To check if the map is displaying the correct location as specified (Manual Check)

   }); 
   
   
   // Testing the geolocate function
   describe ("geoLocate Function", function(){
      
      // it("should return defined"), function(){
         
      //    infoWindow = new google.maps.InfoWindow;
      //    expect(geolocate(infoWindow, map)).toBeDefined();
      // }
      
      // To check if the error message runs
      it ("should return an alert message", function(){
         expect(geolocate()).toBe(alert("Geolocation is not enabled. You will now be transported to Singapore, an island city-state off Southern Malaysia."))
      });
      
   });
   
   
   // Testing the function for find me button 
   
      // To check the button should run the function on click
      // To check that the function does not return null
      // To check the return of the function is placed in the start location field
   
   
   
});
