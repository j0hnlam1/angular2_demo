System.register(['angular2/core', "./weather/weather-list.component", "./weather/weather-search.component"], function(exports_1, context_1) {
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
    var core_1, weather_list_component_1, weather_search_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_list_component_1_1) {
                weather_list_component_1 = weather_list_component_1_1;
            },
            function (weather_search_component_1_1) {
                weather_search_component_1 = weather_search_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n            <h1>Weather App</h1>\n            <h3>Angular 2 | Typescript</h3>\n        </header>\n        <weather-search></weather-search>\n        <weather-list></weather-list>\n    ",
                        directives: [weather_list_component_1.WeatherListComponent, weather_search_component_1.WeatherSearchComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsOE1BT1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsaURBQXNCLENBQUM7cUJBQzdELENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1dlYXRoZXJMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXItbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7V2VhdGhlclNlYXJjaENvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLXNlYXJjaC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+V2VhdGhlciBBcHA8L2gxPlxuICAgICAgICAgICAgPGgzPkFuZ3VsYXIgMiB8IFR5cGVzY3JpcHQ8L2gzPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHdlYXRoZXItc2VhcmNoPjwvd2VhdGhlci1zZWFyY2g+XG4gICAgICAgIDx3ZWF0aGVyLWxpc3Q+PC93ZWF0aGVyLWxpc3Q+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbV2VhdGhlckxpc3RDb21wb25lbnQsIFdlYXRoZXJTZWFyY2hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
