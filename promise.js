let onButtonResolve = new Promise((resolve, reject) => {
  document.getElementById("btn1").addEventListener("click", () => {
    resolve("button is clicked hence promise is resolved");
  });
});
onButtonResolve.then((data) => console.log(data));

var myName = "saif";
