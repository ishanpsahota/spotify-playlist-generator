"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SpotifySearchComponent = void 0;
var axios_1 = require("axios");
var core_1 = require("@angular/core");
var SpotifySearchComponent = /** @class */ (function () {
    function SpotifySearchComponent() {
    }
    SpotifySearchComponent.prototype.ngOnInit = function () {
    };
    SpotifySearchComponent.prototype.show_results = function () {
        var _this = this;
        axios_1["default"].get("https://www.youtube.com/results?search_query=" + this.search_query + "&page&utm_source=opensearch")
            .then(function (results) {
            _this.found_results = true;
            _this.results = results;
            console.log(results);
        })["catch"](function (err) {
            _this.found_results = false;
            _this.results = err;
            console.log(err);
        });
    };
    SpotifySearchComponent = __decorate([
        core_1.Component({
            selector: 'app-spotify-search',
            templateUrl: './spotify-search.component.html',
            styleUrls: ['./spotify-search.component.sass']
        })
    ], SpotifySearchComponent);
    return SpotifySearchComponent;
}());
exports.SpotifySearchComponent = SpotifySearchComponent;
