'use strict';

describe('erNiuNiu services', function() {
    beforeEach(module('erNiuNiu'));

    it('should have the Phone factory', inject(function(Phone) {
        expect(Phone).toBeDefined();
    }));
});
