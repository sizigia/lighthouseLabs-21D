// Use the value below whenever you need the value of Pi

const PI = 3.14159

/**
 * Calculates the volume of a sphere given a radius.
 * @param {number} radius - float representing the radius of a sphere.
 */


const sphereVolume = function (radius) {
    const V = (4 / 3) * PI * Math.pow(radius, 3);

    return V;
}


/**
 * Calculates the volume of a cone given a radius and a height.
 * @param {Number} radius - float representing the radius of a cone.
 * @param {number} height - float representing the height of a cone.
 */

const coneVolume = function (radius, height) {
    const V = (1 / 3) * PI * Math.pow(radius, 2) * height;

    return +V.toPrecision(6);
}


/**
 * Calculate the volume of a prism given a height, a width, and a depth.
 * @param {Number} height - float representing the height of a prism.
 * @param {Number} width - float representing the width of a prism.
 * @param {Number} depth - float representing the depth of a prism.
 */

const prismVolume = function (height, width, depth) {
    const V = height * width * depth;

    return +V.toPrecision(6);
}


/**
 * Calculates the total volume of an attraction.
 * @param {Array} solids - array containing the different shapes that make up a single attraction.
 */
const totalVolume = function (solids) {
    let V = 0;

    solids.map(attraction => {
        V += (attraction.type == 'sphere') ?
            sphereVolume(attraction.radius) :
            (attraction.type == 'cone') ?
                coneVolume(attraction.radius, attraction.height) :
                (attraction.type == 'prism') ?
                    prismVolume(attraction.height, attraction.width, attraction.depth) :
                    0;
    });

    return +V.toPrecision(6);
}

module.exports = {
    sphereVolume,
    coneVolume,
    prismVolume,
    totalVolume,
}