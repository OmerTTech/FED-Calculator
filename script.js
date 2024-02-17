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
    operator = "";
  } else if (operator == "-") {
    domInput.value = Number(arr[0]) - Number(domInput.value);
    operator = "";
  } else if (operator == "*") {
    domInput.value = Number(arr[0]) * Number(domInput.value);
    operator = "";
  } else if (operator == "/") {
    domInput.value = Number(arr[0]) / Number(domInput.value);
    operator = "";
  } else if (operator == "%") {
    domInput.value = (Number(arr[0]) * Number(domInput.value)) / 100;
    operator = "";
  } else if (operator == "chg") {
    if (Number(domInput.value) != 0) {
      domInput.value = Number(domInput.value) * -1;
    }
    operator = "";
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
  operator = "chg";
  equ();
}

let key = document.addEventListener("keydown", function (event) {
  if (event.key * 1 == event.key) {
    num(event.key);
  }
  switch (event.key) {
    case ".":
      num(".");
      break;
    case "%":
      percent();
      break;
    case "/":
      divine();
      break;
    case "*":
      multi();
      break;
    case "-":
      sub();
      break;
    case "+":
      sum();
      break;
    case "=":
    case "Enter":
      equ();
      break;
    case "`":
      changer();
      break;
    case "Backspace":
    case "Delete":
      del();
      break;
    default:
      console.log("Eded qeyd edin");
      break;
  }
});
