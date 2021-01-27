let arr = [];
let clickedBtns = document.querySelectorAll(".clickedBtn");
let otherBtns = document.querySelectorAll(".otherBtn");
let num = document.querySelector("#num");
let allNumbers = document.querySelector("#arrNumbers");
let mean = document.querySelector("#mean");
let median = document.querySelector("#median");
let modeNum = document.querySelector("#mode");
let range = document.querySelector("#range");

otherBtns.forEach((otherBtn) => {
  otherBtn.addEventListener("click", (e) => {
    //add nutton
    if (e.target.value == "Add") {
      arr.push(Number(num.value));
      arr.sort((a, b) => a - b);
      allNumbers.innerHTML = arr;
      num.value = "";
    }
    //getting mean
    if (e.target.value == "mean") {
      let sum = arr.reduce((a, b) => a + b, 0);
      mean.value = (sum / arr.length).toFixed(2);
    }
    //getting median
    if (e.target.value == "median") {
      if (arr.length % 2 == 0) {
        console.log("median");
        console.log(arr[arr.length / 2 - 1]);
        console.log(arr[arr.length / 2]);
        median.value = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
      } else {
        median.value = arr[arr.length / 2 - 0.5].toFixed(2);
      }
    }
    if (e.target.value == "mode") {
      console.log("mode");
      //getting mode
      var mode = function mode(arr) {
        return arr.reduce(
          function (current, item) {
            var val = (current.numMapping[item] =
              (current.numMapping[item] || 0) + 1);
            if (val > current.greatestFreq) {
              current.greatestFreq = val;
              current.mode = item;
            }
            return current;
          },
          { mode: null, greatestFreq: -Infinity, numMapping: {} }
        ).mode;
      };

      modeNum.value = mode(arr);
      //=> 3
    }
    if (e.target.value == "range") {
      range.value = Math.max(...arr) - Math.min(...arr);
    }
  });
});

clickedBtns.forEach((clickedBtn) => {
  clickedBtn.addEventListener("click", (e) => {
    num.value += e.target.innerHTML;
  });
});
