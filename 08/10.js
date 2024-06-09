let count = 0;
let timer1 = setInterval(() => {
  count++;
  return `timer ${count}`;
}, 500);

if (count > 8) {
  //   return clearInterval(timer1);
}

// console.log("timer1",timer1)
console.log("count", count);
// console.log("timer1", timer1());

// timer1;
