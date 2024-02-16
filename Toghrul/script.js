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
    operator = ""
  } else if (operator == "-") {
    domInput.value = Number(arr[0]) - Number(domInput.value);
    operator = ""
  } else if (operator == "*") {
    domInput.value = Number(arr[0]) * Number(domInput.value);
    operator = ""
  } else if (operator == "/") {
    domInput.value = Number(arr[0]) / Number(domInput.value);
    operator = ""
  } else if (operator == "%") {
    domInput.value = (Number(arr[0]) * Number(domInput.value)) / 100;
    operator = ""
  } else if (operator == "chg") {
    domInput.value = Number(arr[0]);
    if (Number(domInput.value) == 0) {
      domInput.value = Number(arr[0]);
    } else {
      domInput.value = Number(arr[0]) * -1;
    }
    operator = ""
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

let key = addEventListener("keypress", function(event){
  event
  console.log(typeof Number(event.key));

if (typeof event.key == "number" ) {
  num(eval(event.key))
}
})
//https://prod.liveshare.vsengsaas.visualstudio.com/join?37149FEE9FDA53972EA96B8C3D963E3A8C0C