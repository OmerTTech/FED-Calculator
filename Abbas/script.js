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
  arr[0] = Number(domInput.value); // Sonucu arr'nin ilk elemanı olarak ayarla
  domInput2.value = arr[0]; // Sonucu history'e yaz
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

function min() {
  arr.push(Number(domInput.value));
  if (arr.length > 0 && domInput.value !== "") {
    equ();
  } else {
    arr[0] = Number(domInput.value);
    domInput2.value = arr[0];
  }
  domInput.value = "";
  operator = "-";
}
