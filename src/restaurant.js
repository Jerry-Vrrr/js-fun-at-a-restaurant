
//var menus =

function createRestaurant(name) {
return {
  name:  name,
  menus:   {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
  }

}
function addMenuItem(restaurant, food) {

  if (food.type == "breakfast" && restaurant.menus.breakfast.includes(food) == false) {
    return restaurant.menus.breakfast.push(food)
    }
  else if (food.type == "lunch" && restaurant.menus.lunch.includes(food) == false){
    return restaurant.menus.lunch.push(food)
    }
  else if (food.type == "dinner" && restaurant.menus.dinner.includes(food) == false){
    return restaurant.menus.dinner.push(food)
    }

  }

//console.log(restaurant.menus.lunch)
function removeMenuItem(restaurant, food, menu) {

  if ("breakfast" === menu ) {
  for (i = 0; i < restaurant.menus.breakfast.length; i++){
    if (restaurant.menus.breakfast[i].name === food){
   restaurant.menus.breakfast.splice(i, 1)
     return `No one is eating our ${food} - it has been removed from the ${menu} menu!`
}
}

}
  if ("lunch" === menu ) {
    for (i = 0; i < restaurant.menus.lunch.length; i++){
    if (restaurant.menus.lunch[i].name === food){
     restaurant.menus.lunch.splice(i, 1)
     return `No one is eating our ${food} - it has been removed from the ${menu} menu!`
}
}

}
if ("dinner" === menu ) {
  for (i = 0; i < restaurant.menus.dinner.length; i++){
    if (restaurant.menus.dinner[i].name === food){
   restaurant.menus.dinner.splice(i, 1)
   return `No one is eating our ${food} - it has been removed from the ${menu} menu!`
 }
}

  }
  if (!food === restaurant.menus.breakfast.includes(food)){
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
  else if (!food === restaurant.menus.lunch.includes(food)){
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
  else if (!food === restaurant.menus.dinner.includes(food)){
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
