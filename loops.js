// for (let i= 1; i<=100000; i++) {
//     console.log("Hello World");
    
// }

// let sum = 0;
// let n = 7;
// for (let i=1; i<=n; i++){
//     sum = sum + i;
// }
// console.log("Sum = " + sum);
// console.log("Loop Completed");

// let i = 1;
// while(i<=555){
//     console.log("DHVANIT PARATE");
//     i++;
// }

// let i = 1;
// do {
//     console.log("DHVANIT PARATE");
//     i++;
// } while (i<=10);


//for of loop
// let str = "ApnaCollege";

// for(let i of str){
//     console.log("i =", i);
    
// }

//for in loop

// let student = {
//     name: "Dhvanit Parate",
//     age: 20,
//     cgpa: 8.5,
//     isPass: true,
// };

// for(let key in student){
//     console.log("key = ", key, "value = ", student[key]);
    
// }

// Practice Qs1

// for(let num = 0; num<=100; num++){
//     if(num%2 === 0){
//         console.log("num =", num);
//     }
// }

// Practice Qs2

let gameNum = 25;
let userNum = prompt("Guess the game number :");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again :");
}

console.log("Congrats! You guessed the correct number");
