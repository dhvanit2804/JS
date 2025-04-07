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

let p = document.querySelector("p");
p.after(newBtn);
p.remove();

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hello I am Dhvanit!</i>";

document.querySelector("body").prepend(newHeading);