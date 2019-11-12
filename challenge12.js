/**
 * A function that checks a collection of air samples and returns 
 * 'Polluted' if there are too many dirty air samples, or 
 * 'Clean' if the proportion of dirty samples is below the threshold.
 * 
 * @param {*} samples - array of strings, where each string represents a small air sample that is either clean or dirty.
 * @param {*} threshold - number representing the highest acceptable amount of dirty samples.
 */
const checkAir = function (samples, threshold) {
    const samplesStats = {
        clean: parseInt(0),
        dirty: parseInt(0),
        quality: '',
    }
    samples.map(sample => samplesStats[sample] += (1 / samples.length));
    samplesStats.quality = (samplesStats.dirty < threshold) ? 'Clean' : 'Polluted';

    return samplesStats.quality;
};

module.exports = checkAir;