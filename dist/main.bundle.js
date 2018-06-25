webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_knowledge_knowledge_component__ = __webpack_require__("../../../../../src/app/components/knowledge/knowledge.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'privacy-policy',
        component: __WEBPACK_IMPORTED_MODULE_3__components_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
    },
    {
        path: 'knowledge',
        component: __WEBPACK_IMPORTED_MODULE_4__components_knowledge_knowledge_component__["a" /* KnowledgeComponent */],
    },
    {
        path: '**',
        redirectTo: 'HomeComponent',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(appRoutes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n<cookie-law learnMore=\"/privacy-policy\"></cookie-law>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'pwapp';
        var currentRoute = this.router.url;
        // this.router.events.subscribe((event) => {
        //   if (event instanceof NavigationEnd) {
        //     ga('set', 'page', event.urlAfterRedirects);
        //     ga('send', 'pageview');
        //   }
        // });
        // this.oauthService.redirectUri = window.location.origin;
        // this.oauthService.clientId = environment.okta.clientId;
        // this.oauthService.scope = 'openid profile email';
        // this.oauthService.issuer = environment.okta.issuer;
        // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        // this.oauthService.setStorage(localStorage);
        // // Load Discovery Document and then try to login the user
        // this.oauthService.loadDiscoveryDocument().then(() => {
        //   this.oauthService.tryLogin({
        //     onTokenReceived: (info) => {
        //       this.router.navigate([info.state]);
        //     }
        //   });
        // });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_law__ = __webpack_require__("../../../../angular2-cookie-law/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interceptors_response_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/response.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_google_analytics_events_service__ = __webpack_require__("../../../../../src/app/services/google-analytics-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_lookup_service__ = __webpack_require__("../../../../../src/app/services/lookup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_http_client_service__ = __webpack_require__("../../../../../src/app/services/http-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_sort_helper__ = __webpack_require__("../../../../../src/app/helpers/sort.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_global_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/_global/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_components_sidebar_sidebar__ = __webpack_require__("../../../../primeng/components/sidebar/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_components_sidebar_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_components_sidebar_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_global_snack_bar_snack_bar_component__ = __webpack_require__("../../../../../src/app/components/_global/snack-bar/snack-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_global_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/_global/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_knowledge_knowledge_component__ = __webpack_require__("../../../../../src/app/components/knowledge/knowledge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// PrimeNG forgot to add shortcode for SidebarModule, add it in separately for now






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_global_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_global_snack_bar_snack_bar_component__["a" /* SnackBarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_global_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_knowledge_knowledge_component__["a" /* KnowledgeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_category_category_component__["a" /* CategoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["z" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["G" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_law__["a" /* CookieLawModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_components_sidebar_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_19_angular_oauth2_oidc__["OAuthModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_http_client_service__["a" /* HttpClientService */], __WEBPACK_IMPORTED_MODULE_11__services_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */], __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_lookup_service__["a" /* LookupService */], __WEBPACK_IMPORTED_MODULE_15__helpers_sort_helper__["a" /* SortHelper */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_8__interceptors_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__interceptors_response_interceptor__["a" /* ResponseInterceptor */], multi: true },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_25__components_global_snack_bar_snack_bar_component__["a" /* SnackBarComponent */], __WEBPACK_IMPORTED_MODULE_28__components_category_category_component__["a" /* CategoryComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/_global/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <br />\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/_global/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .footer {\n  padding-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_global/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/_global/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/_global/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/_global/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-nav\">\n  <div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div class=\"logo\" fxFlex=\"45\">\n      <a routerLink=\"/\">Knowledge Audit</a>\n    </div>\n\n    <div class=\"login\" *ngIf=\"!givenName\">\n      <button mat-raised-button color=\"accent\" (click)=\"login()\">Login</button>\n    </div>\n\n    <div class=\"nav-menu\" fxFlex=\"45\" *ngIf=\"givenName\">\n      <button class=\"nav-menu-trigger\" mat-button [matMenuTriggerFor]=\"navMenu\" disableRipple>\n        <span class=\"employee-thumb\">\n        <img src=\"../assets/images/employees/noPhoto.jpg\" onError=\"this.style='display: none;'\">\n          <!--<img src=\"https://s3.amazonaws.com/pw-static-assets-web/employee-images/{{userId}}.jpg\" onError=\"this.style='display: none;'\">-->\n      </span>\n        {{givenName}}\n      </button>\n      <mat-menu #navMenu=\"matMenu\" [overlapTrigger]=\"false\">\n        <button mat-menu-item (click)=\"navigateToLink('style-guide')\">P+W Style Guide</button>\n        <button mat-menu-item (click)=\"navigateToLink('privacy-policy')\">Privacy Policy</button>\n        <button mat-menu-item class=\"logout\" (click)=\"logout()\">Logout</button>\n      </mat-menu>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/_global/nav-bar/nav-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .top-nav {\n  background-color: #061C3F;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.22);\n  margin-bottom: 20px; }\n  /deep/ .top-nav .container {\n    padding: 15px; }\n  /deep/ .top-nav .logo {\n    display: inline-block; }\n    /deep/ .top-nav .logo a {\n      font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n      font-weight: 300;\n      font-size: 30px;\n      color: white; }\n  /deep/ .top-nav .login {\n    color: #FFF; }\n  /deep/ .top-nav .nav-menu {\n    text-align: right; }\n    /deep/ .top-nav .nav-menu .nav-menu-trigger {\n      color: #FFF;\n      font-weight: normal;\n      margin-right: 5px; }\n      /deep/ .top-nav .nav-menu .nav-menu-trigger .employee-thumb {\n        top: 0;\n        left: -8px; }\n      /deep/ .top-nav .nav-menu .nav-menu-trigger:after {\n        content: '\\E5C5';\n        font-family: \"Material Icons\";\n        font-size: 20px;\n        position: absolute;\n        top: 0px;\n        right: -6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_global/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    function NavBarComponent(router, oauthService) {
        this.router = router;
        this.oauthService = oauthService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NavBarComponent.prototype, "givenName", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims) {
                return null;
            }
            return claims['name'];
        },
        enumerable: true,
        configurable: true
    });
    NavBarComponent.prototype.login = function () {
        this.oauthService.initImplicitFlow('/architects');
    };
    NavBarComponent.prototype.logout = function () {
        this.oauthService.logOut();
    };
    NavBarComponent.prototype.navigateToLink = function (link) {
        this.router.navigate(['/' + link]);
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/components/_global/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/_global/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__["OAuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/_global/snack-bar/snack-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{data}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/_global/snack-bar/snack-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .mat-snack-bar-container.pwapp-snackbar {\n  background-color: #00B1DF; }\n  /deep/ .mat-snack-bar-container.pwapp-snackbar p {\n    font-size: 13px; }\n\n@media screen and (min-width: 600px) {\n  /deep/ .mat-snack-bar-container.pwapp-snackbar p {\n    font-size: 15px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_global/snack-bar/snack-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SnackBarComponent = (function () {
    function SnackBarComponent(data) {
        this.data = data;
    }
    SnackBarComponent.prototype.ngOnInit = function () {
    };
    SnackBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-snack-bar',
            template: __webpack_require__("../../../../../src/app/components/_global/snack-bar/snack-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/_global/snack-bar/snack-bar.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_SNACK_BAR_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], SnackBarComponent);
    return SnackBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title><h2>Categories Detail</h2>\n    <div class=\"actions\">\n        <button   class=\"close\" (click)=\"close()\">\n                <i class=\"material-icons\">\n                        clear\n                        </i>\n        </button>\n    </div>\n</div>\n\n<mat-dialog-content>\n    <div class=\"splitter_container\">\n        <div class=\"left_container\">\n            <div class=\"category_title\" *ngFor = \"let lkup of LkupData.Categories; let catindex = index\" (click)=\"selectCategory(catindex)\">\n                <div [class]=\"catindex == selectedMainCategoryIndex ? 'selected' : ''\">{{lkup.CategoryName}}</div>\n            </div>\n        </div>\n        <div class=\"right_container\">\n\n            <div class=\"sub_category\" *ngFor= \"let subcat of selectedMainCategory.SubCategories\">\n                <div *ngIf=\"subcat.Type == 'Single'\">\n                        <mat-form-field>\n                                <!-- <label>{{subcat.SubCategoryName}}</label> -->\n                            <mat-select placeholder=\"{{subcat.SubCategoryName}}\">\n                                <mat-option *ngFor=\"let data of subcat.Data\" [value]=\"data.Value\">\n                                    {{ data.Value }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field> \n                </div> \n                <div *ngIf=\"subcat.Type == 'Multiple'\">\n                        <mat-form-field>\n                                <!-- <label>{{subcat.SubCategoryName}}</label> -->\n                            <mat-select placeholder=\"{{subcat.SubCategoryName}}\" multiple>\n                                    <mat-option *ngFor=\"let data of subcat.Data\" [value]=\"data.Value\">\n                                        {{ data.Value }}\n                                    </mat-option>\n                            </mat-select>\n                        </mat-form-field> \n                </div>\n                <div *ngIf=\"subcat.Type == 'Employees'\">\n                        <mat-form-field>\n                                <!-- <label>{{subcat.SubCategoryName}}</label> -->\n                            <mat-select placeholder=\"{{subcat.SubCategoryName}}\" multiple>\n                                    <mat-option *ngFor=\"let data of leaders\" [value]=\"data.ID\">\n                                        {{ data.FirstName }} {{ data.LastName }}\n                                    </mat-option>\n                            </mat-select>\n                        </mat-form-field> \n                </div>\n                <div *ngIf=\"subcat.Type == 'Text'\">\n                    <mat-form-field class=\"example-full-width\">\n                        <!-- <label>{{subcat.SubCategoryName}}</label> -->\n                        <input matInput placeholder=\"{{subcat.SubCategoryName}}\">\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" class=\"actionbtn\" (click)=\"goPrev()\" [disabled]=\"selectedMainCategoryIndex == 0\">Prev</button>\n    <button mat-raised-button color=\"primary\" class=\"actionbtn\" (click)=\"goNext()\" [disabled]=\"selectedMainCategoryIndex == LkupData.Categories.length-1\">Next</button>\n    <button mat-raised-button color=\"primary\" class=\"actionbtn\" (click)=\"save()\">Save</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .splitter_container {\n  width: 100%;\n  padding: 5px; }\n\n/deep/ .left_container {\n  width: 25%;\n  border-right: 1px solid #ccc;\n  float: left; }\n\n/deep/ .right_container {\n  width: 75%;\n  float: left;\n  padding: 10px; }\n\n/deep/ .selected {\n  font-weight: bold;\n  color: #00B1DF; }\n\n/deep/ .mat-form-field {\n  width: 100%;\n  font-size: 15px; }\n\n/deep/ .mat-dialog-container {\n  padding: 0 !important; }\n\n/deep/ .mat-dialog-title {\n  background: #f1f1f1;\n  padding: 10px; }\n\n/deep/ .actions {\n  position: absolute;\n  top: 0;\n  right: 10px; }\n\n/deep/ .actions button {\n  border: none; }\n\n/deep/ button.close {\n  padding: 10px;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  color: gray;\n  font-size: 20px; }\n\n/deep/ .category_title {\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  cursor: pointer; }\n\n/deep/ .mat-dialog-actions {\n  padding: 10px;\n  float: right; }\n\n/deep/ .mat-dialog-actions:last-child {\n  margin-bottom: 0; }\n\n/deep/ .actionbtn {\n  box-shadow: none !important; }\n\n/deep/ .mat-raised-button.mat-primary {\n  background-color: #60c560;\n  border-color: #60c560;\n  color: #fff; }\n\n/deep/ .fieldCls {\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lookup_service__ = __webpack_require__("../../../../../src/app/services/lookup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CategoryComponent = (function () {
    function CategoryComponent(dialogRef, data, lkupservice) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.lkupservice = lkupservice;
        this.LkupData = { Categories: [] };
        this.EmployeeData = [];
        this.leaders = [];
        this.brokers = [];
        this.stakeholders = [];
        this.selectedMainCategory = { SubCategories: [] };
        this.selectedMainCategoryIndex = 0;
        this.lkupservice.getData().subscribe(function (lkupdata) {
            _this.LkupData = lkupdata;
            _this.selectedMainCategory = _this.LkupData["Categories"][0];
            _this.selectedMainCategoryIndex = 0;
        });
        this.lkupservice.getEmployeeData().subscribe(function (employees) {
            _this.EmployeeData = employees.Employees;
            _this.leaders = employees.Employees;
            _this.brokers = employees.Employees;
            _this.stakeholders = employees.Employees;
        });
    }
    CategoryComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CategoryComponent.prototype.selectCategory = function (catindex) {
        this.selectedMainCategory = { SubCategories: [] };
        this.selectedMainCategoryIndex = catindex;
        this.selectedMainCategory = this.LkupData["Categories"][this.selectedMainCategoryIndex];
    };
    CategoryComponent.prototype.goPrev = function () {
        this.selectedMainCategory = { SubCategories: [] };
        var index = this.selectedMainCategoryIndex;
        this.selectedMainCategoryIndex = index - 1;
        this.selectedMainCategory = this.LkupData["Categories"][this.selectedMainCategoryIndex];
    };
    CategoryComponent.prototype.goNext = function () {
        this.selectedMainCategory = { SubCategories: [] };
        this.selectedMainCategoryIndex = this.selectedMainCategoryIndex + 1;
        this.selectedMainCategory = this.LkupData["Categories"][this.selectedMainCategoryIndex];
    };
    CategoryComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CategoryComponent.prototype.save = function () {
    };
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/category.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_lookup_service__["a" /* LookupService */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div *ngIf=\"givenName\">\n    <h1>Welcome!</h1>\n    <p>\n      <button mat-raised-button color=\"accent\" routerLink=\"/architects\">View Architects</button>\n    </p>\n    <p>\n      <button mat-raised-button color=\"basic\" routerLink=\"/style-guide\">P+W App Style Guide</button>\n    </p>\n  </div>\n\n  <div *ngIf=\"!givenName\">\n    <h1>Splash Page</h1>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(oauthService) {
        this.oauthService = oauthService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HomeComponent.prototype, "givenName", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims) {
                return null;
            }
            return claims['name'];
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/knowledge/knowledge.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"srchfrm\">\n<mat-form-field>\n    <input class=\"example-form\" matInput placeholder=\"Search\">\n</mat-form-field>\n<!-- <button class=\"btn1\" mat-raised-button color=\"accent\">Search</button> -->\n</form>\n<button mat-raised-button class=\"btn add\"  color=\"primary\"  (click)=\"openDialog()\"><i class=\"material-icons\">add</i></button>\n<div class=\"example-container mat-elevation-z8 cont\">\n    <div class=\"example-header\">\n        <mat-form-field>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n    </div>\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"topic\">\n        <mat-header-cell *matHeaderCellDef> Topic </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.topic}} </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"domain\">\n        <mat-header-cell *matHeaderCellDef> Domain </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.domain}} </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"off\">\n        <mat-header-cell *matHeaderCellDef> Date Added </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.dateAdded}} </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"act\">\n        <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n            <button mat-raised-button class=\"btn\" color=\"accent\"><i class=\"material-icons\"> create </i></button>\n            <button mat-raised-button class=\"btn\"  color=\"accent\"><i class=\"material-icons\"> clear </i></button>\n        </mat-cell>\n      </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <!-- <mat-paginator #paginator\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 20, 30]\">\n  </mat-paginator> -->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/knowledge/knowledge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n/deep/ .example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n/deep/ .btn1 {\n  width: 8%;\n  padding-left: 10px; }\n\n/deep/ mat-form-field {\n  font-size: 14px;\n  width: 25%;\n  padding-left: 10px; }\n\n/deep/ .mat-table {\n  max-height: 500px; }\n\n/deep/ .cont {\n  width: 100%;\n  padding-bottom: 20px;\n  box-shadow: none; }\n\n/deep/ .btn {\n  border: 0;\n  background: #00B1DF !important;\n  color: white !important;\n  padding: 4px 0;\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  min-width: 24px;\n  box-shadow: none !important;\n  line-height: 1; }\n\n/deep/ .btn .material-icons {\n  font-size: 16px; }\n\n/deep/ .add {\n  float: right;\n  height: 40px;\n  width: 40px;\n  margin-right: 20px; }\n\n/deep/ .add .material-icons {\n  font-size: 27px; }\n\n/deep/ .srchfrm {\n  position: absolute;\n  top: 13px;\n  width: 300px;\n  left: 35%; }\n\n/deep/ .srchfrm .mat-form-field {\n  width: 100%; }\n\n/deep/ .srchfrm .mat-input-placeholder, /deep/ .srchfrm .mat-input-element {\n  color: white; }\n\n/deep/ .srchfrm .mat-form-field-underline {\n  background: white; }\n\n/deep/ .mat-header-cell {\n  font-weight: bold;\n  font-size: 13px; }\n\n/deep/ .mat-cell,\n/deep/ .mat-header-cell {\n  -webkit-box-flex: 0 !important;\n      -ms-flex: 0 0 30% !important;\n          flex: 0 0 30% !important; }\n\n/deep/ .mat-cell:last-child,\n/deep/ .mat-header-cell:last-child {\n  -webkit-box-flex: 0 !important;\n      -ms-flex: 0 0 10% !important;\n          flex: 0 0 10% !important; }\n\n/deep/ .example-header .mat-form-field {\n  width: 30%;\n  font-size: 15px;\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/knowledge/knowledge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KnowledgeComponent = (function () {
    function KnowledgeComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['topic', 'domain', 'off', 'act'];
        // @ViewChild(MatPaginator) paginator:MatPaginator;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */](ELEMENT_DATA);
    }
    KnowledgeComponent.prototype.ngOnInit = function () {
        // this.dataSource.paginator = this.paginator;
    };
    KnowledgeComponent.prototype.openDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__category_category_component__["a" /* CategoryComponent */], {
            width: '90%',
            data: { name: this.name, animal: this.animal }
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    KnowledgeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    KnowledgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-knowledge',
            template: __webpack_require__("../../../../../src/app/components/knowledge/knowledge.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/knowledge/knowledge.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */]])
    ], KnowledgeComponent);
    return KnowledgeComponent;
}());

var ELEMENT_DATA = [
    { topic: "Lorem Ipsum is simply dummy text ", domain: 'IT', dateAdded: "27-May-2018" },
    { topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Procurement', dateAdded: "01-Jun-2018" },
    { topic: "Dolor", domain: 'Corporate', dateAdded: "03-Jun-2018" },
    { topic: "Sit", domain: 'Project', dateAdded: "04-Jun-2018" },
    { topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "06-Jun-2018" },
    { topic: "Lorem", domain: 'IT', dateAdded: "08-Jun-2018" },
    { topic: "Ipsum", domain: 'Procurement', dateAdded: "11-Jun-2018" },
    { topic: "Dolor", domain: 'Corporate', dateAdded: "11-Jun-2018" },
    { topic: "Sit", domain: 'Project', dateAdded: "08-May-2018" },
    { topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "09-May-2018" },
    { topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'IT', dateAdded: "10-May-2018" },
    { topic: "Ipsum", domain: 'Procurement', dateAdded: "10-Jun-2018" },
    { topic: "consectetur", domain: 'Corporate', dateAdded: "10-May-2018" },
    { topic: "Sit", domain: 'Project', dateAdded: "10-May-2018" },
    { topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "10-May-2018" },
    { topic: "Lorem", domain: 'IT', dateAdded: "10-May-2018" },
    { topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Procurement', dateAdded: "10-May-2018" },
    { topic: "Dolor", domain: 'Corporate', dateAdded: "10-May-2018" },
    { topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Project', dateAdded: "10-May-2018" },
    { topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "10-May-2018" },
];


/***/ }),

/***/ "../../../../../src/app/components/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"privacy-policy\">\n  <div class=\"content\">\n    <h1>Privacy Policy</h1>\n\n    <p class=\"caption\">Last updated: November 9th, 2017</p>\n\n    <section>\n      <p>\n        Perkins+Will uses cookies on {{appName}}. By using the {{appName}}, you consent to the use of cookies.\n        Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.\n      </p>\n    </section>\n\n    <section>\n      <h2>What are cookies?</h2>\n      <p>\n        Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.\n        Cookies can be \"persistent\" or \"session\" cookies.\n      </p>\n    </section>\n\n    <section>\n      <h2>How Perkins+Will uses cookies</h2>\n      <p>\n        When you use and access the Service, we may place a number of cookies files in your web browser.\n        We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences, to enable advertisements delivery, including behavioral advertising.\n        We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:\n      </p>\n      <h5>Essential cookies</h5>\n      <p>We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</p>\n\n      <h5>Third-party cookies</h5>\n      <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.</p>\n    </section>\n\n    <section>\n      <h2>What are your choices regarding cookies?</h2>\n      <p>\n        If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.\n        Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly. Where can your find more information about cookies\n      </p>\n\n      <p>You can learn more about cookies and the following third-party websites:</p>\n      <ul>\n        <li><a href=\"http://www.allaboutcookies.org/\" target=\"_blank\">AllAboutCookies</a></li>\n        <li><a href=\"http://www.networkadvertising.org/\" target=\"_blank\">Network Advertising Initiative</a></li>\n      </ul>\n    </section>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/privacy-policy/privacy-policy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .privacy-policy h5 {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent(app) {
        this.app = app;
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.appName = this.app.title;
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("../../../../../src/app/components/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/privacy-policy/privacy-policy.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/sort.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortHelper = (function () {
    function SortHelper() {
    }
    SortHelper.prototype.By = function (objects, itemCallback, event) {
        return objects.sort(function (item1, item2) {
            var value1 = itemCallback(item1);
            var value2 = itemCallback(item2);
            if (value1 === null) {
                return 1;
            }
            if (value2 === null) {
                return -1;
            }
            if (value1 > value2) {
                return 1 * event.order;
            }
            if (value1 < value2) {
                return -1 * event.order;
            }
            return 0;
        });
    };
    SortHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SortHelper);
    return SortHelper;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/response.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponseInterceptor = (function () {
    function ResponseInterceptor(authGuard) {
        this.authGuard = authGuard;
    }
    ResponseInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                // console.log('HTTP RESPONSE:');
                // console.log(HttpResponse);
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    // console.log('ERR STATUS IS 401');
                    _this.authGuard.collectFailedRequest(request);
                }
            }
        });
    };
    ResponseInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuard */]])
    ], ResponseInterceptor);
    return ResponseInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = (function () {
    function TokenInterceptor(oauthService) {
        this.oauthService = oauthService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.oauthService.getAccessToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(oauthService) {
        this.oauthService = oauthService;
        this.cachedRequests = [];
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (this.oauthService.hasValidIdToken()) {
            return true;
        }
        else {
            this.oauthService.loadDiscoveryDocument().then(function () {
                _this.oauthService.initImplicitFlow(state.url);
            });
        }
        return false;
    };
    AuthGuard.prototype.collectFailedRequest = function (request) {
        this.cachedRequests.push(request);
    };
    AuthGuard.prototype.retryFailedRequests = function () {
        // retry the requests. this method can
        // be called after the token is refreshed
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/google-analytics-events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsEventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleAnalyticsEventsService = (function () {
    function GoogleAnalyticsEventsService() {
    }
    GoogleAnalyticsEventsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        console.log(ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        }));
    };
    GoogleAnalyticsEventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GoogleAnalyticsEventsService);
    return GoogleAnalyticsEventsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/http-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClientService = (function () {
    function HttpClientService(http) {
        this.http = http;
    }
    HttpClientService.prototype.remove = function (url, options) {
        return this.http.delete(url)
            .map(function (res) {
            return res;
        });
    };
    HttpClientService.prototype.put = function (url, body, options) {
        return this.http.put(url, body)
            .map(function (res) {
            return res;
        });
    };
    HttpClientService.prototype.post = function (url, body, options) {
        return this.http.post(url, body)
            .map(function (res) {
            return res;
        });
    };
    HttpClientService.prototype.get = function (url) {
        return this.http.get(url)
            .map(function (res) {
            return res;
        });
    };
    HttpClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "../../../../../src/app/services/lookup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_service__ = __webpack_require__("../../../../../src/app/services/http-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LookupService = (function () {
    function LookupService(http) {
        this.http = http;
    }
    LookupService.prototype.getData = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint + "/lookup/data");
    };
    LookupService.prototype.getEmployeeData = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint + "/lookup/employee");
    };
    LookupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_client_service__["a" /* HttpClientService */]])
    ], LookupService);
    return LookupService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiEndpoint: 'http://localhost:8081/api/v1',
    okta: {
        clientId: '0oacrosqllIPmCxXP0h7',
        issuer: 'https://perkinswill.oktapreview.com'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map