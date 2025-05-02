// Callback is a function passed as an argument to another function

function sum(a, b) {
  console.log(a + b);
}

function calc(a, b, sumCallback) {
  sumCallback(a, b);
}

calc(5, 10, (a, b) => {
  console.log(a + b);
});

// nesting if else

let age = 20;
if (age >= 60) {
  console.log("Senior");
} else if (age >= 18) {
  console.log("Middle");
} else {
  console.log("child");
}

// nesting loop

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str = str + j;
  }
  console.log(i, str);
}
