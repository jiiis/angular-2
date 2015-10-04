'use strict';

var erFilters = angular.module('erFilters', []);

erFilters.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});
