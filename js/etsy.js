console.log(items);

// PROBLEM 1 - AVERAGE OF ALL PRICES USING MAP AND REDUCE

// Set new var prices to function getItemPrices
var prices = getItemPrices(items); 
// Create a function that returns all prices from Items and return as new array
function getItemPrices(listOfPrices) {   
    return listOfPrices.map(function(item) {
        return item.price;
    })}
// Create new variable that totals all prices from the prices array using reduce method
var pricesTotal = prices.reduce(function(prev, next) { 
    return prev + next;
}, 0); 
// Total of prices divided by length of prices array, rounded to 2 decimal places
console.log((pricesTotal/prices.length).toFixed(2));

// PROBLEM 2 - ITEMS PRICED BETWEEN 14 AND 18 USD USING FILTER

// Create variable that stores an array of objects who's price is between 14-18 USD
var itemsBetween = items.filter(function(item) {
  return item.price >=14 && item.price <= 18 && item.currency_code === 'USD'
});

console.log(itemsBetween);

// PROBLEM 3 - USING FILTER TO FIND ITEMS THAT ARE GBP CURRENDY

// Create variable that stores an array of objects that are GBP currency
var pounds = items.filter(function(item) {
  return item.currency_code === 'GBP'
});
// Access the title and price property of this object and print to console
console.log(pounds[0].title + ' costs ' + pounds[0].price + ' GBP');

// PROBLEM 4 - USING FILTER TO FIND ITEMS MADE OF WOOD

// Create a variable that stores an array of objects that contin an array which includes 'wood'
var woodItems = items.filter(function(item) {
  return item.materials.includes('wood')
});

// console.log(woodItems);

// Print to the console the title of each object in woodItems array
woodItems.forEach(function(item) {
    console.log (item.title)
})

//  PROBLEM 5 - USING FILTER TO FIND ITEMS MADE WITH MORE THAN 8 MATERIALS

// Create variable that stores an array of objects whose materials array has 8+ items
var eightMaterials = items.filter(function(item) {
  return item.materials.length >= 8;
});

// console.log(eightMaterials);

// Print to the console the title and length of materials array, and list all items in materials array
eightMaterials.forEach(function(item) {
    console.log (item.title + ' has ' + item.materials.length + ' materials:' + item.materials.join('\n'))
})

// PROBLEM 6- USING FILTER AND INCLUDE METHOD TO FIND ITEMS MADE BY SELLER

// Create variable that stores an array of objects whose who_made property contains i_did
var bySellers = items.filter(function(item){
    return item.who_made.includes('i_did')
});

// Print the length of the bySellers array
console.log(bySellers.length + ' items were made by their seller.');