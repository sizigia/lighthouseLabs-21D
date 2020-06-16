const termTopics = require('./challenge7')

describe('Challenge 7:', () => {
    const interviews = [
        'smart city',
        'rebuild the lighthouse',
        'arts funding',
        'transportation',
        'arts funding',
        'rebuild the lighthouse',
        'sports funding',
        'tax cuts',
        'smart city',
        'arts funding',
        'smart city'
    ]
    it(' The termTopics function should return an array.', () => {
        expect(Array.isArray(termTopics(interviews))).toBe(true)
    });
    it('The termTopics function should return an array of numbers.', () => {
        expect(termTopics(interviews).every(item => typeof (item) == 'number')).toBe(true)
    });
    it('The termTopics function should return the correct mention count for each topic.', () => {
        expect(termTopics(interviews)).toEqual([3, 3, 1])
    });
});