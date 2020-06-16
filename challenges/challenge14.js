/**
 * Returns the cost of a particular trip given 
 * the number of people on the bus, 
 * and the distance traveled by the passenger.
 * 
 * @param {integer} numberOfPeople - the number of people on the bus.
 * @param {integer} distanceTraveled - distance traveled by the passenger.
 */

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    const price = {
        base: 1,
        km: 0.25,
        plus30people: 0.25,
    }

    ticketPrice = price.base + distanceTraveled * price.km;
    if (numberOfPeople >= 30) {
        ticketPrice += price.plus30people;
    }

    ticketFormat = `$${ ticketPrice.toFixed(2) }`;
    return ticketFormat;
};

module.exports = dynamicPricing;