const input = document.getElementById("user-intput");
const plus = document.getElementById("plus");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divisin = document.getElementById("divisin");

function results(result, calc) {
  document.getElementById("current-calculation").textContent = result;
  document.getElementById("current-result").textContent = calc;
}
