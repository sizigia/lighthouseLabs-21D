const voterTurnout = require('../challenges/challenge6')

describe('Challenge 6:', () => {
    it('If the voter ids array and voter signatures array are not the same length, return false', () => {
        let voter_signatures = [
            'Bill Billiamson',
            'Kate Etak',
            'Simon Simonson',
            'Jane Janesford'
        ]

        let voter_ids = [
            'Bill Billiamson',
            'Kate Etak',
            'Brandon Brandonus',
            'Simon Simonson',
            'Jane Janesford'
        ]
        expect(voterTurnout(voter_signatures, voter_ids)).toBe(false)
    });
    it('If the signatures do not match the ids the voterTurnout function should return "FRAUD!".', () => {
        let voter_signatures = [
            'Bill Billiamson',
            'Kate Etak',
            'Brandon Brandonus',
            'Fake McFakerson',
            'Jane Janesford'
        ]

        let voter_ids = [
            'Bill Billiamson',
            'Kate Etak',
            'Brandon Brandonus',
            'Simon Simonson',
            'Jane Janesford'
        ]
        expect(voterTurnout(voter_signatures, voter_ids)).toEqual('FRAUD!')
    });
    it('If all of the signatures match the ids the voterTurnout function should return "All clear, we can count the votes!".', () => {
        let voter_signatures = [
            'Bill Billiamson',
            'Kate Etak',
            'Brandon Brandonus',
            'Simon Simonson',
            'Jane Janesford'
        ]

        let voter_ids = [
            'Bill Billiamson',
            'Kate Etak',
            'Brandon Brandonus',
            'Simon Simonson',
            'Jane Janesford'
        ]
        expect(voterTurnout(voter_signatures, voter_ids)).toEqual('All clear, we can count the votes!')
    });
});