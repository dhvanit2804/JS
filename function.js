// FUNCTION in JS
// Function is a block of code that performs a specific task , can be invoked whenever needed

function myFunction(msg) {
  //Parameter -> input
  console.log(msg);
}

// myFunction("i love JS"); //Argument -> value

// After return is unrechable code in function

// Function -> 2 numbers, sum
// function sum(x, y) {
//     s = x + y;
//     return s;
// }

// let val = sum(10, 20);
// console.log(val);

//Sum function
function sum(a, b) {
  return a + b;
}

// Arrow function
const arrowSum = (a, b) => {
  console.log(a + b);
};

// multiplication function
function mul(a, b) {
  return a * b;
}

const arrowMul = (a, b) => {
  return a * b;
};

const printHello = () => {
  console.log("hello");
};

// Practice Q1
// Qs: Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

// Practice Q2
// Qs: Create an arrow function to perform the same task.
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
// for each loop in Array

// arr.toEach(callback function)
// Callback function -> function that is passed as an argument to another function
// forEach Only Use for Arrys not for strings
// forEach is Higher Order Function/Method

let city = ["Pune", "Ahmedabad", "Mumbai"];

// city.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), idx, arr);
// });

// Practice Q3
// Qs: for a given array, print the square of each value using the forEach loop.

let nums = [44, 67, 59, 28];

// nums.forEach((num) => {
//   console.log(num * num);
// });

// Some More Array Methods
// 1. map
let newArry = nums.map((val) => {
  return val * val;
});
// console.log(newArry);

// 2. filter

let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
  return val % 2 == 0; 
});

console.log(evenArr);