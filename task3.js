function mul() {
  let x = parseFloat(document.querySelector("#numa").value);
  let y = parseFloat(document.querySelector("#numb").value);
  document.querySelector("#answer").innerHTML = x * y;
}

function div() {
  let x = parseFloat(document.querySelector("#numa").value);
  let y = parseFloat(document.querySelector("#numb").value);
  document.querySelector("#answer").innerHTML = x / y;
}
