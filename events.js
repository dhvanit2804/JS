// const btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("button was clicked");
//     let a = 17;
//     let b = 11;
//     let result = a + b;
//     console.log("sum is: ", result);
// }

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 1");
// })

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 2");
// })

// const handler3 = () => {
//     console.log("button was clicked - handler 3");
// }

// btn1.addEventListener("click", handler3)

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 4");
// })

// btn1.removeEventListener("click", handler3);

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside the div");
//     div.style.backgroundColor = "red";
// }

// Practice Q1
let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("click", () => {
   if (currmode === "light") {
        document.querySelector("body").style.backgroundColor = "black";
        currmode = "dark";
   } else {
        document.querySelector("body").style.backgroundColor = "white";
        currmode = "light";
   }
   console.log(currmode)
})