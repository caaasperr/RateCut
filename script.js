function calculate() {
  var inputElement = document.getElementById("count");
  var inputValue = parseInt(inputElement.value);
  var result = calRateCut(inputValue);
  let target = document.getElementById("container");

  target.innerHTML = "";

  for (var i = 0; i < result.length; i++) {
    let targetTag = document.createElement('p');
    targetTag.innerHTML = Math.round(result[i]);
    target.appendChild(targetTag);
  }
}

function calRateCut(cc) {
  var r1 = cc * 0.04;
  var r2 = cc * 0.11;
  var r3 = cc * 0.23;
  var r4 = cc * 0.40;
  var r5 = cc * 0.60;
  var r6 = cc * 0.77;
  var r7 = cc * 0.89;
  var r8 = cc * 0.96;
  var r9 = cc * 1;
  return [r1, r2, r3, r4, r5, r6, r7, r8, r9];
}
