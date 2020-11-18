import tw from '../../src/directives/tw';

import { twOptions } from './mockOptions';

describe('Test tw directive', () => {
    let el;
    const tag = 'button';

    beforeEach(() => {
        el = document.createElement(tag);
    });

    it('Should add default classes as usign v-tw on a button', () => {
        tw(twOptions).bind(el, {});
        twOptions[tag].classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });

    it('Should apply modifiers as on v-tw.sm on a button', () => {
        tw(twOptions).bind(el, { modifiers: { sm: true } });
        twOptions[tag].classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });

        twOptions[tag].modifiers.sm.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });

    it('Should apply modifiers as on v-tw.sm on a button', () => {
        console.warn = jest.fn();
        tw(twOptions).bind(el, { modifiers: { random: true } });

        expect(console.warn.mock.calls[0][0]).toEqual(
            `No modifier random found for ${tag} elements`,
        );
    });

    it('Should apply modifier from another element as on v-tw:span', () => {
        const customEl = document.createElement('span');
        tw(twOptions).bind(customEl, { arg: tag });

        twOptions[tag].classes.split(' ').forEach((c) => {
            expect(customEl.classList.contains(c)).toBeTruthy();
        });
    });

    it('Should warn developer that there are no options for a specific tag', () => {
        const customEl = document.createElement('wbr');
        console.warn = jest.fn();
        tw(twOptions).bind(customEl, {});

        expect(console.warn.mock.calls[0][0]).toEqual(
            'No options found for wbr elements',
        );
    });
});
