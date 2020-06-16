const dynamicPricing = require('./challenge14');

describe('Challenge 14 -', () => {
    parameters = [
        {
            numberOfPeople: 15,
            distanceTraveled: 10,
            output: '$3.50',
        },
        {
            numberOfPeople: 35,
            distanceTraveled: 5,
            output: '$2.50',
        },
        {
            numberOfPeople: 30,
            distanceTraveled: 9,
            output: '$3.50',
        },
    ]

    parameters.forEach(p => {
        it('The dynamicPricing function returns a string', () => {
            expect(typeof (dynamicPricing(p.numberOfPeople, p.distanceTraveled))).toEqual('string')
        });
        it('The dynamicPricing function returns the correct value', () => {
            expect(dynamicPricing(p.numberOfPeople, p.distanceTraveled)).toEqual(p.output)
        });
    });
});