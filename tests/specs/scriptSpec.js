// GoogleMap Tests
describe("googleMap", function() {

   //  Testing for initMap function
   describe("googleMap Init function", function() {
      // Test if the function initMap runs
      it("initMap function should return true", function() {
         expect(initMap()).toBe(true);
      });

   });

   // Testing the handleLocationError function
   describe("handleLocationError", function() {

      // Test if the alert message is called if browser does not support geolocation
      it("should return an error if browser does not support geolocation", function() {
         spyOn(window, "alert");
         handleLocationError(false);
         expect(window.alert).toHaveBeenCalledWith("This browser doesn't support geolocation and the 'Locate Me' button will not work");
      });

   });

});
