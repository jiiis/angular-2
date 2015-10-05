'use strict';

var erControllers = angular.module('erControllers', []);

erControllers.controller('PhoneListCtrl', ['$scope', '$http', 'Phones', function($scope, $http, Phones) {
    $scope.phones = Phones.findAll();
    $scope.order = 'age';
}]);

erControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('model/phones/' + $routeParams.phoneId + '.json').success(function(phone) {
        $scope.phone = phone;
        $scope.imageCurrent = phone.images[0];
    });

    $scope.setImage = function(image) {
        $scope.imageCurrent = image;
    };
}]);
