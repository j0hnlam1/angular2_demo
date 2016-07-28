System.register(["angular2/core", "./weather-item.component", "./weather.service"], function(exports_1, context_1) {
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
    var core_1, weather_item_component_1, weather_service_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = this._weatherService.getWeatherItems();
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n        <section class=\"weather-list\">\n            <weather-item *ngFor=\"#weatherItem of weatherItems\" [item]=\"weatherItem\"></weather-item>\n        </section>\n    ",
                        directives: [weather_item_component_1.WeatherItemComponent],
                        providers: [weather_service_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUlDLDhCQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFHLENBQUM7Z0JBRXZELHVDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM1RCxDQUFDO2dCQWxCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsZ0xBSVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7d0JBQ2xDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzlCLENBQUM7O3dDQUFBO2dCQVVGLDJCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1REFTQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5pbXBvcnQge1dFQVRIRVJfSVRFTVN9IGZyb20gXCIuL3dlYXRoZXIuZGF0YVwiO1xuaW1wb3J0IHtXZWF0aGVyU2VydmljZX0gZnJvbSBcIi4vd2VhdGhlci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHsgXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VhdGhlci1saXN0XCI+XG4gICAgICAgICAgICA8d2VhdGhlci1pdGVtICpuZ0Zvcj1cIiN3ZWF0aGVySXRlbSBvZiB3ZWF0aGVySXRlbXNcIiBbaXRlbV09XCJ3ZWF0aGVySXRlbVwiPjwvd2VhdGhlci1pdGVtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbV2VhdGhlckl0ZW1Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1dlYXRoZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vIHdlYXRoZXJJdGVtczogV2VhdGhlckl0ZW1bXSA9IFdFQVRIRVJfSVRFTVM7XG5cdHdlYXRoZXJJdGVtczogV2VhdGhlckl0ZW1bXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHt9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMud2VhdGhlckl0ZW1zID0gdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckl0ZW1zKCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
