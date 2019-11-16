/**
 * A function that calculates the split complementary colours for a given colour, in HSL (Hue, Saturation, and Lightness),
 * and returns an array of the values for the two split complementary colours, in order from small to large.
 * 
 * @param {number} color1 - H(Hue) value
 */
const festivalColours = color1 => {
    if (color1 >= 360) {
        color1 = 360 - color1;
    }
    const splitComplementary = {
        color2: color1 + 150,
        color3: color1 + 210,
    };

    return Object.values(splitComplementary).sort();
}

module.exports = festivalColours;