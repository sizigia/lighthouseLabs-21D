/** A function that calculates the arrival time for a collection of buses based on their current speed and distance from the stop and returns a new object that shows how long until each bus arrives at the stop.
 * 
 * @param {*} buses - object that contains a series of objects for each bus, with the distance of the bus and the speed that the bus is traveling at.
 */

const busTimes = buses => {
    let waitTimes = {};
    Object.keys(buses).map(stop => {
        let distance = parseInt(buses[stop].distance, 10);
        let speed = parseInt(buses[stop].speed, 10);
        waitTimes[stop] = distance / speed;
    });

    return waitTimes;
};

module.exports = busTimes;