/**
 * The function voterTurnout(), that will take in two arrays. 
 * The first array is a list of voter ids, 
 * and the second array is a list of voter signatures, 
 * which correspond to the voter ids. 
 * It first checks that each array have the same number of items 
 * and then confirms that each of the voter ids matches 
 * the corresponding voter signature.
 * If the arrays do not contain the same number of items, 
 * then something is amiss and the function should return false. 
 * If they contain the same number of elements, 
 * then we should proceed to check if the two arrays are identical. 
 * If they are, the function should return "All clear, we can count the votes!", 
 * if they are not it should return "FRAUD!".} voter_signatures
 * @param {*} voter_ids 
 */
const voterTurnout = (voter_signatures, voter_ids) => {
    let signatures = voter_signatures.length;
    let ids = voter_ids.length;
    if (signatures != ids) return false;
    else if (voter_signatures.every(voter => voter_ids.includes(voter))) {
        return 'All clear, we can count the votes!';
    }
    return 'FRAUD!';
};

module.exports = voterTurnout