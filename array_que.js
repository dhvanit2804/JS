let city = ["Surat", "Ahmedabad", "Kolkata", "Delhi"];

// for(let cities of city){
//     console.log(cities.toUpperCase())
// }

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button Is Clicked");
});

let a = 0;
function person() {
  if (a > 5) {
    console.log("A is Match");
  } else {
    console.log("A is Not match");
    return;
  }
}

const plus = () => {
  let b = 10;
  for (let i = 1; i < b; i++) {
    console.log(i);
  }
};
// plus()

function getPromise() {
  return new Promise((resolve, reject) => {
    console.log("Promise is Created...");
    // resolve("Success..")
    reject("Error...");
  });
}
