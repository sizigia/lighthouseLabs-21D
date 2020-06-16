/**
 * A function that decides which vegetable is best based on a given judging characteristic.
 * 
 * @param {array} vegetables - a list of veggies (as an array of objects)
 * @param {string} metric - a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness)
 * @returns {string} name of the person who submitted the vegetable with the highest ranking in the provided category
 */

const judgeVegetable = (vegetables, metric) => {
    const randomInd = Math.floor(Math.random() * vegetables.length);
    const bestVeg = vegetables[randomInd];


    vegetables.map(veggie => {
        if (veggie[metric] > bestVeg[metric]) {
            Object.assign(bestVeg, veggie);
        };
    });

    return bestVeg.submitter;
};

module.exports = judgeVegetable;