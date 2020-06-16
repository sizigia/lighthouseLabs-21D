const whereCanIPark = require('../challenges/challenge10')

describe('Challenge 10:', () => {
    let spots = [];
    let vehicle = '';
    beforeEach(() => {
        spots = [
            // COLUMNS ARE X
            //0    1    2    3    4    5
            ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
            ['s', 'M', 's', 'S', 'R', 'M'], // 1
            ['s', 'M', 's', 'S', 'R', 'm'], // 2
            ['S', 'r', 's', 'm', 'R', 'M'], // 3
            ['S', 'r', 's', 'm', 'R', 'M'], // 4
            ['S', 'r', 'S', 'M', 'M', 'S'], // 5
        ]
        vehicle = 'regular';
    });

    describe('The whereCanIPark function returns an array, or false', () => {
        parameters = [
            {
                statement: 'returns false',
                spots: [[]],
                vehicle: 'small',
                result: false,
            },
            {
                statement: 'returns an array',
                spots:
                    [['s', 's', 's', 'S', 'R', 'M'],
                    ['s', 'M', 's', 'S', 'R', 'M'],],
                vehicle: 'motorcycle',
                result: true,
            }
        ]

        parameters.forEach((parameter) => {
            it(parameter.statement, () => {
                expect(Array.isArray(whereCanIPark(parameter.spots, parameter.vehicle))).toBe(parameter.result)
            });
        });
    });
    it('The whereCanIPark function returns false if there is no available spot', () => {
        let spots = [[]];
        expect(whereCanIPark(spots, vehicle)).toEqual(whereCanIPark(spots, vehicle))
    });
    it('The whereCanIPark function returns a correct available spot', () => {
        expect(whereCanIPark(spots, vehicle)).toEqual([4, 0])
    });
});