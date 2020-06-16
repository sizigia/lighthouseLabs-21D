const registerToVote = require('./challenge4')

describe('Challenge 4:', () => {
    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
    it('The registerToVote function should return an array.', () => {
        expect(Array.isArray(registerToVote(name, unregisteredVoters))).toBe(true)
    })
    it('The registerToVote function should remove an element from the array.', () => {
        expect(registerToVote(name, unregisteredVoters)).toEqual(['Jake', 'Alanna', 'Stephanie'])
    });
});