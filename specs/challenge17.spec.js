const judgeVegetable = require('./challenge17');

describe('Challenge 17 -', () => {
    const vegetables = [
        {
            submitter: 'Sally Tomato-Grower',
            redness: 2,
            plumpness: 8
        },
        {
            submitter: 'Old Man Franklin',
            redness: 10,
            plumpness: 5
        },
        {
            submitter: 'Hamid Hamidson',
            redness: 4,
            plumpness: 3
        }
    ];

    const metric = 'redness';
    const output = 'Old Man Franklin';

    it('judgeVegetable should return a string', () => {
        expect(typeof (judgeVegetable(vegetables, metric))).toEqual('string')
    });
    it('judgeVegetable should return the name of the submitter of the highest rated veggie', () => {
        expect(judgeVegetable(vegetables, metric)).toEqual(output)
    });
});