System.register(["angular2/core", "./weather.service", "./weather-item"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1, weather_item_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherSearchComponent.prototype.onSubmit = function (form) {
                    // console.log(form);
                    this._weatherService.searchWeatherData(form.value.location)
                        .subscribe(function (data) {
                        var weatherItem = new weather_item_1.WeatherItem();
                    });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n\t\t<section class=\"weather-search\">\n\t\t\t<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\t\t\t\t<label for=\"city\">City</label>\n\t\t\t\t<input ngControl=\"location\" type=\"text\" id=\"city\" required>\n\t\t\t\t<button type=\"submit\">Add City</button>\n\t\t\t</form>\n\t\t\t<div>\n\t\t\t\t<span class=\"info\">City found:</span> City Name\n\t\t\t</div>\n\t\t</section>\n\t",
                        providers: [weather_service_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUNDLGdDQUFxQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFHLENBQUM7Z0JBQ3hELHlDQUFRLEdBQVIsVUFBUyxJQUFrQjtvQkFDMUIscUJBQXFCO29CQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO3lCQUMxRCxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFBO29CQUN0QyxDQUFDLENBQ0QsQ0FBQztnQkFDSCxDQUFDO2dCQTFCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxrWUFXVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUMzQixDQUFDOzswQ0FBQTtnQkFZRiw2QkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsMkRBV0MsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7V2VhdGhlclNlcnZpY2V9IGZyb20gXCIuL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3ZWF0aGVyLXNlYXJjaCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJ3ZWF0aGVyLXNlYXJjaFwiPlxuXHRcdFx0PGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cImNpdHlcIj5DaXR5PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IG5nQ29udHJvbD1cImxvY2F0aW9uXCIgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiByZXF1aXJlZD5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIENpdHk8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiaW5mb1wiPkNpdHkgZm91bmQ6PC9zcGFuPiBDaXR5IE5hbWVcblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0YCxcblx0cHJvdmlkZXJzOiBbV2VhdGhlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZWFyY2hDb21wb25lbnR7XG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHt9XG5cdG9uU3VibWl0KGZvcm06IENvbnRyb2xHcm91cCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKGZvcm0pO1xuXHRcdHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKGZvcm0udmFsdWUubG9jYXRpb24pXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRjb25zdCB3ZWF0aGVySXRlbSA9IG5ldyBXZWF0aGVySXRlbSgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
