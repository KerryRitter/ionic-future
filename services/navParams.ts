/// <reference path="../typings.d.ts" />

class NavParams implements ionfuture.INavParams {
    public static $inject = ["$state"];

    public constructor(
        private _stateService: ng.ui.IState
    ) {
    }

    public get(parameter: string): any {
        return this._stateService.params[parameter];
    }
}