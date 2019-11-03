const castVote = require('./challenge3')

describe('Challenge 3:', () => {
    it('The castVote function should return an array.', () => {
        let name = '',
            votes = [];
        expect(Array.isArray(castVote(name, votes))).toBe(true)
    });

    const parameters = [
        { 'name': 'Sally', 'votes': [0, 2, 1], 'votesAfter': [0, 3, 1] },
        { 'name': 'Tim', 'votes': [1, 1, 2], 'votesAfter': [2, 1, 2] },
    ]

    parameters.forEach((parameter) => {
        it('The castVote function should return an array with 3 elements.', () => {
            expect(castVote(parameter.name, parameter.votes).length).toBe(3)
        })
        it('The castVote function should increment the correct value.', () => {
            expect(castVote(parameter.name, parameter.votes)).toEqual(parameter.votesAfter)
        });
    });
});