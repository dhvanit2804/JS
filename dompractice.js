// Q1
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

// Q2
let para = document.querySelector("p");
para.classList.add("newClass");