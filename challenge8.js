/**
 * smartGarbage(trash, bins), receives two arguments. 
 * The first argument, 
 * trash, is a string that will tell our function 
 * what type of item is being submitted. 
 * The second argument, bins, is an object 
 * containing three properties (waste, recycling, and compost), 
 * which hold some numerical value. 
 * Our function must increase the correct value 
 * in the bins object, and the return the newly updated object.
 */


const smartGarbage = (trash, bins) => {
    bins[trash] += 1;
    return bins;
};

module.exports = smartGarbage