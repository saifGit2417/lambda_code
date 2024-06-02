// let array = [10, 20, 30];

// let totalSum = 0;
// for (let key of array) {
//   totalSum += key;
// }
// console.log(totalSum);

// console.log(array.reduce((curr, acc) => curr + acc, 0));

// example of callback function which will get called after something gets done
function callBack(limit) {
  for (let i = 0; i < limit; i++) {
    console.log(i);
  }
}

// here is the parent function where after performing som task i'll call my call back function
function parentFunction(maxNUmber, minNumber) {
  let findLimit = maxNUmber - minNumber;
  callBack(findLimit);
}
    
parentFunction(20, 10);
