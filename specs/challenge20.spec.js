const f = require('../challenges/challenge20');
const sphereVolume = f.sphereVolume;
const coneVolume = f.coneVolume;
const prismVolume = f.prismVolume;
const totalVolume = f.totalVolume;

describe('Challenge 20 -', () => {
    describe('sphereVolume:', () => {
        const sphere = {
            type: 'sphere',
            radius: 10,
        }

        it('The sphereVolume functions return a number', () => {
            expect(typeof (sphereVolume(sphere.radius))).toEqual('number')
        });
        it('The sphereVolume function returns the correct volume', () => {
            expect(sphereVolume(sphere.radius) < 4189).toBe(true)
            expect(sphereVolume(sphere.radius) > 4186).toBe(true)
        });
    });

    describe('coneVolume:', () => {
        const cone = {
            type: 'cone',
            radius: 3,
            height: 5
        }

        it('The coneVolume functions return a number', () => {
            expect(typeof (coneVolume(cone.radius, cone.height))).toEqual('number')
        });
        it('The coneVolume function returns the correct volume', () => {
            expect(coneVolume(cone.radius, cone.height) > 45).toBe(true)
            expect(coneVolume(cone.radius, cone.height) < 49).toBe(true)
        });
    });

    describe('prismVolume:', () => {
        const prism = {
            type: 'prism',
            height: 3,
            width: 4,
            depth: 5
        }

        const output = 60;

        it('The prismVolume functions return a number', () => {
            expect(typeof (prismVolume(prism.height, prism.width, prism.depth))).toEqual('number')
        });
        it('The prismVolume function returns the correct volume', () => {
            expect(prismVolume(prism.height, prism.width, prism.depth)).toEqual(output)
        });
    });

    describe('totalVolume:', () => {
        const largeSphere = {
            type: 'sphere',
            radius: 40
        }

        const smallSphere = {
            type: 'sphere',
            radius: 10
        }

        const cone = {
            type: 'cone',
            radius: 3,
            height: 5
        }

        const duck = [
            largeSphere,
            smallSphere,
            cone
        ];

        it('The totalVolume functions return a number', () => {
            expect(typeof (totalVolume(duck))).toEqual('number')
        });
        it('The totalVolume function returns the correct volume', () => {
            expect(totalVolume(duck) < 275000).toBe(true)
            expect(totalVolume(duck) > 272000).toBe(true)
        });
    });
});