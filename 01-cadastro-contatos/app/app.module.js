"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("./util/rxjs-extensions");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var contatos_module_1 = require("./contatos/contatos.module");
var dialog_service_1 = require("./dialog.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var in_memory_data_service_1 = require("./in-memory-data.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var core_1 = require("@angular/core");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routing_module_1.AppRoutingModule,
            platform_browser_1.BrowserModule,
            contatos_module_1.ContatosModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            dialog_service_1.DialogService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map