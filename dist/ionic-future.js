/// <reference path="../typings.d.ts" />
var NavController = (function () {
    function NavController(_logService, state, history, _ionicViewSwitcher) {
        this._logService = _logService;
        this.state = state;
        this.history = history;
        this._ionicViewSwitcher = _ionicViewSwitcher;
    }
    NavController.prototype.push = function (page, params, options) {
        if (options) {
            this.history.nextViewOptions(options);
        }
        this.state.go(page.__stateName, params);
    };
    NavController.prototype.pop = function (params, options) {
        var _this = this;
        var lastView = this.history.backView();
        if (!lastView) {
            this._logService.warn("Could not pop state - no last view found.");
            return;
        }
        if (options) {
            this.history.nextViewOptions(options);
        }
        this._ionicViewSwitcher.nextDirection("back");
        this.state.go(lastView.stateName, params)
            .then(function (callback) {
            _this.history.removeBackView();
        });
    };
    NavController.prototype.popMany = function (backCount) {
        if (backCount && backCount > 0) {
            backCount = backCount * -1;
            this._logService.warn("NavController popMany was called with a positive number. Inverting value to " + backCount + ".");
        }
        this.history.goBack(backCount);
    };
    NavController.$inject = ["$log", "$state", "$ionicHistory", "$ionicViewSwitcher"];
    return NavController;
}());
/// <reference path="../typings.d.ts" />
var NavParams = (function () {
    function NavParams(_stateService) {
        this._stateService = _stateService;
    }
    NavParams.prototype.get = function (parameter) {
        return this._stateService.params[parameter];
    };
    NavParams.$inject = ["$state"];
    return NavParams;
}());
/// <reference path="typings.d.ts" />
/// <reference path="services/navController.ts" />
/// <reference path="services/navParams.ts" />
angular.module("ionic-future", [])
    .service("navController", NavController)
    .service("navParams", NavParams);
