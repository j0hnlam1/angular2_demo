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
                WeatherService.prototype.clearWeatherItems = function () {
                    weather_data_1.WEATHER_ITEMS.splice(0);
                };
                WeatherService.prototype.searchWeatherData = function (cityName) {
                    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=|||||||key|||||||<<&units=metric')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], WeatherService);
                return WeatherService;
                var _a;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVJLHdCQUFxQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUcsQ0FBQztnQkFFcEMsd0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx1Q0FBYyxHQUFkLFVBQWUsV0FBd0I7b0JBQ25DLDRCQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELDBDQUFpQixHQUFqQjtvQkFDSSw0QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsUUFBZ0I7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsR0FBRyxRQUFRLEdBQUcseUNBQXlDLENBQUM7eUJBQzVILEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxVQUFBLEtBQUs7d0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO29CQUN6QyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQXhCTDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkF5QmIscUJBQUM7O1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCwyQ0F3QkMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7V0VBVEhFUl9JVEVNU30gZnJvbSBcIi4vd2VhdGhlci5kYXRhXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge1dlYXRoZXJJdGVtfSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW1cIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZXtcblx0XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBnZXRXZWF0aGVySXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBXRUFUSEVSX0lURU1TO1xuICAgIH1cblxuICAgIGFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtOiBXZWF0aGVySXRlbSkge1xuICAgICAgICBXRUFUSEVSX0lURU1TLnB1c2god2VhdGhlckl0ZW0pO1xuICAgIH1cblxuICAgIGNsZWFyV2VhdGhlckl0ZW1zKCkge1xuICAgICAgICBXRUFUSEVSX0lURU1TLnNwbGljZSgwKTtcbiAgICB9XG5cbiAgICBzZWFyY2hXZWF0aGVyRGF0YShjaXR5TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JyArIGNpdHlOYW1lICsgJyZBUFBJRD18fHx8fHx8a2V5fHx8fHx8fDw8JnVuaXRzPW1ldHJpYycpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
