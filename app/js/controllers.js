'use strict';

var erNiuNiu = angular.module('erNiuNiu', []);

erNiuNiu.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('model/phones.json').success(function(phones) {
        $scope.phones = phones.splice(0, 10);
    });

    $scope.order = 'age';
}]);
