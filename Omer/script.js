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
  operator = "";
}
function equ() {
  if (operator == "+") {
    domInput.value = Number(arr[0]) + Number(domInput.value);   // ters yaptik
  } else if (operator == "-") {
    domInput.value = Number(arr[0]) - Number(domInput.value);   // ters yaptik
  }
  arr[0] = Number(domInput.value); // Sonucu arr[0]'a ata
  domInput2.value = arr[0]; // Sonucu history'e ata
}
function sum() {
  arr.push(Number(domInput.value));
  if (arr.length >= 2) {
    arr[0] = Number(arr[0]) + Number(arr[1]);
    arr.pop();
  }
  domInput.value = "";
  domInput2.value = arr[0]; // Güncel sonucu göster
  operator = "+";
}

function min() {
  if (domInput.value !== "") {
    // Giriş alanı boş değilse işlem yap
    arr.push(Number(domInput.value));
    if (arr.length >= 2) {
      arr[0] = Number(arr[1]) - Number(arr[1]);
      arr.pop();
    }
    domInput.value = "";
    domInput2.value = arr[0]; // Güncel sonucu göster
    operator = "-";
  }
}
