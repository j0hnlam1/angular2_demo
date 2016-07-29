System.register(["angular2/core", "./profile.service", "./weather/weather.service", "./weather/weather-item"], function(exports_1, context_1) {
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
    var core_1, profile_service_1, weather_service_1, weather_item_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_profileService, _weatherService) {
                    this._profileService = _profileService;
                    this._weatherService = _weatherService;
                }
                SidebarComponent.prototype.onSaveNew = function () {
                    var cities = this._weatherService.getWeatherItems().map(function (element) {
                        return element.cityName;
                    });
                    this._profileService.saveNewProfile(cities);
                };
                SidebarComponent.prototype.onLoadProfile = function (profile) {
                    var _this = this;
                    this._weatherService.clearWeatherItems();
                    for (var i = 0; i < profile.cities.length; i++) {
                        this._weatherService.searchWeatherData(profile.cities[i])
                            .retry()
                            .subscribe(function (data) {
                            var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                            _this._weatherService.addWeatherItem(weatherItem);
                        });
                    }
                };
                SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
                    event.stopPropagation();
                    this._profileService.deleteProfile(profile);
                };
                SidebarComponent.prototype.ngOnInit = function () {
                    this.profiles = this._profileService.getProfiles();
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        template: "\n\t\t<h3>Saved Profiles</h3>\n\t\t<button (click)=\"onSaveNew()\">Save List to Profile</button>\n\t\t<article class='profile' *ngFor=\"#profile of profiles\" (click)=\"onLoadProfile(profile)\">\n\t\t\t<h4>{{ profile.profileName }}</h4>\n\t\t\t<p>Cities: {{ profile.cities.join(',')}}</p>\n\t\t\t<span class=\"delete\" (click)=\"onDeleteProfile($event, profile)\">X</span>\n\t\t</article>\t\n\t",
                        styleUrls: ['src/css/sidebar.css'],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdDLDBCQUFxQixlQUErQixFQUFVLGVBQStCO29CQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFHLENBQUM7Z0JBRWpHLG9DQUFTLEdBQVQ7b0JBQ0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxPQUFvQjt3QkFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFBOUIsaUJBWUM7b0JBWEEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7d0JBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDdkQsS0FBSyxFQUFFOzZCQUNQLFNBQVMsQ0FDVCxVQUFBLElBQUk7NEJBQ0gsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDNUYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ2xELENBQUMsQ0FDRCxDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFFRCwwQ0FBZSxHQUFmLFVBQWdCLEtBQVksRUFBRSxPQUFnQjtvQkFDN0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQztnQkFoREY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDRZQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUMzQixDQUFDOztvQ0FBQTtnQkFvQ0YsdUJBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELCtDQWtDQyxDQUFBIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGVcIjtcbmltcG9ydCB7UHJvZmlsZVNlcnZpY2V9IGZyb20gXCIuL3Byb2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVyU2VydmljZX0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1pdGVtXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8aDM+U2F2ZWQgUHJvZmlsZXM8L2gzPlxuXHRcdDxidXR0b24gKGNsaWNrKT1cIm9uU2F2ZU5ldygpXCI+U2F2ZSBMaXN0IHRvIFByb2ZpbGU8L2J1dHRvbj5cblx0XHQ8YXJ0aWNsZSBjbGFzcz0ncHJvZmlsZScgKm5nRm9yPVwiI3Byb2ZpbGUgb2YgcHJvZmlsZXNcIiAoY2xpY2spPVwib25Mb2FkUHJvZmlsZShwcm9maWxlKVwiPlxuXHRcdFx0PGg0Pnt7IHByb2ZpbGUucHJvZmlsZU5hbWUgfX08L2g0PlxuXHRcdFx0PHA+Q2l0aWVzOiB7eyBwcm9maWxlLmNpdGllcy5qb2luKCcsJyl9fTwvcD5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZGVsZXRlXCIgKGNsaWNrKT1cIm9uRGVsZXRlUHJvZmlsZSgkZXZlbnQsIHByb2ZpbGUpXCI+WDwvc3Bhbj5cblx0XHQ8L2FydGljbGU+XHRcblx0YCxcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2lkZWJhci5jc3MnXVxuXHRwcm92aWRlcnM6IFtQcm9maWxlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRwcm9maWxlczogUHJvZmlsZVtdO1xuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsIHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge31cblxuXHRvblNhdmVOZXcoKSB7XG5cdFx0Y29uc3QgY2l0aWVzID0gdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckl0ZW1zKCkubWFwKGZ1bmN0aW9uIChlbGVtZW50OiBXZWF0aGVySXRlbSl7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5jaXR5TmFtZTtcblx0XHR9KTtcblx0XHR0aGlzLl9wcm9maWxlU2VydmljZS5zYXZlTmV3UHJvZmlsZShjaXRpZXMpO1xuXHR9XG5cblx0b25Mb2FkUHJvZmlsZShwcm9maWxlOiBQcm9maWxlKXtcblx0XHR0aGlzLl93ZWF0aGVyU2VydmljZS5jbGVhcldlYXRoZXJJdGVtcygpO1xuXHRcdGZvciAobGV0IGk9MDsgaSA8IHByb2ZpbGUuY2l0aWVzLmxlbmd0aDsgaSsrKXtcblx0XHRcdHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKHByb2ZpbGUuY2l0aWVzW2ldKVxuXHRcdFx0XHQucmV0cnkoKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgd2VhdGhlckl0ZW0gPSBuZXcgV2VhdGhlckl0ZW0oZGF0YS5uYW1lLCBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGRhdGEubWFpbi50ZW1wKTtcblx0XHRcdFx0XHRcdHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0b25EZWxldGVQcm9maWxlKGV2ZW50OiBFdmVudCwgcHJvZmlsZTogUHJvZmlsZSl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5fcHJvZmlsZVNlcnZpY2UuZGVsZXRlUHJvZmlsZShwcm9maWxlKTtcblx0fVxuXG5cdG5nT25Jbml0KCl7XG5cdFx0dGhpcy5wcm9maWxlcyA9IHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVzKCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
