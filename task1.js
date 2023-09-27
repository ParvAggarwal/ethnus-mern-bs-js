function reverse() {
  let x = document.getElementById("original").value;
  console.log(x);
  let temp;
  let y = "";

  for (let i = x.length - 1; i >= 0; i--) {
    temp = x[i];
    y = y + temp;
  }
  document.querySelector("#reversed").innerHTML = y;
}
