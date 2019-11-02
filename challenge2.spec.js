const interviewAnswer = require('./challenge2')

describe('Challenge 2', () => {

    it('return a response for each topic question', () => {
        expect(interviewAnswer).not.toBe(undefined)
    });

    const parameters = [
        { 'input': 'arts funding', 'result': "We'll have to get creative!" },
        { 'input': 'economy', 'result': "Time is money." },
        { 'input': 'transportation', 'result': "It's going to be a long road, so we better get moving." },

    ]
    parameters.forEach((parameter) => {
        it('return the correct response for each topic question', () => {
            expect(interviewAnswer(parameter.input)).toEqual(parameter.result)
        });
    });
    it("return a default statement for topics that aren't in the list", () => {
        expect(interviewAnswer('whatever')).toEqual('QUACK!')
    });
});