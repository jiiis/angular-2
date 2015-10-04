'use strict';

var erControllers = angular.module('erControllers', []);

erControllers.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('model/phones.json').success(function(phones) {
        $scope.phones = phones.splice(0, 50);
    });

    $scope.order = 'age';
}]);

erControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('model/phones/' + $routeParams.phoneId + '.json').success(function(phone) {
        $scope.phone = phone;
    });
}]);
