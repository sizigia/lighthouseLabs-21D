const carPassing = require('../challenges/challenge9')

describe('Challenge 9:', () => {
    var cars = [];
    const speed = 38

    afterEach(() => {
        cars = [
            {
                time: 1568329654807,
                speed: 40,
            },
            {
                time: 1568329821632,
                speed: 42,
            },
            {
                time: 1568331115463,
                speed: 35
            }
        ]
        return cars;
    });

    it('The carPassing function should return an array.', () => {
        expect(Array.isArray(carPassing(cars, speed))).toBe(true)
    });
    it('The carPassing function should return an array with one new element.', () => {
        let output = [
            {
                time: 1568329654807,
                speed: 40,
            },
            {
                time: 1568329821632,
                speed: 42,
            },
            {
                time: 1568331115463,
                speed: 35
            },
            {
                time: Date.now(),
                speed: 38
            }
        ]
        expect(carPassing(cars, speed)).toEqual(output)
    });
    it('The newest item in the returned array should have the most recent datestamp.', () => {
        expect(cars.every(car => car.time < carPassing(cars, speed)[carPassing(cars, speed).length - 1].time)).toBe(true)
    });
});