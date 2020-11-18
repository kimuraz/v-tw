import twc from '../../src/directives/twc';

import { twcOptions } from './mockOptions';

describe('Test tw directive', () => {
    let el;

    beforeEach(() => {
        el = document.createElement('div');
    });

    it('Should add default classes for custom card as v-twc="\'card\'"', () => {
        twc(twcOptions).bind(el, { value: 'card' });

        twcOptions.card.classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });

    it("Should add multiple default classes as v-twc=\"['card', 'listItemCard' ]\"", () => {
        twc(twcOptions).bind(el, { value: ['card', 'listItemCard'] });

        twcOptions.card.classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
        twcOptions.listItemCard.classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });

    it("Should add modifiers as v-twc=\"{card: ['green', 'bordered']}\"", () => {
        twc(twcOptions).bind(el, { value: { card: ['green', 'bordered'] } });

        twcOptions.card.classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
        twcOptions.card.modifiers.green.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
        twcOptions.card.modifiers.bordered.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });

    it("Should add default classes and modifiers as v-twc=\"['listItemCard', { card: ['green'] }]\"", () => {
        twc(twcOptions).bind(el, {
            value: ['listItemCard', { card: ['green', 'bordered'] }],
        });
        twcOptions.listItemCard.classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
        twcOptions.card.classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
        twcOptions.card.modifiers.green.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });
});
