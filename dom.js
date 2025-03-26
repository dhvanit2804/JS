// What is DOM ?
// When a Web Page is Loaded the browser creates a DOCUMENT OBJECT MODEL(DOM) Of the Page.
// let button = document.getElementById("myId");
// console.dir(button);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let firstelement = document.querySelector("p"); // 1st element
// console.dir(firstelement); 

// const allelement = document.querySelectorAll(".myClass"); // all element
// console.dir(allelement);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from Apna College Students";

let divs = document.querySelectorAll("div");
for(div of divs){
    console.log(div);
    
}

divs[0].innerText = "DHVANIT";

divs[1].innerText = "ASHKA";

divs[2].innerText = "SAHIL";