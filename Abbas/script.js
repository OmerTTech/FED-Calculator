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
    domInput.value = Number(arr[0]) + Number(domInput.value);
  } else if (operator == "-") {
    domInput.value = Number(arr[0]) - Number(domInput.value);
  } else if (operator == "*") {
    domInput.value = Number(arr[0]) * Number(domInput.value);
  } else if (operator == "/") {
    domInput.value = Number(arr[0]) / Number(domInput.value);
  } else if (operator == "%") {
    domInput.value = (Number(arr[0]) * Number(domInput.value)) / 100;
  } else if (operator == "chg") {
    domInput.value = Number(arr[0]);
    if (Number(domInput.value) == 0) {
      domInput.value = Number(arr[0]);
    } else {
      domInput.value = Number(arr[0]) * -1;
    }
  }
  arr[0] = Number(domInput.value);
  domInput2.value = arr[0];
}
function sum() {
  if (arr.length > 0 && domInput.value !== "") {
    equ();
  } else {
    arr[0] = Number(domInput.value);
    domInput2.value = arr[0];
  }
  domInput.value = "";
  operator = "+";
}

function sub() {
  if (arr.length > 0 && domInput.value !== "") {
    equ();
  } else {
    arr[0] = Number(domInput.value);
    domInput2.value = arr[0];
  }
  domInput.value = "";
  operator = "-";
}

function multi() {
  if (arr.length > 0 && domInput.value !== "") {
    equ();
  } else {
    arr[0] = Number(domInput.value);
    domInput2.value = arr[0];
  }
  domInput.value = "";
  operator = "*";
}
function divine() {
  if (arr.length > 0 && domInput.value !== "") {
    equ();
  } else {
    arr[0] = Number(domInput.value);
    domInput2.value = arr[0];
  }
  domInput.value = "";
  operator = "/";
}

function percent() {
  if (arr.length > 0 && domInput.value !== "") {
    equ();
  } else {
    arr[0] = Number(domInput.value);
    domInput2.value = arr[0];
  }
  domInput.value = "";
  operator = "%";
}

function changer() {
  domInput.value = "";
  operator = "chg";
  equ();
}
