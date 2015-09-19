'use strict';

var erNiuNiu = angular.module('erNiuNiu', []);

erNiuNiu.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
        {
            name: 'Nexus S',
            description: 'Fast just got faster with Nexus S.',
            age: 3
        },
        {
            name: 'Motorola XOOM™ with Wi-Fi',
            description: 'The Next, Next Generation tablet.',
            age: 1
        },
        {
            name: 'Motorola XOOM™',
            description: 'The Next, Next Generation tablet.',
            age: 2
        }
    ];

    $scope.order = 'age';
});
