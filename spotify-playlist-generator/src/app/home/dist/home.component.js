"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.lists = [
            {
                name: 'slow happy',
                songs: [
                    {
                        title: 'Push My Luck',
                        artist: 'The Chainsmokers'
                    },
                    {
                        title: 'Fingers',
                        artist: 'Zayn'
                    }
                ]
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.get_song = function (search_query) {
    };
    HomeComponent.prototype.add_playlist = function () {
        this.new_playlist = {
            name: this.new_playlist_name,
            songs: []
        };
        this.lists.push(this.new_playlist);
        this.new_playlist = null;
        this.new_playlist_name = null;
    };
    HomeComponent.prototype.add_track = function () {
        var _this = this;
        if (this.chosen_playlist) {
            this.lists.forEach(function (list, index) {
                if (list.name == _this.chosen_playlist.toLowerCase()) {
                    var song_obj = {
                        title: _this.new_title,
                        artist: _this.new_artist
                    };
                    _this.lists[index].songs.push(song_obj);
                    _this.chosen_playlist = null;
                    _this.new_artist = null;
                    _this.new_title = null;
                }
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.sass']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
