// function call(task) {
//   setTimeout(() => {
//     console.log("task is", task);
//   }, 3000);
// }

// console.log("start");
// call(`saif`);
// console.log("end");

function counter() {
  let i = 0;
  function increaseMe() {
    i += 1;
    return i;
  }
  return increaseMe;
}

let count = counter();

console.log(`first`, count());
console.log(`first`, count());
console.log(`first`, count());
console.log(`first`, count()-9);


