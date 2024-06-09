// make a promise which resolve and reject upon certain condition , and call that promise again and again by each second

let promiseVar = function () {
  let promise1 = new Promise((resolve, reject) => {
    let randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber >= 5) {
      resolve(`resolved-random number is ${randomNumber} `);
    } else {
      reject(`reject-random number is ${randomNumber} `);
    }
  });
  promise1
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("promised completed"));
};
setInterval(() => {
  return promiseVar();
}, 1000);
