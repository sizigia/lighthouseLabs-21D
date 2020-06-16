const f = require('./challenge18');
const countTickets = f.countTickets;
const bestOdds = f.bestOdds;

describe('Challenge 18 -', () => {
    const tickets = [
        'red',
        'red',
        'green',
        'blue',
        'green'
    ]

    describe('countTickets function:', () => {
        const output = {
            red: 2,
            green: 2,
            blue: 1
        };

        it('countTickets returns an object', () => {
            expect(typeof (countTickets(tickets))).toEqual('object')
        });
        it('The returned object has the correct properties', () => {
            expect(Object.keys(countTickets(tickets))).toEqual(Object.keys(output))
        });
        it('The count for red is correct', () => {
            expect(countTickets(tickets)["red"]).toEqual(output["red"])
        });
        it('The count for green is correct', () => {
            expect(countTickets(tickets)["green"]).toEqual(output["green"])
        });
        it('The count for blue is correct', () => {
            expect(countTickets(tickets)["blue"]).toEqual(output["blue"])
        });
    });

    describe('bestOdds function:', () => {
        const raffleEntries = {
            red: 10,
            green: 30,
            blue: 15
        }

        const output = "You have the best odds of winning the red raffle.";

        it('The bestOdds function returns a string', () => {
            expect(typeof (bestOdds(tickets, raffleEntries))).toEqual('string')
        });
        it(' The bestOdds function returns the proper response', () => {
            expect(bestOdds(tickets, raffleEntries)).toEqual(output)
        });
    });
});