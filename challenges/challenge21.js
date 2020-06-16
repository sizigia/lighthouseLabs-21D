/**
 * Return the name of the correct recipe.
 * 
 * @param {array} bakeryA - array of ingredients in stock at Bakery A.
 * @param {array} bakeryB - array of ingredients in stock at Bakery B.
 * @param {array} recipes - array of recipe objects.
 */

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
    const inStock = (ingredients) => {
        const check = {};
        ingredients.map(i => {
            check[i] = (bakeryA.includes(i) && !bakeryB.includes(i) || !bakeryA.includes(i) && bakeryB.includes(i));
        });
        return Object.values(check).every(i => i == 1);
    }

    for (let recipe of recipes) {
        if (inStock(recipe.ingredients)) {
            return recipe.name;
        }
    }

    return "No recipes for collaboration.";
}

module.exports = chooseRecipe;
