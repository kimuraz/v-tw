import tw from '../../src/directives/tw';

import mockOptions from './mockOptions';

describe('Test tw directive', () => {
    let el;
    const tag = 'button';

    beforeEach(() => {
        el = document.createElement(tag);
    });

    it('Should add default classes as usign v-tw on a button', () => {
        tw(mockOptions).bind(el, {});
        mockOptions[tag].classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });

    it('Should apply modifiers as on v-tw.sm on a button', () => {
        tw(mockOptions).bind(el, { modifiers: { sm: true } });
        mockOptions[tag].classes.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });

        mockOptions[tag].modifiers.sm.split(' ').forEach((c) => {
            expect(el.classList.contains(c)).toBeTruthy();
        });
    });

    it('Should apply modifiers as on v-tw.sm on a button', () => {
        console.warn = jest.fn();
        tw(mockOptions).bind(el, { modifiers: { random: true } });

        expect(console.warn.mock.calls[0][0]).toEqual(
            `No modifier random found for ${tag} elements`,
        );
    });

    it('Should apply modifier from another element as on v-tw:span', () => {
        const customEl = document.createElement('span');
        tw(mockOptions).bind(customEl, { arg: tag });

        mockOptions[tag].classes.split(' ').forEach((c) => {
            expect(customEl.classList.contains(c)).toBeTruthy();
        });
    });

    it('Should warn developer that there are no options for a specific tag', () => {
        const customEl = document.createElement('wbr');
        console.warn = jest.fn();
        tw(mockOptions).bind(customEl, {});

        expect(console.warn.mock.calls[0][0]).toEqual(
            'No options found for wbr elements',
        );
    });
});
