'use strict';

describe('erNiuNiu controllers', function() {
    describe('PhoneListCtrl', function() {
        var ctrl, scope;

        beforeEach(module('erNiuNiu'));
        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('PhoneListCtrl', {
                $scope: scope
            });
        }));

        it('should create model "phones" with 3 phones', function() {
            expect(scope.phones.length).toBe(3);
        });

        it('should set the correct default value of order', function() {
            expect(scope.order).toBe('age');
        });
    });
});
