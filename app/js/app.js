'use strict';

var erNiuNiu = angular.module('erNiuNiu', [
    'ngRoute',
    'erControllers'
]);

erNiuNiu.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        })
        .otherwise({
           redirectTo: '/phones'
        });
}]);
