System.register(["angular2/core", "./weather.data", "rxjs/Observable", "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, weather_data_1, Observable_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(_http) {
                    this._http = _http;
                }
                WeatherService.prototype.getWeatherItems = function () {
                    return weather_data_1.WEATHER_ITEMS;
                };
                WeatherService.prototype.addWeatherItem = function (weatherItem) {
                    weather_data_1.WEATHER_ITEMS.push(weatherItem);
                };
                WeatherService.prototype.searchWeatherData = function (cityName) {
                    return this._http.get('api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=<KEY>&units=metric')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVDLHdCQUFxQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUcsQ0FBQztnQkFFcEMsd0NBQWUsR0FBZjtvQkFDQyxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCx1Q0FBYyxHQUFkLFVBQWUsV0FBd0I7b0JBQ3RDLDRCQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELDBDQUFpQixHQUFqQixVQUFrQixRQUFnQjtvQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxHQUFHLFFBQVEsR0FBRywyQkFBMkIsQ0FBQzt5QkFDMUcsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSzt3QkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBcEJGO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXFCYixxQkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQsMkNBb0JDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1dFQVRIRVJfSVRFTVN9IGZyb20gXCIuL3dlYXRoZXIuZGF0YVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNle1xuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG5cdGdldFdlYXRoZXJJdGVtcygpIHtcblx0XHRyZXR1cm4gV0VBVEhFUl9JVEVNUztcblx0fVxuXG5cdGFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtOiBXZWF0aGVySXRlbSkge1xuXHRcdFdFQVRIRVJfSVRFTVMucHVzaCh3ZWF0aGVySXRlbSk7XG5cdH1cblxuXHRzZWFyY2hXZWF0aGVyRGF0YShjaXR5TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPScgKyBjaXR5TmFtZSArICcmQVBQSUQ9PEtFWT4mdW5pdHM9bWV0cmljJylcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSlcblx0XHRcdFx0fSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
