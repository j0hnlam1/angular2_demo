System.register(['angular2/core', "./weather-item"], function(exports_1, context_1) {
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
    var core_1, weather_item_1;
    var WeatherItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            WeatherItemComponent = (function () {
                function WeatherItemComponent() {
                }
                __decorate([
                    core_1.Input('item'), 
                    __metadata('design:type', weather_item_1.WeatherItem)
                ], WeatherItemComponent.prototype, "weatherItem", void 0);
                WeatherItemComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-item',
                        template: "\n        <article class=\"weather-element\">\n            <div class=\"col-1\">\n                <h3>{{weatherItem.cityName}}</h3>\n                <p class=\"info\">{{weatherItem.description}}</p>\n            </div>\n            <div class=\"col-2\">\n                <span class=\"temperature\">{{weatherItem.temperature}}\u00B0C</span>\n            </div>\n        </article>\n    ",
                        styleUrls: ['src/css/weather-item.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherItemComponent);
                return WeatherItemComponent;
            }());
            exports_1("WeatherItemComponent", WeatherItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtnQkFPQSxDQUFDO2dCQUxHO29CQUFDLFlBQUssQ0FBQyxNQUFNLENBQUM7O3lFQUFBO2dCQWxCbEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLG9ZQVVUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUUxQyxDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdURBT0MsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ3ZWF0aGVyLWVsZW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgIDxoMz57e3dlYXRoZXJJdGVtLmNpdHlOYW1lfX08L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiPnt7d2VhdGhlckl0ZW0uZGVzY3JpcHRpb259fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPnt7d2VhdGhlckl0ZW0udGVtcGVyYXR1cmV9fcKwQzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy93ZWF0aGVyLWl0ZW0uY3NzJ11cbiAgICAvLyBpbnB1dHM6IFsnd2VhdGhlckl0ZW06IGl0ZW0nXVxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVySXRlbUNvbXBvbmVudCB7XG4gICAgLy8gd2VhdGhlckl0ZW06IFdlYXRoZXJJdGVtO1xuICAgIEBJbnB1dCgnaXRlbScpIHdlYXRoZXJJdGVtOiBXZWF0aGVySXRlbTtcblxuICAgIC8vIGNvbnN0cnVjdG9yKCl7XG4gICAgLy8gXHR0aGlzLndlYXRoZXJJdGVtID0gbmV3IFdlYXRoZXJJdGVtKCdMb25kb24nLCAnUkFJTlknLCA4KTtcbiAgICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
