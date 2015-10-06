'use strict';

var erAnimations = angular.module('erAnimations', ['ngAnimate']);

erAnimations.animation('.phone-detail-main-image', function() {
    var animateUp = function(element, className, done) {
        if (className !== 'active') {
            return;
        }

        element.css({
            position: 'absolute',
            top: 300
        });

        element.animate({
            top: 0
        }, 500, done);

        return function(cancel) {
            if (cancel) {
                element.stop();
            }
        };
    };

    var animateDown = function(element, className, done) {
        if (className !== 'active') {
            return;
        }

        element.css({
            position: 'absolute',
            top: 0
        });

        element.animate({
            top: -300
        }, 500, done);

        return function(cancel) {
            if (cancel) {
                element.stop();
            }
        };
    };

    return {
        addClass: animateUp,
        removeClass: animateDown
    };
});
