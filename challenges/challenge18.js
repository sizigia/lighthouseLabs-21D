/**
 * @function returns a string that lets the person know which raffle they have the highest chance of winning,
 * by looking at the tickets that the particular person has.
 * @param {array} tickets - array of strings that are either red, green, or blue, representing the tickets that a particular person has.
 * @param {object} raffleEntries - object that shows how many entries there currently are for each raffle.
 */

const bestOdds = (tickets, raffleEntries) => {
    let ticket = countTickets(tickets);
    const probs = {
        red: 0,
        green: 0,
        blue: 0,
    };
    let COLOUR = '';

    Object.keys(probs).map(color => {
        probs[color] = parseFloat(ticket[color]) / parseFloat(raffleEntries[color]);
    });

    COLOUR = Object.keys(probs).filter(color => probs[color] == Math.max.apply(null,
        Object.values(probs))
    );

    return `You have the best odds of winning the ${ COLOUR } raffle.`;
};

/**
 * @function helper function, return an object with the individual counts
 * for an array of strings that are either red, green, or blue.
 * @param {array} tickets - array of strings that are either red, green, or blue, representing the tickets that a particular person has.
 */
const countTickets = (tickets) => {
    const colors = {
        red: 0,
        green: 0,
        blue: 0,
    };
    tickets.map(color => colors[color] += 1);

    return colors;
};



module.exports = {
    countTickets,
    bestOdds,
}
