// Take a number n as input from user. Create an array of Numbers form 1 to n.
// Use the reduce method to Calculate sum of all numbers in the array.
// Use the reduce method to Calculate product of all numbers in the array.

const click = () => {
  let n = prompt("Enter a num");
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
  }
  console.log(arr);
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  click();
  hello()
});

function hello(){
    console.log("HELLO I AM HELLO FUNCTION RUNNING...")
}
