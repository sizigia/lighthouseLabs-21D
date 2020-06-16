const f = require('../challenges/challenge13');
const lightsOn = f.lightsOn;
const lightsOff = f.lightsOff;
const toggleLights = f.toggleLights;

describe('Challenge 13 -', () => {
    let lights = [];
    let output = [];

    describe('lightsOn function:', () => {
        beforeEach(() => {
            lights = [
                {
                    id: 1,
                    on: false
                },
                {
                    id: 2,
                    on: false
                },
                {
                    id: 3,
                    on: false
                },
                {
                    id: 4,
                    on: false
                },
                {
                    id: 5,
                    on: false
                }
            ];

            output = [
                {
                    id: 1,
                    on: true
                },
                {
                    id: 2,
                    on: true
                },
                {
                    id: 3,
                    on: true
                },
                {
                    id: 4,
                    on: true
                },
                {
                    id: 5,
                    on: true
                }
            ];
        })

        it("The lightsOn function returns an array", () => {
            expect(Array.isArray(lightsOn(lights))).toBe(true)
        });
        it('The lightsOn function returns an array with an unchanged number of elements.', () => {
            expect(lightsOn(lights).length).toEqual(lights.length)
        });
        it('The lightsOn function returns an array with all of the lights turned "on"', () => {
            expect(lightsOn(lights).every(light => light.on == true)).toBe(true)
        });
    });

    describe('lightsOff function:', () => {
        beforeEach(() => {
            lights = [
                {
                    id: 1,
                    on: true
                },
                {
                    id: 2,
                    on: true
                },
                {
                    id: 3,
                    on: true
                },
                {
                    id: 4,
                    on: true
                },
                {
                    id: 5,
                    on: true
                }
            ];

            output = [
                {
                    id: 1,
                    on: false
                },
                {
                    id: 2,
                    on: false
                },
                {
                    id: 3,
                    on: false
                },
                {
                    id: 4,
                    on: false
                },
                {
                    id: 5,
                    on: false
                }
            ];
        })

        it("The lightsOff function returns an array", () => {
            expect(Array.isArray(lightsOff(lights))).toBe(true)
        });
        it('The lightsOff function returns an array with an unchanged number of elements.', () => {
            expect(lightsOff(lights).length).toEqual(lights.length)
        });
        it('The lightsOff function returns an array with all of the lights turned "off"', () => {
            expect(lightsOff(lights).every(light => light.on == false)).toBe(true)
        });
    });

    describe('toggleLights function:', () => {
        let lightsAreOn = '';
        beforeEach(() => {
            lights = [
                {
                    id: 1,
                    on: true
                },
                {
                    id: 2,
                    on: true
                },
                {
                    id: 3,
                    on: true
                },
                {
                    id: 4,
                    on: true
                },
                {
                    id: 5,
                    on: true
                }
            ];

            lightsAreOn = true;

            output = [
                {
                    id: 1,
                    on: false
                },
                {
                    id: 2,
                    on: false
                },
                {
                    id: 3,
                    on: false
                },
                {
                    id: 4,
                    on: false
                },
                {
                    id: 5,
                    on: false
                }
            ];
        })

        it("The toggleLights function returns an array.", () => {
            expect(Array.isArray(toggleLights(lights, lightsAreOn))).toBe(true)
        });
        it('The toggleLights function returns an array with an unchanged number of elements.', () => {
            expect(toggleLights(lights, lightsAreOn).length).toEqual(lights.length)
        });
        it('If the toggleLights function receives lightsAreOn = true, all the lights should then be turned OFF.', () => {
            expect(toggleLights(lights, lightsAreOn)).toEqual(output)
        });
    });
});