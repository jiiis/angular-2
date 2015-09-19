'use strict';

describe('erNiuNiu', function() {
    describe('Phone list view', function() {
        beforeEach(function() {
            browser.get('app/index.html');
        });

        var phoneList = element.all(by.repeater('phone in phones')),
            query = element(by.model('query'));

        it('should filter the phone list as the user types into the search box', function() {
            expect(phoneList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(2);
        });

        it('should display the current filter value as the page title', function() {
            query.clear();
            expect(browser.getTitle()).toMatch(/^erNiuNiu:\s*$/);

            query.sendKeys('nexus');
            expect(browser.getTitle()).toMatch(/^erNiuNiu: nexus$/);
        });
    });
});
