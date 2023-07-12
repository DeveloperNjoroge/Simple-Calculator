
let num1 = 5;
let num2 = 4;
document.getElementById("num-1").textContent = "First Number: " + num1;
document.getElementById("num-2").textContent = "Second Number: " + num2;

function addition() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let sum = num1 + num2;
  document.getElementById("sum").textContent = "Sum: " + sum;
}

function subtraction() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let sub = num1 - num2;
  document.getElementById("sum").textContent = "Sum: " + sub;
}

function division() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let divide = num1 / num2;
  document.getElementById("sum").textContent = "Sum: " + divide;
}

function multiplication() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let product = num1 * num2;
  document.getElementById("sum").textContent = "Sum: " + product;
}
