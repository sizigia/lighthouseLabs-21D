/**The function counts how many times each of those topics was mentioned
 * in the surveys, and then return an array with the number of mentions
 * in the following order: 
 * smart city, arts funding, and then transportation.
 * 
 * @param {*} interviews 
 */
const termTopics = (interviews) => {
    const topicsCount = {
        'smart city': 0,
        'arts funding': 0,
        'transportation': 0
    };
    interviews.map(topic => {
        if (topic in topicsCount) {
            topicsCount[topic] += 1;
        }
    });
    return Object.values(topicsCount);
};

module.exports = termTopics