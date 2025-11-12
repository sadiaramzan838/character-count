let count = document.getElementById("count-character");
let charNum = document.getElementById("charNum");

count.addEventListener("input", function () {
  let textLength = count.value.length;
  charNum.textContent = textLength;
});
