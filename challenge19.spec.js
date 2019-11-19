const pumpkinSpice = require('./challenge19');

describe('Challenge 19 -', () => {
    const parameters = [
        { money: 18, output: [3, 1, 0, 105] },
        { money: 9, output: [1, 1, 1, 48] },
    ]

    parameters.forEach(p => {
        it('pumpkinSpice should return an array', () => {
            expect(Array.isArray(pumpkinSpice(p.money))).toBe(true)
        });
        it('The returned array contains the correct number of pies', () => {
            expect(pumpkinSpice(p.money)[0]).toEqual(p.output[0])
        });
        it('The returned array contains the correct number of lattes', () => {
            expect(pumpkinSpice(p.money)[1]).toEqual(p.output[1])
        });
        it('The returned array contains the correct number of macarons', () => {
            expect(pumpkinSpice(p.money)[2]).toEqual(p.output[2])
        });
        it('The returned array contains the correct count of pumpkin spice', () => {
            expect(pumpkinSpice(p.money)[3]).toEqual(p.output[3])
        });
    });
});