// Promises is for 'eventual' completion of task. It is an Object in js.
// It is a Solution to the problem of 'callback hell'.

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Promise is Created...");
//     resolve("Success...");
//     // reject("Network Error...");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise is Fullfilled...", res);
// });

// promise.catch((err) => {
//   console.log("Promise is Rejected...", err);
// })

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Data", dataId);
//         resolve("Success...")
//         if (getNextData) {
//           getNextData();
//         }
//       }, 5000);
//   });
// }

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function Executed...");
      resolve("success...");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function Executed 2...");
      resolve("success...");
    }, 4000);
  });
}

console.log("fetching data 1...");
asyncFunc1().then((res) => {
  console.log("fetching data 2...");
  asyncFunc2().then((res) => {});
})
