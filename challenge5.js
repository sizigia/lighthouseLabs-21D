/**
 * The function chooseStations(stations) 
 * takes in an array of possible voting stations, 
 * and then only returns the names of the stations that are appropriate.
 * 
 * The function will receive an array of stations, 
 * where each station itself is an array with a name, 
 * a capacity, and a venue type.
 * 
 * In order for a station to be deemed appropriate, 
 * it must have a capacity of at least 20, 
 * and be a school or community centre.
 * @param {*} stations 
 */

const chooseStations = (stations) => {
    let appropriatePlace = [];
    let capacity = 20;
    let place = ['school', 'community centre'];

    stations.map(station => {
        if (station[1] >= capacity && place.includes(station[2])) {
            appropriatePlace.push(station[0]);
        }
    });

    return appropriatePlace;
};

module.exports = chooseStations;