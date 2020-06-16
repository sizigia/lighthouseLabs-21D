const doorToDoor = require('../challenges/challenge1')

describe('Challenge 1', () => {
    const volunteers = [
        'Sally',
        'Jake',
        'Brian',
        'Hamid'
    ];

    const neighbourhoods = [
        'Central Valley',
        'Big Mountain',
        'Little Bridge',
        'Bricktown',
        'Brownsville',
        "Paul's Boutique",
        'Clay Park',
        'Fox Nest'
    ];

    it('Returns the number of neighborhoods each volunteer needs to visit', () => {
        expect(doorToDoor(volunteers, neighbourhoods)).toEqual(2);
    });
});