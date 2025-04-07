// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// // div.style.visibility = "hidden";

// div.style.fontFamily= "Arial";

// div.innerText = "DHVANIT";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);