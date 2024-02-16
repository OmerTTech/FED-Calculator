let domInput = document.querySelector("#calc");
let domInput2 = document.querySelector("#history");
domInput.value = "";
let arr = [];
let operator = "";
function num(key) {
  domInput.value += key;
}
function del() {
  domInput.value = "";
  domInput2.value = "";
  arr = [];
}
function equ() {
  if (operator == "+") {
    domInput.value = Number(domInput.value) + Number(arr[0]);
  } else if (operator == "-") {
    domInput.value = Number(arr[0]) - Number(domInput.value);
  }
}
function sum() {
  arr.push(Number(domInput.value));
  if (arr.length >= 2) {
    arr[0] = Number(arr[0]) + Number(arr[1]);
    arr.pop();
  }
  domInput.value = "";
  domInput2.value = arr;
  operator = "+";
}

function min() {
  arr.push(Number(domInput.value));
  arr[0] = arr[1];
  arr.pop();
  if (arr.length >= 2) {
    arr[0] = Number(arr[0]) - Number(arr[1]);
    arr.pop();
  }
  domInput.value = "";
  domInput2.value = arr;
  operator = "-";
}
// https://prod.liveshare.vsengsaas.visualstudio.com/join?DBFF0CF55CE9171F2095BC82EC1ED3B61A79