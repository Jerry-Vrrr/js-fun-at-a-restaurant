function nameMenuItem(menuItemName) {
return "Delicious " + menuItemName
}

function createMenuItem(name, price, type) {

  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem
}

function addIngredients(ingredient, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredient === ingredients[i]) {
      return
    }
  }
  return ingredients.push(ingredient);
}

//should add a $ in front of price
//


function formatPrice(initialPrice){

return `$${initialPrice}`

}

function decreasePrice(price) {
  return price * .9
}

// class Recipe {
//   constructor() {
//     this.title = title,
//     this.price = price,
//     this.menuItem = createMenuItem


function createRecipe(title,ingredients,type) {
  var recipe = {

    title: title,
    ingredients: ingredients,
    type: type,

  }
return recipe 
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
