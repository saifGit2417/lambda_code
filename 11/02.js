// custom iterator example is below

function callNextArrayElement(array) {
  let indexOfArr = 0;
  function iterateOverArray() {
    if (indexOfArr === array.length) {
      return undefined;
    }

    let arrayElement = array[indexOfArr];
    indexOfArr++;
    return arrayElement;
  }
  return { iterateOverArray };
}

let printElement = callNextArrayElement([0, 1, 2, 3, 4, 5, 6, 7, 8]);

console.log("1st", printElement.iterateOverArray());
console.log("2nd", printElement.iterateOverArray());
console.log("3rd", printElement.iterateOverArray());
console.log("4th", printElement.iterateOverArray());
console.log("5th", printElement.iterateOverArray());
