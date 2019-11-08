const smartGarbage = require('./challenge8')

describe('Challenge 8:', () => {
    const bins = { waste: 4, recycling: 2, compost: 5 };
    const trash = 'recycling';
    it('The smartGarbage function should return an object', () => {
        expect(typeof (smartGarbage(trash, bins))).toEqual('object')
    });
    it('The smartGarbage function should return an object with properties for waste, recycling, and compost', () => {
        expect(Object.keys(smartGarbage(trash, bins))).toEqual(['waste', 'recycling', 'compost'])
    });
    it('The smartGarbage function increases the appropriate property', () => {
        expect(smartGarbage(trash, bins).recycling).toEqual(3)
    });
    it('The smartGarbage function does not alter the wrong properties', () => {
        expect(smartGarbage(trash, bins).waste).toEqual(4)
        expect(smartGarbage(trash, bins).compost).toEqual(5)
    });
});