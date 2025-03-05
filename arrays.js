// Arrays is Collection of items
// Position = Index is matters in Array

// // The Array object, as with arrays in other programming languages,
// enables storing a collection of multiple items under a single variable name,
// and has members for performing common array operations.

// Array is type of Object
// Array is Mutable
// In Arrays value is stored is linear fashion that means value stored in One Single line

// let hero = ["Ironman", "Hulk", "Spiderman", "Thor", "Shaktiman", "antman"];
// for loop
// for (let i=0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

// for of
// for (let hero of heroes) {
  // console.log(hero);
// }

let cities = ["delhi", "mumbai", "pune", "hyderabad", "ahmedabad"];
for (let city of cities) {
  // console.log(city.toUpperCase());
}

// Practice Q1

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let val of marks) {
  sum += val;
}
let avg = sum / marks.length;
// console.log(`avg marks of the class ${avg}`);

// Practice Q2 : for a given array with prices of 5 items. 
// all items an offer of 10% Off on them. Change the array to store final price after applying offer.

let items = [250, 640, 300, 900, 50];

let i = 0;
for (let val of items) {
  let offer = val / 10;
  items[i] = items[i] - offer;
  // console.log(`value after offer = ${items[i]}`);
  i++;
}

// for (let i =0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }


// ARRAYS Methods
// 1) Push(): add to end
// 2) Pop(): delete from end & return
// 3) toString(): converts array to string
// 4) Concat(): joins multiple arrays & return result
// 5) unshift(): add to start
// 6) shift(): delete from start & return
// 7) slice(): returns a piece of an array
// 8) splice(): change original array (add, remove, replace)

let foodItems = ["Pizza", "Burger", "Misalpav", "Cholepuri"];

// console.log(foodItems);
// console.log(foodItems.toString());

let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];

let dcHerors = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];

// let heroes = marvelHeroes.concat(dcHerors, indianHeroes);
// console.log(heroes);

// let val = marvelHeroes.shift();
// console.log(val);

// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 2, 101, 110);

// Practice Q2

let compaines = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];