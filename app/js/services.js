'use strict';

var erServices = angular.module('erServices', ['ngResource']);

erServices.factory('Phones', ['$resource', function($resource) {
    return $resource('model/phones.json');
}]);

erServices.factory('Phone', ['$resource', function($resource) {
    return $resource('model/phones/:phoneId.json');
}]);
