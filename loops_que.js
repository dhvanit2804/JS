// 1. Write a for loop that prints the numbers from 1 to 50 to the console.
// for (let i = 1; i < 51; i++) {
//     console.log(i);
// }

// 2. use a while loop to sum the numbers from 1 to 10
// let a = 1;
// let sum = 0;
// while (a < 11) {
//   sum = sum + a;
//   a++;
// }
// console.log(sum);

// 3. Create a for of loop to print each character of javascript in uppercase
// let str = "Javascript";
// for (let char of str) {
//     console.log(char.toUpperCase());
// }

// 4. Write a for loop that prints the even numbers from 1 to 20
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//   } else {
//     console.log(i);
//   }
// }

// 5. Use a do while loop to print the numbers from 5 to 1
// let a = 5;

// do {
//     console.log(a);
//     a--;
// } while (a>0);

// 6. Create a for loop that calculates the factorial of 5
// let a = 1;
// for(let i = 5; i > 0; i--){
//     a = a * i;
// }
// console.log(a)
for (let i = 1; i < 4; i++){
    let str = "";
    for (let j = 1; j < 4; j++){
        str += `${j} `;
    }
    console.log(str)
} 