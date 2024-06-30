// function downloadFromUrl(url) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`data downloaded from ${url}`);
//     }, 3000);
//   });
// }

// function saveDataInFile(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${data} is saved in file newData.txt`);
//     }, 3000);
//   });
// }

// function uploadDataToNewUrl(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${data} is uploaded to newWebsite.com`);
//     }, 3000);
//   });
// }

// // consume promises using async await syntax instead of using .then()-AND-.catch()

// async function callMeAsyncAwait() {
//   let downloadFromUrlFunc = await downloadFromUrl("www.google.com");
//   let saveDataInFileFunc = await saveDataInFile(downloadFromUrlFunc);
//   let uploadDataToNewUrlFunc = await uploadDataToNewUrl(saveDataInFileFunc);
//   console.log(uploadDataToNewUrlFunc);
// }

// callMeAsyncAwait();

async function fun() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return array;
}

// async await is method to consume promises just like .then and .catch is method to consume promises

// New Promise() > promise constructor is only method to create promises in js 
// promise.resolve() - promise.settle and other methods are utility function of js which are subparts of promise constructor

let result = fun();

result.then((res) => {
  console.log(res);
});
