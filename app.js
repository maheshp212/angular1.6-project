'use strict';

var appModule = angular.module('sample-app', [
        'ngRoute'
    ]);

// app.constant('appConst', {
//         PROJECT_MANAGER: 'Project Manager'
//     });

appModule.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/red", {
        templateUrl : "modules/red/red.html",
        controller: "redController"
    })
    .when("/green", {
        templateUrl : "modules/green/green.html"
    });
});