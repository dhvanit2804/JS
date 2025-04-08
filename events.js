const btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("button was clicked");
    let a = 17;
    let b = 11;
    let result = a + b;
    console.log("sum is: ", result);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside the div");
    div.style.backgroundColor = "red";
}