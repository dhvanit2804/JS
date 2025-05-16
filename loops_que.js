// 1. Write a for loop that prints the numbers from 1 to 50 to the console.
for (let i = 1; i < 51; i++) {
    console.log(i);
}

// 2. use a while loop to sum the numbers from 1 to 10
let a = 1;
let sum = 0;
while (a < 11) {
  sum = sum + a;
  a++;
}
console.log(sum);

// 3. Create a for of loop to print each character of javascript in uppercase
let str = "Javascript";
for (let char of str) {
    console.log(char.toUpperCase());
}

// 4. Write a for loop that prints the even numbers from 1 to 20
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
  } else {
    console.log(i);
  }
}

// 5. Use a do while loop to print the numbers from 5 to 1
let b = 5;
do {
    console.log(b);
    b--;
} while (b>0);

// 6. Create a for loop that calculates the factorial of 5
let c = 1;
for(let i = 5; i > 0; i--){
    c = c * i;
}
console.log(c)

// 7. Write a nested for loop that prints a 3x3 grid of numbers
var hold = 1;
for (let i = 1; i < 4; i++) {
  let str = "";
  for (let j = 1; j < 4; j++) {
    str += `${hold} `;
    hold++;
  }
  console.log(str);
}

// 8. Use a for loop to reverse an array [1, 2, 3, 4, 5]

let arr = [1, 2, 3, 4, 5];
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr);

// 9. Write a while loop that prints the numbers from 1 to 100 that are divisible by 5
let num = 0;
while (num < 101){
  if (num % 5 === 0)
    console.log(num)
  num++;
}

// 10. Create a for loop that prints the keys of an object
let obj = {
  name: "Dhvanit",
  email: "dhvanitparate@gmail.com",
  age: 20
}
for (let key in obj) {
  console.log(key)
}
