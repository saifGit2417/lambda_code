console.log("hello world");

for (let index = 0; index < 3; index++) {
  setTimeout(() => {
    console.log(`i am timer ${index}`);
  }, 3000);
}

for (let i = 0; i <= 10000000000; i++) {
  //
}

setTimeout(() => {
  console.log("i am from outside timer");
}, 5000);

console.log("code end");
