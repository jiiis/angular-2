'use strict';

var erControllers = angular.module('erControllers', []);

erControllers.controller('PhoneListCtrl', ['$scope', 'Phones', function($scope, Phones) {
    $scope.phones = Phones.findAll();
    $scope.order = 'age';
}]);

erControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.find({
        phoneId: $routeParams.phoneId
    }, function(phone) {
        $scope.imageCurrent = phone.images[0];
    });

    $scope.setImage = function(image) {
        $scope.imageCurrent = image;
    };
}]);
