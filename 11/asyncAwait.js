function downloadFromUrl(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`data downloaded from ${url}`);
    }, 3000);
  });
}

function saveDataInFile(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} is saved in file newData.txt`);
    }, 3000);
  });
}

function uploadDataToNewUrl(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`${data} is uploaded to newWebsite.com`);
    }, 3000);
  });
}

// consume promises using async await syntax instead of using .then()-AND-.catch()

/*
use try {} catch{} block to handle rejection in case of async await > use finally{} method to 
write your logic that will run irrespective of you promise getting resolve or rejected
    try{
    // do something when promise is resolved
    }catch {
    // do something when promise is rejected
    }finally {
    // do something when promise is either  resolved or rejected
    }
*/

// use .catch method when you are consuming promise using .then . catch method

/*
deep dive in all the promise methods

Methods of Promise: .all(), .any() , .finally(), .race()
*/ 

//pillar 11 completed 

async function callMeAsyncAwait() {
  try {
    let downloadFromUrlFunc = await downloadFromUrl("www.google.com");
    let saveDataInFileFunc = await saveDataInFile(downloadFromUrlFunc);
    let uploadDataToNewUrlFunc = await uploadDataToNewUrl(saveDataInFileFunc);
    console.log(uploadDataToNewUrlFunc);
  } catch (error) {
    console.log("error: ", error);
  } finally {
    console.log(
      "this pice of code always run irrespective of promise getting resolve or rejected"
    );
  }
}

callMeAsyncAwait();

// async await is method to consume promises just like .then and .catch is method to consume promises

// New Promise() > promise constructor is only method to create promises in js
// promise.resolve() - promise.settle and other methods are utility function of js which are subparts of promise constructor

// instead of using generator function with .yield and .done we can use either async await and .then methods

/*generator functions are type of function in which we can stop or resume the code execution , 
at that particular line execution will stop and wait for future value to get obtain
an then it will run the next line of logic*/

// async function fun() {
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   return array;
// }

// let result = fun();

// result.then((res) => {
//   console.log(res);
// });
