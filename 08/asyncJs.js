// understanding code flow of js using methods which are native to js and which are not to js

// js known/native piece of code is synchronous in nature > for example js code will wait until completing the for loop

// js browser methods are asynchronous for example setTimeout and other methods

function nativeToJs() {
  console.log("loop starts");
  for (let index = 0; index < 1000000000; index++) {
    //
  }
  console.log("loop ends");
}

function codeNotNativeToJs() {
  console.log("timer starts");
  setTimeout(() => {
    console.log("console from timer");
  }, 5000);
  console.log("timer ends");
}

// guess below output
nativeToJs();
codeNotNativeToJs();
nativeToJs();

// loop starts
// loop ends
// timer starts >> set time out move to microtask que
// timer ends
// loop starts
// loop ends
// console from timer
