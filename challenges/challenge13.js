/**
 * @function {lightsOn} - The function receives an array of objects 
 * that represent street lights which may be on or off
 * and sets all of the lights to "on" and then return the array of lights.
 * 
 * @param {array} lights - array of objects that represent street lights which may be on or off
 * @returns {array}
 */

const lightsOn = function (lights) {
    lights.map(light => light.on = true);

    return lights;
};

/**
 * @function {lightsOff} - The function receives an array of objects 
 * that represent street lights which may be on or off 
 * and sets all the lights to "off" and then return the array of lights.
 * 
 * @param {array} lights - array of objects that represent street lights which may be on or off
 */

const lightsOff = function (lights) {
    lights.map(light => light.on = false);

    return lights;
};

/**
 * @function {toggleLights} - The function receives an array of many street lights, 
 * as well as a boolean value lightsAreOn which tells 
 * whether or not all the lights are currently on. 
 * 
 * If lightsAreOn is true, it turns all of the lights off.
 * If lightsAreOn is false, it turns all of the lights on.
 *
 * @param {array} lights - array of many street lights.
 * @param {boolean} lightsAreOn - value that tells whether or not all the lights are currently on.
 */
const toggleLights = function (lights, lightsAreOn) {
    return (lightsAreOn) ? lightsOff(lights) : lightsOn(lights);
};

module.exports = {
    lightsOn,
    lightsOff,
    toggleLights,
};