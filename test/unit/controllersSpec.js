'use strict';

describe('erNiuNiu controllers', function() {
    describe('PhoneListCtrl', function() {
        var ctrl, scope, $httpBackend;

        beforeEach(module('erNiuNiu'));

        beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('model/phones.json').respond([
                {name: 'Nexus S'},
                {name: 'Motorola DROID'}
            ]);

            scope = $rootScope.$new();
            ctrl = $controller('PhoneListCtrl', {
                $scope: scope
            });
        }));

        it('should create model "phones" with 2 items fetched from XHR', function() {
            expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones).toEqual([
                {name: 'Nexus S'},
                {name: 'Motorola DROID'}
            ]);
        });

        it('should set the correct default value of order', function() {
            expect(scope.order).toBe('age');
        });
    });
});
