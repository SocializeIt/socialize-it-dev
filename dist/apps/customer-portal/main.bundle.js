webpackJsonp(["main"],{

/***/ "./apps/customer-portal/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@socialise-it/user-profile": [
		"./libs/user-profile/src/user-profile.module.ts",
		"user-profile.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./apps/customer-portal/src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./apps/customer-portal/src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./apps/customer-portal/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to an Angular CLI app built with Nrwl Nx!\n  </h1>\n  <img width=\"300\" src=\"assets/nx-logo.png\">\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./apps/customer-portal/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./apps/customer-portal/src/app/app.component.html"),
            styles: [__webpack_require__("./apps/customer-portal/src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./apps/customer-portal/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./apps/customer-portal/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nrwl_nx__ = __webpack_require__("./node_modules/@nrwl/nx/esm5/nrwl-nx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__ = __webpack_require__("./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./apps/customer-portal/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__ = __webpack_require__("./node_modules/@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__socialise_it_auth__ = __webpack_require__("./libs/auth/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__nrwl_nx__["b" /* NxModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'user-profile' },
                    { path: 'auth', children: __WEBPACK_IMPORTED_MODULE_10__socialise_it_auth__["d" /* authRoutes */] },
                    {
                        path: 'user-profile',
                        loadChildren: '@socialise-it/user-profile#UserProfileModule',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_10__socialise_it_auth__["a" /* AuthGuard */]]
                    }
                ], {
                    initialNavigation: 'enabled'
                }),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["j" /* StoreModule */].forRoot({}
                // { metaReducers: !environment.production ? [storeFreeze] : [] }
                ),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                !__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
                __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__["b" /* StoreRouterConnectingModule */],
                __WEBPACK_IMPORTED_MODULE_10__socialise_it_auth__["b" /* AuthModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./apps/customer-portal/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./apps/customer-portal/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./apps/customer-portal/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./apps/customer-portal/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./libs/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_auth_module__ = __webpack_require__("./libs/auth/src/auth.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_auth_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_auth_module__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_services__ = __webpack_require__("./libs/auth/src/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_guards__ = __webpack_require__("./libs/auth/src/guards/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_guards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interceptors__ = __webpack_require__("./libs/auth/src/interceptors/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_variables__ = __webpack_require__("./libs/auth/src/variables/index.ts");
/* unused harmony namespace reexport */







/***/ }),

/***/ "./libs/auth/src/+state/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActionTypes; });
/* unused harmony export Auth */
/* unused harmony export LoadAuth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthLoaded; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["AuthAction"] = "[Auth] Action";
    AuthActionTypes["LoadAuth"] = "[Auth] Load Data";
    AuthActionTypes["AuthLoaded"] = "[Auth] Data Loaded";
})(AuthActionTypes || (AuthActionTypes = {}));
var Auth = /** @class */ (function () {
    function Auth() {
        this.type = AuthActionTypes.AuthAction;
    }
    return Auth;
}());

var LoadAuth = /** @class */ (function () {
    function LoadAuth(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoadAuth;
    }
    return LoadAuth;
}());

var AuthLoaded = /** @class */ (function () {
    function AuthLoaded(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AuthLoaded;
    }
    return AuthLoaded;
}());



/***/ }),

/***/ "./libs/auth/src/+state/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_actions__ = __webpack_require__("./libs/auth/src/+state/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nrwl_nx__ = __webpack_require__("./node_modules/@nrwl/nx/esm5/nrwl-nx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, dataPersistence) {
        this.actions$ = actions$;
        this.dataPersistence = dataPersistence;
        this.effect$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__auth_actions__["a" /* AuthActionTypes */].AuthAction);
        this.loadAuth$ = this.dataPersistence.fetch(__WEBPACK_IMPORTED_MODULE_2__auth_actions__["a" /* AuthActionTypes */].LoadAuth, {
            run: function (action, state) {
                return new __WEBPACK_IMPORTED_MODULE_2__auth_actions__["b" /* AuthLoaded */](state);
            },
            onError: function (action, error) {
                console.error('Error', error);
            }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "effect$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loadAuth$", void 0);
    AuthEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_3__nrwl_nx__["a" /* DataPersistence */]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./libs/auth/src/+state/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialState; });
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("./libs/auth/src/+state/auth.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActionTypes */].AuthAction:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActionTypes */].AuthLoaded: {
            return __assign({}, state, action.payload);
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./libs/auth/src/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_login_login_component__ = __webpack_require__("./libs/auth/src/containers/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_form_login_form_component__ = __webpack_require__("./libs/auth/src/components/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__("./libs/auth/src/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__variables__ = __webpack_require__("./libs/auth/src/variables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__socialise_it_material__ = __webpack_require__("./libs/material/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards__ = __webpack_require__("./libs/auth/src/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interceptors__ = __webpack_require__("./libs/auth/src/interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__state_auth_reducer__ = __webpack_require__("./libs/auth/src/+state/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__state_auth_effects__ = __webpack_require__("./libs/auth/src/+state/auth.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var authRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__containers_login_login_component__["a" /* LoginComponent */] }
];
var COMPONENTS = [__WEBPACK_IMPORTED_MODULE_6__containers_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_7__components_login_form_login_form_component__["a" /* LoginFormComponent */]];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__guards__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__interceptors__["a" /* AuthInterceptor */],
                    multi: true
                }
            ]
        };
    };
    AuthModule = AuthModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__socialise_it_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__variables__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["j" /* StoreModule */].forFeature('auth', __WEBPACK_IMPORTED_MODULE_16__state_auth_reducer__["a" /* authReducer */], {
                    initialState: __WEBPACK_IMPORTED_MODULE_16__state_auth_reducer__["b" /* initialState */]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_17__state_auth_effects__["a" /* AuthEffects */]])
            ],
            declarations: [COMPONENTS],
            exports: [COMPONENTS],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__guards__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__interceptors__["a" /* AuthInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_17__state_auth_effects__["a" /* AuthEffects */]
            ]
        })
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());



/***/ }),

/***/ "./libs/auth/src/components/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Login</mat-card-title>\n  <mat-card-content>\n      <form fxLayout=\"column\" fxLayoutAlign=\"center none\" [formGroup]=\"loginForm\">\n          <mat-input-container>\n              <input matInput placeholder=\"username\" type=\"text\" formControlName=\"username\">\n              <mat-error ngxErrors=\"username\">\n                  <div ngxError=\"required\" when=\"touched\">\n                      Username is required\n                  </div>\n              </mat-error>\n          </mat-input-container>\n          <mat-input-container>\n              <input matInput placeholder=\"password\" type=\"text\" formControlName=\"password\">\n              <mat-error ngxErrors=\"password\">\n                  <div ngxError=\"required\" when=\"touched\">\n                      Password is required\n                  </div>\n              </mat-error>\n          </mat-input-container>\n      </form>\n      <button mat-raised-button (click)=\"login()\">login</button>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./libs/auth/src/components/login-form/login-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./libs/auth/src/components/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent() {
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])
        });
    }
    LoginFormComponent.prototype.login = function (authenticate) {
        this.submit.emit({
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "submit", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("./libs/auth/src/components/login-form/login-form.component.html"),
            styles: [__webpack_require__("./libs/auth/src/components/login-form/login-form.component.scss")]
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./libs/auth/src/containers/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-login-form (submit)=\"login($event)\"></app-login-form>\n\n"

/***/ }),

/***/ "./libs/auth/src/containers/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./libs/auth/src/containers/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./libs/auth/src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (authenticate) {
        var _this = this;
        this.auth.login(authenticate).then(function (u) { return _this.router.navigateByUrl("/user-profile/" + u['uid']); }); //.then(u => console.log(u));
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-container',
            template: __webpack_require__("./libs/auth/src/containers/login/login.component.html"),
            styles: [__webpack_require__("./libs/auth/src/containers/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./libs/auth/src/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./libs/auth/src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    /**
     *
     */
    function AuthGuard(authSrv, router) {
        this.authSrv = authSrv;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        //return this.authSrv.isAuthenticated;
        if (this.authSrv.isAuthenticated) {
            return true;
        }
        else {
            if (localStorage.getItem('auth')) {
                return (this.authSrv.isAuthenticated = true);
            }
            this.router.navigate(["/auth/login"]);
            return false;
        }
    };
    AuthGuard.prototype.gotoProfile = function () {
        var authInfos = this.authSrv.getAuthVariables();
        this.router.navigate(["/auth/user-profile/" + authInfos.uid]);
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./libs/auth/src/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./libs/auth/src/guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./libs/auth/src/interceptors/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./libs/auth/src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        this.authSrv = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]);
        var token = this.authSrv.getAuthVariables();
        if (token) {
            var authReq = req.clone({
                headers: req.headers.set('Authorisation', token)
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./libs/auth/src/interceptors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_interceptor__ = __webpack_require__("./libs/auth/src/interceptors/auth.interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_interceptor__["a"]; });



/***/ }),

/***/ "./libs/auth/src/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.isAuthenticated = false;
        this.afAuth.auth.onAuthStateChanged(function (u) {
            _this.setAuthVariables(u);
        });
    }
    AuthService.prototype.subscribeToAuthStateChanges = function (callback) { };
    AuthService.prototype.setAuthVariables = function (arg) {
        if (arg && arg.uid) {
            this.isAuthenticated = true;
            localStorage.setItem('auth', JSON.stringify({ uid: arg.uid, session: arg }));
            console.log(arg);
        }
        else {
            this.isAuthenticated = false;
        }
    };
    AuthService.prototype.getAuthVariables = function () {
        var storage = localStorage.getItem('auth');
        if (storage) {
            return JSON.parse(storage);
        }
        else {
            return null;
            // { uid: '', session: ''};
        }
    };
    AuthService.prototype.login = function (authenticate) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider()).then(function () {
            return _this.getAuthVariables();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./libs/auth/src/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./libs/auth/src/services/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });



/***/ }),

/***/ "./libs/auth/src/variables/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: 'AIzaSyBePEkMBP9XkF-ByeV7O72yBGDfu1NLPpU',
    authDomain: 'socialite-hub.firebaseapp.com',
    databaseURL: 'https://socialite-hub.firebaseio.com',
    projectId: 'socialite-hub',
    storageBucket: 'socialite-hub.appspot.com',
    messagingSenderId: '695150537357'
};


/***/ }),

/***/ "./libs/auth/src/variables/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_config__ = __webpack_require__("./libs/auth/src/variables/firebase.config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__firebase_config__["a"]; });



/***/ }),

/***/ "./libs/material/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_material_module__ = __webpack_require__("./libs/material/src/material.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_material_module__["a"]; });



/***/ }),

/***/ "./libs/material/src/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSelectModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSelectModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./apps/customer-portal/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map