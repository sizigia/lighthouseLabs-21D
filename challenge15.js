/**
 * A function that calculates the position of the parade based on
 * an array of directional moves. 
 * The parade moves on an X-Y grid, starting in the origin, [0, 0].
 * @param {*} moves - array of moves, which are strings that say either north, south, west, or east.
 */

const finalPosition = (moves) => {
    const coordinates = {
        x: 0,
        y: 0,
    };
    const directionalMoves = {
        north: ['y', 1],
        south: ['y', -1],
        west: ['x', -1],
        east: ['x', 1],
    };

    moves.map(direction => {
        let coordinate = directionalMoves[direction][0];
        let value = directionalMoves[direction][1];

        coordinates[coordinate] += value;
    });

    return Object.values(coordinates);
};


module.exports = finalPosition;