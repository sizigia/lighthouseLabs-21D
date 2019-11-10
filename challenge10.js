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
        X: '', // X being the column
        Y: '', // Y being the row
        pair: false,
    };

    if (spots.length > 0) {
        spot.Y = spots.findIndex(row => row.some(col => col == col.toUpperCase()));
        if (spot.Y >= 0) {
            spot.X = spots[spot.Y].findIndex(col => vehicleSize[vehicle].includes(col));
            if (spot.X >= 0) {
                spot.pair = [spot.X, spot.Y];
            }
        }
    }

    return spot.pair;
};

module.exports = whereCanIPark;