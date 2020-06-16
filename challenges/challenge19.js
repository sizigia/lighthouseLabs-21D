/**
 * 
 * @param {*} money 
 */

const pumpkinSpice = money => {
    const pumpkinTreat = {
        pie: {
            cash: 5,
            gSpice: 30,
        },
        latte: {
            cash: 3,
            gSpice: 15,
        },
        macaron: {
            cash: 1,
            gSpice: 3,
        },
    }
    const pumpkinFix = {
        pie: 0,
        latte: 0,
        macaron: 0,
        gSpice: 0,
    }

    Object.keys(pumpkinTreat).map(treat => {
        while (money >= pumpkinTreat[treat].cash) {
            pumpkinFix[treat] += 1;
            pumpkinFix.gSpice += pumpkinTreat[treat].gSpice;
            money -= pumpkinTreat[treat].cash;
        }
    });

    return Object.values(pumpkinFix);
}

module.exports = pumpkinSpice;