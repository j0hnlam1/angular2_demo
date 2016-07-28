System.register(["./weather-item"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var weather_item_1;
    var WEATHER_ITEMS;
    return {
        setters:[
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            exports_1("WEATHER_ITEMS", WEATHER_ITEMS = [
                new weather_item_1.WeatherItem('London', 'rainy', 6),
                new weather_item_1.WeatherItem('San Francisco', 'Cloudy', 15),
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFDYSxhQUFhOzs7Ozs7O1lBQWIsMkJBQUEsYUFBYSxHQUFrQjtnQkFDM0MsSUFBSSwwQkFBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLDBCQUFXLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUM7YUFFOUMsQ0FBQSxDQUFDIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci5kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5leHBvcnQgY29uc3QgV0VBVEhFUl9JVEVNUzogV2VhdGhlckl0ZW1bXSA9IFtcblx0bmV3IFdlYXRoZXJJdGVtKCdMb25kb24nLCAncmFpbnknLCA2KSxcblx0bmV3IFdlYXRoZXJJdGVtKCdTYW4gRnJhbmNpc2NvJywgJ0Nsb3VkeScsIDE1KSxcblxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
