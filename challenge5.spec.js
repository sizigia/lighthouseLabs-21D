const chooseStations = require('./challenge5')

describe('Challenge 5:', () => {
    const stations = [
        ['Big Bear Donair', 10, 'restaurant'],
        ['Bright Lights Elementary', 50, 'school'],
        ['Moose Mountain Community Centre', 45, 'community centre']
    ];
    it('The chooseStations function should return an array.', () => {
        expect(Array.isArray(chooseStations(stations))).toBe(true)
    });
    it('The chooseStations should return an array of strings.', () => {
        expect(chooseStations(stations).every(name => typeof(name) == 'string')).toBe(true)
    });
    it('The chooseStations should return only the appropriate stations.', () => {
        expect(chooseStations(stations)).toEqual(['Bright Lights Elementary', 'Moose Mountain Community Centre'])
    });
});