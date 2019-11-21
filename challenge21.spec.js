const chooseRecipe = require('./challenge21');

describe('Challenge 21 -', () => {
    const parameters = [
        {
            bakeryA: ["saffron", "eggs", "tomato paste", "coconut", "custard"],
            bakeryB: ["milk", "butter", "cream cheese"],
            recipes: [
                { "name": "Coconut Sponge Cake", "ingredients": ["coconut", "cake base"] },
                { "name": "Persian Cheesecake", "ingredients": ["saffron", "cream cheese"] },
                { "name": "Custard Surprise", "ingredients": ["custard", "ground beef"] }],
            output: 'Persian Cheesecake',
        },
        {
            bakeryA: ["potatoes", "bay leaf", "raisins"],
            bakeryB: ["red bean", "dijon mustard", "apples"],
            recipes: [
                { "name": "Potato Ganache", "ingredients": ["potatoes", "chocolate"] },
                { "name": "Sweet Fish", "ingredients": ["anchovies", "honey"] },
                { "name": "Nima's Famous Dijon Raisins", "ingredients": ["dijon mustard", "raisins"] }],
            output: "Nima's Famous Dijon Raisins",
        },
    ];

    parameters.forEach(p => {
        it('The chooseRecipe function returns a string', () => {
            expect(typeof (chooseRecipe(p.bakeryA, p.bakeryB, p.recipes))).toEqual('string')
        });
        it('The chooseRecipe function returns the name of the proper recipe', () => {
            expect(chooseRecipe(p.bakeryA, p.bakeryB, p.recipes)).toEqual(p.output)
        });
    });
});