'use strict';

var erServices = angular.module('erServices', ['ngResource']);

erServices.factory('Phones', ['$resource', function($resource) {
    return $resource('model/phones.json', {}, {
        findAll: {
            method: 'GET',
            isArray: true
        }
    });
}]);

erServices.factory('Phone', ['$resource', function($resource) {
    return $resource('model/phones/:phoneId.json', {}, {
        findById: {
            method: 'GET',
            isArray: true
        }
    });
}]);
