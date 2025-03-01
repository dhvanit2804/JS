let obj = {
    item: "pen",
    price: 20,
};

let Output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(Output);


// // Template Literals

let SpecialString = `This is a template literals`;
// console.log(typeof SpecialString);

// IN js Strings is Immutable we cannot change that

// STRING METHODS IN JS
// 1. toUpparecase
// 2. toLowerCase
// 3. slice   Return part of string
// 4. concat  joins str2 with str1
// 5. replace
// 6. charAt

let str = "DHVANIT";

let str1 = "apna";
let str2 = "collage";

let res = str1 + str2;

// Practice Question

let fullName = prompt("Enter your fullname Without Spaces :");

let Username = "@" + fullName + fullName.length
console.log(Username);
