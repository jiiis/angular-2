'use strict';

describe('erNiuNiu', function() {
    it('should redirect index.html to index.html#/phones', function() {
        browser.get('app/index.html');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url).toBe('/phones');
        });
    });

    describe('Phone list view', function() {
        beforeEach(function() {
            browser.get('app/index.html#/phones');
        });

        var ePhones = element.all(by.repeater('phone in phones')),
            eQuery = element(by.model('query'));

        it('should filter the phone list as the user types into the search box', function() {
            expect(ePhones.count()).toBe(20);

            eQuery.sendKeys('nexus');
            expect(ePhones.count()).toBe(1);

            eQuery.clear();
            eQuery.sendKeys('motorola');
            expect(ePhones.count()).toBe(8);
        });

        it('should display the current filter value as the page heading', function() {
            var eHeading = element(by.css('.main h3'));

            eQuery.clear();
            expect(eHeading.getText()).toMatch(/^Filtered by:\s*$/);

            eQuery.sendKeys('nexus');
            expect(eHeading.getText()).toMatch(/^Filtered by: nexus$/);
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

        it('should render phone specific links', function() {
            eQuery.clear();
            eQuery.sendKeys('nexus');
            element.all(by.css('.phone-list a')).first().click();
            expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
            browser.getLocationAbsUrl().then(function(url) {
                expect(url).toBe('/phones/nexus-s');
            });
        });
    });

    describe('Phone detail view', function() {
        beforeEach(function() {
            browser.get('app/index.html#/phones/nexus-s');
        });

        it('should show the correct phoneId binding value', function() {
            expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
        });
    });
});
