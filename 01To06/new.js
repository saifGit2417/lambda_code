// function isPrime(number) {
//   let isPrimeNumber = true;
//   if (number < 1 || isNaN(number)) {
//     isPrimeNumber = false;
//   } else {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         isPrimeNumber = false;
//         break;
//       } else {
//         isPrimeNumber = true;
//       }
//     }
//   }

//   return isPrimeNumber;
// }

// console.log(isPrime(3));
// console.log(isPrime(9));
// console.log(isPrime("saif"));

// function isSame(string) {
//   let isReverseSame = true;
//   let convertString = string.toLocaleLowerCase().split("");
//   let reverseString = [];
//   for (let i = 0; i < convertString.length; i++) {
//     reverseString.unshift(convertString[i]);
//   }
//   if (string === reverseString.join("")) {
//     isReverseSame = true;
//   } else {
//     isReverseSame = false;
//   }

//   return isReverseSame;
// }

// console.log(isSame("saif"));
// console.log(isSame("wow"));
// console.log(isSame("mom"));

let arr = [1, 2, 3, 5, 8, 13, 21];

function isEqual(arr) {
  let isEqualArr = true;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] !== arr[i + 2]) {
      isEqualArr = false;
      break;
    }
    isEqualArr = true;
  }
  return isEqualArr;
}

// isEqual(arr);
console.log("isEqual(arr): ", isEqual(arr));

// [] > 9


/*
git init
git add .
git commit -m 'commit message'
*/ 