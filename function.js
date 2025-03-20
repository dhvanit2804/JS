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
// function sum(a, b) {
//   return a + b;
// }

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

// console.log(evenArr);

// 3. Reduce
// performs some operations & reduces the array to a single value. It returns that Single value.

let arr1 = [1, 2, 3, 4];

const output = arr1.reduce((res, curr) => {
  return res + curr;
});

// console.log("Sum =", output);

let arr2 = [5, 6, 2, 1, 3];
// Code to print largest Nums Of arry
const result = arr2.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

// console.log(result);

// Practice Q4
// We are given array of marks of Students. Filter our of the marks of students that Scored 90.

let marks = [97, 64, 92, 36, 99, 72];

const toppers = marks.filter((val) => {
  return val > 90;
});

// console.log(toppers);

// Practice Q5
// Take a number n as input from user. Create an array of Numbers form 1 to n.
// Use the reduce method to Calculate sum of all numbers in the array.
// Use the reduce method to Calculate product of all numbers in the array.

let n = prompt("Enter a number:");

let arr3 = [];

for (let i = 1; i <= n; i++) {
  arr3[i - 1] = i;
}

console.log(arr3);

let sum = arr3.reduce((res, curr) => {
  return res + curr;
});

console.log("sum =", sum);

let factorial = arr3.reduce((res, curr) => {
  return res * curr;
});

console.log("factorial =", factorial);