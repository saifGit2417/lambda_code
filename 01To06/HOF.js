// // // // let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// // // // let srrShallowCopy = [...arr];

// // // // let arrDeepCopy = JSON.parse(JSON.stringify(arr));

// // // // arrDeepCopy[3][3][2] = "saif";
// // // // srrShallowCopy[3][3][2] = "saif";

// // // // console.log("arr: ", arr);
// // // // console.log("arrDeepCopy: ", arrDeepCopy);
// // // // console.log("srrShallowCopy: ", srrShallowCopy);

// // // // // sort by problem

// // // let users = [
// // //   { productName: "aa", age: 23 },
// // //   { productName: "bb", age: 33 },
// // //   { productName: "cc", age: 25 },
// // //   { productName: "dd", age: 67 },
// // //   { productName: "ee", age: 98 },
// // //   { productName: "ff", age: 78 },
// // // ];

// // // let sortByIncreasingAge = users.sort((user1, user2) => {
// // //   let ageOfUser1 = user1.age;
// // //   let ageOfUser2 = user2.age;

// // //   if (ageOfUser1 > ageOfUser2) {
// // //     return +1;
// // //   }
// // //   if (ageOfUser1 < ageOfUser2) {
// // //     return -1;
// // //   }
// // //   return 0;
// // // });

// // // console.log("sortByIncreasingAge: ", sortByIncreasingAge);

// // // // filter out students productNames , whose productNames first letter should be within b & y inclusive and of age >= 18
// // // let students = [
// // //   { productName: "abothula satish", age: 23 },
// // //   { productName: "balu", age: 25 },
// // //   { productName: "chahak", age: 17 },
// // //   { productName: "dharmik", age: 26 },
// // //   { productName: "zaheer", age: 19 },
// // // ];

// // // let filteredArray = students
// // //   .filter(
// // //     (data) =>
// // //       data?.age >= 18 &&
// // //       data?.productName.charAt(0) >= "b" &&
// // //       data?.productName.charAt(0) <= "y"
// // //   )
// // //   .map((data) => data.productName);

// // // console.log("filteredArray: ", filteredArray);

// // // function filterStudents(arr) {
// // //   let filteredArray = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (
// // //       arr[i].age >= 18 &&
// // //       arr[i].productName.charAt(0) >= "b" &&
// // //       arr[i].productName.charAt(0) <= "y"
// // //     ) {
// // //       filteredArray.push(arr[i].productName);
// // //     }
// // //   }
// // //   return filteredArray;
// // // }

// // // // filterStudents()
// // // console.log("filterStudents(): ", filterStudents(students));

// // let students = ["saif", "izhan", "khaleq", "zaheer"];

// // function makeObj(arr) {
// //   let obj = {};
// //   for (let i = 0; i < arr.length; i++) {
// //     obj[i] = arr[i];
// //   }

// //   return obj;
// // }

// // console.log(makeObj(students));

// let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let reduce = scores.reduce((num1, num2) => num1 + num2, 0);
// console.log("reduce: ", reduce);

// let matchScore = [
//   { score: 1 },
//   { score: 2 },
//   { score: 3 },
//   { score: 4 },
//   { score: 5 },
//   { score: 6 },
//   { score: 7 },
//   { score: 8 },
//   { score: 9 },
// ];

// let reduce2 = matchScore.reduce(
//   (acc, curr) => Number(acc) + Number(curr.score),
//   0
// );
// console.log("reduce2: ", reduce2);

let cartDetails = [
  { productName: "saif", price: 100, quantity: 1 },
  { productName: "izhan", price: 200, quantity: 2 },
  { productName: "khaleq", price: 300, quantity: 3 },
  { productName: "zaheer", price: 400, quantity: 4 },
];

function orderDetails(orderData, userName) {
  let totalPriceOfMyCart = orderData.reduce(
    (curr, acc) => curr + Number(acc.price),
    0
  );
  let totalQuantityOfMyCart = orderData.reduce(
    (curr, acc) => curr + Number(acc.quantity),
    0
  );
  let allProductsName = orderData.map((data) => data.productName);
  console.log("totalPriceOfMyCart: ", totalPriceOfMyCart);
  console.log("totalQuantityOfMyCart: ", totalQuantityOfMyCart);

  return `user ${userName} , has bought ${[
    ...allProductsName,
  ]} these item , total amount payable is $${totalPriceOfMyCart} ,  total items in cart is ${totalQuantityOfMyCart}`;
}

console.log(orderDetails(cartDetails, "pankaj kumar"));
