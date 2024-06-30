// download function to download data from url
// write function to save that downloaded data in a file and return the file name
// write a function to upload the file written in previous step to a new url

// function downloadFromUrl(url) {
//   let downloadedData = `-url to down load from is : ${url}-`;
//   return downloadedData;
// }

// function saveDataInFile(data) {
//   let savedFileName = `-${data} saved  in random.js-`;
//   return savedFileName;
// }

// function uploadCreatedFileToNewUrl(fileName) {
//   let newUrl = `${fileName} is uploaded to renewFile.com`;
//   return newUrl;
// }
// let result = uploadCreatedFileToNewUrl(
//   saveDataInFile(downloadFromUrl("www.google.com"))
// );
// console.log("result: ", result);

function downloadFromUrl(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`data downloaded from ${url}`);
    }, 3000);
  });
}

function saveDataInFile(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} is saved in file newData.txt`);
    }, 3000);
  });
}

function uploadDataToNewUrl(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} is uploaded to newWebsite.com`);
    }, 3000);
  });
}

downloadFromUrl("www.saif.com")
  .then((res) => {
    console.log("res: ", res);
    return saveDataInFile(res);
  })
  .then((res) => {
    console.log("res: ", res);
    return uploadDataToNewUrl(res);
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .finally((res) => {
    console.log("finally block is done");
  });

async function processUrls() {
  try {
    const downloadedData = await downloadFromUrl("www.saif.com");
    console.log("res from async await: ", downloadedData);

    const savedData = await saveDataInFile(downloadedData);
    console.log("res from async await: ", savedData);

    const uploadedData = await uploadDataToNewUrl(savedData);
    console.log("res from async await: ", uploadedData);
  } catch (error) {
    console.error("Error: ", error);
  }
}

processUrls();
