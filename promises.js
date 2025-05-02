// Promises is for 'eventual' completion of task. It is an Object in js.
// It is a Solution to the problem of 'callback hell'.

// let promise = new Promise((resolve, reject) => {
//   console.log("Promise is Created...");
//   reject("Some Error");
// });

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Data", dataId);
        resolve("Success...")
        if (getNextData) {
          getNextData();
        }
      }, 5000);
  });
}
