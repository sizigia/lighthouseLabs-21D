const festivalColours = require('../challenges/challenge16');

describe('Challenge 16 -', () => {
    const color1 = 100;
    const output = [250, 310];

    parameters = [
        { color1: 100, output: [250, 310], },
        { color1: 360, output: [150, 210], },
    ]

    parameters.forEach(p => {
        it('festivalColours returns an array', () => {
            expect(Array.isArray(festivalColours(p.color1))).toBe(true)
        });
        it('The first element in the returned array is the "smaller" split complementary color', () => {
            expect(Math.min(...festivalColours(p.color1))).toEqual(p.output[0])
        });
        it('The second element in the returned array is the "larger" split complementary color', () => {
            expect(Math.max(...festivalColours(p.color1))).toEqual(p.output[1])
        });
    });
});
