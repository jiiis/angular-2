'use strict';

describe('erNiuNiu controllers', function() {
    describe('PhoneListCtrl', function() {
        beforeEach(module('erNiuNiu'));

        it('should create model "phones" with 3 phones', inject(function($controller) {
            var scope = {},
                ctrl = $controller('PhoneListCtrl', {
                    $scope: scope
                });

            expect(scope.phones.length).toBe(3);
        }));
    });
});
