/*
 * Given an array of volunteer names and an array of neighborhood names,
 * complete the doorToDoor function so that it returns the number of
 * neighborhoods each volunteer should visit if the work of going door to door
 * is split evenly amongst them.
*/

const doorToDoor = (volunteers, neighbourhoods) => {
    let numberOfVolunteers = volunteers.length;
    let numberOfNeighbourhoods = neighbourhoods.length;

    return numberOfNeighbourhoods / numberOfVolunteers;
};

module.exports = doorToDoor