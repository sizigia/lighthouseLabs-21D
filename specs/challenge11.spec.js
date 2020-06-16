const busTimes = require('../challenges/challenge11');

describe('Challenge 11:', () => {
    let buses = {};
    let output = {};

    beforeEach(() => {
        buses = {
            pickadilly: {
                distance: 10,
                speed: 5
            },
            uptown: {
                distance: 13,
                speed: 10
            }
        }
        output = {
            pickadilly: 2,
            uptown: 1.3
        }
    });

    it('busTimes returns an object', () => {
        expect(typeof (busTimes(buses))).toEqual('object')
    });
    it('The resulting object must have a property for each bus', () => {
        expect(Object.entries(busTimes(buses)).length).toEqual(Object.entries(buses).length)
    });
    it('The resulting object must have numbers as the values', () => {
        expect(Object.values(busTimes(buses)).every(value => !value.isNaN)).toEqual(true)
    });
    it('The resulting values are correct', () => {
        expect(busTimes(buses)).toEqual(output)
    });
});