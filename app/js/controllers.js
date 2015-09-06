'use strict';

var erNiuNiu = angular.module('erNiuNiu', []);

erNiuNiu.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
        {
            name: 'Nexus S',
            description: 'Fast just got faster with Nexus S.'
        },
        {
            name: 'Motorola XOOM™ with Wi-Fi',
            description: 'The Next, Next Generation tablet.'
        },
        {
            name: 'MOTOROLA XOOM™',
            description: 'The Next, Next Generation tablet.'
        }
    ];
});
