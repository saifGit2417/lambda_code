let p1 = new Promise((res, rej) => {
  return setTimeout(() => {
    rej("p1 reject in 3 seconds");
  }, 3000);
});

let p2 = new Promise((res, rej) => {
  return setTimeout(() => {
    res("p2 resolve in 8 seconds");
  }, 8000);
});

let p3 = new Promise((res, rej) => {
  return setTimeout(() => {
    rej("p3 reject in 5 seconds");
  }, 5000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("always print"));


Promise.allSettled([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("always print"));

Promise.any([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("always print"));

Promise.race([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("always print"));
