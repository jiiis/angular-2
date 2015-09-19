'use strict';

describe('erNiuNiu', function() {
    describe('Phone list view', function() {
        beforeEach(function() {
            browser.get('app/index.html');
        });

        var ePhones = element.all(by.repeater('phone in phones')),
            eQuery = element(by.model('query'));

        it('should filter the phone list as the user types into the search box', function() {
            expect(ePhones.count()).toBe(3);

            eQuery.sendKeys('nexus');
            expect(ePhones.count()).toBe(1);

            eQuery.clear();
            eQuery.sendKeys('motorola');
            expect(ePhones.count()).toBe(2);
        });

        it('should display the current filter value as the page title', function() {
            eQuery.clear();
            expect(browser.getTitle()).toMatch(/^erNiuNiu:\s*$/);

            eQuery.sendKeys('nexus');
            expect(browser.getTitle()).toMatch(/^erNiuNiu: nexus$/);
        });

        it('should sort the phone list as the user chooses an orderBy option', function() {
            var $phoneNameColumns = element.all(by.repeater('phone in phones').column('phone.name')),
                $orderByName = element(by.model('order')).element(by.css('option[value=name]')),
                getPhoneNames = function() {
                    return $phoneNameColumns.map(function($e) {
                        return $e.getText();
                    });
                };

            eQuery.clear();
            eQuery.sendKeys('tablet');

            expect(getPhoneNames()).toEqual([
                'Motorola XOOM\u2122 with Wi-Fi',
                'Motorola XOOM\u2122'
            ]);

            $orderByName.click();

            expect(getPhoneNames()).toEqual([
                'Motorola XOOM\u2122',
                'Motorola XOOM™ with Wi-Fi'
            ]);
        });
    });
});
