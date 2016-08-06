/// <reference path="typings.d.ts" />
/// <reference path="services/navController.ts" />
/// <reference path="services/navParams.ts" />

angular.module("ionic-future", [])
    .service("navController", NavController)
    .service("navParams", NavParams);