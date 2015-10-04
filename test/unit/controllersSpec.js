'use strict';

describe('erNiuNiu controllers', function() {
    beforeEach(module('erNiuNiu'));

    describe('PhoneListCtrl', function() {
        var ctrl, scope, $httpBackend;

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

    describe('PhoneDetailCtrl', function() {
        var ctrl, scope, $httpBackend,
            xyzPhoneData = function() {
                return {
                    name: 'phone xyz',
                    images:[
                        'images/url_1.png',
                        'images/url_2.png'
                    ]
                };
            };

        beforeEach(inject(function($controller, $rootScope, $routeParams, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('model/phones/xyz.json').respond(xyzPhoneData());

            $routeParams.phoneId = 'xyz';

            scope = $rootScope.$new();
            ctrl = $controller('PhoneDetailCtrl', {
                $scope: scope
            })
        }));

        it('should fetch phone detail', function() {
            expect(scope.phone).toBeUndefined();

            $httpBackend.flush();
            expect(scope.phone).toEqual(xyzPhoneData());
        });
    });
});
