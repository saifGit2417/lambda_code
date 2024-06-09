//creation of promises are synchronous in nature , but its consumption might take time , if its doing some time consuming task

// how to create promise

let promise1 = new Promise((resolve, reject) => {
  let randomNumber = Math.random() * 10;

  if (randomNumber > 5) {
    setTimeout(() => {
      resolve(`resolved -  number is ${randomNumber}`);
    }, 3000);
  } else {
    setTimeout(() => {
      reject(`reject -  number is ${randomNumber}`);
    }, 3000);
  }
});

// console.log("first console");

// promise1
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("promised completed"));

// for (let index = 0; index < 10000000000; index++) {
//   //
// }

// console.log("second console");

/*
even promise is full filled before completing for loop but it will not interfere in between 
it will wait for global stack to be empty before calling and print promise

if we dont resolve or reject promise it will be in pending state forever
*/

// let startTimer = new Date().toLocaleTimeString();

// for (let i = 0; i < 10000000000; i++) {
//   //
// }
// let endTimer = new Date().toLocaleTimeString();
// console.log("startTimer: ", startTimer);
// console.log("endTimer: ", endTimer);

// console.log("difference", end - startTimer);
