function pizzaOven(crustType, sauceType,cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("wheat", "marinara", "cheddar", ["mushrooms", "pepperoni"])
var p4 = pizzaOven("thick crust", "tomato", ["mozarella", "cheddar"], ["vegan sausage", "spinach", "onions"])

var crustType = ["wheat", "hand tossed", "deep dish"];
var crustTypeArr = crustType[Math.floor(Math.random() * crustType.length)];
var sauceType = ["marinara", "tomato", "none"];
var sauceTypeArr = sauceType[Math.floor(Math.random() * sauceType.length)];
var cheeses = ["mozarella", "cheddar", "feta"];
var chessesArr = cheeses[Math.floor(Math.random() * cheeses.length)];
var toppings = ["vegan sausage", "spinach", "onions", "pepperoni", "mushrooms"];
var toppingsArr = toppings[Math.floor(Math.random() * toppings.length)]

function randomPizza(crustType, sauceType,cheeses, toppings) {
    randomPizza.crustType = crustType;
    randomPizza.sauceType = sauceType;
    randomPizza.cheeses = cheeses;
    randomPizza.toppings = toppings;
    
    return randomPizza;
}

var p5 = randomPizza(crustTypeArr, sauceTypeArr, chessesArr, toppingsArr);

console.log(p5);