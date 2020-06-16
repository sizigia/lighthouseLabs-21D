const checkAir = require('../challenges/challenge12');

describe('Challenge 12 -', () => {

    describe('Function:', () => {
        let samples = [];
        let threshold = 0;

        beforeEach(() => {
            samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']
            threshold = 0.3
        })
        it('The testAir function should return a string', () => {
            expect(typeof (checkAir(samples, threshold))).toBe('string')
        });
        it('The returned string should be either "Polluted" or "Clean"', () => {
            expect(['Polluted', 'Clean'].includes(checkAir(samples, threshold))).toBe(true)
        });
    });

    describe('Threshold params:', () => {
        parameters = [
            {
                spec: 'If there are too many dirty samples, then the function should return "Polluted"',
                input: {
                    samples: ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
                    threshold: 0.3,
                },
                output: 'Polluted'
            },
            {
                spec: 'If the ratio of dirty samples is below the threshold, return "Clean"',
                input: {
                    samples: ['clean', 'clean', 'clean', 'clean', 'clean'],
                    threshold: 0.5,
                },
                output: 'Clean'
            }
        ];

        parameters.forEach(param => {
            it(param.spec, () => {
                expect(checkAir(param.input.samples, param.input.threshold)).toEqual(param.output)
            });
        })
    });
});