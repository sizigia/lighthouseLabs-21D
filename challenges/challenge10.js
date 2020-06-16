/**
 * The function whereCanIPark() returns the coordinates of 
 * an available parking spot for the vehicle, as an [X, Y] pair,
 * or returns false if there is no available spot.
 * Regular cars can only park in R spots. 
 * Small cars can park in R or S spots. 
 * Motorcycles can park in R, S, or M spots.
 * @param {*} spots - array of arrays representing parking spots, in upper case (available) or lower case (unavailable).
 * @param {*} vehicle - string with type of the vehicle that is looking for a parking spot,'regular', 'small', or 'motorcycle'
 */
const whereCanIPark = (spots, vehicle) => {
    const vehicleSize = {
        'regular': ['R'],
        'small': ['R', 'S'],
        'motorcycle': ['R', 'S', 'M'],
    };

    const spot = {
        pair: false,
    };

    for (let i = 0; i < spots.length; i++) {
        for (let j = 0; j < spots[i].length; j++) {
            if (vehicleSize[vehicle].includes(spots[i][j])) {
                return [j, i];
            }
        }
    }

    return spot.pair;
};

module.exports = whereCanIPark;