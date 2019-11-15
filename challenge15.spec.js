const finalPosition = require('./challenge15');

describe('Challenge 15 -', () => {
    const parameters = [
        { moves: ['north', 'north', 'west', 'west', 'north', 'east', 'north'], output: [-1, 4], },
        { moves: ['south', 'west', 'north', 'south', 'west', 'west', 'south'], output: [-3, -2], },
    ]

    parameters.forEach(p => {
        describe('The function returns an array with two elements', () => {
            it('returns an array', () => {
                expect(Array.isArray(finalPosition(p.moves))).toBe(true)
            });
            it('returns an array with two elements', () => {
                expect(finalPosition(p.moves).length).toEqual(2)
            });
        });
        it('The proper X position is returned', () => {
            expect(finalPosition(p.moves)[0]).toEqual(p.output[0])
        });
        it('The proper Y position is returned', () => {
            expect(finalPosition(p.moves)[1]).toEqual(p.output[1])
        });
    });
});